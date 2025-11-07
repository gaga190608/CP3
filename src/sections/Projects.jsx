const projects = [
  { title:"Landing Page SaaS", desc:"Página moderna com animações e dark mode.", stack:["React","Tailwind","Vite"], link:"#", repo:"#"},
  { title:"Dashboard Financeiro", desc:"Charts, filtros e export CSV.", stack:["React","Tailwind"], link:"#", repo:"#"},
  { title:"E-commerce UI", desc:"Carrinho, wishlist e busca.", stack:["React","Tailwind"], link:"#", repo:"#"},
  { title:"ChatWidget", desc:"Widget de chat com API e streaming.", stack:["React"], link:"#", repo:"#"},
  { title:"Portfolio 3D", desc:"Seções com parallax e efeitos suaves.", stack:["React"], link:"#", repo:"#"},
  { title:"Form Builder", desc:"Formulários complexos com validação.", stack:["React"], link:"#", repo:"#"},
];

function ProjectCard({ p }) {
  return (
    <article className="card card-hover p-5 flex flex-col">
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
        {p.link!=="#" && <a className="underline underline-offset-4 hover:opacity-70" href={p.link} target="_blank" rel="noreferrer">Demo</a>}
        {p.repo!=="#" && <a className="underline underline-offset-4 hover:opacity-70" href={p.repo} target="_blank" rel="noreferrer">Código</a>}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section py-16 sm:py-24">
      <h2 className="text-2xl sm:text-3xl font-bold">Projetos em destaque</h2>
      <p className="text-black/70 dark:text-white/70 mt-2">Alguns trabalhos e protótipos que mostram meu estilo.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p,i)=><ProjectCard key={i} p={p} />)}
      </div>
    </section>
  );
}