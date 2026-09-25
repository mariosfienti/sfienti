export type Lang = "it" | "en";

export interface ExperienceItem {
  role: string;
  company: string;
  companyLogo?: string;
  companyUrl?: string;
  period: string;
  desc: string;
  bullets: string[];
}

export interface EducationItem {
  title: string;
  org: string;
  period: string;
  logo?: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  pct: number;
}

export interface Content {
  meta: { title: string; description: string };
  nav: { about: string; experience: string; projects: string; contact: string };
  heroName: string;
  heroRole: string;
  heroIntro: string;
  heroLocation: string;
  ctaContact: string;
  ctaLinkedin: string;
  aboutTitle: string;
  aboutBody: string;
  expTitle: string;
  experience: ExperienceItem[];
  projTitle: string;
  proj: {
    name: string;
    logo?: string;
    role: string;
    period: string;
    desc: string;
    bullets: string[];
    linkLabel: string;
  };
  eduTitle: string;
  education: EducationItem[];
  langTitle: string;
  languages: LanguageItem[];
  contactTitle: string;
  contactBody: string;
  contactEmailLabel: string;
  contactLinkedinLabel: string;
  form: {
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submitLabel: string;
    thanksTitle: string;
    thanksBody: string;
  };
  footerNote: string;
}

export const CONTENT: Record<Lang, Content> = {
  it: {
    meta: {
      title: "Mario Alessandro Sfienti — Digital Product Manager",
      description:
        "Product Manager con oltre 13 anni di esperienza nel digitale. Fondatore di TrustEU, il progetto sulla sovranità digitale europea."
    },
    nav: { about: "Chi sono", experience: "Esperienza", projects: "Progetti", contact: "Contatti" },
    heroName: "Mario Alessandro Sfienti",
    heroRole: "Digital Product Manager",
    heroIntro:
      "Guido lo sviluppo di prodotti digitali da oltre 13 anni: dalla discovery alla roadmap, fino al rilascio, con un focus su dati, sistemi di pagamento e ottimizzazione delle conversioni. Oggi lavoro su una piattaforma italiana di raccolta fondi e porto avanti TrustEU, il mio progetto sulla sovranità digitale europea.",
    heroLocation: "Torino, Italia",
    ctaContact: "Scrivimi",
    ctaLinkedin: "Profilo LinkedIn",
    aboutTitle: "Chi sono",
    aboutBody:
      "Sono un Product Manager con oltre 13 anni di esperienza nella gestione di piattaforme digitali, con competenze trasversali su sistemi di pagamento, dati transazionali e crescita che ho applicato a contesti diversi — dal fundraising al marketing fino a progetti editoriali indipendenti. Attualmente sono responsabile del prodotto di una delle principali piattaforme italiane di raccolta fondi, dove seguo l'intero ciclo di vita del prodotto con metodologia Agile (Scrum, Scrumban). In parallelo, sto completando la laurea in ICT, Innovazione sociale, comunicazione e nuove tecnologie all'Università degli Studi di Torino, e porto avanti TrustEU, un progetto indipendente sulla sovranità digitale europea.",
    expTitle: "Esperienza",
    experience: [
      {
        role: "Product Manager",
        company: "Rete del Dono",
        companyLogo: "/logos/rete-del-dono.webp",
        companyUrl: "https://www.retedeldono.it",
        period: "Apr 2012 — oggi",
        desc: "Piattaforma italiana leader nel crowdfunding e fundraising digitale non profit.",
        bullets: [
          "Product owner del portale web e delle app iOS/Android: discovery, prioritizzazione, roadmap e delivery in metodologia Agile (Scrum, Scrumban)",
          "Coordinamento di stakeholder cross-funzionali — team di sviluppo, fornitori, PM interni ed esterni — dal concept al rilascio, con monitoraggio SAL e controllo qualità",
          "Analisi dei dati di pagamento (PayPal, Stripe, Satispay, bonifico) e di navigazione/UX (Google Analytics, Search Console, Hotjar)",
          "Benchmark competitivo continuo e formazione ai clienti Premium, con produzione di manualistica di prodotto"
        ]
      },
      {
        role: "Marketing Manager",
        company: "Bakeca",
        companyLogo: "/logos/bakeca.webp",
        companyUrl: "https://www.bakeca.it",
        period: "Gen 2009 — Gen 2012",
        desc: "Campagne di marketing offline e below-the-line.",
        bullets: [
          "Definizione del piano marketing offline e gestione del budget",
          "Co-branding, partnership e sponsorship con eventi, stampa, radio e TV; organizzazione di un tour nazionale per il brand",
          "Coordinamento risorse e contrattualistica, gestione acquisti e relazioni con enti pubblici, fornitori e partner"
        ]
      }
    ],
    projTitle: "Progetto personale",
    proj: {
      name: "TrustEU",
      logo: "/logos/trusteu.webp",
      role: "Founder & Product Lead",
      period: "2026 — oggi · in parallelo",
      desc: "Piattaforma indipendente che mappa soluzioni cloud, software e servizi europei per promuovere la sovranità digitale in Europa.",
      bullets: [
        "Definizione di vision, strategia di prodotto e roadmap editoriale",
        "Prototipazione e sviluppo del prodotto e dei flussi editoriali con strumenti di AI generativa",
        "Ricerca, analisi e benchmarking di soluzioni digitali europee (cloud, software, servizi)",
        "Gestione di contenuti, community, comunicazione e analisi dati del progetto"
      ],
      linkLabel: "Visita trusteu.eu"
    },
    eduTitle: "Formazione",
    education: [
      { title: "Laurea in ICT, Innovazione sociale, comunicazione e nuove tecnologie", org: "Università degli Studi di Torino", period: "2024 — in corso · in parallelo al lavoro", logo: "/logos/unito.png" },
      { title: "UX/UI Design", org: "Fastweb Digital Academy", period: "2022" },
      { title: "Inglese B1 — ESB (CEFR)", org: "British Institute Torino · Babel School Academy · Oxford House College", period: "2024" },
      { title: "Adobe Illustrator", org: "Delpho Informatica", period: "2016" },
      { title: "Adobe Photoshop", org: "Centro Studi Raffaello", period: "2014" }
    ],
    langTitle: "Lingue",
    languages: [
      { name: "Italiano", level: "Madrelingua", pct: 100 },
      { name: "Inglese", level: "B1 — Intermedio", pct: 55 },
      { name: "Francese", level: "B1 — Intermedio", pct: 55 }
    ],
    contactTitle: "Parliamone",
    contactBody: "Sono sempre felice di confrontarmi su prodotto digitale, TrustEU e sovranità digitale europea. Scrivimi pure, ti risponderò al più presto.",
    contactEmailLabel: "Email",
    contactLinkedinLabel: "LinkedIn",
    form: {
      nameLabel: "Nome",
      emailLabel: "Email",
      messageLabel: "Messaggio",
      namePlaceholder: "Il tuo nome",
      emailPlaceholder: "latua@email.com",
      messagePlaceholder: "Scrivi qui il tuo messaggio...",
      submitLabel: "Invia messaggio",
      thanksTitle: "Quasi fatto!",
      thanksBody: "Ho aperto il tuo programma di posta con il messaggio già pronto: premi invia per completarlo."
    },
    footerNote: "Realizzato con cura a Torino."
  },
  en: {
    meta: {
      title: "Mario Alessandro Sfienti — Digital Product Manager",
      description:
        "Product Manager with 13+ years of experience in digital. Founder of TrustEU, a project on European digital sovereignty."
    },
    nav: { about: "About", experience: "Experience", projects: "Projects", contact: "Contact" },
    heroName: "Mario Alessandro Sfienti",
    heroRole: "Digital Product Manager",
    heroIntro:
      "I've been driving digital product development for 13+ years — from discovery to roadmap to release, with a focus on data, payment systems and conversion optimization. I currently work on an Italian fundraising platform and run TrustEU, my project on European digital sovereignty.",
    heroLocation: "Turin, Italy",
    ctaContact: "Get in touch",
    ctaLinkedin: "LinkedIn profile",
    aboutTitle: "About me",
    aboutBody:
      "I'm a Product Manager with 13+ years of experience running digital platforms, with cross-cutting expertise in payment systems, transactional data and growth that I've applied across different contexts — from fundraising to marketing to independent editorial projects. I currently own the product for one of Italy's leading fundraising platforms, covering the full product lifecycle with Agile methodology (Scrum, Scrumban). Alongside my job, I'm completing a degree in ICT, Social Innovation, Communication and New Technologies at the University of Turin, and running TrustEU, an independent project on European digital sovereignty.",
    expTitle: "Experience",
    experience: [
      {
        role: "Product Manager",
        company: "Rete del Dono",
        companyLogo: "/logos/rete-del-dono.webp",
        companyUrl: "https://www.retedeldono.it",
        period: "Apr 2012 — present",
        desc: "Leading Italian platform for nonprofit crowdfunding and digital fundraising.",
        bullets: [
          "Product owner for the web portal and iOS/Android apps: discovery, prioritization, roadmap and delivery with Agile methodology (Scrum, Scrumban)",
          "Coordination of cross-functional stakeholders — dev team, vendors, internal and external PMs — from concept to release, with progress tracking and quality control",
          "Analysis of payment data (PayPal, Stripe, Satispay, bank transfer) and navigation/UX data (Google Analytics, Search Console, Hotjar)",
          "Ongoing competitive benchmarking and training for Premium clients, plus product documentation"
        ]
      },
      {
        role: "Marketing Manager",
        company: "Bakeca",
        companyLogo: "/logos/bakeca.webp",
        companyUrl: "https://www.bakeca.it",
        period: "Jan 2009 — Jan 2012",
        desc: "Offline and below-the-line marketing campaigns.",
        bullets: [
          "Defined the offline marketing plan and managed the budget",
          "Co-branding, partnerships and sponsorships with events, press, radio and TV; organized a national brand tour",
          "Coordinated resources and contracts, purchasing and relationships with public bodies, vendors and partners"
        ]
      }
    ],
    projTitle: "Personal project",
    proj: {
      name: "TrustEU",
      logo: "/logos/trusteu.webp",
      role: "Founder & Product Lead",
      period: "2026 — present · alongside my job",
      desc: "An independent platform mapping European cloud, software and service alternatives to promote digital sovereignty in Europe.",
      bullets: [
        "Defined product vision, strategy and editorial roadmap",
        "Prototyped and built the product and editorial workflows with generative AI tools",
        "Researched and benchmarked European digital solutions (cloud, software, services)",
        "Managed content, community, communications and data analysis for the project"
      ],
      linkLabel: "Visit trusteu.eu"
    },
    eduTitle: "Education",
    education: [
      { title: "Degree in ICT, Social Innovation, Communication and New Technologies", org: "University of Turin", period: "2024 — in progress · alongside my job", logo: "/logos/unito.png" },
      { title: "UX/UI Design", org: "Fastweb Digital Academy", period: "2022" },
      { title: "English B1 — ESB (CEFR)", org: "British Institute Turin · Babel School Academy · Oxford House College", period: "2024" },
      { title: "Adobe Illustrator", org: "Delpho Informatica", period: "2016" },
      { title: "Adobe Photoshop", org: "Centro Studi Raffaello", period: "2014" }
    ],
    langTitle: "Languages",
    languages: [
      { name: "Italian", level: "Native", pct: 100 },
      { name: "English", level: "B1 — Intermediate", pct: 55 },
      { name: "French", level: "B1 — Intermediate", pct: 55 }
    ],
    contactTitle: "Let's talk",
    contactBody: "I'm always happy to talk about digital product, TrustEU, or European digital sovereignty — feel free to reach out and I'll get back to you soon.",
    contactEmailLabel: "Email",
    contactLinkedinLabel: "LinkedIn",
    form: {
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      messagePlaceholder: "Write your message here...",
      submitLabel: "Send message",
      thanksTitle: "Almost done!",
      thanksBody: "I've opened your email app with the message ready — hit send to complete it."
    },
    footerNote: "Designed with care in Turin."
  }
};

export const SITE = {
  email: "mario@sfienti.it",
  linkedin: "https://linkedin.com/in/mario-alessandro-sfienti",
  linkedinLabel: "linkedin.com/in/mario-alessandro-sfienti",
  trusteu: "https://trusteu.eu"
};
