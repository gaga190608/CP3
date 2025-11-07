export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="section h-16 flex items-center justify-between text-sm text-black/60 dark:text-white/60">
        <span>© {new Date().getFullYear()} SeuNome</span>
        <div className="flex gap-4">
          <a href="#" className="underline underline-offset-4">GitHub</a>
          <a href="#" className="underline underline-offset-4">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}