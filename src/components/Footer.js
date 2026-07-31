"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4 col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center font-black text-base shadow-md shadow-indigo-500/20">
                Ω
              </span>
              <span>EduPortal<span className="text-indigo-400">.</span></span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              Empowering students worldwide with top-tier education, project-based courses, and industry-expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-indigo-400 transition-colors">Courses Catalog</Link>
              </li>
              <li>
                <Link href="/instructors" className="hover:text-indigo-400 transition-colors">Instructors</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-400 transition-colors">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Contacts info */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <span className="text-slate-300 font-medium block">Admissions Email:</span>
                admissions@eduportal.edu
              </li>
              <li>
                <span className="text-slate-300 font-medium block">Phone Helpline:</span>
                +1 (800) 555-0199
              </li>
              <li>
                <span className="text-slate-300 font-medium block">Campus Address:</span>
                100 Academic Circle, Science Park, CA
              </li>
            </ul>
          </div>

          {/* Newsletter signup */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Stay Informed</h4>
            <p className="text-sm text-slate-500">
              Get announcements for new courses, webinars, and early registration discounts directly in your inbox.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold transition-all shadow-md shadow-indigo-600/10 cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-600 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} EduPortal Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
