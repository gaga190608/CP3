import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/70 border-b border-black/10 dark:border-white/10">
      <nav className="section flex items-center justify-between h-16">
        <a href="#" className="text-lg font-bold tracking-tight">SeuNome<span className="text-black/50 dark:text-white/50">.dev</span></a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:opacity-70">Projetos</a>
          <a href="#skills" className="hover:opacity-70">Skills</a>
          <a href="#about" className="hover:opacity-70">Sobre</a>
          <a href="#contact" className="hover:opacity-70">Contato</a>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
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

      {/* mobile menu */}
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