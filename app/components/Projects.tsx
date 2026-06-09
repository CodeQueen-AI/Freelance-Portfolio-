"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Space_Grotesk, Poppins, Playfair_Display } from "next/font/google";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const grotesk  = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const poppins  = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"], style: ["italic"] });

/* ─── Data ──────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    title: "AI SaaS Dashboard",
    description:
      "GPT-4 powered analytics platform with real-time charts, role-based auth, and Stripe subscription billing. Built to production scale.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400",
    tech: ["Next.js", "OpenAI", "Supabase", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
    tag: "AI",
    year: "2026",
    featured: true,
  },
  {
    id: 2,
    title: "Agentic RAG System",
    description:
      "Multi-agent RAG pipeline with LangChain, Pinecone vector store and a Chainlit conversational interface.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=900",
    tech: ["Python", "LangChain", "Pinecone", "OpenAI"],
    liveUrl: "#",
    githubUrl: "#",
    category: "AI",
    tag: "Python",
    year: "2026",
    featured: false,
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "Full-featured storefront with Stripe checkout, inventory management and AI-powered product recommendations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900",
    tech: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
    tag: "E-Commerce",
    year: "2025",
    featured: false,
  },
  {
    id: 4,
    title: "AI Automation Agent",
    description:
      "Autonomous workflow agent connecting Slack, Notion & Gmail to eliminate repetitive daily tasks.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=900",
    tech: ["Python", "OpenAI SDK", "FastAPI", "React"],
    liveUrl: "#",
    githubUrl: "#",
    category: "AI",
    tag: "Automation",
    year: "2026",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Design System",
    description:
      "40+ reusable React components with Radix UI primitives, Tailwind v4 tokens, and Framer Motion animations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Frontend",
    tag: "Design",
    year: "2025",
    featured: false,
  },
  {
    id: 6,
    title: "Real-time Chat App",
    description:
      "Messaging platform with topic rooms, file sharing, presence indicators and an embedded AI assistant.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=900",
    tech: ["Next.js", "Socket.io", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
    tag: "Real-time",
    year: "2026",
    featured: false,
  },
];

/* ─── Project card ──────────────────────────────────── */
function ProjectCard({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6%" });
  const col    = index % 3;
  const row    = Math.floor(index / 3);
  const delay  = col * 0.08 + row * 0.06;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col bg-white overflow-hidden"
      style={{ border: "1px solid #ebebeb", boxShadow: "0 2px 20px rgba(0,0,0,0.055)" }}
      whileHover={{
        y: -7,
        boxShadow: "0 22px 56px rgba(0,121,121,0.12), 0 4px 16px rgba(0,0,0,0.07)",
        borderColor: "rgba(0,121,121,0.22)",
      }}
    >
      {/* Animated top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, delay: delay + 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-[2px] origin-left z-10"
        style={{ background: "linear-gradient(90deg, #007979, #00c4c4, transparent 80%)" }}
        aria-hidden="true"
      />

      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "210px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        {/* Soft gradient at bottom of image */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.18), transparent)" }}
          aria-hidden="true"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-6 pt-5 pb-6">

        {/* Index marker */}
        <span
          className={`${grotesk.className} text-[10px] font-bold tracking-[3px] uppercase mb-3`}
          style={{ color: "#007979" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Title */}
        <h3
          className={`${grotesk.className} text-gray-900 font-bold leading-snug mb-3 group-hover:text-[#007979] transition-colors duration-300`}
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.15rem)" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className={`${poppins.className} text-gray-400 text-[13px] leading-relaxed font-light mb-5 flex-1`}
        >
          {project.description}
        </p>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-4" aria-hidden="true" />

        {/* Action row */}
        <div className="flex items-center gap-3">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`${poppins.className} inline-flex items-center gap-2 px-4 py-2 text-[12px] font-semibold text-white transition-all duration-200`}
            style={{ background: "#007979", boxShadow: "0 2px 10px rgba(0,121,121,0.28)" }}
          >
            <FiExternalLink size={13} />
            Live Demo
          </motion.a>

          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`${poppins.className} inline-flex items-center gap-2 px-4 py-2 text-[12px] font-semibold text-gray-600 bg-white border border-gray-200 hover:border-gray-900 hover:text-gray-900 transition-all duration-200`}
          >
            <FiGithub size={13} />
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Main section ──────────────────────────────────── */
export default function Projects() {
  const headerRef    = useRef<HTMLDivElement>(null);
  const gridRef      = useRef<HTMLDivElement>(null);
  const ctaRef       = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });
  const gridInView   = useInView(gridRef,   { once: true, margin: "-6%"  });
  const ctaInView    = useInView(ctaRef,    { once: true, margin: "-10%" });

  return (
    <section
      id="projects"
      className={`${poppins.className} relative overflow-hidden`}
      style={{ background: "#fafafa" }}
    >
      {/* ══ Background system ════════════════════════════ */}

      {/* Layer 1 — soft diagonal base gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(155deg, #ffffff 0%, #f3fbfb 45%, #f7f7ff 100%)",
        }}
        aria-hidden="true"
      />

      {/* Layer 2 — fine crosshatch grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,121,121,0.05) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(0,121,121,0.05) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
        aria-hidden="true"
      />

      {/* Layer 3 — radial vignette to fade grid at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 35%, #fafafa 100%)",
        }}
        aria-hidden="true"
      />

      {/* Layer 4 — large blurred teal orb, top-right */}
      <div
        className="absolute -top-60 -right-60 w-[800px] h-[800px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: "rgba(0,121,121,0.065)" }}
        aria-hidden="true"
      />

      {/* Layer 5 — soft indigo orb, bottom-left */}
      <div
        className="absolute -bottom-48 -left-48 w-[640px] h-[640px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "rgba(99,102,241,0.045)" }}
        aria-hidden="true"
      />

      {/* Layer 6 — decorative SVG rings, top-left */}
      <div
        className="absolute top-14 left-10 pointer-events-none"
        style={{ opacity: 0.05 }}
        aria-hidden="true"
      >
        <svg width="210" height="210" viewBox="0 0 210 210" fill="none">
          <circle cx="105" cy="105" r="96" stroke="#007979" strokeWidth="1" strokeDasharray="6 9" />
          <circle cx="105" cy="105" r="66" stroke="#007979" strokeWidth="0.8" />
          <circle cx="105" cy="105" r="36" stroke="#007979" strokeWidth="0.5" strokeDasharray="3 8" />
        </svg>
      </div>

      {/* Layer 7 — decorative SVG rings, bottom-right */}
      <div
        className="absolute bottom-16 right-10 pointer-events-none"
        style={{ opacity: 0.038 }}
        aria-hidden="true"
      >
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
          <circle cx="80" cy="80" r="72" stroke="#6366f1" strokeWidth="1" strokeDasharray="5 8" />
          <circle cx="80" cy="80" r="48" stroke="#6366f1" strokeWidth="0.75" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 py-24 md:py-32">

        {/* ── Header ── */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-5"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={headerInView ? { width: 36 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-px bg-[#007979] block"
                aria-hidden="true"
              />
              <span className={`${poppins.className} text-[11px] tracking-[5px] uppercase font-semibold text-[#007979]`}>
                Selected Work
              </span>
            </motion.div>

            <div className="overflow-visible pb-3">
              <motion.h2
                initial={{ y: 64, opacity: 0 }}
                animate={headerInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className={`${playfair.className} text-gray-900`}
                style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", fontStyle: "italic", lineHeight: 1.12 }}
              >
                Projects I&apos;ve{" "}
                <span className="relative inline-block" style={{ color: "#007979" }}>
                  Built
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={headerInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 -bottom-1 w-full h-[4px] rounded-full origin-left"
                    style={{ background: "linear-gradient(90deg, #007979, #00c4c4)" }}
                    aria-hidden="true"
                  />
                </span>
              </motion.h2>
            </div>
          </div>

          {/* Right: description + stat */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="lg:max-w-sm space-y-3"
          >
            <p className={`${poppins.className} text-gray-500 text-[14px] leading-relaxed font-light`}>
              Real-world products spanning full-stack apps, AI systems,
              and automation — each built with precision and modern tech.
            </p>
            <div className="flex items-center gap-5">
              <div>
                <span className={`${grotesk.className} text-2xl font-bold text-[#007979]`}>6+</span>
                <span className={`${poppins.className} text-gray-400 text-[12px] ml-1.5`}>Projects</span>
              </div>
              <div className="w-px h-6 bg-gray-200" aria-hidden="true" />
              <div>
                <span className={`${grotesk.className} text-2xl font-bold text-[#007979]`}>3</span>
                <span className={`${poppins.className} text-gray-400 text-[12px] ml-1.5`}>Domains</span>
              </div>
              <div className="w-px h-6 bg-gray-200" aria-hidden="true" />
              <div>
                <span className={`${grotesk.className} text-2xl font-bold text-[#007979]`}>100%</span>
                <span className={`${poppins.className} text-gray-400 text-[12px] ml-1.5`}>Shipped</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Project grid ── */}
        <motion.div
          ref={gridRef}
          initial={{ opacity: 0 }}
          animate={gridInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* ── View More button ── */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 24 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex justify-center"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className={`${poppins.className} group relative inline-flex items-center gap-3 px-10 py-4 text-[13px] font-semibold tracking-wide overflow-hidden`}
            style={{ border: "1.5px solid #007979", color: "#007979" }}
          >
            {/* Fill on hover */}
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-400"
              style={{ background: "#007979" }}
              aria-hidden="true"
            />
            <span className="relative z-10 group-hover:text-white transition-colors duration-400 flex items-center gap-3">
              View All Projects
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                aria-hidden="true"
              >
                →
              </motion.span>
            </span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
