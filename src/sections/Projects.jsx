import { useMemo, useState } from "react";

const projects = [
  {
    title: "Passa a Bola (Challenge)",
    desc: "Projeto React desenvolvido para a disciplina da FIAP. Foco em futebol feminino.",
    stack: ["React", "Tailwind", "Vite"],
    link: "#", // coloque a demo quando tiver
    repo: "https://github.com/gaga190608" // substitua pelo repo específico quando publicar
  },
  {
    title: "Bot Lucinda (Psicologia & IA)",
    desc: "Chatbot de apoio emocional. Foco em acessibilidade e escuta empática.",
    stack: ["Node", "IA"],
    link: "#",
    repo: "https://github.com/gaga190608"
  },
];

function ProjectCard({ p }) {
  return (
    <article className="card card-hover p-5 flex flex-col transition-transform hover:-translate-y-0.5 focus-within:-translate-y-0.5"
             tabIndex={0} aria-label={`Projeto: ${p.title}`}>
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <div className="flex gap-2 text-[10px] text-black/60 dark:text-white/60">
          {p.stack.map((s,i)=>(
            <span key={i} className="rounded-full border border-black/10 dark:border-white/15 px-2 py-0.5">{s}</span>
          ))}
        </div>
      </div>
      <p className="mt-2 text-sm text-black/70 dark:text-white/70">{p.desc}</p>
      <div className="mt-4 flex gap-3 text-sm">
        {p.link && p.link !== "#" && (
          <a className="link-underline" href={p.link} target="_blank" rel="noreferrer">Demo</a>
        )}
        {p.repo && p.repo !== "#" && (
          <a className="link-underline" href={p.repo} target="_blank" rel="noreferrer">Código</a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return projects;
    return projects.filter(p =>
      p.title.toLowerCase().includes(t) ||
      p.desc.toLowerCase().includes(t) ||
      p.stack.join(" ").toLowerCase().includes(t)
    );
  }, [q]);

  return (
    <section id="projects" className="section py-16 sm:py-24" aria-label="Projetos">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">Projetos</h2>
          <p className="text-black/70 dark:text-white/70 mt-1">Pesquise por título, descrição ou tecnologia.</p>
        </div>

        <label className="relative block w-full sm:w-80">
          <span className="sr-only">Buscar projetos</span>
          <input
            value={q} onChange={e=>setQ(e.target.value)}
            placeholder="Buscar projetos..."
            className="h-11 w-full rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-neutral-900 pl-4 pr-9"
            type="search" aria-label="Buscar projetos"
          />
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-black/40 dark:text-white/40">⌘K</span>
        </label>
      </div>

      {q && (
        <div className="mt-4 progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-label="Filtrando projetos">
          <div key={q} className="progress__bar"></div>
        </div>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length ? filtered.map((p,i)=><ProjectCard key={i} p={p} />)
          : <p className="text-sm text-black/60 dark:text-white/60">Nenhum projeto encontrado.</p>}
      </div>
    </section>
  );
}