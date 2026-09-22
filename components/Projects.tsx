"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { SITE } from "@/lib/content";
import { ExternalLink, Shield, CheckCircle2, Globe } from "lucide-react";

export default function Projects() {
  const { t, lang } = useLanguage();

  const trustEuTags = [
    "Sovranità Digitale Europea",
    "GenAI Product Workflows",
    "Open Source & EU Cloud",
    "Benchmarking Software",
    "Product Strategy & Roadmap"
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-transparent via-[#F4F6FC]/60 to-transparent">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-2 md:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet">
            <Shield className="h-3.5 w-3.5" />
            <span>{t.projTitle}</span>
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl md:text-4xl">
            {lang === "it"
              ? "TrustEU — La sovranità digitale europea"
              : "TrustEU — European Digital Sovereignty"}
          </h2>
          <p className="max-w-2xl text-[16px] text-muted">
            {lang === "it"
              ? "Una piattaforma indipendente nata per mappare le migliori alternative europee a software, cloud e servizi digitali."
              : "An independent platform mapping European cloud, software, and services alternatives to empower European digital sovereignty."}
          </p>
        </div>

        {/* Featured Project Card - Elegant refined styling matching the rest of the site */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md sm:p-9 md:p-11">
          <div className="flex flex-col gap-6">
            {/* Top row: Badges + Logo */}
            <div className="flex flex-col-reverse justify-between gap-5 sm:flex-row sm:items-start">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-blue/10 border border-blue/20 px-3 py-1 text-xs font-bold text-blue">
                    <Globe className="h-3.5 w-3.5" />
                    <span>{lang === "it" ? "Sovranità Digitale Europea" : "European Digital Sovereignty"}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <h3 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                    {t.proj.name}
                  </h3>
                  <a
                    href={SITE.trusteu}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-muted hover:text-blue hover:underline"
                    title="trusteu.eu"
                  >
                    <span>trusteu.eu</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                  <span className="font-bold text-ink">{t.proj.role}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-muted">{t.proj.period}</span>
                </div>
              </div>

              {/* TrustEU Logo */}
              {t.proj.logo && (
                <a
                  href={SITE.trusteu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/logo flex h-14 w-fit items-center justify-start rounded-xl border border-slate-200/80 bg-[#FAFAF9] p-2.5 transition-all duration-200 hover:border-slate-300 hover:bg-white hover:shadow-xs sm:h-16 sm:justify-end sm:p-3"
                  title="trusteu.eu"
                >
                  <Image
                    src={t.proj.logo}
                    alt={t.proj.name}
                    width={220}
                    height={65}
                    className="max-h-10 sm:max-h-12 w-auto max-w-[150px] sm:max-w-[190px] object-contain transition-transform duration-200 group-hover/logo:scale-[1.03]"
                  />
                </a>
              )}
            </div>

            {/* Project Pitch / Description */}
            <p className="max-w-3xl text-[16.5px] leading-relaxed text-[#2D3043] md:text-[18px]">
              {t.proj.desc}
            </p>

            {/* Bullets with Checkmarks */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {t.proj.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-[14.5px] leading-relaxed text-[#2D3043]"
                >
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Tag list */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {trustEuTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded-lg border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action CTA Link */}
            <div className="pt-2">
              <a
                href={SITE.trusteu}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-ink px-6 text-[15px] font-bold text-white shadow-sm transition-all duration-200 hover:bg-blue hover:shadow-md active:scale-95"
              >
                <span>{t.proj.linkLabel}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
