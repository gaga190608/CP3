export default function Button({
  as:Comp="button",
  variant="primary",
  size="md",
  className="",
  ...props
}) {
  const base = "inline-flex items-center justify-center rounded-xl font-medium transition-all active:translate-y-[1px] focus:outline-none focus-visible:ring";
  const sizes = { sm:"h-9 px-4 text-sm", md:"h-11 px-5", lg:"h-12 px-6 text-lg" };
  const variants = {
    primary: "bg-black text-white hover:opacity-90 dark:bg-white dark:text-black",
    ghost: "bg-transparent border border-black/15 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10",
    outline: "bg-transparent border border-black/20 dark:border-white/25 hover:opacity-90",
    subtle: "bg-black/5 hover:bg-black/10 text-black dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
  };
  return (
    <Comp className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props} />
  );
}