import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary", // primary, secondary, outline, white, card
  size = "md", // sm, md, lg
  className = "",
  disabled = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:cursor-not-allowed disabled:transform-none disabled:opacity-50";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-xs sm:text-sm",
    lg: "px-6 py-3 text-sm sm:text-base",
  };

  const variantStyles = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30",
    secondary: "bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700",
    outline: "bg-transparent border border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-white hover:bg-slate-900/40",
    white: "bg-white hover:bg-slate-100 text-slate-950 shadow-lg shadow-white/10",
    card: "w-full bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white border border-slate-700/60 hover:border-indigo-500 shadow-sm transition-all duration-300",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
