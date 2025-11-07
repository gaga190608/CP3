import { useEffect, useState } from "react";

export default function ThemeToggle({className=""}) {
  const getInitial = () => {
    const pref = localStorage.getItem("theme");
    if (pref === "dark") return true;
    if (pref === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [dark, setDark] = useState(getInitial);

  useEffect(() => {
    const el = document.documentElement;
    if (dark) {
      el.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      el.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(v => !v)}
      className={`h-10 w-10 grid place-items-center rounded-xl border border-black/15 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10 ${className}`}
      aria-label="Alternar tema claro/escuro"
    >
      <svg className={`h-5 w-5 ${dark ? "hidden" : "block"}`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.8 1.8-1.8zM12 4V1h0v3zm0 19v-3h0v3zM4 13H1v-2h3v2zm19 0h-3v-2h3v2zM19.24 19.16l1.79 1.79 1.79-1.79-1.79-1.8-1.79 1.8zM12 7a5 5 0 100 10 5 5 0 000-10z"/>
      </svg>
      <svg className={`h-5 w-5 ${dark ? "block" : "hidden"}`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
      </svg>
    </button>
  );
}