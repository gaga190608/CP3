const skills = [
  {name:"React", level:"Avançado"}, {name:"Vite", level:"Avançado"},
  {name:"Tailwind", level:"Avançado"}, {name:"TypeScript", level:"Intermediário"},
  {name:"UX/UI", level:"Intermediário"}, {name:"Git/GitHub", level:"Avançado"},
];

export default function Skills() {
  return (
    <section id="skills" className="section py-16 sm:py-24">
      <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s,i)=>(
          <div key={i} className="card p-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">{s.name}</span>
              <span className="text-xs text-black/60 dark:text-white/60">{s.level}</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-black/10 dark:bg-white/10">
              <div className="h-2 rounded-full bg-black dark:bg-white" style={{width: s.level==="Avançado"?"90%":"65%"}} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}