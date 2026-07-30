import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <section className="space-y-4">
        <div className="inline-block px-3 py-1 text-xs font-mono font-semibold text-amber-800 dark:text-amber-400 bg-amber-100/60 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/60 rounded-full uppercase">
          Next.js 15 App Router
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
          Exploring Next.js & Modern React Ecosystem
        </h1>
        <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed">
          Welcome to the Next.js demonstration app. This project showcases file-based routing with the Next.js App Router, full-stack capabilities, and server-side performance.
        </p>

        <div className="pt-4 flex items-center gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-sm font-semibold shadow-sm transition-all transform hover:-translate-y-0.5"
          >
            Explore About Page &rarr;
          </Link>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 flex items-center justify-center font-mono font-bold text-sm">
            SSR
          </div>
          <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">Server-Side Rendering</h3>
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            Pre-renders HTML on each request for fresh data and maximum SEO performance.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 flex items-center justify-center font-mono font-bold text-sm">
            SSG
          </div>
          <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">Static Site Generation</h3>
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            Generates HTML at build time for lightning-fast CDN delivery and zero server latency.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 flex items-center justify-center font-mono font-bold text-sm">
            App
          </div>
          <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">File-Based Routing</h3>
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            Routes are created automatically based on your folder directory structure inside <code className="font-mono text-amber-700">src/app/</code>.
          </p>
        </div>
      </section>
    </div>
  );
}
