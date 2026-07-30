import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js Exploration Project | Fayha Imran",
  description: "Exploring Next.js App Router, File-Based Routing, SSR/SSG, and React ecosystem comparison.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors">
        {/* Navigation Bar using Next.js Link */}
        <header className="sticky top-0 z-50 bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
              <span className="w-8 h-8 rounded-lg bg-amber-700 text-white flex items-center justify-center font-black text-sm">
                N
              </span>
              <span>Next.js Exploration<span className="text-amber-700">.</span></span>
            </Link>

            <nav className="flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
              >
                About
              </Link>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 max-w-5xl mx-auto px-6 py-12 w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-stone-200 dark:border-stone-800 py-8 text-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Fayha Imran. Next.js App Router Exploration Demo.</p>
        </footer>
      </body>
    </html>
  );
}
