import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-8 pt-4">
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-4 rounded-full bg-background/70 backdrop-blur-md border border-border/50 px-4 py-3 shadow-sm">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-brand grid place-items-center text-white font-display font-bold">A</div>
          <span className="font-display font-bold text-lg text-ink">Abisheak</span>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-5 py-2.5 text-sm font-semibold hover:bg-ink/90 transition-all hover:-translate-y-0.5"
          >
            View Resume <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
          >
            Get In Touch
          </a>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden mx-auto max-w-7xl mt-2 rounded-2xl bg-card p-4 shadow-lg border border-border">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 font-medium">{l.label}</a>
            ))}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-white px-5 py-3 text-sm font-semibold">
              View Resume <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
