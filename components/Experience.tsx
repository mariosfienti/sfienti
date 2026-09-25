"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { Briefcase, Calendar, CheckCircle2, Building2, Sparkles, ExternalLink } from "lucide-react";

export default function Experience() {
  const { t, lang } = useLanguage();

  const getTags = (company: string) => {
    if (company.toLowerCase().includes("rete del dono")) {
      return [
        "Agile / Scrum",
        "iOS & Android Apps",
        "Stripe · PayPal · Satispay",
        "Google Analytics · Hotjar",
        "Product Discovery",
        "Fintech & Payments"
      ];
    }
    return [
      "Offline & BTL Marketing",
      "Brand Tour Nazionale",
      "Budget Management",
      "Media, TV & Radio",
      "Partnership & Sponsorship"
    ];
  };

  return (
    <section id="experience" className="py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-2 md:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet">
            <Briefcase className="h-3.5 w-3.5" />
            <span>{t.expTitle}</span>
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl md:text-4xl">
            {lang === "it"
              ? "Percorso professionale & risultati sul campo"
              : "Career journey & hands-on track record"}
          </h2>
          <p className="max-w-2xl text-[16px] text-muted">
            {lang === "it"
              ? "Più di un decennio di esperienza nella gestione end-to-end di prodotti ad alto impatto e traffico."
              : "Over a decade of driving end-to-end high-traffic digital products and platforms."}
          </p>
        </div>

        {/* Experience List */}
        <div className="flex flex-col gap-8">
          {t.experience.map((exp, idx) => (
            <article
              key={`${exp.company}-${exp.period}`}
              className="group relative flex flex-col gap-5 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue/40 hover:shadow-md md:p-9"
            >
              {/* Header: Role, Company, Period, and Logo */}
              <div className="flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-start">
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                      {exp.role}
                    </h3>
                    <span className="hidden h-1.5 w-1.5 rounded-full bg-slate-300 sm:inline-block" />
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 font-display text-lg font-bold text-blue hover:text-ink hover:underline"
                        title={lang === "it" ? `Visita il sito di ${exp.company}` : `Visit ${exp.company} website`}
                      >
                        <span>{exp.company}</span>
                        <ExternalLink className="h-3.5 w-3.5 opacity-60 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    ) : (
                      <span className="font-display text-lg font-bold text-blue">
                        {exp.company}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-muted">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-slate-700">
                      <Calendar className="h-3.5 w-3.5 text-blue" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-500">
                      {idx === 0
                        ? lang === "it"
                          ? "12+ anni continuativi"
                          : "12+ years tenure"
                        : lang === "it"
                        ? "3 anni"
                        : "3 years tenure"}
                    </span>
                  </div>
                </div>

                {/* Company Logo Display with link */}
                {exp.companyLogo && (
                  exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/logo flex h-12 w-fit items-center justify-start rounded-xl border border-slate-200/80 bg-[#FAFAF9] p-2 transition-all duration-200 hover:border-blue/40 hover:bg-white hover:shadow-xs sm:h-14 sm:justify-end sm:p-2.5"
                      title={lang === "it" ? `Visita il sito di ${exp.company}` : `Visit ${exp.company} website`}
                    >
                      <Image
                        src={exp.companyLogo}
                        alt={exp.company}
                        width={220}
                        height={60}
                        className="max-h-9 sm:max-h-11 w-auto max-w-[150px] sm:max-w-[180px] object-contain transition-transform duration-200 group-hover/logo:scale-[1.03]"
                      />
                    </a>
                  ) : (
                    <div className="flex h-12 w-fit items-center justify-start rounded-xl border border-slate-100 bg-[#FAFAF9] p-2 sm:h-14 sm:justify-end sm:p-2.5">
                      <Image
                        src={exp.companyLogo}
                        alt={exp.company}
                        width={220}
                        height={60}
                        className="max-h-9 sm:max-h-11 w-auto max-w-[150px] sm:max-w-[180px] object-contain"
                      />
                    </div>
                  )
                )}
              </div>

              {/* Company Description Banner */}
              <div className="rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-2.5 text-[14.5px] font-medium text-[#46485D]">
                <span className="font-semibold text-ink">{exp.company}: </span>
                {exp.desc}
              </div>

              {/* Achievement Bullets */}
              <ul className="flex flex-col gap-3 pt-1">
                {exp.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-[#2F3246]"
                  >
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tags / Methodologies */}
              <div className="mt-2 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-muted">
                  {lang === "it" ? "Focus:" : "Focus:"}
                </span>
                {getTags(exp.company).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded-lg border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700 transition-colors hover:border-blue/30 hover:bg-blue/5 hover:text-blue"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
