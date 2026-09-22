import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects } from "@/data/studio";

export const Route = createFileRoute("/work/$projectId")({
  loader: ({ params }) => {
    const project = projects.find((item) => item.id === params.projectId);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} — Studio / Form` : "Project not found — Studio / Form" },
      { name: "description", content: loaderData?.description ?? "Studio / Form project case study." },
      { property: "og:title", content: loaderData ? `${loaderData.title} — Studio / Form` : "Project — Studio / Form" },
      { property: "og:description", content: loaderData?.description ?? "Studio / Form project case study." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const project = Route.useLoaderData();
  const index = projects.findIndex((item) => item.id === project.id);
  const next = projects[(index + 1) % projects.length];
  if (!next) return null;
  return (
    <main className="project-page">
      <header className="project-page-nav site-grid"><Link to="/" className="brand col-span-2">STUDIO / FORM</Link><Link to="/" hash="work" className="col-span-2 justify-self-end text-xs font-semibold uppercase md:col-span-3 md:col-start-10">Close project ×</Link></header>
      <section className="project-intro section-shell site-grid">
        <p className="meta col-span-4 md:col-span-3">{project.category} / {project.year}</p>
        <h1 className="project-page-title col-span-4 mt-10 md:col-span-10">{project.title}</h1>
        <dl className="project-facts col-span-4 mt-12 md:col-span-4"><div><dt>Client</dt><dd>{project.client}</dd></div><div><dt>Discipline</dt><dd>{project.category}</dd></div><div><dt>Year</dt><dd>{project.year}</dd></div></dl>
        <p className="col-span-4 mt-12 text-xl leading-snug md:col-span-5 md:col-start-7">{project.description}</p>
      </section>
      <div className="project-hero"><img src={project.heroImage} width={1600} height={1072} alt={`${project.title} hero`} /></div>
      <section className="project-details section-shell site-grid"><p className="meta col-span-4 md:col-span-3">Design details</p><p className="col-span-4 mt-8 text-2xl leading-snug md:col-span-6 md:col-start-5 md:mt-0">A clear system of proportion, material and graphic rhythm brings every touchpoint into one coherent experience.</p></section>
      <section className="project-gallery site-grid pb-24 md:pb-36">{project.gallery.map((image, imageIndex) => <div className={imageIndex === 0 ? "col-span-4 md:col-span-7" : "col-span-4 mt-6 md:col-span-5 md:mt-32"} key={image}><img src={image} loading="lazy" width={1408} height={1408} alt={`${project.title} detail ${imageIndex + 1}`} /></div>)}</section>
      <Link to="/work/$projectId" params={{ projectId: next.id }} className="next-project site-grid"><span className="meta col-span-4">Next project</span><span className="next-title col-span-4 md:col-span-10">{next.title} →</span></Link>
    </main>
  );
}