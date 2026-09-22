"use client";

import { useLanguage } from "./LanguageProvider";

export default function EducationLanguages() {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-14 px-6 py-16 md:grid-cols-2 md:gap-20 md:px-16 md:py-24">
        <div>
          <div className="mb-9 flex items-baseline gap-4">
            <span className="text-[13px] font-bold uppercase tracking-wider text-violet">{t.eduTitle}</span>
          </div>
          <div className="flex flex-col gap-6">
            {t.education.map((ed) => (
              <div key={ed.title} className="flex flex-col gap-1 border-l-2 border-[#E7E7EF] pl-4">
                <span className="text-[13.5px] font-bold text-blue">{ed.period}</span>
                <span className="font-display text-base font-semibold text-ink">{ed.title}</span>
                <span className="text-sm text-muted">{ed.org}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-9 flex items-baseline gap-4">
            <span className="text-[13px] font-bold uppercase tracking-wider text-violet">{t.langTitle}</span>
          </div>
          <div className="flex flex-col gap-6">
            {t.languages.map((lg) => (
              <div key={lg.name} className="flex flex-col gap-2">
                <div className="flex justify-between text-[15px]">
                  <span className="font-bold text-ink">{lg.name}</span>
                  <span className="font-semibold text-muted">{lg.level}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#EEEEF3]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue to-violet"
                    style={{ width: `${lg.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
