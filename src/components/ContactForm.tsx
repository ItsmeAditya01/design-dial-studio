import { useEffect, useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className={`contact-drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <button className="drawer-scrim" tabIndex={open ? 0 : -1} aria-label="Close contact form" onClick={onClose} />
      <div className="drawer-panel" role="dialog" aria-modal="true" aria-labelledby="contact-form-title">
        <div className="flex items-start justify-between gap-6">
          <div><p className="meta">New enquiry</p><h2 id="contact-form-title" className="drawer-title">Start a project.</h2></div>
          <Button variant="icon" aria-label="Close contact form" onClick={onClose}><X size={22} /></Button>
        </div>
        {sent ? (
          <div className="flex flex-1 flex-col justify-center"><p className="meta text-accent">Enquiry received</p><p className="mt-4 max-w-md text-2xl leading-tight">Thank you. We’ll review your project and get back to you shortly.</p><Button variant="outline" className="mt-8 self-start" onClick={() => { setSent(false); onClose(); }}>Close</Button></div>
        ) : (
          <form className="contact-form" onSubmit={submit}>
            <label>Name<input required name="name" autoComplete="name" /></label>
            <label>Company<input name="company" autoComplete="organization" /></label>
            <label>Email<input required type="email" name="email" autoComplete="email" /></label>
            <label>Project type<select required name="projectType" defaultValue=""><option value="" disabled>Select a service</option><option>Exhibition Design</option><option>Packaging Design</option><option>Brand Identity</option><option>Flex / Large-Format Graphics</option><option>Other</option></select></label>
            <label className="md:col-span-2">Message<textarea required name="message" rows={4} /></label>
            <Button type="submit" className="justify-self-start">Send enquiry →</Button>
          </form>
        )}
      </div>
    </div>
  );
}