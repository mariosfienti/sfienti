"use client";

import { useLanguage } from "./LanguageProvider";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="bg-[#F5F6FB]">
      <div className="mx-auto max-w-[1180px] px-6 py-16 md:px-16 md:py-24">
        <div className="mb-10 flex items-baseline gap-4 md:mb-12">
          <span className="text-[13px] font-bold uppercase tracking-wider text-violet">{t.skillsTitle}</span>
          <div className="h-px flex-1 bg-[#DEDFEA]" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.map((group) => (
            <div key={group.cat} className="flex flex-col gap-4 rounded-[18px] border border-[#E7E7EF] bg-white p-7">
              <h4 className="font-display text-base font-bold text-ink">{group.cat}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-[#F0F1F9] px-3.5 py-1.5 text-[13.5px] font-semibold text-[#33354A]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
