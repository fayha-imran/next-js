import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="space-y-10 animate-fade-in">
      <section className="space-y-3">
        <div className="inline-block px-3 py-1 text-xs font-mono font-semibold text-amber-800 dark:text-amber-400 bg-amber-100/60 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/60 rounded-full uppercase">
          About Next.js & Architecture Comparison
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
          React (Vite) vs Next.js Framework
        </h1>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed">
          Next.js is a full-stack React framework created by Vercel that brings server-side rendering, static site generation, file-based routing, and built-in optimizations to React applications.
        </p>
      </section>

      {/* Comparison Table */}
      <div className="overflow-hidden rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-100 dark:bg-stone-800/60 text-xs font-mono uppercase text-stone-600 dark:text-stone-400 border-b border-stone-200 dark:border-stone-800">
            <tr>
              <th className="px-6 py-4">Feature</th>
              <th className="px-6 py-4">React (Vite SPA)</th>
              <th className="px-6 py-4">Next.js (App Router)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 dark:divide-stone-800 text-stone-700 dark:text-stone-300 text-xs sm:text-sm">
            <tr>
              <td className="px-6 py-4 font-semibold text-stone-900 dark:text-stone-100">Rendering Strategy</td>
              <td className="px-6 py-4">Client-Side Rendering (CSR)</td>
              <td className="px-6 py-4 font-semibold text-amber-800 dark:text-amber-400">SSR, SSG, ISR & CSR</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-semibold text-stone-900 dark:text-stone-100">Routing</td>
              <td className="px-6 py-4">Client library (e.g. React Router)</td>
              <td className="px-6 py-4 font-semibold text-amber-800 dark:text-amber-400">Built-in File-Based Routing</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-semibold text-stone-900 dark:text-stone-100">SEO & Initial Load</td>
              <td className="px-6 py-4">Blank HTML initial load; lower SEO</td>
              <td className="px-6 py-4 font-semibold text-amber-800 dark:text-amber-400">Pre-rendered HTML; Outstanding SEO</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-semibold text-stone-900 dark:text-stone-100">Full-Stack Features</td>
              <td className="px-6 py-4">Frontend only (needs separate API)</td>
              <td className="px-6 py-4 font-semibold text-amber-800 dark:text-amber-400">API Routes & Server Actions built-in</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pt-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-amber-800 dark:text-amber-400 hover:underline"
        >
          &larr; Back to Home Page
        </Link>
      </div>
    </div>
  );
}
