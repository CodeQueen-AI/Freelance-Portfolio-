"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Space_Grotesk, Poppins, Playfair_Display } from "next/font/google";
import {SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript,SiHtml5, SiCss, SiNodedotjs, SiExpress, SiPython,SiMongodb, SiFirebase, SiPostgresql, SiGit, SiGithub,SiVercel, SiNetlify, SiStreamlit, SiOpenai, SiFastapi,SiPandas, SiNumpy,} from "react-icons/si";
import { FaBrain, FaRobot, FaDatabase } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
});

/* ─── skill groups ───────────────────────────────────── */
const GROUPS = [
  {
    id: "frontend",
    label: "Frontend",
    tagline: "Pixel-perfect, blazing fast interfaces",
    icon: SiReact,
    bg: "bg-[#eaf7f7]",
    border: "border-[#007979]/20",
    accent: "#007979",
    skills: [
      { name: "React",        icon: SiReact,        level: 95 },
      { name: "Next.js",      icon: SiNextdotjs,    level: 92 },
      { name: "TypeScript",   icon: SiTypescript,   level: 88 },
      { name: "Tailwind CSS", icon: SiTailwindcss,  level: 95 },
      { name: "JavaScript",   icon: SiJavascript,   level: 90 },
      { name: "HTML5",        icon: SiHtml5,        level: 98 },
      { name: "CSS3",         icon: SiCss,          level: 95 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    tagline: "Scalable APIs and robust databases",
    icon: SiNodedotjs,
    bg: "bg-[#f5f5ff]",
    border: "border-[#6366f1]/20",
    accent: "#6366f1",
    skills: [
      { name: "Node.js",    icon: SiNodedotjs,  level: 85 },
      { name: "Express",    icon: SiExpress,    level: 82 },
      { name: "Python",     icon: SiPython,     level: 88 },
      { name: "FastAPI",    icon: SiFastapi,    level: 78 },
      { name: "MongoDB",    icon: SiMongodb,    level: 85 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 75 },
      { name: "Firebase",   icon: SiFirebase,   level: 80 },
    ],
  },
  {
    id: "ai",
    label: "AI & Automation",
    tagline: "Intelligent agents and ML pipelines",
    icon: FaBrain,
    bg: "bg-[#fff5f7]",
    border: "border-[#e879a0]/20",
    accent: "#e879a0",
    skills: [
      { name: "OpenAI SDK",   icon: SiOpenai,   level: 90 },
      { name: "LangChain",    icon: FaBrain,    level: 85 },
      { name: "Agentic AI",   icon: FaRobot,    level: 88 },
      { name: "RAG Systems",  icon: FaDatabase, level: 82 },
      { name: "Chainlit",     icon: TbApi,      level: 78 },
      { name: "Pandas",       icon: SiPandas,   level: 80 },
      { name: "NumPy",        icon: SiNumpy,    level: 75 },
    ],
  },
  {
    id: "tools",
    label: "Tools & Deploy",
    tagline: "From code to cloud in record time",
    icon: SiGit,
    bg: "bg-[#f5fff5]",
    border: "border-[#22c55e]/20",
    accent: "#22c55e",
    skills: [
      { name: "Git",       icon: SiGit,       level: 95 },
      { name: "GitHub",    icon: SiGithub,    level: 95 },
      { name: "Vercel",    icon: SiVercel,    level: 90 },
      { name: "Netlify",   icon: SiNetlify,   level: 88 },
      { name: "Streamlit", icon: SiStreamlit, level: 82 },
    ],
  },
];

/* marquee items */
const ALL_SKILLS = GROUPS.flatMap((g) => g.skills.map((s) => ({ ...s, accent: g.accent })));

/* ─── progress bar ───────────────────────────────────── */
function Bar({ level, accent, inView }: { level: number; accent: string; inView: boolean }) {
  return (
    <div className="h-[5px] w-full rounded-full bg-black/8 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="h-full rounded-full"
        style={{ backgroundColor: accent }}
      />
    </div>
  );
}

/* ─── single skill row inside card ──────────────────── */
function SkillRow({
  skill,
  accent,
  delay,
  inView,
}: {
  skill: { name: string; icon: React.ElementType; level: number };
  accent: string;
  delay: number;
  inView: boolean;
}) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <Icon size={14} style={{ color: accent }} className="shrink-0" />
          <span className={`${poppins.className} text-xs font-semibold text-gray-700 group-hover:text-black transition-colors`}>
            {skill.name}
          </span>
        </div>
        <span className={`${poppins.className} text-[10px] font-mono text-gray-400`}>
          {skill.level}%
        </span>
      </div>
      <Bar level={skill.level} accent={accent} inView={inView} />
    </motion.div>
  );
}

/* ─── category card ──────────────────────────────────── */
function CategoryCard({ group, index }: { group: typeof GROUPS[number]; index: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [open, setOpen] = useState(false); // all closed by default
  const Icon = group.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,121,121,0.10)] transition-shadow duration-400"
    >
      {/* ── header button ── */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        {/* left side */}
        <div className="flex items-center gap-4">
          {/* coloured icon pill */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.2 }}
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${group.accent}15`, border: `1.5px solid ${group.accent}30` }}
          >
            <Icon size={20} style={{ color: group.accent }} />
          </motion.div>

          <div>
            <div className="flex items-center gap-2.5">
              <h3 className={`${grotesk.className} text-[15px] font-bold text-black leading-none`}>
                {group.label}
              </h3>
              {/* skill count badge */}
              <span
                className={`${poppins.className} text-[9px] font-bold uppercase tracking-[2px] px-2 py-0.5 rounded-full`}
                style={{ backgroundColor: `${group.accent}15`, color: group.accent }}
              >
                {group.skills.length} skills
              </span>
            </div>
            <p className={`${poppins.className} text-[11px] text-gray-400 mt-1`}>
              {group.tagline}
            </p>
          </div>
        </div>

        {/* right side — animated chevron */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center ml-3 transition-colors duration-200"
          style={{
            backgroundColor: open ? `${group.accent}15` : "#f9f9f9",
            border: `1.5px solid ${open ? group.accent + "40" : "#e5e7eb"}`,
          }}
        >
          <svg
            width="12" height="12" viewBox="0 0 12 12" fill="none"
            style={{ color: open ? group.accent : "#9ca3af" }}
          >
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </button>

      {/* ── top border that draws in when open ── */}
      <motion.div
        animate={{ scaleX: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="h-[2px] mx-6 rounded-full origin-left"
        style={{ backgroundColor: group.accent, opacity: 0.3 }}
      />

      {/* ── skills list ── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pt-4 pb-6 space-y-4">
              {group.skills.map((skill, si) => (
                <SkillRow
                  key={skill.name}
                  skill={skill}
                  accent={group.accent}
                  delay={si * 0.06}
                  inView={open && inView}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── right panel data ───────────────────────────────── */
const FEATURED = [
  { name: "React & Next.js", level: 94, accent: "#007979", icon: SiReact  },
  { name: "AI & Agents",     level: 88, accent: "#e879a0", icon: FaBrain  },
  { name: "Python & ML",     level: 86, accent: "#6366f1", icon: SiPython },
  { name: "DevOps & Tools",  level: 92, accent: "#22c55e", icon: SiGit    },
];

const SERVICES = [
  { label: "Full Stack Web Apps",  desc: "Next.js · React · Node.js"    },
  { label: "AI Agent Development", desc: "LangChain · OpenAI SDK · RAG" },
  { label: "UI/UX Design Systems", desc: "Tailwind · Framer Motion"     },
  { label: "Cloud & Deployment",   desc: "Vercel · Netlify · GitHub CI" },
];

/* ─── marquee strip ──────────────────────────────────── */
function MarqueeStrip() {
  const doubled = [...ALL_SKILLS, ...ALL_SKILLS];
  return (
    <div className="overflow-hidden py-10 border-y border-gray-100">
      <div className="flex w-max marquee-track gap-8">
        {doubled.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="flex items-center gap-2 shrink-0 text-gray-300 hover:text-[#007979] transition-colors duration-200 cursor-default">
              <Icon size={18} />
              <span className={`${poppins.className} text-sm font-medium whitespace-nowrap`}>{s.name}</span>
              <span className="ml-4 text-gray-200">·</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── main section ───────────────────────────────────── */
export default function SkillsSection() {
  const sectionRef   = useRef<HTMLElement>(null);
  const headerRef    = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`${poppins.className} bg-white relative overflow-hidden`}
    >
      {/* ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#007979]/4 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#007979]/3 blur-[100px] rounded-full pointer-events-none" />

      {/* ── header ── */}
      <div ref={headerRef} className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-24 pb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[5px] text-[#007979] text-xs font-bold mb-4 font-serif"
        >
          My Expertise
        </motion.p>

        <div className="overflow-visible mb-4 pb-3">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className={`${playfair.className} text-black`}
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontStyle: "italic", lineHeight: 1.15 }}
          >
            Tech Stack
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="max-w-xl mx-auto text-base leading-relaxed text-gray-500"
        >
          A curated set of technologies I use to design, build and ship
          modern web products and intelligent AI systems
        </motion.p>

        {/* animated dashes */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={headerInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex items-center justify-center gap-1.5 mt-6"
        >
          <span className="w-8 h-[3px] rounded-full bg-[#007979]" />
          <span className="w-3 h-[3px] rounded-full bg-[#007979]/40" />
        </motion.div>
      </div>

      {/* ── marquee ── */}
      <MarqueeStrip />

      {/* ── two column: cards + badge cloud ── */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* left — accordion category cards */}
          <div className="space-y-4">
            {GROUPS.map((group, i) => (
              <CategoryCard key={group.id} group={group} index={i} />
            ))}
          </div>

          {/* ── RIGHT — 4 cards matching left structure ── */}
          <div className="space-y-4">

            {/* Card 1 — Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl overflow-hidden border border-gray-100 bg-white
                shadow-[0_2px_12px_rgba(0,0,0,0.04)]
                hover:shadow-[0_8px_32px_rgba(0,121,121,0.10)]
                transition-shadow duration-300"
            >
              <div className="px-6 py-5 flex items-center justify-between border-b border-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#007979" + "15", border: "1.5px solid #00797930" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007979" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20V10M18 20V4M6 20v-6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`${grotesk.className} text-[15px] font-bold text-black leading-none`}>By the Numbers</h3>
                    <p className={`${poppins.className} text-[11px] text-gray-400 mt-1`}>Experience at a glance</p>
                  </div>
                </div>
                <span className={`${poppins.className} text-[9px] font-bold uppercase tracking-[2px] px-2 py-0.5 rounded-full`}
                  style={{ backgroundColor: "#00797915", color: "#007979" }}>
                  Stats
                </span>
              </div>
              <div className="grid grid-cols-3 divide-x divide-gray-50 px-2 py-2">
                {[
                  { num: "33+", label: "Technologies", icon: "⚡" },
                  { num: "2+",  label: "Years Coding",  icon: "🗓" },
                  { num: "10+", label: "Projects",      icon: "🚀" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center py-4 px-2 cursor-default rounded-xl hover:bg-[#007979]/4 transition-colors duration-200"
                  >
                    <span className="text-xl mb-1">{s.icon}</span>
                    <p className={`${grotesk.className} text-2xl font-bold text-[#007979] leading-none`}>{s.num}</p>
                    <p className={`${poppins.className} text-[10px] text-gray-400 mt-1.5 text-center leading-tight`}>{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Card 2 — Core Proficiency rings */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl overflow-hidden border border-gray-100 bg-white
                shadow-[0_2px_12px_rgba(0,0,0,0.04)]
                hover:shadow-[0_8px_32px_rgba(0,121,121,0.10)]
                transition-shadow duration-300"
            >
              <div className="px-6 py-5 flex items-center justify-between border-b border-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#e879a015", border: "1.5px solid #e879a030" }}>
                    <FaBrain size={18} color="#e879a0" />
                  </div>
                  <div>
                    <h3 className={`${grotesk.className} text-[15px] font-bold text-black leading-none`}>Core Proficiency</h3>
                    <p className={`${poppins.className} text-[11px] text-gray-400 mt-1`}>Key skill levels</p>
                  </div>
                </div>
                <span className={`${poppins.className} text-[9px] font-bold uppercase tracking-[2px] px-2 py-0.5 rounded-full`}
                  style={{ backgroundColor: "#e879a015", color: "#e879a0" }}>
                  4 skills
                </span>
              </div>
              <div className="px-6 py-4 space-y-3">
                {FEATURED.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ x: 4 }}
                      className="group flex items-center gap-3 cursor-default"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200"
                        style={{ backgroundColor: item.accent + "15" }}>
                        <Icon size={14} style={{ color: item.accent }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`${poppins.className} text-xs font-semibold text-gray-700 group-hover:text-black transition-colors`}>
                            {item.name}
                          </span>
                          <span className={`${poppins.className} text-[10px] font-mono shrink-0 ml-2`}
                            style={{ color: item.accent }}>
                            {item.level}%
                          </span>
                        </div>
                        <div className="h-[5px] w-full rounded-full bg-gray-100 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: item.accent }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
