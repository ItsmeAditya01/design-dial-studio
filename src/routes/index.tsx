import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { RotaryDial } from "@/components/RotaryDial";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio / Form — Spaces, Brands & Experiences" },
      { name: "description", content: "A multidisciplinary Ahmedabad design studio creating exhibition environments, packaging, identities and large-format graphics." },
      { property: "og:title", content: "Studio / Form — Spaces, Brands & Experiences" },
      { property: "og:description", content: "Exhibition environments, packaging, visual identities and large-format graphics designed to make brands stand out." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <Navigation onContact={() => setContactOpen(true)} />
      <main><Hero onContact={() => setContactOpen(true)} /><ProjectGrid /><Services /><Contact onContact={() => setContactOpen(true)} /></main>
      <Footer />
      <RotaryDial />
      <ContactForm open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
