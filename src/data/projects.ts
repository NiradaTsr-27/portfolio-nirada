export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  gallery: string[];
  techStack: string[];
  category: "Frontend" | "Backend" | "Fullstack";
  features: string[];
  challenges: string;
  links: {
    github: string;
    live: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    slug: "e-commerce-platform",
    shortDesc: "A fullstack e-commerce solution with Next.js and Stripe.",
    fullDesc: "This project is a comprehensive e-commerce platform built to handle modern online retail needs. It features a responsive design, seamless checkout process, and an intuitive admin dashboard.",
    image: "/project1.jpg", // Add actual placeholder/image later
    gallery: ["/project1.jpg", "/project1-2.jpg"],
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    category: "Fullstack",
    features: [
      "User authentication and authorization",
      "Stripe payment gateway integration",
      "Product filtering and search",
      "Admin dashboard for inventory management"
    ],
    challenges: "Handling real-time inventory updates and ensuring secure transactions were the primary challenges. Implemented optimistic UI updates and robust webhook handlers for Stripe.",
    links: {
      github: "https://github.com",
      live: "https://example.com"
    }
  },
  {
    id: "2",
    title: "Task Management App",
    slug: "task-management-app",
    shortDesc: "A Kanban-style task management wrapper for personal productivity.",
    fullDesc: "Designed for individuals and small teams, this application provides an interactive Kanban board experience to track tasks across different stages of completion.",
    image: "/project2.jpg",
    gallery: ["/project2.jpg"],
    techStack: ["React", "Redux Toolkit", "Vanilla CSS", "Firebase"],
    category: "Frontend",
    features: [
      "Drag and drop task cards",
      "Real-time database updates",
      "Customizable board columns",
      "Dark mode support"
    ],
    challenges: "Optimizing the drag-and-drop performance for a large number of cards required careful memoization and state management structuring.",
    links: {
      github: "https://github.com",
      live: "https://example.com"
    }
  },
  {
    id: "3",
    title: "Finance REST API",
    slug: "finance-rest-api",
    shortDesc: "A scalable backend service for personal finance tracking.",
    fullDesc: "A robust API providing endpoints for managing transactions, budgets, and generating financial reports. Secured with JWT and rate limiting.",
    image: "/project3.jpg",
    gallery: ["/project3.jpg"],
    techStack: ["Node.js", "Express", "MongoDB", "Jest"],
    category: "Backend",
    features: [
      "JWT-based authentication",
      "Comprehensive unit testing",
      "Aggregation pipelines for reporting",
      "Dockerized containerization"
    ],
    challenges: "Designing efficient MongoDB aggregation pipelines to quickly compute monthly summaries over large datasets.",
    links: {
      github: "https://github.com",
      live: "https://example.com"
    }
  }
];

export const featuredProjects = projects.slice(0, 2);
