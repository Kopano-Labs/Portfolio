export type ProjectLink = {
  href: string;
  label: string;
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

export const studioLinks = {
  kopanoLabs: "https://kopanolabs.com",
  github: "https://github.com/RobynAwesome",
  linkedin: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/",
  koFi: "https://ko-fi.com/robynawesome/",
  email: "mailto:rkholofelo@gmail.com",
};

export const canonicalBio = {
  name: 'Kholofelo "Robyn" Rababalela',
  role: "Chief Architect, Kopano Labs",
  affiliation:
    "CPUT (Cape Peninsula University of Technology), 2nd-year IT/Engineering",
  location: "Cape Town, South Africa (V&A Waterfront / CPUT)",
  missionStatement:
    '"Unity through Technology — building edge-aware digital infrastructure that treats load-shedding, data residency, and local operator control as system constraints."',
  recognition: "Finalist, SA Startup Week 2026",
  beliefStatement:
    '"Kopano Labs is built on the belief that Jesus Christ is God."',
  /** Jesus Protocol — public mission line (portfolio / studio surfaces). */
  purposeDrivenLifeStatement:
    "Kopano Labs is driven by a rigorous, purpose-driven life. Jesus is King.",
  stack: [
    "Next.js 15",
    "Turborepo",
    "React 19",
    "TypeScript",
    "Python orchestration",
    "FastAPI",
    "SQLite audit logs",
    "NextAuth",
    "Postgres / MongoDB",
    "MCP",
    "HIL roadmap",
  ],
};

export const homeTraits = ["Architect", "Builder", "Believer"];

export const homeMetrics = [
  {
    label: "Alumna",
    value: "CPUT",
    detail: "Cape Peninsula University of Technology",
  },
  {
    label: "Based In",
    value: "Cape Town",
    detail: "Building for Africa. Anchored at home.",
  },
  {
    label: "Recognition",
    value: "SA Startup Week 2026 Finalist",
    detail: "Top founder and startup recognition.",
  },
];

export const homeHighlights = [
  "I lead Kopano Labs as a systems studio for edge-aware infrastructure, auditable agent runtimes, and products grounded in South African operating constraints.",
  "The work connects software, local telemetry, and operator workflows instead of stopping at aesthetic interfaces or prompt-only demonstrations.",
];

export const homeQuote =
  "Technology becomes credible when its claims can be tested against state, telemetry, and physical constraints.";

export const studioNotes = [
  "Sovereign by design",
  "Secure by default",
  "Built for scale",
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
      href: "https://github.com/Kopano-Labs/Bookit-5s-Arena",
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
      href: "https://kasilink.com",
      label: "Visit live platform",
    },
    secondaryLink: {
      href: "https://github.com/Kopano-Labs/KasiLink",
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
    deliveryLabel: "Live",
    category: "Identity & Data Layer",
    stack: ["Go", "gRPC", "Kafka", "CockroachDB"],
    image: "/project-banners/mcp-banner.svg",
    imageAlt: "Kopano Context project banner",
    primaryLink: {
      href: "https://github.com/RobynAwesome/Introduction-to-MCP",
      label: "View GitHub",
    },
  },
];

export const studioPrinciples = [
  {
    title: "Physical Constraints",
    body: "Design for load-shedding, uneven connectivity, local hosting, and sensor-visible operating conditions from the first decision.",
  },
  {
    title: "Formal Boundaries",
    body: "Treat memory, workflow, data residency, tool access, and operator control as explicit system boundaries rather than prompt text.",
  },
  {
    title: "Verification First",
    body: "Separate shipped proof from research tracks and require tests, logs, or hardware traces before escalating claims.",
  },
];
