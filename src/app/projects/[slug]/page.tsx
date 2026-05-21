import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/portfolioData";
import { ExternalLink, ArrowLeft, CheckCircle, Cpu, Layers } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Transition from "@/components/ui/Transition";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Transition>
      {/* Ambient background glows */}
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-violet-600/5 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-cyan-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 select-text">
        {/* Back Link */}
        <div className="mb-8 select-none">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to projects grid</span>
          </Link>
        </div>

        {/* HEADER SECTION */}
        <div className="space-y-4 mb-12 text-left">
          <div className="flex items-center gap-2 select-none">
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/20 bg-cyan-500/5">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {project.title}
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-light">
            {project.shortDesc}
          </p>
        </div>

        {/* HERO VISUAL AREA */}
        <div className="relative aspect-video rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden mb-12 flex items-center justify-center pointer-events-none select-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 to-cyan-500/20 opacity-60" />
          <span className="font-mono text-xs text-slate-500 uppercase tracking-widest z-10 flex items-center gap-2">
            <Layers className="w-6 h-6 text-violet-400" />
            <span>{project.title} Render Visual</span>
          </span>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Info */}
          <div className="md:col-span-8 space-y-8 text-left">
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-white uppercase tracking-wider">
                Overview
              </h2>
              <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base">
                {project.fullDesc}
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-bold text-white uppercase tracking-wider">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 gap-3">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-slate-400 text-xs md:text-sm font-light leading-relaxed"
                  >
                    <CheckCircle className="w-4.5 h-4.5 text-violet-400 mt-0.5 shrink-0 select-none" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges Box */}
            <div className="p-5 rounded-xl border border-violet-500/10 bg-violet-500/5 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-violet-400 flex items-center gap-2 select-none">
                <Cpu className="w-4 h-4" />
                <span>Engineering Challenges & Solutions</span>
              </h3>
              <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
                {project.challenges}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-6 text-left select-none">
            {/* Tech stack */}
            <Card enableGlow={true} glowColor="purple" className="p-5 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Applied Arsenal
              </h3>
              <div className="flex flex-wrap gap-1.5 pointer-events-none">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono text-slate-300 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            {/* Project CTA Links */}
            <Card enableGlow={true} glowColor="cyan" className="p-5 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Project Links
              </h3>
              <div className="space-y-3">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full"
                >
                  <Button variant="primary" size="sm" className="w-full gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    <span>Repository</span>
                  </Button>
                </a>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full"
                >
                  <Button variant="secondary" size="sm" className="w-full gap-2 border border-slate-800 bg-slate-950/60 hover:bg-slate-900">
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Launch Demo</span>
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Transition>
  );
}
