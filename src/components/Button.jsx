export default function Button({ as:Comp="button", variant="primary", size="md", className="", ...props }) {
  const base = "inline-flex items-center justify-center rounded-xl font-medium transition-all active:translate-y-[1px] focus:outline-none";
  const sizes = { sm:"h-9 px-4 text-sm", md:"h-11 px-5", lg:"h-12 px-6 text-lg" };
  const variants = {
    primary: "bg-black text-white hover:opacity-90",
    ghost: "bg-transparent border border-black/20 hover:bg-black/5"
  };
  return <Comp className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props} />;
}