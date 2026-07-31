import { instructors } from "../../data/courses";
import InstructorCard from "../../components/InstructorCard";

export const metadata = {
  title: "Meet Our Instructors | EduPortal",
  description: "Learn directly from world-class researchers, design veterans, and lead software engineers.",
};

export default function InstructorsPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header section */}
      <section className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans">
          Our Expert Faculty
        </h1>
        <p className="text-slate-400 max-w-2xl leading-relaxed text-sm sm:text-base">
          Our mentors are active industry leaders, former FAANG engineers, and prestigious research scholars. They bring real-world challenges directly into your workspace.
        </p>
      </section>

      {/* Grid of Instructors */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.name} instructor={instructor} />
        ))}
      </section>

      {/* Call to Action or FAQ helper */}
      <section className="p-8 rounded-3xl bg-slate-900/20 border border-slate-800/80 text-center max-w-3xl mx-auto space-y-4">
        <h3 className="text-lg font-bold text-white">Want to join our academic team?</h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
          We are always searching for experienced authors, engineers, and designers who are passionate about sharing their expertise. Contact our syllabus team.
        </p>
        <div>
          <a
            href="mailto:careers@eduportal.edu"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-indigo-400 hover:text-indigo-300 text-xs font-semibold border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
          >
            Apply as Instructor
          </a>
        </div>
      </section>
    </div>
  );
}
