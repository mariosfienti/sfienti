"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { SITE } from "@/lib/content";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-10 px-6 pb-16 pt-16 md:flex-row md:items-center md:justify-between md:gap-16 md:px-16 md:pb-24 md:pt-28"
    >
      <div className="flex w-full flex-col items-start gap-5 md:flex-1">
        <h1 className="font-display text-[34px] font-bold leading-tight text-ink md:text-[56px]">{t.heroName}</h1>
        <div className="inline-flex rounded-full bg-gradient-to-r from-blue to-violet px-5 py-2 font-display text-[15px] font-semibold text-white">
          {t.heroRole}
        </div>
        <p className="max-w-full text-[16px] leading-relaxed text-[#4B4E63] md:max-w-[480px] md:text-[18px]">
          {t.heroIntro}
        </p>
        <div className="flex items-center gap-2 text-sm font-semibold text-muted">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{t.heroLocation}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-3.5">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex min-h-11 items-center rounded-[10px] bg-ink px-6 font-semibold text-white transition-colors hover:bg-blue"
          >
            {t.ctaContact}
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-11 items-center gap-2 rounded-[10px] border border-[#D6D8E4] px-6 font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
          >
            <span>{t.ctaLinkedin}</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex w-full justify-center md:w-auto md:flex-none">
        <div className="flex h-[230px] w-[260px] items-end justify-center overflow-hidden rounded-[28px] bg-gradient-to-br from-[#E3E9FF] to-[#F1E4FF] shadow-[0_30px_60px_-30px_rgba(36,45,110,0.35)] md:h-[300px] md:w-[340px]">
          <Image
            src="/mario-headshot.png"
            alt="Mario Alessandro Sfienti"
            width={1246}
            height={937}
            className="w-[238px] h-auto object-contain md:w-[310px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
