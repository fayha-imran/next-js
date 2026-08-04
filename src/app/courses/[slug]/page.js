import { notFound } from "next/navigation";
import Link from "next/link";
import { courses, instructors } from "../../../data/courses";
import EnrollmentSidebar from "../../../components/EnrollmentSidebar";
import CourseCard from "../../../components/CourseCard";
import SectionTitle from "../../../components/SectionTitle";

// Next.js App Router Dynamic SEO Metadata Generation
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  
  if (!course) {
    return {
      title: "Course Not Found | EduPortal",
    };
  }

  return {
    title: `${course.title} | EduPortal`,
    description: course.subtitle,
  };
}

// Next.js static params generation to enable build-time SSG caching
export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailPage({ params }) {
  // Await the asynchronous params promise
  const { slug } = await params;

  // Query mock database
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  // Find instructor details
  const instructor = instructors.find((inst) => inst.name === course.instructor);

  // Related courses:
  // 1. Exclude the current course.
  // 2. Prioritize courses with the same category.
  // 3. Sort remaining by rating, select top 3.
  const relatedCourses = courses
    .filter((c) => c.slug !== slug)
    .sort((a, b) => {
      if (a.category === course.category && b.category !== course.category) return -1;
      if (a.category !== course.category && b.category === course.category) return 1;
      return b.rating - a.rating;
    })
    .slice(0, 3);

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Breadcrumbs */}
      <nav className="text-xs sm:text-sm text-slate-500 font-medium">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
          </li>
          <li className="text-slate-700">/</li>
          <li>
            <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
          </li>
          <li className="text-slate-700">/</li>
          <li className="text-slate-300 truncate">{course.title}</li>
        </ol>
      </nav>

      {/* Main Course Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12 items-start">
        {/* Left Column: Course details outline */}
        <div className="lg:col-span-2 space-y-12">
          {/* Header Area */}
          <section className="space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-950/60 text-indigo-400 border border-indigo-900/60">
              {course.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {course.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light">
              {course.subtitle}
            </p>
          </section>

          {/* Description */}
          <section className="space-y-3">
            <SectionTitle title="Course Description" as="h2" />
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              {course.description}
            </p>
          </section>

          {/* What you'll learn */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/30 border border-slate-800 space-y-4">
            <SectionTitle title="What You'll Learn" as="h2" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.learn.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-xs sm:text-sm text-slate-300 items-start">
                  <span className="w-5 h-5 rounded-full bg-indigo-950 border border-indigo-900/60 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Syllabus Curriculum Accordions */}
          <section className="space-y-4">
            <SectionTitle title="Syllabus Outline" as="h2" />
            <div className="space-y-3">
              {course.curriculum.map((module, idx) => (
                <details
                  key={idx}
                  className="group rounded-2xl bg-slate-900/20 border border-slate-800 p-4 transition-all duration-300 select-none [&_summary::-webkit-details-marker]:hidden"
                  open={idx === 0} // open first section by default
                >
                  <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-slate-200 hover:text-white cursor-pointer list-none">
                    <span className="pr-4">{module.title}</span>
                    <span className="text-indigo-400 group-open:rotate-180 transition-transform duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-4 border-t border-slate-800/80 pt-4 pl-2 space-y-3">
                    {module.lessons.map((lesson, lessonIdx) => (
                      <div key={lessonIdx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-400">
                        <svg className="w-4 h-4 text-slate-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{lesson}</span>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Instructor Bio Section */}
          {instructor && (
            <section className="space-y-4 border-t border-slate-900 pt-8">
              <SectionTitle title="Your Instructor" as="h2" />
              
              <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-slate-900/30 border border-slate-800">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0 mx-auto sm:mx-0 shadow-md ${instructor.theme}`}>
                  {instructor.initials}
                </div>
                
                <div className="space-y-2 text-center sm:text-left">
                  <div>
                    <h4 className="text-lg font-bold text-white">{instructor.name}</h4>
                    <p className="text-xs text-indigo-400 font-semibold">{instructor.role}</p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {instructor.bio}
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Right Column: Enrollment Sidebar */}
        <div className="lg:col-span-1">
          <EnrollmentSidebar
            price={course.price}
            duration={course.duration}
            level={course.level}
            rating={course.rating}
            reviews={course.reviews}
          />
        </div>
      </div>

      {/* Related Courses Section */}
      {relatedCourses.length > 0 && (
        <section className="space-y-8 border-t border-slate-900 pt-12 mt-12">
          <SectionTitle
            title="Related Courses"
            subtitle="Explore other curricula designed to expand your capabilities."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedCourses.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
