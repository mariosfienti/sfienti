"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

const links: { key: "about" | "experience" | "projects" | "skills" | "contact"; href: string }[] = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "contact", href: "#contact" }
];

export default function Nav() {
  const { t, lang, toggleLang } = useLanguage();

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-[#E7E7EF] bg-[#FAFAF9]/90 px-6 py-3 backdrop-blur-md md:px-16">
      <a href="#hero" className="flex items-center gap-3">
        <Image src="/logo-icon.png" alt="" width={669} height={362} className="h-10 w-auto" priority />
        <span className="flex flex-col leading-tight">
          <span className="font-display text-[17px] font-bold text-ink">Mario Alessandro Sfienti</span>
          <span className="font-display text-[11.5px] font-semibold uppercase tracking-wider text-violet">
            Digital Product Manager
          </span>
        </span>
      </a>
      <div className="flex items-center gap-9">
        <span className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-[15px] font-semibold text-[#43465A] transition-colors hover:text-blue"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </span>
        <button
          onClick={toggleLang}
          aria-label="Cambia lingua / Switch language"
          className="min-h-9 min-w-11 rounded-full border border-[#D6D8E4] bg-white px-3.5 py-1.5 font-body text-sm font-bold text-ink transition-colors hover:border-blue hover:text-blue"
        >
          {lang === "it" ? "EN" : "IT"}
        </button>
      </div>
    </div>
  );
}
