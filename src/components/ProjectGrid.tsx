import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { projects, type ProjectCategory } from "@/data/studio";
import { Reveal } from "@/components/Reveal";

const filters: ("All" | ProjectCategory)[] = ["All", "Exhibitions", "Packaging", "Identity", "Flex / Graphics"];

export function ProjectGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = filter === "All" ? projects : projects.filter((project) => project.category === filter);
  return (
    <section id="work" className="work-section section-shell" aria-labelledby="work-title">
      <div className="site-grid items-end">
        <Reveal className="col-span-4 md:col-span-7"><p className="meta">Selected work / 2024—26</p><h2 id="work-title" className="section-title">Work, in context.</h2></Reveal>
        <div className="filter-list col-span-4 mt-8 md:col-span-5 md:mt-0" aria-label="Filter projects">
          {filters.map((item) => <button key={item} aria-pressed={filter === item} className="focus-ring filter-button" onClick={() => setFilter(item)}>{item}</button>)}
        </div>
      </div>
      <div className="projects-grid site-grid mt-16 md:mt-24">
        {shown.map((project, index) => (
          <Reveal key={project.id} className={project.layout} delay={(index % 3) * 90}>
            <Link to="/work/$projectId" params={{ projectId: project.id }} preload="intent" className="project-card focus-ring group">
              <div className="project-image-wrap"><img src={project.thumbnail} width={project.category === "Packaging" ? 1200 : 1600} height={project.category === "Packaging" ? 1504 : 1072} loading="lazy" style={{ objectPosition: project.imagePosition }} alt={`${project.title} — ${project.category} project`} /></div>
              <div className="project-meta"><h3>{project.title}</h3><p>{project.category} · {project.year}</p><span aria-hidden="true">↗</span></div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}