import { services } from "@/data/studio";
import { Reveal } from "@/components/Reveal";

export function Services() {
  return (
    <section id="services" className="services-section section-shell" aria-labelledby="services-title">
      <div className="site-grid"><Reveal className="col-span-4 md:col-span-8"><p className="meta">What we offer / 04 disciplines</p><h2 id="services-title" className="section-title">From surface<br />to space.</h2></Reveal></div>
      <div className="service-list mt-16 md:mt-24">
        {services.map((service, index) => (
          <Reveal key={service.number} delay={index * 70}>
            <article className="service-row group site-grid" tabIndex={0}>
              <p className="service-number col-span-1">{service.number}</p>
              <div className="col-span-3 md:col-span-5"><h3 className="service-title">{service.title}</h3><p className="service-keywords">{service.keywords.join(" / ")}</p></div>
              <p className="service-description col-span-4 mt-6 md:col-span-4 md:mt-0">{service.description}</p>
              <div className="service-preview col-span-2 hidden md:block"><img src={service.image} loading="lazy" width={320} height={200} alt="" /></div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}