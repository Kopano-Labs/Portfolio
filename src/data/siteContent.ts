export type ProjectLink = {
  href: string;
  label: string;
};

export type EcosystemLink = {
  href: string;
  label: string;
  note: string;
  status: "Live" | "Active" | "Reserved";
};

export type StudioProject = {
  title: string;
  description: string;
  detail: string;
  status: "Active" | "MVP" | "In Development";
  deliveryLabel: "Live" | "Pilot" | "Active";
  category: string;
  stack: string[];
  image: string;
  imageAlt: string;
  primaryLink: ProjectLink;
  secondaryLink?: ProjectLink;
};

export type EducationSignal = {
  institution: string;
  award: string;
  period: string;
  note: string;
  href: string;
};

export const studioLinks = {
  kopanoLabs: "https://kopanolabs.com",
  portfolio: "https://KRRababalela.com/",
  kasiLink: "https://kasilink.com/",
  fivesArena: "https://fivesarena.com/",
  fivesArenaBlog: "https://blog.fivesarena.com/",
  starfallSalvage: "https://starfallsalvage.kopanolabs.com/",
  kopanoContext: "https://context.kopanolabs.com/",
  github: "https://github.com/RobynAwesome",
  linkedin: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/",
  koFi: "https://ko-fi.com/robynawesome/",
  amaPhuEntertainment: "https://linktr.ee/amaphu.ent",
  osheenViews: "https://linktr.ee/osheen_views",
  email: "mailto:rkholofelo@gmail.com",
};

export const ecosystemLinks: EcosystemLink[] = [
  {
    href: studioLinks.portfolio,
    label: "KRRababalela",
    note: "Chief portfolio, education lane, and public ecosystem map.",
    status: "Live",
  },
  {
    href: studioLinks.kopanoLabs,
    label: "Kopano Labs",
    note: "Studio surface for sovereign products, strategy, and systems work.",
    status: "Live",
  },
  {
    href: studioLinks.kasiLink,
    label: "KasiLink",
    note: "Township-first work network with Lite investor discovery.",
    status: "Live",
  },
  {
    href: studioLinks.fivesArena,
    label: "Five's Arena",
    note: "Live 5-a-side booking and tournament surface.",
    status: "Live",
  },
  {
    href: studioLinks.fivesArenaBlog,
    label: "5s Arena Blog",
    note: "Editorial and football culture layer around the arena stack.",
    status: "Live",
  },
  {
    href: studioLinks.starfallSalvage,
    label: "Starfall Salvage",
    note: "Playable WebGL lane inside the wider product graph.",
    status: "Live",
  },
  {
    href: studioLinks.kopanoContext,
    label: "Kopano Context",
    note: "Reserved intelligence domain. Public runtime surface still owner-blocked.",
    status: "Reserved",
  },
];

export const canonicalBio = {
  name: 'Kholofelo "Robyn" Rababalela',
  role: "Chief Architect, Kopano Labs",
  affiliation:
    "CPUT computer engineering with learning tracks through The Johns Hopkins University and Robert Kennedy College",
  location: "Cape Town, South Africa (V&A Waterfront / CPUT)",
  missionStatement:
    '"Unity through Technology — building digital infrastructure that respects African realities (load-shedding, data residency, POPIA)."',
  recognition: "Finalist, SA Startup Week 2026",
  beliefStatement:
    '"Kopano Labs is built on the belief that Jesus Christ is God."',
  stack: [
    "Next.js 15",
    "Turborepo",
    "React 19",
    "TypeScript",
    "NextAuth",
    "Tailwind CSS",
    "MongoDB Atlas (SA region)",
    "MCP",
  ],
};

export const homeTraits = ["Architect", "Builder", "Believer"];

export const homeMetrics = [
  {
    label: "Degree",
    value: "CPUT",
    detail: "BEng Tech in Computer Engineering",
  },
  {
    label: "Certificate",
    value: "Johns Hopkins",
    detail: "Agentic AI and machine learning track",
  },
  {
    label: "Graduate AI",
    value: "Robert Kennedy College",
    detail: "MSc AI and machine learning pathway",
  },
  {
    label: "Based In",
    value: "Cape Town",
    detail: "Building for Africa. Anchored at home.",
  },
];

export const homeHighlights = [
  "I lead Kopano Labs in building sovereign digital infrastructure and products that reflect African realities, secure by design and built to last.",
  "The education path running alongside the work now spans CPUT computer engineering, Johns Hopkins agentic AI study, and the Robert Kennedy College MSc AI lane.",
];

export const homeQuote =
  "Technology is not neutral. It must heal, uplift and unite. That is our mandate.";

export const studioNotes = [
  "Sovereign by design",
  "Secure by default",
  "Built for scale",
];

export const educationSignals: EducationSignal[] = [
  {
    institution: "Cape Peninsula University of Technology",
    award: "Bachelor of Engineering, Computer Engineering",
    period: "2025 - 2028",
    note:
      "Core engineering path covering software design, electronics, computer architecture, telecommunications engineering, and operating systems.",
    href: "https://www.cput.ac.za/",
  },
  {
    institution: "The Johns Hopkins University",
    award: "Certificate in Agentic AI, Machine Learning",
    period: "May 2026",
    note:
      "Agentic AI lane with Python, generative AI, prompt engineering, protocol engineering, LangChain, and LangGraph visible in the public profile evidence you shared.",
    href: "https://www.jhu.edu/",
  },
  {
    institution: "Robert Kennedy College",
    award: "MSc in Artificial Intelligence, Machine Learning",
    period: "May 2026",
    note:
      "AI graduate-study lane now reflected directly in the portfolio alongside the Lancashire / RKC programme research materials.",
    href: "https://www.college.ch/",
  },
];

export const studioProjects: StudioProject[] = [
  {
    title: "Bookit 5s Arena",
    description:
      "Football court booking platform operating as a live MVP for 5-a-side football infrastructure.",
    detail:
      "Positioned to scale into the World Cup 5s 48-nation tournament, 29–31 May 2026.",
    status: "MVP",
    deliveryLabel: "Live",
    category: "SaaS Platform",
    stack: ["Next.js", "TypeScript", "Postgres", "Stripe"],
    image: "/project-banners/bookit-banner-opt.png",
    imageAlt: "Bookit 5s Arena project banner",
    primaryLink: {
      href: "https://fivesarena.com",
      label: "Visit live platform",
    },
    secondaryLink: {
      href: "https://github.com/RobynAwesome/Bookit-5s-Arena",
      label: "View GitHub",
    },
  },
  {
    title: "KasiLink",
    description:
      "Township gig economy platform designed mobile-first and resilient under uneven connectivity.",
    detail:
      "PWA-first product thinking for offline-capable discovery, trust, and local economic access.",
    status: "Active",
    deliveryLabel: "Pilot",
    category: "Connectivity Platform",
    stack: ["IoT", "Mesh", "Rust", "Tailwind"],
    image: "/project-banners/kasilink-banner.svg",
    imageAlt: "KasiLink project banner",
    primaryLink: {
      href: studioLinks.kasiLink,
      label: "Visit live platform",
    },
    secondaryLink: {
      href: "https://github.com/RobynAwesome/KasiLink",
      label: "View GitHub",
    },
  },
  {
    title: "Kopano Context",
    description:
      "Contextual identity and data orchestration framework for African data ecosystems.",
    detail:
      "Architecture work around durable context, memory-aware tooling, and multi-agent product systems.",
    status: "In Development",
    deliveryLabel: "Active",
    category: "Identity & Data Layer",
    stack: ["Go", "gRPC", "Kafka", "CockroachDB"],
    image: "/project-banners/mcp-banner.svg",
    imageAlt: "Kopano Context project banner",
    primaryLink: {
      href: "https://github.com/RobynAwesome/Introduction-to-MCP",
      label: "View GitHub",
    },
    secondaryLink: {
      href: studioLinks.kopanoContext,
      label: "Reserved domain",
    },
  },
];

export const studioPrinciples = [
  {
    title: "African Realities",
    body: "Design for load-shedding, uneven connectivity, and local compliance from the first decision.",
  },
  {
    title: "Context Matters",
    body: "Treat memory, workflow, and operator control as product primitives rather than optional extras.",
  },
  {
    title: "Sovereign Delivery",
    body: "Ship infrastructure that can be hosted, reasoned about, and trusted close to home.",
  },
];
