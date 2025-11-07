import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
        Desenvolvedor Front-end <br />
        <span className="text-black/60">React • Vite • Tailwind</span>
      </h1>

      <p className="mt-4 text-black/70 max-w-xl">
        Eu construo interfaces rápidas, responsivas e com foco em experiência. 
        Veja meus projetos abaixo ou fale comigo.
      </p>

      <div className="mt-6 flex gap-4">
        <Button as="a" href="#projects" size="lg">Ver Projetos</Button>
        <Button as="a" href="#contact" variant="ghost" size="lg">Contato</Button>
      </div>
    </section>
  );
}