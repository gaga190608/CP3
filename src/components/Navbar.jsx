import Button from "./Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="text-lg font-bold tracking-tight">SeuNome<span className="text-black/50">.dev</span></a>

        <div className="hidden sm:flex gap-6 text-sm">
          <a href="#projects" className="hover:opacity-70">Projetos</a>
          <a href="#about" className="hover:opacity-70">Sobre</a>
          <a href="#contact" className="hover:opacity-70">Contato</a>
        </div>

        <Button as="a" href="#contact" size="sm">Contato</Button>
      </nav>
    </header>
  );
}