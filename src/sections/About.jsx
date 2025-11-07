export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold">Sobre mim</h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        <p className="text-black/80">
          Sou dev front-end focado em React, Vite e Tailwind. Componentização,
          responsividade mobile-first e integrações com APIs.
        </p>
        <ul className="text-sm text-black/70 space-y-2">
          <li>• Performance e Lighthouse</li>
          <li>• Design System</li>
          <li>• Acessibilidade</li>
          <li>• Integração REST/Fetch</li>
        </ul>
      </div>
    </section>
  );
}