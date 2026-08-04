export default function GlobalLoading() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 animate-pulse">
      {/* Header Skeleton */}
      <div className="space-y-4">
        <div className="h-10 bg-slate-900 rounded-2xl w-1/3" />
        <div className="h-4 bg-slate-900 rounded-lg w-2/3 max-w-xl" />
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 space-y-6 h-[320px] flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="h-5 bg-slate-800 rounded-lg w-1/4" />
                <div className="h-6 bg-slate-800 rounded-lg w-12" />
              </div>
              <div className="h-6 bg-slate-800 rounded-lg w-3/4" />
              <div className="space-y-2 pt-2">
                <div className="h-4 bg-slate-900/60 rounded w-full" />
                <div className="h-4 bg-slate-900/60 rounded w-5/6" />
              </div>
            </div>
            <div className="space-y-4 border-t border-slate-800/60 pt-4">
              <div className="flex gap-4">
                <div className="h-4 bg-slate-900/60 rounded w-16" />
                <div className="h-4 bg-slate-900/60 rounded w-16" />
              </div>
              <div className="h-10 bg-slate-800 rounded-xl w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
