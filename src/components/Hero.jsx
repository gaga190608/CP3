export default function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto grid md:grid-cols-2 items-center px-4 py-16 gap-8">
      <div>
        <h1 className="text-3xl font-bold">Olá! Sou Gabrielle Calazans Zollner</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Estudante de Engenharia de Software focada em interfaces acessíveis, responsivas e fáceis de usar.
        </p>

        <div className="flex gap-4 mt-6">
          <a href="#projetos" className="bg-emerald-600 text-white px-4 py-2 rounded-xl hover:opacity-90">Ver Projetos</a>
          <a href="#contato" className="border px-4 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800">Fale comigo</a>
        </div>
      </div>

      <img
        className="rounded-2xl shadow-lg object-cover"
        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6"
        alt="Gabrielle trabalhando"
      />
    </section>
  );
}