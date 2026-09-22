"use client";

import { useLanguage } from "./LanguageProvider";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="bg-[#F5F6FB]">
      <div className="mx-auto max-w-[1180px] px-6 py-16 md:px-16 md:py-24">
        <div className="mb-10 flex items-baseline gap-4 md:mb-12">
          <span className="text-[13px] font-bold uppercase tracking-wider text-violet">{t.expTitle}</span>
          <div className="h-px flex-1 bg-[#DEDFEA]" />
        </div>
        <div className="flex flex-col gap-7">
          {t.experience.map((exp) => (
            <div key={`${exp.company}-${exp.period}`} className="flex flex-col gap-4 rounded-[20px] border border-[#E7E7EF] bg-white p-6 md:p-11">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink md:text-[22px]">{exp.role}</h3>
                  <div className="text-[15px] font-bold text-blue">{exp.company}</div>
                </div>
                <span className="whitespace-nowrap text-sm font-semibold text-muted">{exp.period}</span>
              </div>
              <p className="text-[15px] italic text-muted">{exp.desc}</p>
              <ul className="flex flex-col gap-2.5">
                {exp.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-[#33354A]">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
