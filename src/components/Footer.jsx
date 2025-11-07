export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between text-sm text-black/60">
        <span>© {new Date().getFullYear()} SeuNome</span>
        <a href="https://github.com/seuuser" className="underline underline-offset-4" target="_blank">GitHub</a>
      </div>
    </footer>
  );
}