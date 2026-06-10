"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Space_Grotesk, Poppins, Playfair_Display } from "next/font/google";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript,
  SiHtml5, SiCss, SiNodedotjs, SiExpress, SiPython, SiMongodb,
  SiFirebase, SiPostgresql, SiGit, SiGithub, SiVercel, SiNetlify,
  SiStreamlit, SiOpenai, SiFastapi, SiPandas, SiNumpy,
} from "react-icons/si";
import { FaBrain, FaRobot, FaDatabase } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const grotesk  = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const poppins  = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"], style: ["italic"] });

/* ─── Data ──────────────────────────────────────────── */
const GROUPS = [
  {
    id: "frontend",
    label: "Frontend",
    tagline: "Pixel-perfect, blazing-fast interfaces",
    Icon: SiReact,
    accent: "#007979",
    lightBg: "#edfafa",
    borderColor: "rgba(0,121,121,0.15)",
    skills: [
      { name: "React",        Icon: SiReact,       },
      { name: "Next.js",      Icon: SiNextdotjs,   },
      { name: "TypeScript",   Icon: SiTypescript,  },
      { name: "Tailwind CSS", Icon: SiTailwindcss, },
      { name: "JavaScript",   Icon: SiJavascript,  },
      { name: "HTML5",        Icon: SiHtml5,       },
      { name: "CSS3",         Icon: SiCss,        },
    ],
    span: "lg:col-span-2", // wider card
  },
  {
    id: "backend",
    label: "Backend & DB",
    tagline: "Scalable APIs & robust data layers",
    Icon: SiNodedotjs,
    accent: "#6366f1",
    lightBg: "#f3f3ff",
    borderColor: "rgba(99,102,241,0.15)",
    skills: [
      { name: "Node.js",    Icon: SiNodedotjs,  },
      { name: "Express",    Icon: SiExpress,    },
      { name: "Python",     Icon: SiPython,     },
      { name: "FastAPI",    Icon: SiFastapi,    },
      { name: "MongoDB",    Icon: SiMongodb,    },
      { name: "PostgreSQL", Icon: SiPostgresql, },
      { name: "Firebase",   Icon: SiFirebase,   },
    ],
    span: "lg:col-span-2",
  },
  {
    id: "ai",
    label: "AI & Automation",
    tagline: "Intelligent agents & ML pipelines",
    Icon: FaBrain,
    accent: "#c026d3",
    lightBg: "#fdf4ff",
    borderColor: "rgba(192,38,211,0.15)",
    skills: [
      { name: "OpenAI SDK",  Icon: SiOpenai,   },
      { name: "LangChain",   Icon: FaBrain,    },
      { name: "Agentic AI",  Icon: FaRobot,    },
      { name: "RAG Systems", Icon: FaDatabase, },
      { name: "Chainlit",    Icon: TbApi,      },
      { name: "Pandas",      Icon: SiPandas,   },
      { name: "NumPy",       Icon: SiNumpy,    },
    ],
    span: "lg:col-span-2",
  },
  {
    id: "tools",
    label: "Tools & Deploy",
    tagline: "From commit to cloud in minutes",
    Icon: SiVercel,
    accent: "#059669",
    lightBg: "#f0fdf8",
    borderColor: "rgba(5,150,105,0.15)",
    skills: [
      { name: "Git",       Icon: SiGit,       },
      { name: "GitHub",    Icon: SiGithub,    },
      { name: "Vercel",    Icon: SiVercel,    },
      { name: "Netlify",   Icon: SiNetlify,   },
      { name: "Streamlit", Icon: SiStreamlit, },
    ],
    span: "lg:col-span-2",
  },
];

const ALL_SKILLS = GROUPS.flatMap((g) =>
  g.skills.map((s) => ({ ...s, accent: g.accent }))
);

// const PROOF_POINTS = [
//   {
//     icon: "⚡",
//     title: "33+ Technologies",
//     desc: "A full-spectrum toolkit covering frontend, backend, AI and cloud",
//   },
//   {
//     icon: "🎯",
//     title: "Production-Grade",
//     desc: "Every skill applied in real shipped products, not just tutorials",
//   },
//   {
//     icon: "🔄",
//     title: "Always Learning",
//     desc: "Continuously expanding with the latest AI and web technologies",
//   },
// ];

/* ─── Skill chip ────────────────────────────────────── */
function SkillChip({
  name,
  Icon,
  accent,
  delay,
  inView,
}: {
  name: string;
  Icon: React.ElementType;
  accent: string;
  delay: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl cursor-default select-none transition-all duration-200"
      style={{
        background: hovered ? `${accent}10` : "white",
        border: `1.5px solid ${hovered ? accent + "50" : "#e5e7eb"}`,
        boxShadow: hovered
          ? `0 6px 20px ${accent}20, 0 2px 8px rgba(0,0,0,0.04)`
          : "0 1px 4px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {/* Icon container */}
      <div
        className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-all duration-200"
        style={{
          background: hovered ? `${accent}18` : `${accent}0d`,
          border: `1px solid ${hovered ? accent + "35" : accent + "18"}`,
        }}
      >
        <Icon size={13} style={{ color: accent }} />
      </div>

      {/* Name */}
      <span
        className={`${poppins.className} text-[11.5px] font-semibold leading-none transition-colors duration-200`}
        style={{ color: hovered ? accent : "#374151" }}
      >
        {name}
      </span>

      {/* Glow dot on hover */}
      {hovered && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-[5px] h-[5px] rounded-full ml-auto shrink-0"
          style={{ backgroundColor: accent, boxShadow: `0 0 6px ${accent}` }}
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
}

/* ─── Category card ─────────────────────────────────── */
function CategoryCard({
  group,
  index,
}: {
  group: (typeof GROUPS)[number];
  index: number;
}) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const CatIcon = group.Icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`relative bg-white rounded-2xl overflow-hidden group ${group.span}`}
      style={{
        border: `1.5px solid ${group.borderColor}`,
        boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
      }}
    >
      {/* Animated top gradient bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-[3px] origin-left"
        style={{
          background: `linear-gradient(90deg, ${group.accent}, ${group.accent}60, transparent)`,
        }}
        aria-hidden="true"
      />

      {/* Large watermark icon */}
      <div
        className="absolute -right-6 -bottom-6 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
        aria-hidden="true"
      >
        <CatIcon
          size={120}
          style={{ color: group.accent, opacity: 0.055 }}
        />
      </div>

      {/* Soft corner glow */}
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `${group.accent}12` }}
        aria-hidden="true"
      />

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            {/* Icon pill */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
              style={{
                background: group.lightBg,
                border: `1.5px solid ${group.accent}30`,
                boxShadow: `0 2px 10px ${group.accent}15`,
              }}
            >
              <CatIcon size={19} style={{ color: group.accent }} />
            </div>

            <div>
              <h3
                className={`${grotesk.className} font-bold text-gray-900 text-[15px] leading-none`}
              >
                {group.label}
              </h3>
              <p className={`${poppins.className} text-gray-400 text-[11px] mt-0.5 font-light`}>
                {group.tagline}
              </p>
            </div>
          </div>

          {/* Count badge */}
          <span
            className={`${poppins.className} shrink-0 text-[9px] font-bold uppercase tracking-[2px] px-2.5 py-1.5 rounded-full`}
            style={{
              background: group.lightBg,
              color: group.accent,
              border: `1px solid ${group.accent}30`,
            }}
          >
            {group.skills.length} skills
          </span>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-5"
          style={{ background: `linear-gradient(90deg, ${group.accent}20, transparent)` }}
          aria-hidden="true"
        />

        {/* Skill chips */}
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, si) => (
            <SkillChip
              key={skill.name}
              name={skill.name}
              Icon={skill.Icon}
              accent={group.accent}
              delay={0.1 + si * 0.045}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Marquee ───────────────────────────────────────── */
function MarqueeStrip() {
  const doubled = [...ALL_SKILLS, ...ALL_SKILLS];
  return (
    <div className="relative overflow-hidden py-5 border-y border-gray-100/80">
      {/* Fade masks */}
      <div
        className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #f8fffe, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #f8fffe, transparent)" }}
        aria-hidden="true"
      />
      <div className="flex w-max marquee-track gap-5">
        {doubled.map((s, i) => {
          const Icon = s.Icon;
          return (
            <div
              key={i}
              className="flex items-center gap-2 shrink-0 cursor-default group px-1"
            >
              <Icon
                size={14}
                style={{ color: s.accent, opacity: 0.7 }}
                className="group-hover:opacity-100 transition-opacity duration-200"
              />
              <span
                className={`${poppins.className} text-[12px] font-medium whitespace-nowrap text-gray-400 group-hover:text-gray-600 transition-colors duration-200`}
              >
                {s.name}
              </span>
              <span className="ml-2 text-gray-200 text-xs" aria-hidden="true">·</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Main section ──────────────────────────────────── */
export default function SkillsSection() {
  const headerRef    = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });

  return (
    <section
      id="skills"
      className={`${poppins.className} relative overflow-hidden`}
      style={{ background: "linear-gradient(160deg, #f0fafa 0%, #ffffff 50%, #f8f8ff 100%)" }}
    >
      {/* ── Background decoration ── */}
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,121,121,0.09) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          opacity: 0.5,
        }}
        aria-hidden="true"
      />
      {/* Top-right teal orb */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(0,121,121,0.07)" }}
        aria-hidden="true"
      />
      {/* Bottom-left indigo orb */}
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(99,102,241,0.05)" }}
        aria-hidden="true"
      />
      {/* Geometric ring — top left */}
      <div
        className="absolute top-20 left-10 pointer-events-none opacity-[0.05]"
        aria-hidden="true"
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="#007979" strokeWidth="1" strokeDasharray="5 7" />
          <circle cx="100" cy="100" r="60" stroke="#007979" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="30" stroke="#007979" strokeWidth="0.5" strokeDasharray="3 6" />
        </svg>
      </div>
      {/* Geometric ring — bottom right */}
      <div
        className="absolute bottom-16 right-10 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
      >
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
          <circle cx="75" cy="75" r="68" stroke="#6366f1" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="75" cy="75" r="44" stroke="#6366f1" strokeWidth="0.75" />
        </svg>
      </div>

      {/* ── Section header ── */}
      <div
        ref={headerRef}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-24 pb-14"
      >
        {/* Two-column header: heading left, description + CTA right */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

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
              <span
                className={`${poppins.className} text-[11px] tracking-[5px] uppercase font-semibold text-[#007979]`}
              >
                My Expertise
              </span>
            </motion.div>

            <div className="overflow-visible pb-4">
              <motion.h2
                initial={{ y: 64, opacity: 0 }}
                animate={headerInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className={`${playfair.className} text-gray-900`}
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", fontStyle: "italic", lineHeight: 1.12 }}
              >
                Tech{" "}
                <span className="relative inline-block" style={{ color: "#007979" }}>
                  Stack
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

            {/* Category count pills */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.42, duration: 0.55 }}
              className="flex flex-wrap gap-2 mt-1"
            >
              {GROUPS.map((g) => (
                <span
                  key={g.id}
                  className={`${poppins.className} inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold`}
                  style={{
                    background: g.lightBg,
                    color: g.accent,
                    border: `1px solid ${g.accent}25`,
                  }}
                >
                  <g.Icon size={11} />
                  {g.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="lg:max-w-xs space-y-4"
          >
            <p
              className={`${poppins.className} text-gray-500 text-[14px] leading-relaxed font-light`}
            >
              A curated toolkit of technologies I use to build modern web
              products and intelligent AI systems — from idea to deployment.
            </p>
            <div className="flex items-center gap-2">
              <span
                className={`${grotesk.className} text-3xl font-bold text-[#007979]`}
              >
                33+
              </span>
              <span
                className={`${poppins.className} text-gray-400 text-[12px] font-light leading-tight`}
              >
                technologies<br />across 4 domains
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Marquee ── */}
      <MarqueeStrip />

      {/* ── Bento grid ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GROUPS.map((group, i) => (
            <CategoryCard key={group.id} group={group} index={i} />
          ))}
        </div>

        {/* ── Proof strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 rounded-2xl overflow-hidden"
          style={{
            border: "1.5px solid rgba(0,121,121,0.12)",
            background: "linear-gradient(135deg, #f0fafa 0%, #ffffff 100%)",
            boxShadow: "0 2px 20px rgba(0,121,121,0.06)",
          }}
        >
        </motion.div>
      </div>
    </section>
  );
}