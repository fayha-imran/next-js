"use client";

import { useState } from "react";

export default function EnrollmentSidebar({ price, duration, level, rating, reviews }) {
  const [status, setStatus] = useState("idle"); // idle, processing, success

  const handleEnroll = () => {
    setStatus("processing");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl shadow-slate-950/40 sticky top-24">
      {/* Price Header */}
      <div className="space-y-1">
        <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">Course Fee</div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-white">{price}</span>
          <span className="text-xs text-slate-500 line-through">$199</span>
          <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-2 py-0.5 rounded">50% OFF</span>
        </div>
      </div>

      {/* Action Button */}
      {status === "idle" && (
        <button
          onClick={handleEnroll}
          className="w-full py-4 text-center text-sm font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          Enroll in Course
        </button>
      )}

      {status === "processing" && (
        <button
          disabled
          className="w-full py-4 text-center text-sm font-semibold rounded-xl bg-slate-800 text-slate-400 border border-slate-700 flex items-center justify-center gap-2 cursor-wait"
        >
          <svg className="animate-spin h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Processing Enrollment...
        </button>
      )}

      {status === "success" && (
        <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-900/60 text-center space-y-2 animate-fade-in">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-sm font-bold text-white">Enrollment Confirmed!</h4>
          <p className="text-[11px] text-slate-400">
            Welcome to the class. A confirmation email and curriculum links have been sent.
          </p>
        </div>
      )}

      {/* Feature Attributes List */}
      <div className="space-y-4 border-t border-slate-800/80 pt-6">
        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">This Course Includes</h4>
        
        <ul className="space-y-3 text-xs sm:text-sm">
          <li className="flex items-center justify-between text-slate-300">
            <span className="flex items-center gap-2 text-slate-500">
              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Duration
            </span>
            <span className="font-semibold">{duration}</span>
          </li>

          <li className="flex items-center justify-between text-slate-300">
            <span className="flex items-center gap-2 text-slate-500">
              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
              </svg>
              Skill Level
            </span>
            <span className="font-semibold">{level}</span>
          </li>

          <li className="flex items-center justify-between text-slate-300">
            <span className="flex items-center gap-2 text-slate-500">
              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Lectures & Exercises
            </span>
            <span className="font-semibold">32 Lessons</span>
          </li>

          <li className="flex items-center justify-between text-slate-300">
            <span className="flex items-center gap-2 text-slate-500">
              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Certification
            </span>
            <span className="font-semibold">Yes</span>
          </li>

          <li className="flex items-center justify-between text-slate-300">
            <span className="flex items-center gap-2 text-slate-500">
              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Course Access
            </span>
            <span className="font-semibold">Lifetime Access</span>
          </li>
        </ul>
      </div>

      {/* Guarantee Badge */}
      <div className="text-center pt-2">
        <p className="text-[10px] text-slate-500">30-Day Money-Back Guarantee. Cancel anytime.</p>
      </div>
    </div>
  );
}
