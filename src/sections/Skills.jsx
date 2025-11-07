const skills = [
  {name:"HTML", level:"Iniciante"},
  {name:"CSS / Tailwind", level:"Iniciante"},
  {name:"JavaScript", level:"Iniciante"},
  {name:"React", level:"Iniciante"},
  {name:"Git / GitHub", level:"Iniciante"},
  {name:"UX / Acessibilidade", level:"Iniciante"},
];

export default function Skills() {
  const widthByLevel = (lvl) => "35%"; // iniciante = 35%
  return (
    <section id="skills" className="section py-16 sm:py-24" aria-label="Habilidades">
      <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s,i)=>(
          <div key={i} className="card p-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">{s.name}</span>
              <span className="text-xs text-black/60 dark:text-white/60">{s.level}</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
              <div className="h-2 rounded-full bg-[rgb(var(--accent))]" style={{width: widthByLevel(s.level)}} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}