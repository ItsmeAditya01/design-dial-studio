import { useEffect, useState } from "react";

const destinations = [
  { id: "hero", number: "01", label: "Home" },
  { id: "work", number: "02", label: "Work" },
  { id: "services", number: "03", label: "Services" },
  { id: "contact", number: "04", label: "Contact" },
  { id: "footer", number: "05", label: "End" },
];

export function RotaryDial() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = destinations.map((item) => document.getElementById(item.id)).filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(Math.max(0, sections.indexOf(visible.target as HTMLElement)));
    }, { threshold: [0.12, 0.3, 0.55], rootMargin: "-20% 0px -45% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="rotary" aria-label="Page sections">
      <div className="rotary-track" aria-hidden="true" />
      <div className="rotary-hand" style={{ transform: `translate(-50%, -100%) rotate(${active * 72}deg)` }} aria-hidden="true"><span /></div>
      <span className="rotary-center" aria-hidden="true" />
      {destinations.map((item, index) => {
        const angle = (index * 72 - 90) * Math.PI / 180;
        return <button key={item.id} aria-label={`Go to ${item.label}`} aria-current={active === index ? "location" : undefined} className="rotary-marker focus-ring" style={{ left: `${50 + Math.cos(angle) * 42}%`, top: `${50 + Math.sin(angle) * 42}%` }} onClick={() => { setActive(index); document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" }); }}>{item.number}</button>;
      })}
    </nav>
  );
}