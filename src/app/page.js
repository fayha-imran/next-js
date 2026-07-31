import Link from "next/link";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

export default function HomePage() {
  // Get first 3 featured courses
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="space-y-20 sm:space-y-32">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center space-y-6 pt-4 pb-8 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[250px] h-[250px] bg-violet-500/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-semibold text-indigo-400 bg-indigo-950/40 border border-indigo-900/60 rounded-full uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          Admissions Now Open for Fall 2026
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-4xl leading-tight">
          Learn from the best. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400">
            Build the Future.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          Access industry-vetted courses, build production-grade projects, and learn directly from elite software architects and designers.
        </p>

        <div className="pt-6 flex flex-wrap justify-center items-center gap-4">
          <Link
            href="/courses"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5"
          >
            Explore Catalog
          </Link>
          <Link
            href="/instructors"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-sm font-semibold border border-slate-800 hover:border-slate-700 transition-all transform hover:-translate-y-0.5"
          >
            Meet Instructors
          </Link>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-slate-900/20 border border-slate-800/80 backdrop-blur-sm">
        <div className="text-center space-y-1">
          <div className="text-3xl sm:text-4xl font-extrabold text-white">15K+</div>
          <div className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider font-mono">Active Students</div>
        </div>
        <div className="text-center space-y-1 border-l border-slate-800">
          <div className="text-3xl sm:text-4xl font-extrabold text-white">4.8★</div>
          <div className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider font-mono">Course Rating</div>
        </div>
        <div className="text-center space-y-1 border-l border-slate-800">
          <div className="text-3xl sm:text-4xl font-extrabold text-white">98%</div>
          <div className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider font-mono">Completion Rate</div>
        </div>
        <div className="text-center space-y-1 border-l border-slate-800">
          <div className="text-3xl sm:text-4xl font-extrabold text-white">100%</div>
          <div className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider font-mono">Career Oriented</div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Featured Courses</h2>
            <p className="text-sm text-slate-400">Discover our most popular courses and start learning today.</p>
          </div>
          <Link
            href="/courses"
            className="group flex items-center gap-1 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span>View All Courses</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Why Choose EduPortal?</h2>
          <p className="text-sm text-slate-400">We provide a premium educational infrastructure designed for real-world excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800 space-y-4 hover:border-indigo-500/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-900/60 text-indigo-400 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">Project-Based Syllabus</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              No generic tutorials. Build functional web services, AI chains, and high-fidelity prototypes that define your portfolio.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800 space-y-4 hover:border-indigo-500/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-violet-950/60 border border-violet-900/60 text-violet-400 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">Industry-Vetted Content</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Our curriculum is constantly updated with feedback from tech partners to ensure you learn exactly what employers need.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800 space-y-4 hover:border-indigo-500/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-900/60 text-emerald-400 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">Expert 1-on-1 Mentorship</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Stuck on a bug or need design advice? Access live weekly office hours and Q&A sessions with professional instructors.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative rounded-3xl overflow-hidden py-16 px-6 sm:px-12 bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 border border-slate-800/80 text-center space-y-6">
        {/* Glow elements inside card */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Ready to Elevate Your Skillset?
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Create your account today, unlock free preview lessons, and join our Discord community of over 10,000 active developers.
        </p>
        <div className="pt-4">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 text-sm font-semibold shadow-lg shadow-white/10 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            Start Learning Now
          </Link>
        </div>
      </section>
    </div>
  );
}
