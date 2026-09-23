"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { GraduationCap, Languages, Calendar, Award } from "lucide-react";

export default function EducationLanguages() {
  const { t, lang } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-[#FAFAF9]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 md:grid-cols-2 md:gap-14 md:px-8">
        {/* Education Column */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet">
              <GraduationCap className="h-4 w-4" />
              <span>{t.eduTitle}</span>
            </div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {lang === "it" ? "Percorso accademico & certificazioni" : "Academic path & training"}
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {t.education.map((ed, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col gap-1.5 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-200 hover:border-blue/40 hover:shadow-md"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue">
                    <Calendar className="h-3 w-3" />
                    <span>{ed.period}</span>
                  </span>
                  {ed.logo && (
                    <Image
                      src={ed.logo}
                      alt={ed.org}
                      width={36}
                      height={36}
                      className="h-9 w-9 flex-shrink-0 rounded-lg object-contain"
                    />
                  )}
                </div>
                <h3 className="font-display text-[16px] font-bold text-ink">
                  {ed.title}
                </h3>
                <span className="text-[13.5px] font-medium text-muted">
                  {ed.org}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Column */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet">
              <Languages className="h-4 w-4" />
              <span>{t.langTitle}</span>
            </div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {lang === "it" ? "Competenze linguistiche" : "Language proficiency"}
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {t.languages.map((lg, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between text-[15px]">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-ink text-[16px]">{lg.name}</span>
                  </div>
                  <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-700">
                    {lg.level}
                  </span>
                </div>

                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue to-violet transition-all duration-500"
                    style={{ width: `${lg.pct}%` }}
                  />
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-dashed border-slate-300 p-5 text-center text-xs font-semibold text-muted">
              {lang === "it"
                ? "Comunicazione tecnica e fluida in contesti internazionali e team distribuiti."
                : "Effective communication across international environments and distributed teams."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
