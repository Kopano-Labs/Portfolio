import { BookOpenText, MoonStar, Palette, SunMedium } from "lucide-react";
import { useThemeMode, type ThemeMode } from "./theme/ThemeModeProvider";

const modeOptions: {
  mode: ThemeMode;
  label: string;
  short: string;
  icon: typeof MoonStar;
}[] = [
  { mode: "dark", label: "Dark", short: "D", icon: MoonStar },
  { mode: "light", label: "Light", short: "L", icon: SunMedium },
  { mode: "crazy", label: "Crazy", short: "C", icon: Palette },
  { mode: "read", label: "Read", short: "R", icon: BookOpenText },
];

export default function ModeSwitcher({ compact = false }: { compact?: boolean }) {
  const { mode, setMode } = useThemeMode();

  return (
    <div
      className={`mode-switcher inline-flex items-center gap-1 rounded-[14px] border border-[var(--brand-line)] bg-[var(--mode-switcher-bg)] p-1 ${
        compact ? "w-full justify-between" : ""
      }`}
      aria-label="Display mode switcher"
    >
      {modeOptions.map((option) => {
        const Icon = option.icon;
        const active = mode === option.mode;

        return (
          <button
            key={option.mode}
            type="button"
            onClick={() => setMode(option.mode)}
            aria-pressed={active}
            className={`mode-switcher__button inline-flex items-center justify-center gap-2 rounded-[10px] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
              active
                ? "bg-[var(--mode-switcher-active-bg)] text-[var(--mode-switcher-active-text)]"
                : "text-[var(--brand-muted)] hover:text-[var(--brand-text)]"
            } ${compact ? "flex-1" : ""}`}
          >
            <Icon size={14} />
            <span>{compact ? option.short : option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
