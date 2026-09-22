"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { SITE } from "@/lib/content";
import {
  MapPin,
  MessageSquare,
  Share2,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Layers,
  Award,
  ShieldCheck,
  Compass,
  BarChart3,
  Target,
  Zap
} from "lucide-react";

export default function Hero() {
  const { t, lang } = useLanguage();

  const productPillars = [
    {
      targetId: "strategy",
      icon: Compass,
      title: lang === "it" ? "Product Strategy & Roadmap" : "Product Strategy & Roadmap",
      subtitle: lang === "it" ? "Dalla vision al rilascio continuo" : "From discovery to execution"
    },
    {
      targetId: "data",
      icon: BarChart3,
      title: lang === "it" ? "Data & Product Analytics" : "Data & Product Analytics",
      subtitle: lang === "it" ? "Metriche di prodotto, KPI e decisioni data-driven" : "Product metrics, KPIs & data-driven decisions"
    },
    {
      targetId: "strategy",
      icon: Target,
      title: lang === "it" ? "User Research & UX Discovery" : "User Research & Discovery",
      subtitle: lang === "it" ? "Test con utenti & iterazione rapida" : "Human-centered validation"
    },
    {
      targetId: "agile",
      icon: Zap,
      title: lang === "it" ? "Cross-functional Leadership" : "Cross-functional Delivery",
      subtitle: lang === "it" ? "Ponte tra dev, design & stakeholder" : "Tech, design & business alignment"
    }
  ];

  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-14 md:pt-14 md:pb-20">
      {/* Subtle ambient lighting meshes in the background */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue/10 via-violet/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-40 right-[-10%] -z-10 h-[350px] w-[450px] rounded-full bg-blue/5 blur-3xl" />

      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        {/* Unified Hero Executive Card: combines portrait and presentation seamlessly */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-white to-slate-50/70 p-6 shadow-sm sm:p-8 md:p-10 lg:p-12">
          {/* Subtle decorative accent */}
          <div className="pointer-events-none absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-gradient-to-br from-blue/10 to-violet/10 blur-2xl" />

          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Content Area (Col 1-8 on desktop) */}
            <div className="flex flex-col items-start gap-5 lg:col-span-8">
              {/* Identity Row with inline portrait on mobile/tablet */}
              <div className="flex w-full items-center gap-4 sm:gap-5">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border-2 border-white bg-gradient-to-b from-[#E6ECFF] to-[#F3ECFD] shadow-md sm:h-24 sm:w-24 lg:hidden">
                  <Image
                    src="/mario-headshot.png"
                    alt="Mario Alessandro Sfienti"
                    width={1246}
                    height={937}
                    className="h-full w-full object-cover object-top"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r from-blue to-violet px-3 py-1 font-display text-xs font-bold text-white shadow-xs">
                    <Sparkles className="h-3 w-3" />
                    <span>{t.heroRole}</span>
                  </div>
                  <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
                    {t.heroName}
                  </h1>
                </div>
              </div>

              {/* Intro Statement */}
              <p className="text-[16px] leading-relaxed text-[#3B3E52] sm:text-[17.5px] md:text-[18.5px]">
                {t.heroIntro}
              </p>

              {/* Badges / Context row */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-semibold text-muted">
                <div className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-2.5 py-1 text-slate-700 shadow-2xs">
                  <MapPin className="h-3.5 w-3.5 text-blue" />
                  <span>{t.heroLocation}</span>
                </div>
                <a
                  href={SITE.trusteu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/trust inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-2.5 py-1 text-slate-700 shadow-2xs transition-colors hover:border-slate-300 hover:text-blue"
                  title="trusteu.eu"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-slate-500 transition-colors group-hover/trust:text-blue" />
                  <span>TrustEU Lead</span>
                  <ExternalLink className="h-3 w-3 opacity-50 transition-colors group-hover/trust:opacity-100" />
                </a>
                <div className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-2.5 py-1 text-slate-700 shadow-2xs">
                  <Layers className="h-3.5 w-3.5 text-slate-500" />
                  <span>Discovery · Roadmap · UX</span>
                </div>
              </div>

              {/* Interactive CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#contact"
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-ink px-6 text-[15px] font-bold text-white shadow-sm transition-all duration-200 hover:bg-blue hover:shadow-md active:scale-95"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>{t.ctaContact}</span>
                </a>

                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-slate-300/90 bg-white px-5 text-[15px] font-bold text-ink shadow-sm transition-all duration-200 hover:border-blue hover:text-blue hover:shadow-sm active:scale-95"
                >
                  <Share2 className="h-4 w-4 text-[#0A66C2]" />
                  <span>{t.ctaLinkedin}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-70" />
                </a>
              </div>
            </div>

            {/* Right Column Portrait (Desktop only: clean framed card) */}
            <div className="hidden lg:col-span-4 lg:flex lg:justify-end">
              <div className="relative flex h-[360px] w-[300px] items-center justify-center overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-b from-[#EBF0FF] via-[#F2F4FD] to-[#F8F5FE] shadow-md">
                <Image
                  src="/mario-headshot.png"
                  alt="Mario Alessandro Sfienti"
                  width={1246}
                  height={937}
                  className="h-auto w-[285px] object-contain transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Core Product Competencies Strip */}
        <div className="mt-5 grid grid-cols-1 gap-3 rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4 md:p-5">
          {productPillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <a
                key={idx}
                href="#experience"
                className={`group/pillar flex items-start gap-3 p-1.5 rounded-xl transition-all hover:bg-slate-50/80 cursor-pointer ${
                  idx !== 0 ? "lg:border-l lg:border-slate-100 lg:pl-5" : ""
                }`}
                title={lang === "it" ? "Scopri nell'esperienza" : "Explore in experience"}
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue transition-colors group-hover/pillar:bg-blue group-hover/pillar:text-white">
                  <IconComp className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13.5px] font-bold text-ink leading-snug group-hover/pillar:text-blue transition-colors">
                    {p.title}
                  </span>
                  <span className="text-[11.5px] font-medium text-muted leading-tight mt-0.5">
                    {p.subtitle}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
