# EduPortal - Next.js Student Course Portal

EduPortal is a responsive, feature-rich, and visually stunning multi-page student course portal built with **Next.js 16 (App Router)** and **Tailwind CSS v4**. This project serves as a showcase of modern Next.js architectural patterns, focusing on file-based routing, server layouts, dynamic segment parsing, client-side filtering, and custom error states.

Developed by **Fayha Imran** as part of the internship Web Development Track (Next.js Multi-Page Project challenge).

---

## 🚀 Key Features

*   **Next.js App Router & Layouts**: Demonstrates global layouts using nested layouts to keep reusable headers (`Navbar`) and footers (`Footer`) synchronized across pages.
*   **Dynamic Routing (`/courses/[slug]`)**: Implements dynamic page segments using **awaited async `params`** in compliance with Next.js 15+ specifications, complete with `generateStaticParams()` to allow Static Site Generation (SSG) caching at compile time.
*   **Interactive Search & Filter Catalog**: Features real-time course search queries and category filter tags (Development, Design, AI & Data Science) with instant client-side rendering.
*   **Checkout & Mock Enrollment**: Simulates registration via an interactive client-side enrollment form displaying course metadata (Duration, Skill Level, Certification) with processing states and success dialogs.
*   **Interactive Syllabus Timelines**: Leverages native HTML `<details>` and `<summary>` components to provide accordion structures without bloated JS libraries.
*   **Dynamic SEO Optimization**: Employs React 19's native metadata hoisting alongside Next.js's dynamic `generateMetadata()` to configure custom, search-engine-friendly `<title>` and `<meta>` tags per course.
*   **Admissions Form & Vector Campus Map**: Renders an interactive contact form with dynamic support ticket assignment and a custom inline vector SVG campus map illustration.
*   **Custom 404 "Lost in the Library" Page**: Gracefully handles broken paths with custom themed redirections back to safety.
*   **Tailwind CSS v4 Premium Dark Styling**: Sleek, slate-themed layout featuring card micro-animations, neon glow backdrops, and seamless responsive design for mobile, tablet, and desktop viewports.

---

## 📁 Project Directory Structure

```text
Portfolio in next.js/
├── public/                 # Static assets (favicons, images)
├── src/
│   ├── components/         # Reusable presentation and interaction components
│   │   ├── CourseCard.js       # Rating display, metadata tags, and CTA
│   │   ├── InstructorCard.js   # Instructor credentials and active classes
│   │   ├── Navbar.js           # Responsive glassmorphic layout header (Client Component)
│   │   ├── Footer.js           # Navigation links and newsletter (Client Component)
│   │   └── EnrollmentSidebar.js# Mock registration states (Client Component)
│   ├── data/
│   │   └── courses.js      # Centralized database (Mock course, teacher, contact data)
│   └── app/                # App Router Routes
│       ├── globals.css         # Tailwind v4 directives and theme variables
│       ├── layout.js           # Main template configuration
│       ├── page.js             # Home Page (Hero, stats counter, CTAs)
│       ├── courses/
│       │   ├── page.js         # Interactive catalog catalog (Client Component)
│       │   └── [slug]/
│       │       └── page.js     # SSG Dynamic course details (Server Component)
│       ├── instructors/
│       │   └── page.js         # Meet the faculty list (Server Component)
│       ├── contact/
│       │   └── page.js         # Contact forms & SVG campus map (Client Component)
│       └── not-found.js        # Custom 404 page ("Lost in the Library")
├── package.json            # Script commands and dependency manifests
├── tailwind.config.cjs     # Custom styling configuration
└── next.config.mjs         # Next.js configurations
```

---

## 🛠️ Tech Stack & Dependencies

*   **Core Framework**: [Next.js v16.2.12](https://nextjs.org/) (App Router layout)
*   **UI Library**: [React v19.2.4](https://react.dev/) (Supporting asynchronous params, server components, and metadata hoisting)
*   **Styling Engine**: [Tailwind CSS v4.0.0](https://tailwindcss.com/)
*   **Typography**: [Inter](https://fonts.google.com/specimen/Inter) loaded via `next/font/google`

---

## ⚙️ Getting Started & Run Locally

### Prerequisites
Make sure you have Node.js (version 18.17.0 or higher recommended) and npm installed.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/fayha-imran/next-js.git
   cd next-js
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Execution Scripts
*   **Start Local Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

*   **Verify Production Compilation (Recommended)**:
    Generates optimized production assets, builds static routes, and exports SSG pages.
    ```bash
    npm run build
    ```

*   **Launch Production Server**:
    ```bash
    npm run start
    ```

*   **Lint Check**:
    ```bash
    npm run lint
    ```
