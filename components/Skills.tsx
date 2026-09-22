"use client";

import { useLanguage } from "./LanguageProvider";
import { Sparkles } from "lucide-react";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="border-y border-slate-200/80 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue">
          <Sparkles className="h-4 w-4" />
          <span>{t.skillsTitle}</span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.map((group) => (
            <div
              key={group.cat}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-[15px] font-bold text-ink">{group.cat}</h3>
                {group.badge && (
                  <span className="rounded-full bg-blue/10 px-2.5 py-0.5 text-[11px] font-bold text-blue">
                    {group.badge}
                  </span>
                )}
              </div>
              {group.desc && (
                <p className="text-[13.5px] leading-relaxed text-muted">{group.desc}</p>
              )}
              <div className="flex flex-wrap gap-2 pt-1">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200/90 bg-slate-50 px-2.5 py-1 text-[12.5px] font-medium text-[#3B3E52]"
                  >
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
