import ThemeToggle from "./ThemeToggle";

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-slate-900/70">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <span className="font-semibold">Gabrielle C. Zollner</span>

        <ul className="hidden md:flex gap-6">
          <li><a href="#projetos" className="hover:underline">Projetos</a></li>
          <li><a href="#sobre" className="hover:underline">Sobre</a></li>
          <li><a href="#contato" className="hover:underline">Contato</a></li>
        </ul>

        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </nav>
    </header>
  );
}