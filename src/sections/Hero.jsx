import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <p className="text-sm uppercase tracking-widest text-black/60">Portfólio</p>
      <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight">
        Desenvolvedor Front-end<br />
        <span className="text-black/60">React • Vite • Tailwind</span>
      </h1>
      <p className="mt-4 text-black/70 max-w-xl">
        Interfaces rápidas, responsivas e com foco em UX. Veja alguns projetos e fale comigo.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button as="a" href="#projects" size="lg">Ver projetos</Button>
        <Button as="a" href="#contact" variant="ghost" size="lg">Contato</Button>
      </div>
    </section>
  );
}