# Next.js Exploration Project

A modern, fast, and responsive Next.js portfolio/exploration application designed to showcase and compare the features of the Next.js App Router ecosystem against traditional single-page React applications (e.g., Vite SPAs).

Developed by **Fayha Imran** during their internship.

---

## 🚀 Key Features Demonstrated

This project serves as a practical demonstration of several next-generation React and Next.js capabilities:

*   **File-Based Routing:** Demystifies Next.js route structures by mapping directory-nested files (`src/app/page.js`, `src/app/about/page.js`) directly to web pages.
*   **Static Site Generation (SSG):** Generates optimized HTML files at build time for lightning-fast delivery via CDN.
*   **Server-Side Rendering (SSR):** Pre-renders pages dynamically on each request to ensure fresh data and highly optimized Search Engine Optimization (SEO).
*   **Responsive Styling:** Clean and responsive interface using **Tailwind CSS v4** with a curated dark/light color palette, hover micro-interactions, and smooth fade-in animations.
*   **Optimized Performance:** Implements automatic font loading and optimization using `next/font/google` (Inter).

---

## 📊 Next.js vs. React (Vite SPA) Comparison

Inside this project is a dedicated comparison highlighting the core architectural differences:

| Feature | React (Vite SPA) | Next.js (App Router) |
| :--- | :--- | :--- |
| **Rendering Strategy** | Client-Side Rendering (CSR) | SSR, SSG, ISR, and CSR |
| **Routing** | Client-side libraries (e.g., React Router) | Built-in File-Based Routing |
| **SEO & Initial Load** | Empty HTML shell, slower initial render, lower SEO | Pre-rendered HTML, excellent performance, top SEO |
| **Full-Stack Capability** | Client-only (requires standalone API server) | Built-in Route Handlers (API) & Server Actions |

---

## 🛠️ Tech Stack & Dependencies

*   **Framework:** [Next.js v16](https://nextjs.org/) (App Router structure)
*   **Library:** [React v19](https://react.dev/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Fonts:** [Inter](https://fonts.google.com/specimen/Inter) via `next/font`

---

## 📁 Project Directory Structure

```text
Portfolio in next.js/
├── public/                 # Static assets (favicons, images)
├── src/
│   └── app/
│       ├── about/
│       │   └── page.js     # About page (Comparison view)
│       ├── globals.css     # Global styles and Tailwind configuration
│       ├── layout.js       # App-wide root layout & metadata configuration
│       └── page.js         # Homepage (Hero and feature showcases)
├── package.json            # Scripts and dependency manifests
├── tailwind.config.cjs     # Styling configuration
└── next.config.mjs         # Next.js compiler settings
```

---

## ⚙️ Getting Started & Run Locally

To get a local copy up and running, follow these simple steps:

### Prerequisites

Make sure you have Node.js installed (version 18+ recommended) and npm.

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

### Running the Application

*   **Development Mode:** Runs the local development server at `http://localhost:3000`.
    ```bash
    npm run dev
    ```
*   **Production Build:** Compiles the application and generates static files.
    ```bash
    npm run build
    ```
*   **Start Production Server:** Runs the built app in production mode.
    ```bash
    npm run start
    ```
*   **Linter:** Checks code for styling and syntax issues.
    ```bash
    npm run lint
    ```

---

## 📄 License

This project is open-source and available under the MIT License.
