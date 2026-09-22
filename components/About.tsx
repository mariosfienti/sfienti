"use client";

import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-y border-[#EEEEF3] bg-white">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-7 px-6 py-16 md:flex-row md:gap-20 md:px-16 md:py-24">
        <div className="flex-none md:w-[220px]">
          <span className="mb-2.5 block text-[13px] font-bold uppercase tracking-wider text-violet">
            {t.aboutTitle}
          </span>
          <div className="h-1 w-11 rounded-full bg-gradient-to-r from-blue to-violet" />
        </div>
        <div className="flex flex-1 flex-col gap-9">
          <p className="max-w-[680px] text-[17px] leading-relaxed text-[#33354A] md:text-[18px]">{t.aboutBody}</p>
        </div>
      </div>
    </section>
  );
}
