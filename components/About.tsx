"use client";

import { useLanguage } from "./LanguageProvider";
import { Compass, Users, BarChart3, Rocket, Sparkles, CheckCircle2 } from "lucide-react";

export default function About() {
  const { t, lang } = useLanguage();

  const pillars = [
    {
      icon: Compass,
      title: lang === "it" ? "Product Strategy & Roadmap" : "Product Strategy & Roadmap",
      desc:
        lang === "it"
          ? "Traduzione della vision aziendale in backlog prioritizzati, roadmap strategiche trimestrali e sprint chiari orientati al valore di business."
          : "Translating business vision into prioritized backlogs, clear strategic roadmaps, and value-oriented execution sprints."
    },
    {
      icon: Users,
      title: lang === "it" ? "User Research & UX Discovery" : "User Research & UX Discovery",
      desc:
        lang === "it"
          ? "Approccio human-centered con test di usabilità, interviste a donatori e clienti Premium, prototipazione rapida e benchmark continuo."
          : "Human-centered discovery with usability sessions, donor and client interviews, rapid prototyping, and continuous competitive benchmarking."
    },
    {
      icon: BarChart3,
      title: lang === "it" ? "Data, Pagamenti & Growth" : "Data, Payments & Growth",
      desc:
        lang === "it"
          ? "Analisi approfondita dei funnel di donazione, integrazione gateway di pagamento (PayPal, Stripe, Satispay) e ottimizzazione della retention."
          : "Deep funnel analytics, digital payment gateway orchestration (PayPal, Stripe, Satispay), conversion rate optimization, and retention."
    },
    {
      icon: Rocket,
      title: lang === "it" ? "Cross-Functional Leadership" : "Cross-Functional Leadership",
      desc:
        lang === "it"
          ? "Ponte affidabile ed empatico tra sviluppatori, designer, stakeholder istituzionali e partner per rilasciare prodotti stabili e scalabili."
          : "Reliable and empathetic bridge between dev teams, UI/UX designers, non-profit stakeholders, and executive leadership."
    }
  ];

  return (
    <section id="about" className="border-y border-slate-200/80 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{t.aboutTitle}</span>
            </div>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl md:text-4xl">
              {lang === "it"
                ? "Costruire prodotti che risolvono problemi reali"
                : "Building products that solve real problems"}
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold text-[#43465A]">
            <span>Outcome-driven · Human-centered</span>
          </div>
        </div>

        {/* Narrative & Quote */}
        <div className="mt-8 grid grid-cols-1 gap-8 rounded-2xl border border-slate-200/80 bg-[#FAFAF9]/80 p-6 md:p-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <p className="text-[17px] leading-relaxed text-[#2D3043] md:text-[18.5px]">
              {t.aboutBody}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center rounded-xl border border-blue/15 bg-white p-5 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-blue">
              {lang === "it" ? "La mia formula di prodotto" : "Product philosophy"}
            </span>
            <blockquote className="mt-2 text-sm font-semibold italic text-ink leading-snug">
              &ldquo;
              {lang === "it"
                ? "Un grande prodotto nasce dove le esigenze reali degli utenti incontrano la sostenibilità tecnologica e gli obiettivi strategici del business."
                : "A great product thrives where genuine user needs meet engineering sustainability and strategic business outcomes."}
              &rdquo;
            </blockquote>
            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-muted">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>{lang === "it" ? "Focus su impatto e misurabilità" : "Focus on tangible impact"}</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Product Management */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue/10 text-blue transition-colors group-hover:bg-blue group-hover:text-white">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3 className="font-display text-[16px] font-bold text-ink">
                  {pillar.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[#4B4E63]">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
