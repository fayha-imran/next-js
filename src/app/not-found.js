import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | EduPortal",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 space-y-6 sm:space-y-8 animate-fade-in">
      {/* 404 Visual Art (using styled Tailwind elements) */}
      <div className="relative">
        {/* Glow */}
        <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-2xl transform scale-110" />
        
        {/* Large 404 badge */}
        <div className="relative text-7xl sm:text-9xl font-black text-slate-800 tracking-widest font-mono">
          404
        </div>
      </div>

      <div className="space-y-3 max-w-md">
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Lost in the Library?
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          The course syllabus or academic resources you are searching for might have been archived, renamed, or moved to a different semester.
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 hover:shadow-indigo-500/30 transition-all cursor-pointer"
        >
          Return Home
        </Link>
        <Link
          href="/courses"
          className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
        >
          Browse Courses
        </Link>
      </div>

      {/* Decorative SVG illustration of an open book */}
      <div className="opacity-20 pt-6">
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-slate-400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
    </div>
  );
}
