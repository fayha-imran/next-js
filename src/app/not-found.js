import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

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

      <SectionTitle
        title="Lost in the Library?"
        subtitle="The course syllabus or academic resources you are searching for might have been archived, renamed, or moved to a different semester."
        as="h2"
        align="center"
        className="max-w-md"
      />

      {/* Action buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button href="/" size="sm">
          Return Home
        </Button>
        <Button href="/courses" variant="secondary" size="sm">
          Browse Courses
        </Button>
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
