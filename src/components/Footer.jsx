export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="section h-16 flex items-center justify-between text-sm text-black/60 dark:text-white/60">
        <span>© {new Date().getFullYear()} Gabrielle C. Zollner</span>
        <a href="https://github.com/gaga190608" className="underline underline-offset-4" target="_blank">GitHub</a>
      </div>
    </footer>
  );
}