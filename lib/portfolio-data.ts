export const profile = {
  name: "Chethan Gowda",
  title: "Full-Stack Developer · AI/ML · Blockchain",
  tagline:
    "2× hackathon winner shipping AI, blockchain, and modern web products under pressure.",
  location: "Bengaluru, Karnataka, India",
  email: "iamchethan2813@gmail.com",
  github: "https://github.com/chethangowda-web",
  linkedin: "https://linkedin.com/in/chethan-gowda-s-n-abb165329",
  resume: "/resume.pdf",
  roles: [
    "Full-Stack Developer",
    "AI Enthusiast",
    "Blockchain Builder",
    "Problem Solver",
  ],
}

export const stats = [
  { label: "Hackathons", value: 7, suffix: "+" },
  { label: "Wins", value: 2, suffix: "×" },
  { label: "Projects shipped", value: 6, suffix: "+" },
  { label: "Certifications", value: 3, suffix: "" },
]

export const education = [
  {
    school: "Presidency University, Bengaluru",
    degree: "B.E. in Computer Science",
    period: "2023 – 2027",
    detail:
      "Data Structures, Algorithms, OOP, DBMS, Web Development. Best Class Representative Award.",
  },
]

export const experiences = [
  {
    role: "GenAI Powered Data Analytics",
    company: "Tata Group · Forage",
    period: "May 2026",
    location: "Remote",
    points: [
      "Applied GenAI and predictive analytics to real-world business scenarios.",
      "Developed skills in AI model interpretation and BI reporting.",
    ],
  },
  {
    role: "Front-End Software Engineering",
    company: "Skyscanner · Forage",
    period: "May 2026",
    location: "Remote",
    points: [
      "Built a production-grade travel date picker with React.js and Backpack UI.",
      "Implemented accessible, responsive components with proper state management.",
    ],
  },
]

export const projects = [
  {
    id: "truthchain",
    name: "TruthChain",
    badge: "1st Place",
    category: "AI · Blockchain",
    description:
      "End-to-end content verification combining AI deepfake detection with blockchain immutability. Sub-second real-time analysis, deployed and live.",
    stack: ["JavaScript", "React.js", "Groq AI", "Polygon"],
    live: "https://truthchain-web.netlify.app",
    github: "https://github.com/chethangowda-web",
    featured: true,
    size: "lg",
  },
  {
    id: "careai",
    name: "CareAI",
    badge: "3rd Place",
    category: "AI · Full-Stack",
    description:
      "AI medical triage system with emergency pre-triage short-circuit logic for critical cases. Full-stack MVP targeting India's healthcare accessibility gap.",
    stack: ["Next.js 14", "Node.js", "Express", "Groq AI", "Tailwind"],
    live: null,
    github: "https://github.com/chethangowda-web/CareAI",
    featured: true,
    size: "md",
  },
  {
    id: "neuroguard",
    name: "NeuroGuard",
    category: "AI/ML",
    description:
      "Predictive server failure monitoring across 5+ metrics. ML models predict failures before occurrence, enabling early alerts.",
    stack: ["Python", "AI/ML", "Monitoring"],
    live: null,
    github: "https://github.com/chethangowda-web",
    size: "md",
  },
  {
    id: "task-manager",
    name: "Concurrent Task Manager",
    category: "Backend",
    description:
      "Supports 1000+ simultaneous tasks; 40% latency reduction via synchronized multithreading patterns.",
    stack: ["Java", "Multithreading", "Collections"],
    live: null,
    github: "https://github.com/chethangowda-web",
    size: "sm",
  },
  {
    id: "screen-share",
    name: "Screen Sharing App",
    category: "Web",
    description:
      "Browser-based screen sharing with native JS and WebRTC. Minimal latency, no plugins.",
    stack: ["JavaScript", "WebRTC", "Screen Capture API"],
    live: null,
    github: "https://github.com/chethangowda-web",
    size: "sm",
  },
  {
    id: "library",
    name: "Library Management System",
    category: "Backend",
    description:
      "Console-based system managing books, members, and issue/return workflows.",
    stack: ["Java", "CRUD", "File I/O"],
    live: null,
    github: "https://github.com/chethangowda-web",
    size: "sm",
  },
]

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js 14", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "WebRTC", level: 72 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 82 },
      { name: "REST APIs", level: 88 },
      { name: "Flask", level: 70 },
      { name: "FastAPI", level: 68 },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 92 },
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 78 },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Groq AI", level: 86 },
      { name: "GenAI", level: 80 },
      { name: "Predictive Analytics", level: 74 },
      { name: "Model Interpretation", level: 72 },
    ],
  },
  {
    title: "Blockchain",
    skills: [
      { name: "Polygon", level: 78 },
      { name: "Smart Contracts", level: 70 },
      { name: "Web3.js", level: 72 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Linux", level: 78 },
      { name: "Agile", level: 80 },
    ],
  },
]

export const certifications = [
  {
    title: "Front-End Software Engineering",
    issuer: "Skyscanner · Forage",
    date: "May 2026",
    id: "Dd3dmSPkAcbhmu8eX",
  },
  {
    title: "Certificate of Participation — Open Loop 26",
    issuer: "Yenepoya School of Engineering & Technology",
    date: "Apr 2026",
    id: "ed290f48-e414-4476-88af-abb2c6da22da",
  },
  {
    title: "Frontend Development & JavaScript",
    issuer: "OneRoadmap",
    date: "Jul 2025",
    id: "—",
  },
]

export const achievements = [
  "1st Place · UI/UX Design (OpenLoop 2026)",
  "3rd Place · CareAI (Groq AI Hackathon)",
  "Best Class Representative — Presidency University",
  "Competed in 7+ hackathons",
]

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
] as const
