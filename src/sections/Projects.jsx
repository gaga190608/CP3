const projects = [
  { title:"Landing Page SaaS", desc:"Página de marketing com animações.", stack:["React","Tailwind"], link:"#", repo:"#"},
  { title:"Dashboard Financeiro", desc:"Charts, filtros e tabelas.", stack:["React","Tailwind"], link:"#", repo:"#"},
  { title:"E-commerce UI", desc:"Carrinho, busca e wishlist.", stack:["React","Tailwind"], link:"#", repo:"#"},
];

function Card({ p }) {
  return (
    <div className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <div className="flex gap-2 text-xs text-black/60">
          {p.stack.map((s,i)=><span key={i} className="rounded-full border border-black/10 px-2 py-0.5">{s}</span>)}
        </div>
      </div>
      <p className="mt-2 text-sm text-black/70">{p.desc}</p>
      <div className="mt-4 flex gap-3 text-sm">
        {p.link!=="#" && <a className="underline" href={p.link} target="_blank">Demo</a>}
        {p.repo!=="#" && <a className="underline" href={p.repo} target="_blank">Código</a>}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold">Projetos</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p,i)=><Card key={i} p={p} />)}
      </div>
    </section>
  );
}