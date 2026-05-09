import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

type Props = {
  theme: string;
  toggleTheme: () => void;
};

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-950/80">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:px-10">
        <a
          href="#home"
          onClick={closeMenu}
          className="font-mono text-sm font-semibold tracking-[0.2em] text-teal-700 transition hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 dark:text-accent dark:focus-visible:ring-accent/40"
        >
          MoAnas
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="group text-sm text-slate-600 transition-colors duration-200 hover:text-teal-700 focus:outline-none focus-visible:text-teal-700 dark:text-slate-400 dark:hover:text-accent dark:focus-visible:text-accent"
            >
              <span className="mr-2 font-mono text-teal-700 dark:text-accent">
                0{index + 1}.
              </span>
              <span className="relative">
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-teal-700 transition-all duration-200 group-hover:w-full dark:bg-accent" />
              </span>
            </a>
          ))}

          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-teal-700 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 dark:border-slate-800 dark:text-slate-200 dark:hover:border-accent dark:hover:text-accent dark:focus-visible:ring-accent/40"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-200 bg-white/95 transition-all duration-300 dark:border-slate-800 dark:bg-slate-950/95 md:hidden ${
          open
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-5">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-3 font-mono text-sm text-slate-700 transition hover:bg-slate-100 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-accent dark:focus-visible:ring-accent/40"
              onClick={closeMenu}
            >
              <span className="mr-2 text-teal-700 dark:text-accent">
                0{index + 1}.
              </span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
