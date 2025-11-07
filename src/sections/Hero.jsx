import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Apresentação pessoal">
      <div className="gradient-blob" aria-hidden="true" />
      <div className="floating-grid" aria-hidden="true" />
      <div className="section py-20 sm:py-28 relative" id="conteudo">
        <p className="text-xs uppercase tracking-[0.2em] text-black/60 dark:text-white/50">Portfólio</p>

        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
          Gabrielle Calazans Zollner
          <span className="block text-black/60 dark:text-white/60 text-2xl sm:text-3xl mt-1">
            18 anos • Desenvolvedora Front-End • Engenharia de Software (2º semestre)
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-black/70 dark:text-white/70">
          Projetos em React e Tailwind. Destaques: Global Solution — <strong>Passa a Bola</strong> (React) e
          <strong> Bot Lucinda</strong> (bot de psicologia). Foco em UX, acessibilidade e performance.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button as="a" href="#projects" size="lg">Ver projetos</Button>
          <Button as="a" href="https://github.com/gaga190608?tab=repositories" target="_blank" variant="ghost" size="lg" className="link-underline">
            Todos os repositórios
          </Button>
        </div>
      </div>
    </section>
  );
}