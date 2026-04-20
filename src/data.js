export const profile = {
  name: "Hein Min Htet",
  title: "Full Stack Developer",
  about: "Versatile Software Developer with 4+ years of experience delivering end-to-end solutions in dynamic web environments. Skilled in both frontend (React.js, Vue.js, Next.js) and backend (Node.js, NestJS, PostgreSQL) technologies. Adept at building full-featured platforms from design to deployment, with a strong grasp of UI/UX, database systems, and scalable server architectures.",
  location: "Bangkok, Thailand",
  email: "htetminhein755@gmail.com",
  phone: "+66 962192574",
  github: "https://github.com/Hein21-bot",
};

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "React.js",     level: "expert" },
      { name: "Vue.js",       level: "expert" },
      { name: "Next.js",      level: "expert" },
      { name: "TypeScript",   level: "expert" },
      { name: "TailwindCSS",  level: "expert" },
      { name: "Nuxt.js",      level: "proficient" },
      { name: "Redux",        level: "proficient" },
      { name: "Zustand",      level: "proficient" },
      { name: "Material UI",  level: "proficient" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js",      level: "expert" },
      { name: "NestJS",       level: "expert" },
      { name: "Express.js",   level: "expert" },
      { name: "PostgreSQL",   level: "expert" },
      { name: "REST APIs",    level: "expert" },
      { name: "Prisma",       level: "proficient" },
      { name: "Sequelize",    level: "proficient" },
      { name: "MySQL",        level: "proficient" },
      { name: "Firebase",     level: "proficient" },
    ],
  },
  {
    category: "Real-time & Infra",
    icon: "🔌",
    items: [
      { name: "Socket.io",    level: "expert" },
      { name: "AWS",          level: "proficient" },
      { name: "Git",          level: "expert" },
      { name: "Pusher",       level: "proficient" },
      { name: "Apache",       level: "proficient" },
      { name: "Docker",       level: "learning" },
      { name: "GraphQL",      level: "learning" },
    ],
  },
];

export const experience = [
  {
    role: "Freelance Software Developer",
    company: "Independent",
    period: "May 2025 — Present",
    current: true,
    points: [
      "Built a real-time platform with role-based dashboards for users, agents, and admins.",
      "Developed responsive UI using React.js, Zustand, AntD, and Socket.io.",
      "Implemented live data tracking, custom reporting modules, and real-time notifications.",
      "Optimized performance, state handling, and data reliability.",
    ],
    stack: ["React.js", "Socket.io", "Zustand", "AntD"],
  },
  {
    role: "Software Developer",
    company: "Bardar",
    location: "Sydney",
    period: "May 2024 — Jan 2025",
    points: [
      "Built and maintained full-stack features for admin and event tools using React.js, TypeScript, Node.js, and PostgreSQL.",
      "Engineered backend services for admin and event systems using Node.js, TypeScript, and Prisma.",
      "Managed PostgreSQL integrations to support real-time data operations.",
    ],
    stack: ["React.js", "Node.js", "TypeScript", "PostgreSQL", "Prisma"],
  },
  {
    role: "Freelance Software Developer",
    company: "Independent",
    period: "Oct 2023 — Mar 2024",
    points: [
      "Developed full-stack barcode generation tool, from backend logic to frontend interface.",
      "Created map visualization platform with complete frontend and backend coordination.",
      "Built packaging barcode engine with optimized data flow and logic.",
    ],
    stack: ["Node.js", "Next.js", "JavaScript"],
  },
  {
    role: "Software Developer",
    company: "Trailblazer IT Solutions",
    period: "Jun 2023 — Sep 2023",
    points: [
      "Built delivery tracking web app using Next.js on frontend and Firebase on backend.",
      "Developed backend features with Firebase, including data sync and user verification.",
      "Delivered fast, responsive UI with secure backend integration.",
    ],
    stack: ["Next.js", "Firebase", "Google Maps API"],
  },
  {
    role: "Software Developer",
    company: "Evercomm Singapore Pte Ltd",
    period: "Nov 2019 — May 2023",
    points: [
      "Led backend development of an HRMS system in Node.js, mentoring junior devs and enforcing coding standards.",
      "Designed backend modules for restaurant and survey platforms with robust API structures.",
      "Developed reporting engine with real-time data integration and advanced logic.",
      "Built custom reporting modules with live data visuals across multiple platforms.",
    ],
    stack: ["Node.js", "React.js", "PostgreSQL", "REST APIs", "SQL"],
  },
];

export const projects = [
  {
    name: "Real-time Role Dashboard",
    desc: "Multi-role platform with live data tracking, custom reporting, and real-time notifications for users, agents, and admins.",
    stack: ["React.js", "Socket.io", "Zustand", "AntD", "Node.js"],
    icon: "📊",
    type: "fullstack",
  },
  {
    name: "HRMS Platform",
    desc: "Full HR management system with survey and restaurant modules. Led development across 3.5 years at Evercomm Singapore.",
    stack: ["Node.js", "React.js", "PostgreSQL", "REST API"],
    icon: "🏢",
    type: "fullstack",
  },
  {
    name: "Event Management System",
    desc: "Admin dashboard for event tools with real-time UI updates, TypeScript backend, and Prisma database layer.",
    stack: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    icon: "🎫",
    type: "fullstack",
  },
  {
    name: "Delivery Tracking App",
    desc: "Real-time delivery tracking web app with map visualizations, Firebase auth, and responsive mobile-first UI.",
    stack: ["Next.js", "Firebase", "Google Maps API"],
    icon: "🚚",
    type: "frontend",
  },
  {
    name: "Barcode Generation Tool",
    desc: "Full-stack barcode generation tool with optimized data flow, from backend logic to clean frontend interface.",
    stack: ["Node.js", "JavaScript", "Next.js"],
    icon: "🔲",
    type: "fullstack",
  },
  {
    name: "Map Visualization Platform",
    desc: "Interactive geographical map platform with advanced frontend visualizations and secure backend data endpoints.",
    stack: ["Next.js", "Node.js", "REST API"],
    icon: "🗺",
    type: "frontend",
  },
];

export const learning = [
  { name: "Golang",    icon: "🐹" },
  { name: "Docker",    icon: "🐳" },
  { name: "GraphQL",   icon: "⬡" },
  { name: "Kubernetes",icon: "☸️" },
];
