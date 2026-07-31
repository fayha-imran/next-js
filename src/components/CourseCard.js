import Link from "next/link";

export default function CourseCard({ course }) {
  // Destructure course details
  const { slug, title, subtitle, category, duration, level, rating, reviews, price } = course;

  // Star display utility
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    return (
      <div className="flex items-center text-amber-400 gap-0.5">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            );
          } else if (i === fullStars && hasHalf) {
            return (
              <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                {/* Half star implementation using clip-path or partial overlay */}
                <defs>
                  <linearGradient id={`half-${slug}`}>
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="#475569" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path fill={`url(#half-${slug})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            );
          } else {
            return (
              <svg key={i} className="w-4 h-4 text-slate-600 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            );
          }
        })}
      </div>
    );
  };

  // Get color styles for the categories
  const getCategoryStyles = (cat) => {
    switch (cat) {
      case "Development":
        return "bg-indigo-950/60 text-indigo-400 border border-indigo-900/60";
      case "Design":
        return "bg-amber-950/60 text-amber-400 border border-amber-900/60";
      case "AI & Data Science":
        return "bg-emerald-950/60 text-emerald-400 border border-emerald-900/60";
      default:
        return "bg-slate-900 text-slate-400 border border-slate-800";
    }
  };

  return (
    <div className="group rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md shadow-slate-950/30 hover:shadow-lg hover:shadow-indigo-950/20 transform hover:-translate-y-1">
      {/* Decorative gradient header */}
      <div className="h-2 bg-gradient-to-r from-indigo-600 via-violet-500 to-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Category Tag & Price */}
        <div className="flex items-center justify-between mb-4">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold ${getCategoryStyles(category)}`}>
            {category}
          </span>
          <span className="text-lg font-bold text-white tracking-tight">{price}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-2 leading-tight">
          {title}
        </h3>

        {/* Subtitle / Description Snippet */}
        <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
          {subtitle}
        </p>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-bold text-slate-200">{rating}</span>
          {renderStars(rating)}
          <span className="text-xs text-slate-500">({reviews} reviews)</span>
        </div>

        {/* Metadata Badges */}
        <div className="flex items-center gap-4 text-xs text-slate-400 border-t border-slate-800/60 pt-4 font-medium">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>{level}</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-6 pb-6 pt-2">
        <Link
          href={`/courses/${slug}`}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-semibold tracking-wider uppercase border border-slate-700/60 hover:border-indigo-500 shadow-sm transition-all duration-300"
        >
          <span>View Course Details</span>
          <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
