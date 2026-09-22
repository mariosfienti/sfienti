"use client";

import { useLanguage } from "./LanguageProvider";
import { SITE } from "@/lib/content";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-16 md:px-16 md:py-24">
        <div className="mb-10 flex items-baseline gap-4 md:mb-12">
          <span className="text-[13px] font-bold uppercase tracking-wider text-violet">{t.projTitle}</span>
          <div className="h-px flex-1 bg-[#EEEEF3]" />
        </div>
        <div className="rounded-[24px] bg-gradient-to-br from-blue to-violet p-0.5">
          <div className="flex flex-col gap-4 rounded-[22px] bg-white p-6 md:p-11">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-2xl font-bold text-ink">{t.proj.name}</h3>
                <div className="text-[15px] font-bold text-blue">{t.proj.role}</div>
              </div>
              <span className="whitespace-nowrap text-sm font-semibold text-muted">{t.proj.period}</span>
            </div>
            <p className="max-w-[640px] text-[16px] leading-relaxed text-[#33354A]">{t.proj.desc}</p>
            <ul className="flex flex-col gap-2.5">
              {t.proj.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-[#33354A]">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <a
              href={SITE.trusteu}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-flex min-h-11 w-fit items-center gap-2 rounded-[10px] bg-ink px-5 text-[14.5px] font-bold text-white transition-opacity hover:opacity-90"
            >
              <span>{t.proj.linkLabel}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
