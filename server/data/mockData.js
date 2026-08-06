export const courses = [
  {
    slug: "web-development",
    title: "Full-Stack Web Development",
    subtitle: "Master modern web development from HTML/CSS to Next.js & Node.js",
    description: "Become a professional full-stack developer. Learn frontend styling, component frameworks, backend service construction, database design, deployment, and developer best practices using industry-standard tools.",
    category: "Development",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    rating: 4.8,
    reviews: 245,
    price: "$99",
    instructor: "Sarah Jenkins",
    learn: [
      "Build responsive websites using HTML5, CSS3, and Tailwind CSS v4",
      "Master modern JavaScript, ES6+ features, and React components",
      "Develop secure, production-ready REST APIs using Node.js and Express",
      "Design database architectures using PostgreSQL and MongoDB",
      "Deploy full-stack applications with CI/CD and secure hosting providers"
    ],
    curriculum: [
      {
        title: "Module 1: Frontend Fundamentals & Layouts",
        lessons: [
          "HTML5 Semantic Markups & Modern Styling",
          "Flexbox, CSS Grid & Tailwind Utility Frameworks",
          "Responsive layouts and Mobile-First designs"
        ]
      },
      {
        title: "Module 2: React & Modern Architecture",
        lessons: [
          "React state management and Component Lifecycles",
          "Next.js App Router: Server vs Client Components",
          "Routing, Layouts, and Data Fetching Strategies"
        ]
      },
      {
        title: "Module 3: Backend Engineering & Deployment",
        lessons: [
          "NodeJS & ExpressJS REST API design",
          "NoSQL vs Relational Databases (MongoDB & PostgreSQL)",
          "JWT Security, API Middleware & Production Deployment"
        ]
      }
    ]
  },
  {
    slug: "ai-engineering",
    title: "AI & Deep Learning Engineering",
    subtitle: "Build and deploy state-of-the-art AI models, RAG systems, and agents",
    description: "Dive deep into neural networks, computer vision, natural language processing, and modern LLM frameworks. Learn how to train models, orchestrate AI agents, and deploy heavy intelligence loads to production.",
    category: "AI & Data Science",
    duration: "16 Weeks",
    level: "Advanced",
    rating: 4.9,
    reviews: 182,
    price: "$149",
    instructor: "Dr. Alan Mercer",
    learn: [
      "Train deep neural network structures using PyTorch and TensorFlow",
      "Implement Computer Vision systems (CNNs) and Natural Language Processing models",
      "Build Retrieval-Augmented Generation (RAG) pipelines for enterprise data",
      "Design autonomous AI agents using LangChain and LlamaIndex",
      "Deploy models efficiently using Docker containers and Cloud serverless GPUs"
    ],
    curriculum: [
      {
        title: "Module 1: Neural Networks & Core ML",
        lessons: [
          "Linear Algebra, Calculus, and Data Science Fundamentals",
          "Supervised Learning: Classification & Regression",
          "Deep Neural Nets from Scratch with PyTorch"
        ]
      },
      {
        title: "Module 2: Natural Language Processing & Transformers",
        lessons: [
          "Word Embeddings and Recurrent Architectures",
          "The Transformer Architecture: Self-Attention & GPTs",
          "Computer Vision: CNNs, Vision Transformers & Generative Models"
        ]
      },
      {
        title: "Module 3: Generative AI & Production MLOps",
        lessons: [
          "Fine-Tuning Foundation Models (LLMs)",
          "Vector Databases & RAG Architectures",
          "Model Quantization, Containerization & Serverless APIs"
        ]
      }
    ]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX & Product Design Masterclass",
    subtitle: "Design beautiful, intuitive, and user-centric interfaces from scratch",
    description: "Learn the complete product design cycle. Master user research, wireframing, interactive prototyping, and usability testing. Build a high-end designer portfolio featuring projects that captivate product managers.",
    category: "Design",
    duration: "8 Weeks",
    level: "Beginner",
    rating: 4.7,
    reviews: 310,
    price: "$79",
    instructor: "Elena Rostova",
    learn: [
      "Conduct professional user research and create user journey maps",
      "Apply UI design principles: Typography, Color Theory, and Spacing Grids",
      "Construct scalable design systems and reusable Figma components",
      "Build high-fidelity interactive prototypes with complex animations",
      "Conduct usability tests and write comprehensive design reports"
    ],
    curriculum: [
      {
        title: "Module 1: Foundations & UX Research",
        lessons: [
          "Design Thinking and User Centered Design",
          "Interviews, Persona Creation & User Journey Mapping",
          "Information Architecture & Low-Fidelity Wireframing"
        ]
      },
      {
        title: "Module 2: Figma Mastery & Visual Systems",
        lessons: [
          "Figma Interface, Vectors & Auto-Layout v5",
          "Defining Typography Scales and Color Palettes",
          "Building Design Systems: Components & Variants"
        ]
      },
      {
        title: "Module 3: Prototyping & Handoff",
        lessons: [
          "Advanced Micro-interactions & Smart Animate",
          "Usability Testing & Iterative Design Refinements",
          "Developer Collaboration: Exporting, Specs & Handoff"
        ]
      }
    ]
  },
  {
    slug: "data-science",
    title: "Data Science & Business Analytics",
    subtitle: "Turn messy datasets into powerful, actionable business intelligence",
    description: "Equip yourself with the skills to analyze, visualize, and extract business answers from data. Master Python libraries, structure complex SQL queries, and construct interactive corporate intelligence boards.",
    category: "AI & Data Science",
    duration: "10 Weeks",
    level: "Intermediate",
    rating: 4.6,
    reviews: 156,
    price: "$89",
    instructor: "Sarah Jenkins",
    learn: [
      "Clean, filter, and transform complex datasets using Python Pandas and NumPy",
      "Query production databases with complex SQL Joins and aggregations",
      "Perform exploratory data analysis and build statistical hypothesis tests",
      "Design executive Tableau dashboards containing multi-source metrics",
      "Build and evaluate predictive machine learning regression models"
    ],
    curriculum: [
      {
        title: "Module 1: Data Analysis with Python",
        lessons: [
          "Python programming structures and Jupyter Environments",
          "Data Analysis with Pandas and numerical manipulations with NumPy",
          "Data cleaning methods: handling Nulls, Outliers, and duplicates"
        ]
      },
      {
        title: "Module 2: Databases & SQL Querying",
        lessons: [
          "Relational Database modeling & Normalization",
          "Advanced SQL SELECT statements, Joins, and CTEs",
          "Connecting databases to Python notebooks"
        ]
      },
      {
        title: "Module 3: Visual Analytics & Statistics",
        lessons: [
          "Descriptive Statistics, Probability, and Hypothesis Testing",
          "Visualizing trends: Matplotlib, Seaborn, and Tableau",
          "Introduction to Predictive Modelling and Linear Regression"
        ]
      }
    ]
  }
];

export const instructors = [
  {
    name: "Sarah Jenkins",
    role: "Lead Software Architect & Educator",
    bio: "Sarah is a former senior engineer at Netflix and Google. With over 12 years of industry experience, she excels in React architectures and large-scale data systems. Her teaching philosophy centers around practical, code-first learning.",
    rating: 4.8,
    initials: "SJ",
    theme: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-400",
    skills: ["React", "Next.js", "Python", "Data Science", "SQL", "Docker"],
    courses: ["Full-Stack Web Development", "Data Science & Business Analytics"]
  },
  {
    name: "Dr. Alan Mercer",
    role: "Senior AI Scientist",
    bio: "Dr. Mercer holds a PhD in Artificial Intelligence from MIT. Previously, he conducted NLP research at OpenAI and led AI teams at Tesla. He is passionate about making advanced neural models accessible to developers worldwide.",
    rating: 4.9,
    initials: "AM",
    theme: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400",
    skills: ["PyTorch", "TensorFlow", "Deep Learning", "LLMs", "RAG", "Python"],
    courses: ["AI & Deep Learning Engineering"]
  },
  {
    name: "Elena Rostova",
    role: "Product Designer & Brand Consultant",
    bio: "Elena is a digital product designer with 8+ years of experience leading UI/UX projects at Airbnb and Spotify. She believes that software should not only work seamlessly but also evoke positive emotions through premium visual hierarchy.",
    rating: 4.7,
    initials: "ER",
    theme: "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400",
    skills: ["Figma", "User Research", "Interaction Design", "Prototyping", "Design Systems"],
    courses: ["UI/UX & Product Design Masterclass"]
  }
];
