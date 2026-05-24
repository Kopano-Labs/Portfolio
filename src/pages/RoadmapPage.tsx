import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  FlaskConical,
  LoaderCircle,
  Milestone,
  Orbit,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  digitalProfileGroups,
  journeyMilestones,
  type JourneyStatus,
} from "../data/journeyContent";
import { roadmapTracks, upcomingProject } from "../data/portfolioContent";

const STATUS_STYLES = {
  Shipped: {
    icon: CheckCircle2,
    className: "border-[#00e89d]/30 bg-[#00e89d]/10 text-[#00e89d]",
  },
  "In Progress": {
    icon: LoaderCircle,
    className: "border-[#0ea5e9]/30 bg-[#0ea5e9]/10 text-[#0ea5e9]",
  },
  Queued: {
    icon: Clock3,
    className: "border-white/10 bg-white/5 text-gray-300",
  },
  Research: {
    icon: FlaskConical,
    className: "border-[#a855f7]/30 bg-[#a855f7]/10 text-[#c084fc]",
  },
} as const;

const MILESTONE_STYLES: Record<
  JourneyStatus,
  { className: string; icon: typeof Milestone }
> = {
  Foundation: {
    icon: Milestone,
    className: "border-[rgba(208,133,77,0.22)] bg-[rgba(208,133,77,0.1)] text-[#f4b577]",
  },
  Active: {
    icon: Orbit,
    className: "border-[#0ea5e9]/30 bg-[#0ea5e9]/10 text-[#38bdf8]",
  },
  Verified: {
    icon: CheckCircle2,
    className: "border-[#00e89d]/30 bg-[#00e89d]/10 text-[#00e89d]",
  },
  Exploring: {
    icon: FlaskConical,
    className: "border-[#a855f7]/30 bg-[#a855f7]/10 text-[#c084fc]",
  },
};

function StatusBadge({ status }: { status: keyof typeof STATUS_STYLES }) {
  const config = STATUS_STYLES[status];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${config.className}`}
    >
      <Icon size={12} />
      {status}
    </span>
  );
}

function JourneyBadge({ status }: { status: JourneyStatus }) {
  const config = MILESTONE_STYLES[status];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${config.className}`}
    >
      <Icon size={12} />
      {status}
    </span>
  );
}

export default function RoadmapPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#060d18] pt-28 pb-24">
      <section className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#00e89d]">
            Journey Roadmap
          </p>
          <h1 className="mb-5 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            One page for the public graph: experience, links, study path, and what is actually
            live.
          </h1>
          <p className="text-base leading-8 text-gray-300 sm:text-lg">
            This page now carries the journey instead of only a 2026 working board. It separates
            verified public surfaces, active work, and future research so the portfolio reads like
            a coherent timeline rather than scattered proof.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/ama-phu-entertainment"
              className="inline-flex items-center gap-2 rounded-[10px] border border-[#00e89d]/30 bg-[#00e89d]/10 px-4 py-2.5 text-sm font-semibold text-[#00e89d] transition-colors hover:bg-[#00e89d]/15"
            >
              Ama-Phu page
              <ArrowUpRight size={14} />
            </Link>
            <a
              href="https://KRRababalela.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#00e89d]/40 hover:text-[#00e89d]"
            >
              Live portfolio
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-6 sm:px-8 lg:px-16">
        <div className="grid gap-5 lg:grid-cols-2">
          {journeyMilestones.map((item, index) => (
            <motion.article
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="rounded-[24px] border border-white/8 bg-[#0b1426]/80 p-6 shadow-xl shadow-black/20"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-[#f4b577]">
                    {item.year}
                  </p>
                  <h2 className="text-2xl font-black text-white">{item.title}</h2>
                </div>
                <JourneyBadge status={item.status} />
              </div>
              <p className="mt-4 text-sm leading-7 text-gray-300">{item.detail}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-[10px] border border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#00e89d]/40 hover:text-[#00e89d]"
                  >
                    {link.label}
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-6 sm:px-8 lg:px-16">
        <div className="rounded-[24px] border border-white/8 bg-[#0b1426]/80 p-6 shadow-2xl shadow-black/30 sm:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-[#0ea5e9]">
              Digital Profile
            </p>
            <h2 className="text-2xl font-black text-white sm:text-3xl">
              All major public surfaces grouped by role instead of buried in different pages.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {digitalProfileGroups.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="rounded-[22px] border border-white/8 bg-white/[0.03] p-5"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-[#0ea5e9]/20 bg-[#0ea5e9]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7dd3fc]">
                  <Sparkles size={12} />
                  Group
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-300">{group.summary}</p>
                <div className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-2xl border border-white/8 bg-[#09111f] px-4 py-4 transition-colors hover:border-[#00e89d]/25"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-white">{item.label}</p>
                          <p className="mt-1 text-sm leading-6 text-gray-400">{item.note}</p>
                        </div>
                        <ArrowUpRight size={15} className="mt-1 flex-shrink-0 text-[#00e89d]" />
                      </div>
                    </a>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-6 sm:px-8 lg:px-16">
        <div className="rounded-[24px] border border-white/8 bg-[#0b1426]/80 p-6 shadow-2xl shadow-black/30 sm:p-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-[#f97316]">
                Upcoming Build
              </p>
              <h2 className="text-2xl font-black text-white">{upcomingProject.title}</h2>
            </div>
            <span className="rounded-full border border-[#f97316]/30 bg-[#f97316]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f97316]">
              Upcoming
            </span>
          </div>
          <p className="max-w-3xl text-sm leading-7 text-gray-300 sm:text-base">
            {upcomingProject.summary}
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-gray-300 md:grid-cols-2">
            {upcomingProject.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 leading-6"
              >
                {highlight}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            {upcomingProject.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[8px] border border-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#00e89d]/40 hover:text-[#00e89d]"
              >
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-6 sm:px-8 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {roadmapTracks.map((track, index) => (
            <motion.article
              key={track.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[24px] border border-white/8 bg-[#0b1426]/80 p-6 shadow-xl shadow-black/20"
            >
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-[#0ea5e9]">
                Track
              </p>
              <h2 className="text-2xl font-black text-white">{track.title}</h2>
              <p className="mt-3 text-sm leading-7 text-gray-300">{track.summary}</p>
              <div className="mt-6 space-y-4">
                {track.items.map((item) => (
                  <div
                    key={`${track.title}-${item.title}`}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="max-w-xl">
                        <h3 className="text-base font-bold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-300">{item.detail}</p>
                      </div>
                      <StatusBadge status={item.status} />
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.18em] text-gray-500">
                      {item.when}
                    </p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
