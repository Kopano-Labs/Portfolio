import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { ecosystemLinks, studioLinks } from "../data/siteContent";

const footerLinks = [
  { href: studioLinks.github, label: "GitHub", icon: Github },
  { href: studioLinks.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: studioLinks.email, label: "Email", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(208,133,77,0.12)] bg-[#070909] pb-28 pt-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-8 rounded-[24px] border border-[rgba(208,133,77,0.12)] bg-[rgba(255,255,255,0.02)] p-5 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="brand-kicker">Ecosystem</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--brand-text)]">
                One graph. Clear public lanes.
              </h3>
              <p className="mt-3 max-w-2xl text-sm normal-case tracking-normal text-[var(--brand-soft-text)]">
                Portfolio, studio, work network, arena, blog, game, and music should route like one
                ecosystem. Kopano Context stays visible, but truthfully marked as a reserved domain
                until the public runtime is owner-proven.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {ecosystemLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[18px] border border-[rgba(208,133,77,0.12)] bg-[rgba(255,255,255,0.02)] px-4 py-4 no-underline transition-colors hover:border-[rgba(208,133,77,0.24)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-text)]">
                    {item.label}
                  </p>
                  <span
                    className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                      item.status === "Reserved"
                        ? "bg-[rgba(122,152,102,0.12)] text-[var(--brand-olive)]"
                        : "bg-[rgba(208,133,77,0.12)] text-[var(--brand-accent-soft)]"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="mt-3 text-sm normal-case leading-6 tracking-normal text-[var(--brand-muted)]">
                  {item.note}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-olive)]">
                  Open
                  <ExternalLink size={12} />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 text-[12px] uppercase tracking-[0.2em] text-[var(--brand-muted)] lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
          <img
            src="/kopano-labs-logo.png"
            alt="Kopano Labs"
            className="h-10 w-auto object-contain"
          />
          <p>&copy; 2026 Kopano Labs (Pty) Ltd.</p>
          <p className="tracking-[0.16em] text-[var(--brand-soft-text)]">All rights reserved.</p>
        </div>

        <div className="space-y-2 text-[var(--brand-soft-text)]">
          <p>Cape Town, South Africa</p>
          <p className="normal-case tracking-normal text-[var(--brand-muted)]">rkholofelo@gmail.com</p>
        </div>

          <div className="flex items-center gap-4">
            {footerLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-[rgba(234,223,207,0.1)] text-[var(--brand-olive)] transition-colors hover:border-[rgba(208,133,77,0.28)] hover:text-[var(--brand-text)]"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
