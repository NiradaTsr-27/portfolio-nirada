export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  gallery: string[];
  techStack: string[];
  category: "Web" | "AI" | "Mobile" | "Game Dev";
  features: string[];
  challenges: string;
  links: {
    github: string;
    live: string;
  };
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: "Frontend" | "Backend" | "Tools & DevOps" | "AI & Data Science";
  iconName: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  details: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  category: "work" | "education" | "achievement";
}

export const developerProfile = {
  name: "Nirada Thongudomsiri",
  title: "Developer",
  tagline:
    "Passionate about Web development, AI, Game development, and Interactive digital experiences.",
  bio: "Recent graduate with experience in web development, AI, and game development. Skilled in building responsive web applications using React, Next.js, and Node.js, with knowledge of database management and IT support. Passionate about creating interactive digital experiences and continuously learning new technologies.",
  email: "nirada.tsr@gmail.com",
  resumeUrl: "#",
  socials: {
    github: "https://github.com/NiradaTsr-27",
    linkedin: "https://www.linkedin.com/in/nirada-thongudomsiri-3068a1377/",
  },
  stats: [
    { label: "Projects Completed", value: "3" },
    { label: "Technologies Mastered", value: "3+" },
    { label: "Years of Experience", value: "0" },
    { label: "Open Source Contribs", value: "0" },
  ],
};

export const skills: Skill[] = [
  // Frontend
  {
    name: "React / Next.js",
    level: 60,
    category: "Frontend",
    iconName: "React",
  },
  {
    name: "TypeScript",
    level: 60,
    category: "Frontend",
    iconName: "TypeScript",
  },
  {
    name: "Tailwind CSS",
    level: 20,
    category: "Frontend",
    iconName: "Tailwind",
  },
  // Backend
  {
    name: "Node.js / Express",
    level: 40,
    category: "Backend",
    iconName: "Node",
  },
  {
    name: "Python / FastAPI",
    level: 65,
    category: "Backend",
    iconName: "Python",
  },
  { name: "GraphQL / REST", level: 20, category: "Backend", iconName: "Api" },
  {
    name: "PostgreSQL / Prisma",
    level: 65,
    category: "Backend",
    iconName: "Db",
  },
  // Tools & DevOps
  
  {
    name: "Git / GitHub",
    level: 50,
    category: "Tools & DevOps",
    iconName: "Git",
  },
  // AI & Data Science
  {
    name: "PyTorch",
    level: 20,
    category: "AI & Data Science",
    iconName: "Brain",
  },
  {
    name: "OpenAI / Claude APIs",
    level: 80,
    category: "AI & Data Science",
    iconName: "Ai",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Underwater Exploration Game",
    slug: "underwater-exploration",
    shortDesc:
      "An immersive underwater exploration game with dynamic marine life and interactive environments.",
    fullDesc:
      "Underwater Exploration is an engaging game that allows players to dive into the depths of the ocean and discover Fish and coral reefs.",
    image: "/project-underwater-1.png",
    gallery: ["/project-underwater-1.png", "/project-underwater-2.png"],
    techStack: [
      "Unity",
      "C++",
      "JSON",
      "Blender",
    ],
    category: "Game Dev",
    features: [
      "Explore procedurally generated underwater landscapes teeming with dynamic marine life",
      "Collect and catalog  fish and coral species, each with distinct behaviors and habitats",
      "shop for upgrades and new equipment to enhance your diving capabilities and reach deeper ocean zones",
    ],
    challenges:
      "Creating realistic underwater physics and fluid dynamics to enhance immersion. Solved by implementing a custom buoyancy system and fish behavior scripts.",
    links: {
      github: "",
      live: "/underwater-nirada.pdf",
    },
    featured: true,
  },
  {
    id: "2",
    title: "PokeDex Web App",
    slug: "pokedex-web-app",
    shortDesc:
      "A comprehensive Pokémon database with detailed information and interactive features.",
    fullDesc:
      "The PokeDex Web App is a fan-made application that provides detailed information about various Pokémon species. It features a clean, modern interface with search and filtering capabilities, allowing users to explore the world of Pokémon like never before.",
    image: "/project-pokedex.png",
    gallery: ["/project-pokedex.png"],
    techStack: [
      "Next.js",
      "GraphQL",
      "TypeScript",
    ],
    category: "Web",
    features: [
      "Comprehensive database of Pokémon species with detailed information and stats",
      "Interactive search and filtering options to easily find specific Pokémon based on type, abilities, and more",
      "Responsive design for seamless browsing on both desktop and mobile devices",

    ],
    challenges:
      "Integrating a large dataset of Pokémon information while maintaining fast load times and smooth performance. Solved by implementing efficient GraphQL queries and optimizing image assets.",
    links: {
      github: "https://github.com/NiradaTsr-27/search-pokemon",
      live: "https://search-pokemon-flax.vercel.app/",
    },
    featured: true,
  },
  {
    id: "3",
    title: "Recycling Bank Web App",
    slug: "recycling-bank-web-app",
    shortDesc:
      "A web application for managing and tracking recycling activities and contributions.",
    fullDesc:
      "The Recycling Bank Web App provides users with a platform to track their recycling efforts, earn rewards, and contribute to environmental conservation. It features a user-friendly interface for logging recyclable items, viewing impact statistics, and connecting with local recycling programs.",
    image: "/project-recycling-bank.png",
    gallery: ["/project-recycling-bank.png"],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
    ],
    category: "Web",
    features: [
      "Log and track recycling activities with a user-friendly interface",
      "sell recyclable items and earn rewards based on the quantity and type of materials recycled",
      "View impact statistics and see how your recycling efforts contribute to environmental conservation",
      
    ],
    challenges:
      " Designing a scalable backend to handle user data and recycling transactions while ensuring data integrity and security. Solved by implementing robust authentication and database management practices.",
    links: {
      github: "https://github.com/NiradaTsr-27/Recycling-bank-web",
      live: "https://recycling-bank.vercel.app/",
    },
    featured: true,
  },
  {
    id: "4",
    title: "Vortex Engine: Web 3D Game SDK",
    slug: "vortex-engine-sdk",
    shortDesc:
      "A lightweight, modular 3D game engine and editor running entirely in client-side TypeScript.",
    fullDesc:
      "Vortex Engine provides indie developers with an instant collaborative workspace. Design scenes visually, attach scripts via an integrated IDE, and build lightweight, high-performance HTML5/WebGL matches that download in under 1.5MB.",
    image: "/project-vortex.jpg",
    gallery: ["/project-vortex.jpg"],
    techStack: [
      "TypeScript",
      "WebGL",
      "Rust / Wasm",
      "TailwindCSS",
      "Vite",
      "IndexedDB",
    ],
    category: "Game Dev",
    features: [
      "Zero-install live 3D viewport editor with drag-and-drop support",
      "Extremely fast physics compiler written in Rust and loaded as WebAssembly",
      "Visual shader creator producing high-performance GPU routines",
      "One-click serverless deployment hosting games directly on IPFS or Vercel",
    ],
    challenges:
      "Managing high-performance Rust-to-JS data marshaling during frame-by-frame physics loops. Achieved rapid speeds by mapping raw memory buffers between the Wasm linear memory heap and WebGL attributes directly.",
    links: {
      github: "https://github.com/example/vortex",
      live: "https://example.com/vortex",
    },
    featured: false,
  },
  {
    id: "5",
    title: "ScribeNet: AI Agent Technical Assistant",
    slug: "scribenet-assistant",
    shortDesc:
      "A command-line tool and web interface that reads codebases, maps call stacks, and auto-generates API docs.",
    fullDesc:
      "ScribeNet crawls projects recursively, parsing AST structures in TypeScript, Python, and Go, compiling them into a visual interactive graph, and writing standard Swagger or Markdown reference manuals automatically.",
    image: "/project-scribenet.jpg",
    gallery: ["/project-scribenet.jpg"],
    techStack: [
      "Next.js",
      "Node.js",
      "Tree-Sitter",
      "TypeScript",
      "LangChain",
      "TailwindCSS",
    ],
    category: "AI",
    features: [
      "Full Abstract Syntax Tree parser supporting major server architectures",
      "Interactive dependency hierarchy visualizer leveraging canvas nodes",
      "Continuous CI/CD hook that updates API manuals automatically on Git Push",
      "Context-aware AI search prompt answering queries about large source code folders",
    ],
    challenges:
      "Handling enormous codebases without blowing past context boundaries or rate limits. Resolved by building a custom indexing system that parses syntax structures locally before summarizing node packages with local LLMs.",
    links: {
      github: "https://github.com/example/scribenet",
      live: "https://example.com/scribenet",
    },
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "exp1",
    role: "Intern - Software Developer",
    company: "Protoss Technology Co.,LTD.",
    period: "2024 Apr - Jun (2 months)",
    description: [
      "Developed web applications using React, Next.js and Kotlin.",
      "Maintained and enhanced websites with TypeScript and JavaScript.",
      "Used PostgreSQL for database operations and data management.",
    ],  
    skills: [
      "Kotlin",
      "Java",
      "Java spring boot",
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "FastAPI",
      "Python",
      "Docker",
      "PostgreSQL",
    ],
  },
  {
    id: "exp2",
    role: "Intern - Graphic Design & IT Support",
    company: "Well Graded Engineering PLC.",
    period: "2022  March - May (2 months)",
    description: [
      "Created annual reports using Adobe Illustrator to present company operations and financial performance.",
      "Provided IT support to employees, troubleshooting hardware and software issues.",
      "Assisted in maintaining computer systems.",
      "Coordinated with team members to resolve technical and operational issues.",
    ],
    skills: [
      "wordpress",
      "Networking",
    ],
  },
  {
    id: "exp3",
    role: "Intern - IT Support",
    company: "Loei Provincial Administrative Organization",
    period: "2020  May - Nov (6 months)",
    description: [
      "Assisted in developing and maintaining the organization’s website.",
      "Provided IT support for hardware, software, computers and printers.",
      "Supported basic network setup and troubleshooting (LAN, Wi-Fi, connectivity issues).",
    ],
    skills: [
      "wordpress",
    ],
  },
];

export const educations: Education[] = [
  {
    id: "edu1",
    degree: "Bachelor of Information Technology",
    school: "King Mongkut’s University of Technology North Bangkok",
    period: "2022 - 2025",
    details:
      "Currently pursuing a Bachelor's degree in Information Technology with a focus on software development. Expected to graduate in 2025.",
  },
  {
    id: "edu2",
    degree: "High Vocational Certificate",
    school: "Loei Technical College",
    period: "2020 - 2022",
    details:
      " Completed a High Vocational Certificate in Information Technology, gaining foundational knowledge in programming, database management, and IT support. Graduated with honors in 2022.",
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: "t1",
    year: "2024",
    title: "Promoted to Lead Architect at Synthetix Labs",
    description:
      "Assumed engineering ownership over the core AI systems, shaping structural design and guiding the developer squad.",
    category: "work",
  },
  {
    id: "t2",
    year: "2023",
    title: "Creator of CognitiveFlow SDK",
    description:
      "Released CognitiveFlow open-source, which quickly gathered 4,500+ GitHub Stars and got featured in JS Weekly.",
    category: "achievement",
  },
  {
    id: "t3",
    year: "2022",
    title: "Joined Lumina Studio",
    description:
      "Stepped in as a Senior Frontend Specialist to modernize high-performance web dashboard architectures.",
    category: "work",
  },
  {
    id: "t4",
    year: "2020",
    title: "Graduated Stanford University",
    description:
      "Earned a B.S. in Computer Science with Honors, specializing in HCI and Neural Networks.",
    category: "education",
  },
  {
    id: "t5",
    year: "2019",
    title: "Open Source Scholar",
    description:
      "Successfully built a client-side WebGL canvas render pipeline under the Google Summer of Code program.",
    category: "achievement",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
