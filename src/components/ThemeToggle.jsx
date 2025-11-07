import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }) {
  const getInitial = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [mode, setMode] = useState(getInitial);

  useEffect(() => {
    const el = document.documentElement;
    if (mode === "dark") el.classList.add("dark");
    else el.classList.remove("dark");
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggle = () => setMode(m => (m === "dark" ? "light" : "dark"));

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Alternar tema"
      aria-pressed={mode === "dark"}
      className={`h-10 w-10 grid place-items-center rounded-xl border border-black/15 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10 ${className}`}
      title={mode === "dark" ? "Modo claro" : "Modo escuro"}
    >
      {mode === "dark" ? (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
      ) : (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.8 1.8-1.8zM12 4V1h0v3h0zm5.24.84l1.79-1.79 1.79 1.79-1.79 1.8-1.79-1.8zM4 13H1v-2h3v2zm19 0h-3v-2h3v2zM6.76 19.16l-1.8 1.79-1.79-1.79 1.79-1.8 1.8 1.8zM12 23v-3h0v3h0zm7.24-3.84l1.79 1.79 1.79-1.79-1.79-1.8-1.79 1.8zM12 7a5 5 0 100 10 5 5 0 000-10z"/></svg>
      )}
    </button>
  );
}