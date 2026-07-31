"use client";

import { useState } from "react";
import { contactDetails } from "../../data/courses";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, sending, success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="space-y-16 sm:space-y-24 animate-fade-in">
      {/* React 19 Document Metadata Hoisting */}
      <title>Contact Admissions & Support | EduPortal</title>
      <meta name="description" content="Get in touch with EduPortal student assistance team. Ask about courses, pricing, or corporate partnerships." />

      {/* Header section */}
      <section className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
          Contact Admissions
        </h1>
        <p className="text-slate-400 max-w-2xl leading-relaxed text-sm sm:text-base">
          Have questions about the program curriculum, corporate billing, or scholarship applications? Drop us a line and our admissions officers will get back to you within 24 hours.
        </p>
      </section>

      {/* Main Grid: Form on left, Details/Map on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
        {/* Form Container (lg:col-span-7) */}
        <section className="lg:col-span-7 rounded-3xl bg-slate-900/30 border border-slate-800 p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-white tracking-tight">Send a Message</h2>

          {status === "success" ? (
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-900/60 space-y-4 animate-fade-in text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">Message Dispatched!</h3>
                <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
                  Thank you for reaching out. We have logged your request and assigned it ticket #{(Math.floor(Math.random() * 90000) + 10000)}. Check your inbox shortly.
                </p>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Message Description</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  placeholder="Explain your inquiry in detail..."
                  className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white font-semibold text-sm shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 transition-all cursor-pointer disabled:cursor-wait"
                >
                  {status === "sending" ? "Sending Request..." : "Send Message"}
                </button>
              </div>
            </form>
          )}
        </section>

        {/* Contact Info Details & Embedded Visual Map (lg:col-span-5) */}
        <section className="lg:col-span-5 space-y-8">
          {/* Details list */}
          <div className="rounded-3xl bg-slate-900/20 border border-slate-800/80 p-6 space-y-6">
            <h3 className="text-lg font-bold text-white tracking-tight">Corporate Office</h3>
            
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-lg bg-indigo-950 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-white">Phone Support</h4>
                  <p className="text-slate-400 mt-0.5">{contactDetails.phone}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-lg bg-indigo-950 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-white">Email Admissions</h4>
                  <p className="text-slate-400 mt-0.5">{contactDetails.email}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-lg bg-indigo-950 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-white">Syllabus Campus</h4>
                  <p className="text-slate-400 mt-0.5">{contactDetails.address}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-lg bg-indigo-950 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-white">Admissions Hours</h4>
                  <p className="text-slate-400 mt-0.5">{contactDetails.officeHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Custom SVG Campus Map Representation */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden relative group">
            {/* Overlay card */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-[10px] font-mono text-slate-300">
              Campus Map Preview
            </div>

            {/* Custom Interactive SVG Art */}
            <svg
              viewBox="0 0 400 250"
              className="w-full h-auto bg-slate-950 block transform group-hover:scale-[1.02] transition-transform duration-500"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid Lines */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Roads / Paths */}
              <path d="M 0 100 L 400 100" stroke="#334155" strokeWidth="6" fill="none" />
              <path d="M 150 0 L 150 250" stroke="#334155" strokeWidth="6" fill="none" />
              <path d="M 0 200 C 150 200, 200 150, 400 150" stroke="#334155" strokeWidth="4" fill="none" strokeDasharray="4 4" />

              {/* Campus Buildings (Rectangles/Circles) */}
              <rect x="50" y="30" width="60" height="40" rx="4" fill="#1e1b4b" stroke="#312e81" strokeWidth="1" />
              <text x="80" y="55" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Library</text>

              <rect x="250" y="40" width="80" height="45" rx="4" fill="#022c22" stroke="#064e3b" strokeWidth="1" />
              <text x="290" y="66" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">Science Hall</text>

              {/* Target Location Building (EduPortal) */}
              <rect x="220" y="140" width="100" height="60" rx="6" fill="#1e1e38" stroke="#4f46e5" strokeWidth="2" />
              <text x="270" y="170" fill="#ffffff" fontSize="9" fontWeight="extrabold" textAnchor="middle">EduPortal Campus</text>
              <text x="270" y="185" fill="#a5b4fc" fontSize="7" textAnchor="middle">100 Academic Circle</text>

              {/* Target Pin Marker */}
              <circle cx="270" cy="130" r="14" fill="#6366f1" fillOpacity="0.1" />
              <circle cx="270" cy="130" r="8" fill="#6366f1" fillOpacity="0.2" className="animate-ping" />
              <circle cx="270" cy="130" r="4" fill="#4f46e5" />
              
              {/* Compass Indicator */}
              <g transform="translate(360, 40)">
                <circle cx="0" cy="0" r="12" fill="none" stroke="#475569" strokeWidth="1" />
                <path d="M 0 -8 L 3 0 L 0 2 L -3 0 Z" fill="#ef4444" />
                <path d="M 0 8 L 3 0 L 0 -2 L -3 0 Z" fill="#94a3b8" />
                <text x="0" y="-12" fill="#94a3b8" fontSize="6" textAnchor="middle" fontWeight="bold">N</text>
              </g>
            </svg>
          </div>
        </section>
      </div>
    </div>
  );
}
