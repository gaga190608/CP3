export default function About() {
  return (
    <section id="about" className="section py-16 sm:py-24">
      <h2 className="text-2xl sm:text-3xl font-bold">Sobre mim</h2>

      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        <p className="text-black/80 dark:text-white/80">
          Meu nome é Gabrielle Calazans Zollner, tenho 18 anos e estou cursando o
         1º semestre de Engenharia de Software. Hoje meu foco está em desenvolvimento em todas as disciplinas.
        </p>

        <ul className="text-sm text-black/70 dark:text-white/70 space-y-2">
          <li>• Desenvolvimento Front-End com React</li>
          <li>• TailwindCSS e Vite para produtividade e performance</li>
          <li>• Projetos acadêmicos orientados a impacto social</li>
          <li>• Interesse crescente em UX, IA e Bots conversacionais</li>
        </ul>
      </div>
    </section>
  );
}