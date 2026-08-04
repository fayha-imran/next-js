export default function SectionTitle({
  title,
  subtitle,
  as: Component = "h2",
  align = "left",
  className = "",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const spacingClass = Component === "h1" ? "space-y-4" : "space-y-2";
  const titleClass =
    Component === "h1"
      ? "text-3xl sm:text-5xl font-black tracking-tight text-white font-sans"
      : "text-2xl sm:text-3xl font-extrabold text-white tracking-tight";
  const subtitleClass =
    Component === "h1"
      ? "text-slate-400 max-w-2xl leading-relaxed text-sm sm:text-base"
      : "text-sm text-slate-400";

  return (
    <div className={`${spacingClass} ${alignClass} ${className}`}>
      <Component className={titleClass}>{title}</Component>
      {subtitle && <p className={subtitleClass}>{subtitle}</p>}
    </div>
  );
}
