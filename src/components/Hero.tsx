import { Button } from "@/components/ui/button";
import heroImage from "@/assets/exhibition.jpg";

export function Hero({ onContact }: { onContact: () => void }) {
  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true"><img src={heroImage} width={1600} height={1072} alt="" /></div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="site-grid relative z-10 h-full content-end pb-10 pt-32 md:pb-14">
        <p className="hero-kicker col-span-3 md:col-span-4">Spaces → Identities →<br />Packaging → Visual communication</p>
        <h1 id="hero-title" className="hero-title col-span-4 md:col-span-11">We design spaces,<br />brands &amp; experiences.</h1>
        <p className="hero-copy col-span-4 mt-7 md:col-span-5 md:col-start-7">Exhibition environments, packaging, visual identities and large-format graphics designed to make brands stand out.</p>
        <div className="col-span-4 mt-7 flex flex-wrap gap-3 md:col-span-6 md:col-start-7">
          <Button onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}>View selected work →</Button>
          <Button variant="outline" onClick={onContact}>Start a project →</Button>
        </div>
      </div>
    </section>
  );
}