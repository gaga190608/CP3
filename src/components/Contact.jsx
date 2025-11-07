export default function Contact() {
  return (
    <section id="contato" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold mb-6">Contato</h2>

      <form className="grid gap-4 max-w-lg">
        <input className="border rounded-xl p-2" placeholder="Nome" />
        <input className="border rounded-xl p-2" type="email" placeholder="Email" />
        <textarea className="border rounded-xl p-2" rows="5" placeholder="Mensagem" />
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl hover:opacity-90">Enviar</button>
      </form>
    </section>
  );
}