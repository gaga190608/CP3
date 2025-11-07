import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.83 1.32 3.52 1.01.11-.8.42-1.33.76-1.64-2.66-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.56.12-3.25 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.29-1.23 3.29-1.23.66 1.69.24 2.95.12 3.25.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.61-5.49 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.83.58A12 12 0 0012 .5z" clipRule="evenodd"/>
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/70 border-b border-black/10 dark:border-white/10">
      <nav className="section flex items-center justify-between h-16">
        <a href="#" className="text-lg font-bold tracking-tight">
          Gabrielle<span className="text-black/50 dark:text-white/50">Zollner.dev</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="link-underline">Projetos</a>
          <a href="#skills" className="link-underline">Skills</a>
          <a href="#about" className="link-underline">Sobre</a>
          <a href="#contact" className="link-underline">Contato</a>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a href="https://github.com/gaga190608?tab=repositories" target="_blank" rel="noreferrer"
             className="hidden sm:inline-flex h-10 items-center gap-2 rounded-xl border border-black/15 px-3 text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
             aria-label="Abrir meus repositórios no GitHub">
            <GithubIcon /><span>GitHub</span>
          </a>

          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"
             className="hidden sm:inline-flex h-10 items-center rounded-xl border border-black/15 px-3 text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
             aria-label="Abrir meu LinkedIn">LinkedIn</a>

          <Button as="a" href="#contact" size="sm" className="hidden sm:inline-flex">Fale comigo</Button>

          <button onClick={()=>setOpen(v=>!v)} className="md:hidden h-10 w-10 grid place-items-center rounded-xl border border-black/15 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10" aria-label="Menu">
            <div className="i h-4 w-4 relative">
              <span className={`absolute inset-0 before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-current after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-current ${open?'opacity-0':''}`} />
              <span className={`absolute left-0 right-0 top-1/2 h-[2px] bg-current -translate-y-1/2 ${open?'rotate-45':''}`} />
              <span className={`absolute left-0 right-0 top-1/2 h-[2px] bg-current -translate-y-1/2 ${open?'-rotate-45':''}`} />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden section pb-4">
          <div className="rounded-2xl border border-black/10 dark:border-white/10 p-4 bg-white dark:bg-neutral-900">
            <a href="#projects" className="block py-2">Projetos</a>
            <a href="#skills" className="block py-2">Skills</a>
            <a href="#about" className="block py-2">Sobre</a>
            <a href="#contact" className="block py-2">Contato</a>
            <Button as="a" href="#contact" className="w-full mt-2">Fale comigo</Button>
          </div>
        </div>
      )}
    </header>
  );
}