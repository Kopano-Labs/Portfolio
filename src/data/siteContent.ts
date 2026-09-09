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
  projectRune: "https://github.com/RobynAwesome/Project-Rune",
  orcid: "https://orcid.org/0009-0000-3995-6147",
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
    note: "Public identity root, research lane, education evidence, and ecosystem map.",
    status: "Live",
  },
  {
    href: studioLinks.kopanoLabs,
    label: "Kopano Labs",
    note: "Studio surface for sovereign products, strategy, research translation, and systems work.",
    status: "Live",
  },
  {
    href: studioLinks.kasiLink,
    label: "KasiLink",
    note: "Township-first work network. Public outcome receipts remain pilot-stage.",
    status: "Live",
  },
  {
    href: studioLinks.fivesArena,
    label: "Five's Arena",
    note: "Live 5-a-side booking, discovery, and competition surface.",
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
    "CPUT Computer Engineering student with independent research in protocol-driven agentic memory, AI governance, and resilient runtime systems",
  location: "Cape Town, South Africa",
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

export const homeTraits = ["Architect", "Research Builder", "Believer"];

export const homeMetrics = [
  {
    label: "Current Study",
    value: "CPUT",
    detail: "BEng Tech in Computer Engineering — in progress",
  },
  {
    label: "Research Identity",
    value: "ORCID",
    detail: "0009-0000-3995-6147",
  },
  {
    label: "Flagship Research Build",
    value: "RUNE",
    detail: "Runtime Unified Network Endorsement",
  },
  {
    label: "Based In",
    value: "Cape Town",
    detail: "Building for Africa. Anchored at home.",
  },
];

export const homeHighlights = [
  "I lead Kopano Labs in building sovereign digital infrastructure and products that reflect African realities, secure by design and built to last.",
  "My active independent research programme examines protocol-driven agentic memory, verification, failure/convergence governance, and how stateless reasoning engines can operate against durable user-controlled context.",
  "Project RUNE translates that line of work into a deliberately minimal reference MVP: claim, evidence, state, action, receipt. The implementation remains proof-driven and fail-closed rather than promoted beyond what the repository can verify.",
  "Where public service outcomes are not independently verified yet, the site labels them as pilots, intended service, or discovery evidence rather than collapsing them into a success claim.",
];

export const homeQuote =
  "Technology is not neutral. It must heal, uplift and unite. That is our mandate.";

export const studioNotes = [
  "Sovereign by design",
  "Secure by default",
  "Proof before promotion",
];

export const educationSignals: EducationSignal[] = [
  {
    institution: "Cape Peninsula University of Technology",
    award: "BEng Tech in Computer Engineering — current study",
    period: "2025 - 2028",
    note:
      "Current engineering path covering software design, electronics, computer architecture, telecommunications engineering, and operating systems.",
    href: "https://www.cput.ac.za/",
  },
  {
    institution: "Johns Hopkins Engineering",
    award: "Provisional admission — Certificate Program in Agentic AI",
    period: "5 August 2026",
    note:
      "A provisional admission offer is on record. This is not represented as an earned certificate or completed qualification; completion remains unverified until award evidence exists.",
    href: "https://ep.jhu.edu/",
  },
];

export const studioProjects: StudioProject[] = [
  {
    title: "Project RUNE",
    description:
      "Runtime Unified Network Endorsement — a governance layer for endorsing agent-to-agent coordination and identity claims rather than assuming them safe.",
    detail:
      "Public reference MVP with a deliberately minimal loop: claim → evidence → state → action → receipt. The gate remains fail-closed and implementation status is not promoted beyond what the live repository and receipts can verify.",
    status: "MVP",
    deliveryLabel: "Active",
    category: "Agent Governance",
    stack: ["Python", "MCP", "Ed25519", "Fail-closed"],
    image: "https://raw.githubusercontent.com/RobynAwesome/Project-Rune/main/assets/project_rune_emblem.svg",
    imageAlt: "Project RUNE endorsement and convergence emblem",
    primaryLink: {
      href: studioLinks.projectRune,
      label: "Explore RUNE",
    },
    secondaryLink: {
      href: studioLinks.orcid,
      label: "Research identity",
    },
  },
  {
    title: "Bookit 5s Arena",
    description:
      "Football court booking platform operating as a live MVP for 5-a-side football infrastructure.",
    detail:
      "Live booking and competition infrastructure with ongoing mobile and product-flow refinement. August 2026 Search Console recorded 149 web clicks and 5.71K impressions; that is discovery proof, not a claim of booking conversion or revenue.",
    status: "MVP",
    deliveryLabel: "Live",
    category: "SaaS Platform",
    stack: ["React", "Node.js", "MongoDB", "APWA"],
    image: "/project-banners/bookit-banner-opt.png",
    imageAlt: "Bookit 5s Arena project banner",
    primaryLink: {
      href: "https://fivesarena.com",
      label: "Visit live platform",
    },
    secondaryLink: {
      href: "https://github.com/Kopano-Labs/Bookit-5s-Arena",
      label: "View GitHub",
    },
  },
  {
    title: "KasiLink",
    description:
      "Township gig economy platform designed mobile-first and resilient under uneven connectivity.",
    detail:
      "PWA-first product work around offline-capable discovery, trust, and local economic access. Named provider-placement outcomes remain pilot-stage until independently verified receipts exist.",
    status: "Active",
    deliveryLabel: "Pilot",
    category: "Connectivity Platform",
    stack: ["PWA", "Offline-first", "Trust", "Local discovery"],
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
      "Contextual identity and data orchestration framework for durable, user-governed AI memory systems.",
    detail:
      "Research and architecture work around persistent context, memory-aware tooling, state boundaries, and multi-agent product systems. Digital Hippocampus, KC, POC/FOC and related material are treated as research evidence, not credentials.",
    status: "In Development",
    deliveryLabel: "Active",
    category: "Identity & Data Layer",
    stack: ["MCP", "Context", "Governance", "Receipts"],
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
    title: "Proof Before Promotion",
    body: "Separate intention, demonstration, deployment, discovery, and verified outcome instead of collapsing them into one success claim.",
  },
];
