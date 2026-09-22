import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Work", id: "work" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navigation({ onContact }: { onContact: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-nav ${scrolled || open ? "is-scrolled" : ""}`}>
      <div className="site-grid items-center">
        <button className="focus-ring brand col-span-2 text-left md:col-span-3" onClick={() => scrollTo("hero")} aria-label="Go to top">STUDIO / FORM</button>
        <nav className="col-span-5 hidden items-center justify-end gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => <button className="nav-link focus-ring" key={link.id} onClick={() => scrollTo(link.id)}>{link.label}</button>)}
        </nav>
        <button className="focus-ring col-span-3 hidden justify-self-end text-xs font-semibold uppercase md:block" onClick={onContact}>Start a project <span aria-hidden="true">→</span></button>
        <Button variant="ghost" className="col-start-4 justify-self-end md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : "Menu"}</Button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav className="flex h-full flex-col justify-end gap-2 pb-12" aria-label="Mobile navigation">
          {links.map((link, index) => <button tabIndex={open ? 0 : -1} className="focus-ring mobile-link" key={link.id} onClick={() => { scrollTo(link.id); setOpen(false); }}><span>0{index + 2}</span>{link.label}</button>)}
          <button tabIndex={open ? 0 : -1} className="focus-ring mt-8 min-h-12 self-start border-b border-current text-sm font-semibold uppercase" onClick={() => { setOpen(false); onContact(); }}>Start a project →</button>
        </nav>
      </div>
    </header>
  );
}