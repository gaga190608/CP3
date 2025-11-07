export default function Contact() {
  return (
    <section id="contact" className="section py-16 sm:py-24">
      <h2 className="text-2xl sm:text-3xl font-bold">Contato</h2>
      <p className="mt-2 text-black/70 dark:text-white/70">Me manda uma mensagem e eu respondo rápido:</p>

      <form className="mt-6 grid gap-4 max-w-xl">
        <input className="h-12 rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-neutral-900 px-4" placeholder="Seu nome" />
        <input className="h-12 rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-neutral-900 px-4" placeholder="Seu e-mail" type="email" />
        <textarea className="min-h-[140px] rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-neutral-900 p-4" placeholder="Sua mensagem" />
        <button className="h-12 rounded-xl bg-black text-white hover:opacity-90 dark:bg-white dark:text-black">Enviar</button>
      </form>

      <p className="mt-4 text-sm text-black/60 dark:text-white/60">
        Ou fale no Instagram/LinkedIn:
        {" "}
        <a className="underline underline-offset-4" href="https://github.com/gaga190608" targe="_blank">@gaga190608</a>
      </p>
    </section>
  );
}