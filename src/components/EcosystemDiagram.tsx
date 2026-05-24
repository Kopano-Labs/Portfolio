import { motion } from "framer-motion";
import { Link2, Music4, Orbit, Radar, ServerCog, Trophy } from "lucide-react";
import { useThemeMode } from "./theme/ThemeModeProvider";

const ecosystemNodes = [
  {
    title: "Kopano Labs",
    body: "Studio strategy, delivery discipline, and system architecture.",
    icon: ServerCog,
    position: "left-6 top-10 sm:left-10 sm:top-12",
  },
  {
    title: "Ama-Phu",
    body: "Creative lane with link discovery, music, and client crossover.",
    icon: Music4,
    position: "right-6 top-16 sm:right-10 sm:top-14",
  },
  {
    title: "Bookit 5s",
    body: "Live venue operations and booking proof.",
    icon: Trophy,
    position: "left-10 bottom-12 sm:left-16 sm:bottom-14",
  },
  {
    title: "Public Graph",
    body: "Portfolio, GitHub, LinkedIn, roadmap, and verified links.",
    icon: Link2,
    position: "right-8 bottom-10 sm:right-14 sm:bottom-12",
  },
];

export default function EcosystemDiagram() {
  const { isReadMode, isCrazyMode } = useThemeMode();

  return (
    <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
      <div className="space-y-4">
        <p className="brand-kicker">System Map</p>
        <h3 className="text-3xl font-semibold tracking-[-0.05em] text-[var(--brand-text)] sm:text-4xl">
          A 3D read of how the portfolio lanes actually connect.
        </h3>
        <p className="max-w-xl text-base leading-7 text-[var(--brand-soft-text)]">
          This is not decoration. It shows how studio delivery, public proof, creative work, and
          the learning path reinforce each other instead of sitting as isolated portfolio tabs.
        </p>
        <div className="grid gap-3">
          {[
            "Kopano Context stays at the core because it explains the systems thesis.",
            "Ama-Phu, Bookit, and the public profile graph sit around that core as visible product lanes.",
            "Read mode flattens motion. Crazy mode increases color and orbital energy without changing the information.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[18px] border border-[var(--brand-line)] bg-[var(--brand-surface-soft)] px-4 py-4 text-sm leading-6 text-[var(--brand-soft-text)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mode-orbit-shell rounded-[28px] border border-[var(--brand-line)] p-4 sm:p-6"
      >
        <div className={`mode-orbit-stage relative min-h-[420px] overflow-hidden rounded-[24px] ${isReadMode ? "mode-orbit-stage--read" : ""}`}>
          {!isReadMode && <div className="mode-orbit-haze absolute inset-0" />}
          <motion.div
            animate={
              isReadMode
                ? {}
                : {
                    rotate: isCrazyMode ? 360 : 180,
                  }
            }
            transition={
              isReadMode
                ? undefined
                : {
                    duration: isCrazyMode ? 18 : 28,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
            className="mode-orbit-ring absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          />
          <motion.div
            animate={
              isReadMode
                ? {}
                : {
                    rotate: isCrazyMode ? -360 : -180,
                  }
            }
            transition={
              isReadMode
                ? undefined
                : {
                    duration: isCrazyMode ? 14 : 22,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
            className="mode-orbit-ring mode-orbit-ring--inner absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          />

          <motion.div
            animate={
              isReadMode
                ? {}
                : {
                    y: [0, -8, 0],
                    rotateX: [0, 6, 0],
                    rotateY: [0, -8, 0],
                  }
            }
            transition={
              isReadMode
                ? undefined
                : {
                    duration: isCrazyMode ? 4.5 : 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            className="mode-core-card absolute left-1/2 top-1/2 z-20 flex w-[250px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-[22px] border border-[var(--brand-line)] p-5 text-center"
          >
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--brand-line)] text-[var(--brand-accent-soft)]">
              <Orbit size={20} />
            </div>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-olive)]">
              Core Thesis
            </p>
            <h4 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--brand-text)]">
              Kopano Context
            </h4>
            <p className="mt-3 text-sm leading-6 text-[var(--brand-soft-text)]">
              Multi-agent infrastructure, audit logic, and product memory as the portfolio core.
            </p>
          </motion.div>

          {ecosystemNodes.map((node, index) => {
            const Icon = node.icon;

            return (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                animate={
                  isReadMode
                    ? {}
                    : {
                        y: index % 2 === 0 ? [0, -6, 0] : [0, 6, 0],
                      }
                }
                className={`mode-node-card absolute z-10 w-[180px] rounded-[20px] border border-[var(--brand-line)] p-4 sm:w-[190px] ${node.position}`}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--brand-line)] text-[var(--brand-accent-soft)]">
                  <Icon size={18} />
                </div>
                <h5 className="mt-4 text-lg font-semibold text-[var(--brand-text)]">{node.title}</h5>
                <p className="mt-2 text-sm leading-6 text-[var(--brand-soft-text)]">{node.body}</p>
              </motion.div>
            );
          })}

          <div className="mode-orbit-tag absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-[var(--brand-line)] bg-[var(--brand-surface-soft)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-muted)]">
            <Radar size={14} />
            Functional 3D diagram
          </div>
        </div>
      </motion.div>
    </div>
  );
}
