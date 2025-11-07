export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="border px-3 py-1 rounded-lg hover:scale-105 transition"
    >
      {theme === "dark" ? "🌙 Escuro" : "☀️ Claro"}
    </button>
  );
}