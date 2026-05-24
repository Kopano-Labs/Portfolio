import { motion } from "framer-motion";
import { ArrowUpRight, Disc3, Link2, Music4, RadioTower, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { amaPhuSignals } from "../data/journeyContent";

const curatedLinks = [
  {
    label: "Ama-Phu link hub",
    href: "https://linktr.ee/amaphu.ent",
    note: "External linktree backup with the full public routing set.",
  },
  {
    label: "osheen_views",
    href: "https://linktr.ee/osheen_views",
    note: "Creator-facing branch connected to the same ecosystem.",
  },
  {
    label: "Apple Music artist page",
    href: "https://music.apple.com/us/artist/ama-phu/1656490480",
    note: "Streaming profile for Ama_Phu.",
  },
  {
    label: "5's Arena about",
    href: "https://fivesarena.com/about",
    note: "Public product crossover and developer attribution.",
  },
];

const musicEmbeds = [
  {
    title: "Ama_Phu artist player",
    src: "https://embed.music.apple.com/us/artist/ama-phu/1656490480",
    height: 450,
  },
  {
    title: "Burning the Midnight Oil",
    src: "https://embed.music.apple.com/au/album/burning-the-midnight-oil/1656494537",
    height: 450,
  },
];

export default function AmaPhuEntertainmentPage() {
  return (
    <main className="brand-page overflow-hidden pb-24 pt-28">
      <section className="relative overflow-hidden border-b border-[rgba(208,133,77,0.12)] pb-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(208,133,77,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(118,143,92,0.1),transparent_28%)]" />
        <div className="brand-topography absolute inset-0 opacity-35" />
        <div className="brand-grid absolute inset-0 opacity-28" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="brand-kicker">Dedicated Page</p>
              <h1 className="mt-4 text-[3rem] font-semibold leading-[0.94] tracking-[-0.05em] text-[var(--brand-text)] sm:text-[4.6rem]">
                Ama-Phu Entertainment sits inside the portfolio as a real ecosystem lane, not an
                afterthought.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--brand-soft-text)] sm:text-lg">
                This page maps the public footprint that already exists across music distribution,
                creator routing, and the wider Ama_Phu / 5&apos;s Arena delivery ecosystem. It
                stays evidence-first and avoids invented claims.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#listen"
                  className="brand-button-copper inline-flex items-center justify-center gap-3 rounded-[12px] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em]"
                >
                  Play the music here
                  <ArrowUpRight size={16} />
                </a>
                <Link
                  to="/roadmap"
                  className="brand-button-olive inline-flex items-center justify-center gap-3 rounded-[12px] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em]"
                >
                  View journey roadmap
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="brand-panel rounded-[28px] p-6"
            >
              <div className="flex min-h-[240px] flex-col justify-between rounded-[22px] border border-[rgba(42,174,141,0.2)] bg-[radial-gradient(circle_at_25%_20%,rgba(42,174,141,0.16),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(32,84,159,0.14),transparent_30%),rgba(7,9,9,0.76)] p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(208,133,77,0.22)] text-[var(--brand-accent-soft)]">
                  <Music4 size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--brand-olive)]">
                    Public footprint
                  </p>
                  <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--brand-text)]">
                    Label, creator, and product surfaces mapped together.
                  </p>
                </div>
                <div className="grid gap-3 text-sm text-[var(--brand-soft-text)]">
                  <div className="flex items-center gap-3">
                    <Link2 size={16} className="text-[var(--brand-olive)]" />
                    Link routing and public discovery
                  </div>
                  <div className="flex items-center gap-3">
                    <Disc3 size={16} className="text-[var(--brand-accent-soft)]" />
                    Streaming and release visibility
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioTower size={16} className="text-[var(--brand-olive)]" />
                    Cross-domain delivery with the 5&apos;s Arena stack
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="listen"
        className="scroll-mt-32 border-b border-[rgba(208,133,77,0.12)] py-16 sm:scroll-mt-36 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 max-w-3xl">
            <p className="brand-kicker">Stay Here</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--brand-text)] sm:text-4xl">
              Visitors can inspect the link network and play the music without leaving the portfolio.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--brand-soft-text)]">
              The page now reproduces the useful parts of the link tree inside the portfolio and
              adds embedded Apple Music players so the Ama-Phu surface feels native to your site
              instead of acting like a redirect page.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
            <div className="brand-panel rounded-[24px] p-6">
              <p className="brand-kicker">Curated Links</p>
              <div className="mt-5 space-y-4">
                {curatedLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-[18px] border border-[rgba(234,223,207,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-4 transition-colors hover:border-[rgba(208,133,77,0.24)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-base font-semibold text-[var(--brand-text)]">{item.label}</p>
                        <p className="mt-2 text-sm leading-6 text-[var(--brand-soft-text)]">
                          {item.note}
                        </p>
                      </div>
                      <ArrowUpRight size={15} className="mt-1 flex-shrink-0 text-[var(--brand-olive)]" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              {musicEmbeds.map((embed) => (
                <div key={embed.title} className="brand-panel rounded-[24px] p-4 sm:p-5">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-olive)]">
                    {embed.title}
                  </p>
                  <div className="overflow-hidden rounded-[18px] border border-[rgba(234,223,207,0.08)] bg-[rgba(255,255,255,0.03)]">
                    <iframe
                      title={embed.title}
                      allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                      frameBorder="0"
                      height={embed.height}
                      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                      src={embed.src}
                      className="w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(208,133,77,0.12)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 max-w-3xl">
            <p className="brand-kicker">Why This Page Exists</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--brand-text)] sm:text-4xl">
              The entertainment work needed its own public page.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--brand-soft-text)]">
              The older portfolio compressed Ama-Phu into one line beside 5&apos;s Arena. That made
              the work look vague. This page separates the label footprint, the creator footprint,
              and the product crossover so the public graph is easier to inspect.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {amaPhuSignals.map((signal, index) => (
              <motion.article
                key={signal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="brand-panel rounded-[24px] p-6"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(208,133,77,0.16)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-olive)]">
                  <Sparkles size={14} />
                  Signal
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[var(--brand-text)]">
                  {signal.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--brand-soft-text)]">
                  {signal.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {signal.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-[10px] border border-[rgba(208,133,77,0.18)] px-4 py-2.5 text-sm font-semibold text-[var(--brand-text)] transition-colors hover:bg-[rgba(208,133,77,0.12)]"
                    >
                      {link.label}
                      <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="brand-panel brand-topography rounded-[24px] p-8 sm:p-10"
          >
            <div className="max-w-3xl">
              <p className="brand-kicker">Portfolio Positioning</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--brand-text)] sm:text-4xl">
                Ama-Phu now reads as part of the same execution pattern: public presence, product
                depth, and ecosystem thinking.
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--brand-soft-text)]">
                The point is not to make the creative side look like a software feature. The point
                is to show that the same portfolio can carry label discovery, creator identity,
                venue product delivery, and engineering proof without blurring what is live versus
                what is simply being explored.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://linktr.ee/osheen_views"
                target="_blank"
                rel="noopener noreferrer"
                className="brand-button-copper inline-flex items-center justify-center gap-3 rounded-[12px] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em]"
              >
                Open osheen_views
                <ArrowUpRight size={16} />
              </a>
              <a
                href="https://fivesarena.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="brand-button-olive inline-flex items-center justify-center gap-3 rounded-[12px] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em]"
              >
                View 5&apos;s Arena about
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
