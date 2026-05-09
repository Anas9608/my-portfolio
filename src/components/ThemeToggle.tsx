import { Moon, Sun } from "lucide-react";

type Props = {
  theme: string;
  toggleTheme: () => void;
};
export default function ThemeToggle({ theme, toggleTheme }: Props) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 text-slate-700 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
