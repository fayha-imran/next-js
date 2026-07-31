export default function InstructorCard({ instructor }) {
  const { name, role, bio, rating, initials, theme, skills, courses } = instructor;

  return (
    <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 hover:border-indigo-500/40 hover:bg-slate-900/60 transition-all duration-300 shadow-md shadow-slate-950/20 flex flex-col justify-between h-full">
      <div className="space-y-4">
        {/* Header: Avatar and Role */}
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg select-none shadow-md ${theme}`}>
            {initials}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white leading-tight">{name}</h3>
            <p className="text-xs text-indigo-400 font-semibold">{role}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          {bio}
        </p>

        {/* Skills Tag List */}
        <div className="space-y-1">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Expertise</h4>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Courses Taught */}
        <div className="space-y-2 border-t border-slate-800/60 pt-4">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Taught Courses</h4>
          <ul className="space-y-1">
            {courses.map((courseName) => (
              <li key={courseName} className="flex items-center gap-2 text-xs text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>{courseName}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer: Rating */}
      <div className="flex items-center justify-between border-t border-slate-800/60 pt-4 mt-6">
        <span className="text-xs text-slate-500 font-mono">Expert Instructor</span>
        <div className="flex items-center gap-1 bg-amber-950/40 border border-amber-900/40 px-2 py-0.5 rounded-md text-amber-400">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <span className="text-xs font-bold">{rating}</span>
        </div>
      </div>
    </div>
  );
}
