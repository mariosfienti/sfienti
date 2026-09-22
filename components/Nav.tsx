"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { Menu, X, ArrowUpRight, Globe, Sparkles } from "lucide-react";

const links: { key: "about" | "experience" | "projects" | "contact"; href: string }[] = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" }
];

export default function Nav() {
  const { t, lang, toggleLang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-[#FAFAF9]/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-[#FAFAF9]/75 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3 md:px-8 md:py-3.5">
        {/* Brand identity: logo only */}
        <a
          href="#hero"
          className="group flex items-center transition-opacity hover:opacity-95"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Mario Alessandro Sfienti - Home"
        >
          <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-white p-1 shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/logo-icon.png"
              alt="Mario Alessandro Sfienti"
              width={669}
              height={362}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 shadow-sm backdrop-blur-sm lg:flex">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-[14px] font-semibold text-[#43465A] transition-all hover:bg-slate-100/80 hover:text-blue"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        {/* Right action controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            aria-label="Cambia lingua / Switch language"
            className="flex h-9 items-center gap-1.5 rounded-full border border-slate-200/90 bg-white px-3 text-[13px] font-bold text-ink shadow-sm transition-all hover:border-blue hover:text-blue active:scale-95"
          >
            <Globe className="h-3.5 w-3.5 text-muted" />
            <span>{lang === "it" ? "EN" : "IT"}</span>
          </button>

          {/* Direct CTA button (Desktop & Tablet) */}
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13.5px] font-bold text-white shadow-sm transition-all duration-200 hover:bg-blue hover:shadow active:scale-95 sm:inline-flex"
          >
            <span>{t.ctaContact}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/90 bg-white text-ink shadow-sm transition-colors hover:text-blue active:scale-95 lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200/80 bg-[#FAFAF9]/95 px-5 py-5 shadow-lg backdrop-blur-lg lg:hidden">
          <div className="flex flex-col gap-1.5">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-[16px] font-semibold text-ink transition-colors hover:bg-white hover:text-blue"
              >
                <span>{t.nav[link.key]}</span>
                <ArrowUpRight className="h-4 w-4 text-muted opacity-60" />
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-slate-200/70">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue to-violet py-3.5 text-center text-[15px] font-bold text-white shadow-sm"
              >
                <span>{t.ctaContact}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
