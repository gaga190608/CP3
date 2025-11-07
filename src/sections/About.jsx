export default function About() {
  return (
    <section id="about" className="section py-16 sm:py-24">
      <h2 className="text-2xl sm:text-3xl font-bold">Sobre mim</h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        <p className="text-black/80 dark:text-white/80">
          Sou dev front-end com foco em React, Vite e Tailwind. Curto componentizar com atenção a
          performance, acessibilidade e UX. Gosto de transformar design em código limpo e escalável.
        </p>
        <ul className="text-sm text-black/70 dark:text-white/70 space-y-2">
          <li>• Design System e componentes reutilizáveis</li>
          <li>• Responsividade mobile-first</li>
          <li>• Integração com APIs REST</li>
          <li>• Lighthouse, boas práticas e DX</li>
        </ul>
      </div>
    </section>
  );
}