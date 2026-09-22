import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export function Contact({ onContact }: { onContact: () => void }) {
  return (
    <section id="contact" className="contact-section section-shell" aria-labelledby="contact-title">
      <div className="site-grid">
        <Reveal className="col-span-4 md:col-span-11"><p className="meta">Your next project</p><h2 id="contact-title" className="contact-title">Have a project<br />in mind?</h2></Reveal>
        <Reveal className="col-span-4 mt-10 md:col-span-5 md:col-start-7" delay={100}><p className="contact-subtitle">Let's make something worth noticing.</p><Button variant="outline" className="mt-7" onClick={onContact}>Start a project →</Button></Reveal>
        <Reveal className="col-span-4 mt-20 md:col-span-8 md:mt-28"><a className="email-link focus-ring" href="mailto:hello@studio.com">hello@studio.com</a></Reveal>
      </div>
    </section>
  );
}