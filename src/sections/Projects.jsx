const projects = [
  {
    title: "Landing Page SaaS",
    desc: "Página moderna com animações suaves.",
    stack: ["React", "Tailwind"],
    link: "#",
    repo: "#"
  },
  {
    title: "Dashboard Financeiro",
    desc: "Gráficos, filtros e estrutura profissional.",
    stack: ["React", "Tailwind"],
    link: "#",
    repo: "#"
  },
  {
    title: "E-commerce UI",
    desc: "Componentes completos de loja.",
    stack: ["React", "Tailwind"],
    link: "#",
    repo: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold">Projetos</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div key={i} className="rounded-2xl border border-black/10 p-5 bg-white hover:shadow-md transition">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-black/70 text-sm">{p.desc}</p>
            <div className="mt-4 flex gap-3 text-sm">
              <a href={p.link} className="underline">Demo</a>
              <a href={p.repo} className="underline">Código</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}