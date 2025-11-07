export default function Button({ as:Comp="button", variant="primary", size="md", className="", ...props }) {
  const base = "press inline-flex items-center justify-center rounded-xl font-medium focus:outline-none focus-visible:ring";
  const sizes = { sm:"h-9 px-4 text-sm", md:"h-11 px-5", lg:"h-12 px-6 text-lg" };
  const variants = {
    primary: "bg-[rgb(var(--accent))] text-[rgb(var(--accent-ink))] hover:opacity-90",
    ghost: "bg-transparent border border-black/15 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10",
    outline: "bg-transparent border border-black/20 dark:border-white/25 hover:opacity-90",
    subtle: "bg-black/5 hover:bg-black/10 text-black dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
  };
  return <Comp className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props} />;
}