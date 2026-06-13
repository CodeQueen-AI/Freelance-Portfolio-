"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Space_Grotesk, Poppins, Playfair_Display } from "next/font/google";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const grotesk  = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const poppins  = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"], style: ["italic"] });

/* ─── Data ──────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    title: "AromaLux Perfume Website",
    description:
      "A modern perfume e-commerce website with cart and checkout functionality. Integrated AI Voice Assistant and Chatbot to instantly answer customer queries, provide product recommendations, and improve the overall shopping experience",
    image: "/Project1.png",
    liveUrl: "https://codequeen-perfume-website.vercel.app/",
    githubUrl: "https://github.com/Sumbal-Naz23/Perfume-Ecommerce-Website",
  },
  {
    id: 2,
    title: "LearnSphere LMS Website",
    description:
      "A modern LMS website featuring a visually engaging landing page with smooth animations, intuitive UI/UX, tutor search functionality, About and Contact pages and secure Sign Up/Sign In flows for a seamless learning experience",
    image: "Project5.png",
    liveUrl: "https://lms-ui-website.vercel.app/",
    githubUrl: "https://github.com/Sumbal-Naz23/LMS-UI-Website-",
  },
  {
    id: 3,
    title: "Luxutick Watch Website",
    description:
      "A modern watch e-commerce website with product listing, product details, cart, checkout, contact, about, and auth system, plus a full admin dashboard to manage products, orders, users, stock, and messages",
    image: "project2.png",
    liveUrl: "#",
    githubUrl: "https://github.com/Sumbal-Naz23/LuxeTick-Watch-Ecom-Website",
  },
    {
    id: 4,
    title: "Foodora Website",
    description:
      "A fully functional restaurant website with a modern UI, interactive menu, table booking, gallery, cart system, and contact features, designed to deliver a smooth and engaging user experience",
    image: "Project4.png",
    liveUrl: "https://cq-foodora-website.vercel.app/",
    githubUrl: "https://github.com/Sumbal-Naz23/Restaurant-Foodora-Website",
  },
  {
    id: 5,
    title: "Makeup Ecommerce Website",
    description:
      "A modern makeup e-commerce website with a sleek UI/UX, featuring product listing, product detail pages, cart, and checkout functionality, along with AI-powered recommendations for a smooth and personalized shopping experience",
    image: "project3.png",
    liveUrl: "https://e-commerce-website-project-hazel.vercel.app/",
    githubUrl: "https://github.com/Sumbal-Naz23/Makeup-Ecommerce-Web",
  },
  {
    id: 6,
    title: "Nexify Saas Website",
    description:
      "A professional SaaS-based website with a modern UI/UX, featuring a high-converting landing page, home, features & feature detail pages, pricing, team, FAQ, contact, and a blog system with add/manage posts functionality",
    image: "Project6.png",
    liveUrl: "https://nexify-blog.vercel.app/",
    githubUrl: "https://github.com/Sumbal-Naz23/Nexify-Blog-Website",
  },
];

/* ─── Project card ──────────────────────────────────── */
function ProjectCard({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6%" });
  const col    = index % 3;
  const row    = Math.floor(index / 3);
  const delay  = col * 0.08 + row * 0.06;

  // Subtle parallax on the image — shifts up as the card scrolls into view
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

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

      {/* Image with parallax */}
      <div className="relative overflow-hidden" style={{ height: "210px" }}>
        <motion.div
          style={{ y: imgY }}
          className="absolute inset-[-10%] will-change-transform"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.05]"
            style={{ display: "block" }}
          /> */}
          <div className="relative bg-[#f8f8f8] p-3">
  <img
    src={project.image}
    alt={project.title}
    className="w-full rounded-lg object-contain"
  />
</div>
        </motion.div>
        {/* Soft gradient at bottom of image */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 pointer-events-none z-10"
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
                <span className={`${grotesk.className} text-2xl font-bold text-[#007979]`}>20+</span>
                <span className={`${poppins.className} text-gray-400 text-[12px] ml-1.5`}>Projects</span>
              </div>
              <div className="w-px h-6 bg-gray-200" aria-hidden="true" />
              <div>
                <span className={`${grotesk.className} text-2xl font-bold text-[#007979]`}>6</span>
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
            href="https://github.com/Sumbal-Naz23"
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
