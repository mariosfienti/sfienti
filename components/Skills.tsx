"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import {
  Sparkles,
  Zap,
  Trophy,
  RotateCcw,
  CheckCircle2,
  Compass,
  Layers,
  BarChart3,
  CreditCard,
  Code2,
  Kanban,
  Target,
  ShieldCheck,
  TrendingUp,
  Cpu,
  ArrowRight,
  Flame,
  Check
} from "lucide-react";

interface SkillItem {
  id: string;
  name: string;
  category: "strategy" | "agile" | "ai" | "data" | "fintech" | "tech" | "tools";
  categoryLabelIt: string;
  categoryLabelEn: string;
  taglineIt: string;
  taglineEn: string;
  storyIt: string;
  storyEn: string;
  metricIt: string;
  metricEn: string;
  projectIt: string;
  projectEn: string;
}

export default function Skills() {
  const { lang, t } = useLanguage();

  const skillList: SkillItem[] = [
    {
      id: "product-roadmap",
      name: "Product Roadmap",
      category: "strategy",
      categoryLabelIt: "Strategy & Discovery",
      categoryLabelEn: "Strategy & Discovery",
      taglineIt: "Visione trimestrale guidata dagli outcome reali e non dal feature bloat.",
      taglineEn: "Outcome-driven quarterly roadmaps focused on business impact.",
      storyIt: "Definizione degli obiettivi strategici partendo dalle interviste qualitative con utenti e stakeholder. Allineamento continuo tra priorità di business e capacità reale del team.",
      storyEn: "Translating customer pain points and business goals into executable quarterly themes without feature bloat.",
      metricIt: "13+ anni di roadmap",
      metricEn: "13+ years roadmaps",
      projectIt: "Continua (12+ anni continuativi)",
      projectEn: "Continua (12+ continuous years)"
    },
    {
      id: "claude-gemini",
      name: "Claude & Gemini AI",
      category: "ai",
      categoryLabelIt: "AI Generativa",
      categoryLabelEn: "Generative AI",
      taglineIt: "Prototipazione veloce, automazione di flussi e benchmarking rapido.",
      taglineEn: "Rapid prototyping, workflow automation, and benchmark research.",
      storyIt: "Applicazione quotidiana dei modelli LLM per strutturare architetture di dati complesse, testare idee di prodotto e velocizzare la stesura di specifiche.",
      storyEn: "Daily usage of state-of-the-art models for architectural scaffolding, rapid prototyping experiments, and market discovery.",
      metricIt: "Lancio in 3 settimane",
      metricEn: "Shipped in 3 weeks",
      projectIt: "TrustEU (Sovranità Digitale Europea)",
      projectEn: "TrustEU (European Digital Sovereignty)"
    },
    {
      id: "stripe-payments",
      name: "Stripe & Checkout",
      category: "fintech",
      categoryLabelIt: "Fintech & Pagamenti",
      categoryLabelEn: "Fintech & Payments",
      taglineIt: "Pagamenti sicuri, veloci e a prova di PSD2 e 3D Secure.",
      taglineEn: "Friction-free payments with PSD2 & 3D Secure compliance.",
      storyIt: "Integrazione dei flussi Stripe con gestione avanzata di webhook, fallback di retry automatici e checkout a 1-click su smartphone con Apple Pay e Google Pay.",
      storyEn: "Deep Stripe integration with resilient webhook handlers, payment intent retries, and high-conversion mobile checkouts.",
      metricIt: "€10M+ transati",
      metricEn: "€10M+ processed",
      projectIt: "Checkout donazioni Continua",
      projectEn: "Continua Donation Checkout Hub"
    },
    {
      id: "scrum-delivery",
      name: "Scrum & Scrumban",
      category: "agile",
      categoryLabelIt: "Agile & Delivery",
      categoryLabelEn: "Agile & Delivery",
      taglineIt: "Ritmo di rilascio costante, zero turnover e protezione del team.",
      taglineEn: "Predictable release cadences and zero engineering burnout.",
      storyIt: "Facilitazione di sprint planning, daily standup e retrospettive. Criteri di accettazione nitidi per eliminare le ambiguità prima che il codice venga scritto.",
      storyEn: "Bridging business and engineering through crisp acceptance criteria, realistic story sizing, and constructive retrospectives.",
      metricIt: "100% sprint on-time",
      metricEn: "100% on-time sprints",
      projectIt: "Team cross-funzionali IT & Design",
      projectEn: "Cross-functional Tech & UX Teams"
    },
    {
      id: "ga4-analytics",
      name: "GA4 & Funnel CRO",
      category: "data",
      categoryLabelIt: "Dati & Analytics",
      categoryLabelEn: "Data & Analytics",
      taglineIt: "Ascoltare cosa fanno davvero gli utenti per eliminare le frizioni.",
      taglineEn: "Observe actual user behavior to eliminate checkout friction.",
      storyIt: "Monitoraggio continuo dei tassi di abbandono nei funnel di conversione. Ipotesi basate sui dati e A/B test per massimizzare la donazione e la retention.",
      storyEn: "Tracking drop-offs across funnel stages, uncovering mobile bottlenecks, and running structured validation tests.",
      metricIt: "+28% conversione checkout",
      metricEn: "+28% checkout conversion",
      projectIt: "Ottimizzazione funnel donazioni",
      projectEn: "Donation Funnel Optimization"
    },
    {
      id: "satispay-business",
      name: "Satispay Business",
      category: "fintech",
      categoryLabelIt: "Fintech & Pagamenti",
      categoryLabelEn: "Fintech & Payments",
      taglineIt: "Il pagamento mobile amato dagli utenti per azzerare la frizione delle carte.",
      taglineEn: "Seamless mobile payment integration for instant donation conversion.",
      storyIt: "Configurazione e coordinamento dell'integrazione di Satispay per offrire un'alternativa immediata e a basse commissioni alle carte di credito tradizionali.",
      storyEn: "Direct mobile payment gateway setup offering donors an instant, zero-card payment pathway.",
      metricIt: "Zero friction mobile",
      metricEn: "Zero mobile friction",
      projectIt: "Integrazione multi-gateway Continua",
      projectEn: "Continua Multi-gateway Hub"
    },
    {
      id: "nextjs-vercel",
      name: "Next.js & Vercel",
      category: "tech",
      categoryLabelIt: "Stack Tecnico",
      categoryLabelEn: "Technical Stack",
      taglineIt: "Architetture web moderne, veloci e con performance massime.",
      taglineEn: "Modern, high-performance edge web architectures.",
      storyIt: "Capacità di dialogare con gli sviluppatori su SSR, routing, API routes, performance web (Core Web Vitals) e deployment su Vercel.",
      storyEn: "Solid engineering literacy covering SSR, API routes, Core Web Vitals, and cloud deployment pipelines.",
      metricIt: "100/100 Core Web Vitals",
      metricEn: "100/100 Core Web Vitals",
      projectIt: "Architettura TrustEU & portfolio",
      projectEn: "TrustEU & Portfolio Architecture"
    },
    {
      id: "hotjar",
      name: "Hotjar",
      category: "data",
      categoryLabelIt: "Dati & Analytics",
      categoryLabelEn: "Data & Analytics",
      taglineIt: "Mappe visive e registrazioni per scoprire dove gli utenti esitano.",
      taglineEn: "Visual heatmaps and recordings to detect user hesitation.",
      storyIt: "Identificazione delle esitazioni su form e Call to Action, rimozione dei campi superflui e validazione visiva dei percorsi di navigazione.",
      storyEn: "Diagnosing scroll-depth drop-offs and hesitation points on key CTA buttons to streamline conversion paths.",
      metricIt: "Frizioni eliminate",
      metricEn: "Eliminated user friction",
      projectIt: "Redesign pagine di atterraggio",
      projectEn: "Landing Experience Redesign"
    },
    {
      id: "user-discovery",
      name: "User Discovery",
      category: "strategy",
      categoryLabelIt: "Strategy & Discovery",
      categoryLabelEn: "Strategy & Discovery",
      taglineIt: "Interviste continuative per validare problemi reali prima del codice.",
      taglineEn: "Continuous customer interviews to validate real problems first.",
      storyIt: "Parlare regolarmente con gli utilizzatori finali per validare problemi reali prima di investire settimane di sviluppo software.",
      storyEn: "Regular customer touchpoints to invalidate weak hypotheses before burning sprint cycles.",
      metricIt: "Decisioni user-first",
      metricEn: "User-first decisions",
      projectIt: "Ricerca donatori & interviste TrustEU",
      projectEn: "Donor Research & TrustEU Interviews"
    },
    {
      id: "jira-confluence",
      name: "Jira & Confluence",
      category: "tools",
      categoryLabelIt: "Toolchain di Prodotto",
      categoryLabelEn: "Product Toolchain",
      taglineIt: "Unica fonte di verità per specifiche, backlog e criteri di QA.",
      taglineEn: "Single source of truth for specs, backlog grooming, and QA.",
      storyIt: "Organizzazione meticolosa dei ticket: epiche, user story, criteri di accettazione dettagliati e documentazione architetturale condivisa.",
      storyEn: "Clean backlog grooming with well-scoped epics, user stories, and acceptance checklists that make estimation easy.",
      metricIt: "Daily Driver",
      metricEn: "Daily Driver",
      projectIt: "Gestione rilasci sprint",
      projectEn: "Sprint Release Orchestration"
    },
    {
      id: "drupal-enterprise",
      name: "Drupal Enterprise CMS",
      category: "tech",
      categoryLabelIt: "Stack Tecnico",
      categoryLabelEn: "Technical Stack",
      taglineIt: "Portali ad alto traffico, tassonomie complesse e stabilità pluriennale.",
      taglineEn: "High-traffic portals, complex taxonomies, and multi-year stability.",
      storyIt: "Oltre 12 anni di supervisione di piattaforme Drupal, coordinando migrazioni di versione, tassonomie complesse e integrazioni esterne via API.",
      storyEn: "12+ years directing enterprise CMS platforms, major migrations, custom workflows, and secure third-party integrations.",
      metricIt: "12+ anni su Drupal",
      metricEn: "12+ years on Drupal",
      projectIt: "Piattaforma portale Continua",
      projectEn: "Continua Multi-site Portal"
    },
    {
      id: "moscow-rice",
      name: "MoSCoW & RICE",
      category: "strategy",
      categoryLabelIt: "Strategy & Discovery",
      categoryLabelEn: "Strategy & Discovery",
      taglineIt: "Framework oggettivi per dare priorità e depoliticizzare le scelte.",
      taglineEn: "Objective scoring to depoliticize roadmap choices.",
      storyIt: "Quantificazione del Reach, Impact, Confidence ed Effort per depoliticizzare le scelte di roadmap e allineare gli stakeholder con numeri chiari.",
      storyEn: "Scoring backlog items with Reach, Impact, Confidence, and Effort to depoliticize sprint planning with executive stakeholders.",
      metricIt: "Priorità certe",
      metricEn: "Crystal-clear priorities",
      projectIt: "Governance roadmap strategica",
      projectEn: "Strategic Roadmap Governance"
    }
  ];

  // Currently selected skill ID
  const [selectedId, setSelectedId] = useState<string>("claude-gemini");
  // Set of popped skill IDs
  const [poppedMap, setPoppedMap] = useState<Record<string, boolean>>({
    "claude-gemini": true
  });
  // Category filter
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const handleSelectSkill = (id: string) => {
    setSelectedId(id);
    setPoppedMap((prev) => {
      const copy = { ...prev };
      copy[id] = true;
      return copy;
    });
  };

  const handleResetGame = () => {
    setPoppedMap({});
    setSelectedId("claude-gemini");
  };

  const selectedSkill = skillList.find((s) => s.id === selectedId) || skillList[0];
  const poppedCount = Object.keys(poppedMap).filter((k) => poppedMap[k]).length;
  const totalCount = skillList.length;

  const categories = [
    { id: "all", labelIt: "Tutte le sfere", labelEn: "All bubbles" },
    { id: "strategy", labelIt: "Strategy", labelEn: "Strategy" },
    { id: "agile", labelIt: "Agile", labelEn: "Agile" },
    { id: "ai", labelIt: "AI Generativa", labelEn: "Generative AI" },
    { id: "fintech", labelIt: "Fintech", labelEn: "Fintech" },
    { id: "data", labelIt: "Dati", labelEn: "Data" },
    { id: "tech", labelIt: "Tech Stack", labelEn: "Tech Stack" }
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skillList
      : skillList.filter((s) => s.category === activeCategory);

  const productLifecycleSteps = [
    {
      num: "01",
      title: lang === "it" ? "Discovery & Ricerca" : "Discovery & Research",
      desc:
        lang === "it"
          ? "Interviste utenti, analisi dei bisogni di donatori/clienti e benchmarking europeo continuo."
          : "User interviews, donor/client problem discovery, and deep European software benchmarking.",
      icon: Target
    },
    {
      num: "02",
      title: lang === "it" ? "Strategia & Backlog" : "Strategy & Backlog",
      desc:
        lang === "it"
          ? "Traduzione della vision in roadmap trimestrali e prioritizzazione MoSCoW / RICE basata sul valore."
          : "Translating vision into quarterly roadmaps with MoSCoW / RICE value-oriented prioritization.",
      icon: Compass
    },
    {
      num: "03",
      title: lang === "it" ? "Agile Delivery" : "Agile Delivery",
      desc:
        lang === "it"
          ? "Scrum & Scrumban: sprint planning, sync cross-funzionale con designer e dev, criteri di accettazione."
          : "Scrum & Scrumban: sprint planning, tech/design cross-alignment, and acceptance criteria.",
      icon: Layers
    },
    {
      num: "04",
      title: lang === "it" ? "Fintech & QA" : "Fintech & QA",
      desc:
        lang === "it"
          ? "Integrazione gateway (Stripe, PayPal, Satispay), testing di usabilità e rollout graduale su web e app."
          : "Gateways orchestration (Stripe, PayPal, Satispay), usability QA, and controlled rollouts.",
      icon: ShieldCheck
    },
    {
      num: "05",
      title: lang === "it" ? "Misurazione & CRO" : "Measurement & CRO",
      desc:
        lang === "it"
          ? "Analisi dei funnel con GA4 e Hotjar, riduzione del churn e ottimizzazione continua della retention."
          : "Funnel analytics with GA4 and Hotjar, churn reduction, and ongoing retention optimization.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="skills" className="border-y border-slate-200/80 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue">
              <Sparkles className="h-4 w-4" />
              <span>{lang === "it" ? "Skill Bubble Game" : "Interactive Skill Bubble Game"}</span>
            </div>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl md:text-4xl">
              {lang === "it"
                ? "Fai scoppiare le bolle: scopri le competenze e i risultati sul campo"
                : "Pop the Skill Bubbles: Real-World PM Execution"}
            </h2>
            <p className="mt-2 max-w-2xl text-[15px] sm:text-[16px] text-muted">
              {lang === "it"
                ? "Basta con i soliti elenchi pesanti! Clicca su ciascuna sfera per farla brillare e scoprire la storia, l'impatto e il progetto reale associato."
                : "No more heavy, boring skill lists! Click any bubble to make it pop & glow, revealing real impact, projects, and execution stories."}
            </p>
          </div>

          {/* Gamification progress tracker */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-2xl border border-blue/20 bg-blue/5 px-4 py-2 text-xs font-bold text-blue shadow-xs">
              <Trophy className="h-4 w-4 text-blue" />
              <span>
                {lang === "it"
                  ? `Bolle scoppiate: ${poppedCount}/${totalCount}`
                  : `Bubbles popped: ${poppedCount}/${totalCount}`}
              </span>
            </div>

            {poppedCount > 1 && (
              <button
                type="button"
                onClick={handleResetGame}
                title={lang === "it" ? "Ricomincia il gioco" : "Reset bubbles"}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-ink cursor-pointer transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* ===================================================================== */}
        {/* INTERACTIVE BUBBLE GAME PLAYGROUND                                   */}
        {/* ===================================================================== */}
        <div className="mt-10 rounded-3xl border border-blue/20 bg-gradient-to-b from-blue/[0.03] via-slate-50/50 to-white p-6 md:p-8 shadow-sm">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pb-5 border-b border-slate-200/80">
            <span className="text-xs font-bold uppercase tracking-wider text-muted mr-1">
              {lang === "it" ? "Filtra:" : "Filter:"}
            </span>
            {categories.map((c) => {
              const isSelected = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCategory(c.id)}
                  className={`rounded-full px-3 py-1 text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-blue text-white shadow-xs"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-ink"
                  }`}
                >
                  {lang === "it" ? c.labelIt : c.labelEn}
                </button>
              );
            })}
          </div>

          {/* Bubbles Grid */}
          <div className="mt-6">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-3.5 py-4">
              {filteredSkills.map((bubble) => {
                const isSelected = selectedId === bubble.id;
                const isPopped = !!poppedMap[bubble.id];

                return (
                  <button
                    key={bubble.id}
                    type="button"
                    onClick={() => handleSelectSkill(bubble.id)}
                    aria-pressed={isSelected}
                    className={`group relative flex items-center gap-2 rounded-full px-4 py-2.5 transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                      isSelected
                        ? "scale-105 bg-blue text-white shadow-lg ring-4 ring-blue-500/30 font-bold"
                        : isPopped
                        ? "bg-white border-2 border-blue/40 text-blue font-semibold shadow-sm hover:scale-102 hover:border-blue"
                        : "bg-white border border-slate-200/90 text-slate-700 font-medium shadow-xs hover:border-blue/40 hover:scale-102 hover:text-ink"
                    }`}
                  >
                    {/* Status check / star icon */}
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold transition-colors ${
                        isSelected
                          ? "bg-white text-blue"
                          : isPopped
                          ? "bg-blue/10 text-blue"
                          : "bg-slate-100 text-slate-400 group-hover:bg-blue/10 group-hover:text-blue"
                      }`}
                    >
                      {isPopped ? "✓" : "✦"}
                    </span>

                    <span className="font-display text-[13.5px] tracking-tight">
                      {bubble.name}
                    </span>

                    {/* Category pill inside bubble */}
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {lang === "it" ? bubble.categoryLabelIt : bubble.categoryLabelEn}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* =================================================================== */}
          {/* ACTIVE BUBBLE REVEAL CARD                                           */}
          {/* =================================================================== */}
          {selectedSkill && (
            <div
              key={selectedSkill.id}
              className="mt-6 rounded-2xl border border-blue/20 bg-white p-6 md:p-8 shadow-md transition-all duration-300"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                
                {/* Left side: Tagline & Real story */}
                <div className="flex flex-col gap-3 lg:max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue/10 px-3 py-1 text-xs font-bold text-blue">
                      <Zap className="h-3.5 w-3.5" />
                      <span>{lang === "it" ? selectedSkill.categoryLabelIt : selectedSkill.categoryLabelEn}</span>
                    </span>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700">
                      ★ {lang === "it" ? selectedSkill.metricIt : selectedSkill.metricEn}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-ink">
                    {selectedSkill.name}
                  </h3>

                  <p className="text-[15px] font-semibold text-blue leading-snug">
                    "{lang === "it" ? selectedSkill.taglineIt : selectedSkill.taglineEn}"
                  </p>

                  <p className="text-[14px] leading-relaxed text-[#4A4D62] pt-1">
                    {lang === "it" ? selectedSkill.storyIt : selectedSkill.storyEn}
                  </p>
                </div>

                {/* Right side: Project Highlight Box */}
                {selectedSkill.projectIt && (
                  <div className="flex flex-col gap-3 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 lg:w-80 flex-shrink-0">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-muted">
                      {lang === "it" ? "Applicato sul campo in:" : "Applied in real project:"}
                    </span>
                    <div className="flex items-start gap-2.5">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue text-white">
                        <CheckCircle2 className="h-4.5 w-4.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-display text-[14px] font-bold text-ink leading-snug">
                          {lang === "it" ? selectedSkill.projectIt : selectedSkill.projectEn}
                        </span>
                        <span className="text-[12px] font-medium text-slate-500 mt-0.5">
                          {lang === "it" ? "Verificato e testato con utenti reali" : "Battle-tested with real users"}
                        </span>
                      </div>
                    </div>

                    <a
                      href="#experience"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-blue hover:underline cursor-pointer"
                    >
                      <span>{lang === "it" ? "Esplora nell'esperienza lavorativa" : "View in experience history"}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}

              </div>
            </div>
          )}

          {/* Gamification footer tip */}
          <div className="mt-5 flex items-center justify-between text-xs text-muted">
            <span>
              💡 {lang === "it"
                ? "Consiglio: fai scoppiare tutte le sfere per scoprire l'intero arsenale di prodotto di Mario!"
                : "Tip: pop all bubbles to discover Mario's complete product management toolkit!"}
            </span>
            <span className="font-bold text-blue">
              {poppedCount === totalCount
                ? (lang === "it" ? "🎉 Complimenti! Hai scoppiato tutte le competenze!" : "🎉 Congrats! All bubbles popped!")
                : `${totalCount - poppedCount} ${lang === "it" ? "rimanenti" : "remaining"}`}
            </span>
          </div>

        </div>

        {/* 2. Lifecycle Walkthrough: How Mario drives a product */}
        <div className="mt-14 rounded-3xl border border-slate-200/90 bg-[#FAFAF9] p-6 md:p-8 shadow-xs">
          <div className="flex flex-col gap-2 pb-5 border-b border-slate-200/70">
            <span className="text-xs font-bold uppercase tracking-wider text-blue">
              {lang === "it" ? "Metodologia di Delivery" : "Delivery Methodology"}
            </span>
            <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
              {lang === "it"
                ? "Il ciclo di gestione del prodotto: dall'idea alla retention"
                : "The end-to-end product lifecycle: from idea to retention"}
            </h3>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {productLifecycleSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col gap-2.5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-extrabold text-blue/80">
                      {step.num}
                    </span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue/10 text-blue">
                      <StepIcon className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <h4 className="font-display text-[14px] font-bold text-ink">
                    {step.title}
                  </h4>
                  <p className="text-[12.5px] leading-relaxed text-[#4A4D62]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
