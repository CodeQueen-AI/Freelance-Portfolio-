"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Space_Grotesk, Poppins, Playfair_Display } from "next/font/google";
import { FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";

const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const poppins  = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
});

/* ─── data ───────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    title: "AI SaaS Dashboard",
    description: "GPT-4 powered analytics platform with real-time charts, auth, and subscription billing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900",
    tech: ["Next.js", "OpenAI", "Supabase", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack · AI",
  },
  {
    id: 2,
    title: "Agentic RAG System",
    description: "Multi-agent RAG pipeline with LangChain, Pinecone vector store and Chainlit interface.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=900",
    tech: ["Python", "LangChain", "Pinecone", "OpenAI"],
    liveUrl: "#",
    githubUrl: "#",
    category: "AI · Python",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Full-featured storefront with Stripe checkout and AI-powered product recommendations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900",
    tech: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
  },
  {
    id: 4,
    title: "AI Automation Agent",
    description: "Autonomous agent connecting Slack, Notion & Gmail to automate daily workflows.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=900",
    tech: ["Python", "OpenAI SDK", "FastAPI", "React"],
    liveUrl: "#",
    githubUrl: "#",
    category: "AI · Automation",
  },
  {
    id: 5,
    title: "Portfolio Design System",
    description: "40+ reusable components built with Radix UI, Tailwind v4, and Framer Motion.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Frontend · Design",
  },
  {
    id: 6,
    title: "Real-time Chat App",
    description: "Messaging platform with rooms, file sharing, and an embedded AI assistant.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=900",
    tech: ["Next.js", "Socket.io", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack · Real-time",
  },
];

type Project = (typeof PROJECTS)[number];

/* ─── single card ────────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6%" });

  const row   = Math.floor(index / 3);
  const col   = index % 3;
  const delay = row * 0.1 + col * 0.08;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col overflow-hidden bg-white border border-gray-100
        shadow-[0_2px_16px_rgba(0,0,0,0.05)]
        hover:shadow-[0_20px_60px_rgba(0,121,121,0.14)]
        transition-shadow duration-500"
    >
      {/* ── image ── */}
      <div className="relative overflow-hidden h-56">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* always-visible gradient at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />

        {/* category badge — always visible */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`${poppins.className} px-3 py-1 rounded-full bg-[#007979] text-white text-[9px] font-bold uppercase tracking-[2px]`}>
            {project.category}
          </span>
        </div>

        {/* hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="absolute inset-0 bg-[#007979]/88 flex flex-col items-center justify-center gap-5 z-20"
            >
              {/* buttons row */}
              <motion.div
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 8, opacity: 0 }}
                transition={{ duration: 0.28, delay: 0.04 }}
                className="flex items-center gap-4"
              >
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#007979]
                    text-xs font-bold uppercase tracking-[2px]
                    hover:bg-[#007979] hover:text-white hover:border-white
                    border-2 border-white transition-colors duration-200 shadow-lg"
                >
                  <FiExternalLink size={13} />
                  Live Demo
                </motion.a>

                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/40
                    flex items-center justify-center text-white
                    hover:bg-white hover:text-[#007979]
                    transition-colors duration-200 shadow-lg"
                >
                  <FiGithub size={15} />
                </motion.a>
              </motion.div>

              {/* description inside overlay */}
              <motion.p
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 6, opacity: 0 }}
                transition={{ duration: 0.28, delay: 0.08 }}
                className={`${poppins.className} text-white/85 text-xs text-center px-6 leading-relaxed max-w-[260px]`}
              >
                {project.description}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── card body ── */}
      <div className="flex flex-col flex-1 p-5">
        {/* title row */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className={`${grotesk.className} text-[15px] font-bold text-black leading-snug
            group-hover:text-[#007979] transition-colors duration-300`}>
            {project.title}
          </h3>
          <motion.div
            animate={{ rotate: hovered ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center
              text-gray-400 group-hover:border-[#007979] group-hover:text-[#007979]
              transition-colors duration-300 mt-0.5"
          >
            <FiArrowUpRight size={13} />
          </motion.div>
        </div>

        {/* description */}
        <p className={`${poppins.className} text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2`}>
          {project.description}
        </p>

        {/* spacer */}
        <div className="flex-1" />

        {/* tech badges */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-50">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`${poppins.className} px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100
                text-[10px] font-semibold text-gray-500 tracking-wide
                group-hover:bg-[#007979]/6 group-hover:border-[#007979]/20 group-hover:text-[#007979]
                transition-colors duration-300`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* bottom teal accent line */}
      <motion.div
        className="h-[3px] bg-gradient-to-r from-[#007979] to-[#00c4c4]"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, delay: delay + 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
      />
    </motion.article>
  );
}

/* ─── section header ─────────────────────────────────── */
function Header() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="text-center mb-16">
      {/* eyebrow */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={`${poppins.className} text-[#007979] text-xs font-bold uppercase tracking-[5px] mb-5`}
      >
        Selected Work
      </motion.p>

      {/* main heading */}
      <div className="overflow-visible mb-5 pb-3">
        <motion.h2
          initial={{ y: 80, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className={`${playfair.className} text-black`}
          style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)", fontStyle: "italic", lineHeight: 1.15 }}
        >
          Projects I&apos;ve{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Built</span>
            {/* teal underline */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 bottom-1 w-full h-[6px] bg-[#007979]/25 rounded-full origin-left z-0"
            />
          </span>
        </motion.h2>
      </div>

      {/* sub */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.38, duration: 0.6 }}
        className={`${poppins.className} text-gray-500 text-base max-w-xl mx-auto leading-relaxed`}
      >
        Real-world products spanning full-stack web apps, AI systems, and automation —
        each crafted with precision and modern technology.
      </motion.p>

      {/* decorative dashes */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={inView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex items-center justify-center gap-1.5 mt-6"
      >
        <span className="w-8 h-[3px] rounded-full bg-[#007979]" />
        <span className="w-3 h-[3px] rounded-full bg-[#007979]/40" />
      </motion.div>
    </div>
  );
}

/* ─── section ────────────────────────────────────────── */
export default function Projects() {
  const ctaRef    = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-10%" });

  return (
    <section
      id="projects"
      className={`${poppins.className} bg-[#f9fffe] py-24 px-6 lg:px-10 relative overflow-hidden`}
    >
      {/* soft ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#007979]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#007979]/4 blur-[110px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        <Header />

        {/* ── 3-column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 28 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white
              text-sm font-semibold tracking-wide overflow-hidden relative
              hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-shadow duration-300"
          >
            <span className="absolute inset-0 bg-[#007979] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative z-10 flex items-center gap-3">
              <FiGithub size={16} />
              View All on GitHub
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
                →
              </motion.span>
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#007979]
              text-[#007979] text-sm font-semibold tracking-wide
              hover:bg-[#007979] hover:text-white
              transition-colors duration-300
              hover:shadow-[0_12px_40px_rgba(0,121,121,0.28)]"
          >
            Start a Project <FiArrowUpRight size={15} />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
