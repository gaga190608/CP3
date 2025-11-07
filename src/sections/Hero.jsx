import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="gradient-blob" />
      <div className="floating-grid" />
      <div className="section py-20 sm:py-28 relative">
        <p className="text-xs uppercase tracking-[0.2em] text-black/60 dark:text-white/50">Portfólio</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
          Desenvolvedor Front-end
          <span className="block text-black/60 dark:text-white/60 text-2xl sm:text-3xl mt-1">React • Vite • Tailwind</span>
        </h1>
        <p className="mt-4 max-w-2xl text-black/70 dark:text-white/70">
          Interfaces rápidas, responsivas e acessíveis. Transformo ideias em produtos prontos para produção.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button as="a" href="#projects" size="lg">Ver projetos</Button>
          <Button as="a" href="#contact" variant="ghost" size="lg">Entrar em contato</Button>
        </div>

        <div className="mt-10 flex items-center gap-3 text-sm text-black/60 dark:text-white/60">
          <span className="kbd">R</span> <span> para recarregar no Vite</span>
        </div>
      </div>
    </section>
  );
}