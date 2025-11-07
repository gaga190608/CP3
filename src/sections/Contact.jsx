export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold">Contato</h2>
      <p className="mt-2 text-black/70">Me chama que eu respondo rápido:</p>
      <form className="mt-6 grid gap-4 max-w-xl">
        <input className="h-12 rounded-xl border border-black/10 px-4" placeholder="Seu nome" />
        <input className="h-12 rounded-xl border border-black/10 px-4" placeholder="Seu e-mail" type="email" />
        <textarea className="min-h-[140px] rounded-xl border border-black/10 p-4" placeholder="Sua mensagem" />
        <button className="h-12 rounded-xl bg-black text-white hover:opacity-90">Enviar</button>
      </form>
      <p className="mt-4 text-sm text-black/60">Ou fale no Instagram/LinkedIn: <a className="underline" href="#" target="_blank">@seuuser</a></p>
    </section>
  );
}