import { useState } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Landing Page Responsiva",
    description: "Página com foco em tipografia e UI limpa.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
  },
  {
    id: 2,
    title: "Dashboard Acadêmico",
    description: "Dashboard com gráficos e UX simples.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
];

export default function Projects() {
  const [query, setQuery] = useState("");

  const filtered = PROJECTS.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="projetos" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold mb-4">Projetos</h2>

      <input
        type="search"
        placeholder="Pesquisar..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="border rounded-xl px-4 py-2 mb-6 w-full"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map(p => (
          <div key={p.id} className="border rounded-2xl overflow-hidden shadow hover:-translate-y-1 transition">
            <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}