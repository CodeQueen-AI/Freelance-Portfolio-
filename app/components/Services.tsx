"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Poppins, Playfair_Display, Space_Grotesk } from "next/font/google";
import { TbBrandCodepen } from "react-icons/tb";
import {SiNextdotjs,SiTypescript,SiNodedotjs,SiReact,SiOpenai,SiFigma,SiPython,SiPostgresql,SiDocker,SiKubernetes,
  SiWordpress,SiShopify,SiGoogleanalytics,SiScikitlearn,SiTensorflow,SiGooglecloud,SiPhp,SiMysql,SiJavascript,} from "react-icons/si";
import {FaBrain,FaPalette,FaServer,FaPaintBrush,FaBolt,FaArrowRight,FaCheckCircle,FaCloud,FaSearch,} from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["800"],
  style: ["italic"],
});
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* ─── Data ───────────────────────────────────────────────── */
const categories = [
  {
    id: "01",
    title: "Frontend & Design",
    tagline: "Interfaces that impress.",
    Icon: FaPaintBrush,
    services: ["UI/UX Design", "Animations & Motion", "Design Systems", "Figma Prototyping"],
    techs: [
      { Icon: SiNextdotjs, label: "Next.Js" },
      { Icon: SiReact, label: "React" },
      { Icon: SiTypescript, label: "Tailwind CSS" },
    ],
    accent: "#7c3aed",
    accentDark: "#5b21b6",
    lightBg: "#f5f3ff",
    headerBg: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
  },
  {
    id: "02",
    title: "Backend Development",
    tagline: "The engine behind the product.",
    Icon: FaServer,
    services: ["REST & GraphQL APIs", "Database Architecture", "Auth & Security", "Cloud Deployment"],
    techs: [
      { Icon: SiNodedotjs, label: "Node.js" },
      { Icon: SiPython, label: "Python" },
      { Icon: SiPostgresql, label: "PostgreSQL" },
    ],
    accent: "#0891b2",
    accentDark: "#0e7490",
    lightBg: "#f0f9ff",
    headerBg: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
  },
  {
    id: "03",
    title: "AI Automation",
    tagline: "Less manual work. More results.",
    Icon: FaBolt,
    services: ["Workflow Automation", "Email Automation", "Process Automation", "AI Integrations"],
    techs: [
      { Icon: SiOpenai, label: "OpenAI" },
      { Icon: SiPython, label: "Python" },
      { Icon: FaBolt, label: "n8n / Zapier" },
    ],
    accent: "#d97706",
    accentDark: "#b45309",
    lightBg: "#fffbeb",
    headerBg: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
  },
  {
    id: "04",
    title: "DevOps & Cloud Deployment",
    tagline: "Ship faster, scale effortlessly.",
    Icon: FaCloud,
    services: ["CI/CD Pipeline Setup", "Docker & Kubernetes", "Cloud Infrastructure", "Monitoring & Logging"],
    techs: [
      { Icon: SiDocker,     label: "Docker"     },
      { Icon: SiKubernetes, label: "Kubernetes" },
      { Icon: SiGooglecloud,label: "GCP"        },
    ],
    accent: "#0369a1",
    accentDark: "#075985",
    lightBg: "#f0f9ff",
    headerBg: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
  },
  {
    id: "05",
    title: "ML / Deep Learning",
    tagline: "Intelligent models. Real-world impact.",
    Icon: FaBrain,
    services: ["Custom ML Models", "Deep Learning (DL)", "Model Training & Fine-tuning", "Data Pipelines"],
    techs: [
      { Icon: SiTensorflow, label: "TensorFlow" },
      { Icon: SiScikitlearn,label: "Scikit-learn"},
      { Icon: SiPython,     label: "Python"     },
    ],
    accent: "#7c3aed",
    accentDark: "#5b21b6",
    lightBg: "#f5f3ff",
    headerBg: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
  },
{
  id: "06",
  title: "UI / UX Design",
  tagline: "Crafting intuitive and user-centered digital experiences.",
  Icon: FaPaintBrush,
  services: [
    "Wireframing & Prototyping",
    "User Research",
    "Interaction Design",
    "Responsive UI Design"
  ],
  techs: [
    { Icon: SiFigma, label: "Figma" },
    { Icon: FaPalette, label: "Adobe XD" },
    { Icon: FaPalette, label: "Design Systems" },
  ],
  accent: "#c026d3",
  accentDark: "#a21caf",
  lightBg: "#fdf4ff",
  headerBg: "linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)",
},
  {
    id: "07",
    title: "SEO Optimization",
    tagline: "Rank higher. Grow organically.",
    Icon: FaSearch,
    services: ["Technical SEO Audit", "On-Page Optimization", "Core Web Vitals", "SEO Analytics & Reporting"],
    techs: [
      { Icon: SiGoogleanalytics, label: "Analytics" },
      { Icon: SiNextdotjs,       label: "Next.js"   },
      { Icon: FaSearch,          label: "SEO Tools" },
    ],
    accent: "#dc2626",
    accentDark: "#b91c1c",
    lightBg: "#fff1f2",
    headerBg: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)",
  },
{
  id: "08",
  title: "WordPress Development",
  tagline: "Fast, flexible, scalable websites.",
  Icon: SiWordpress,
  services: [
    "WordPress Development",
    "Theme Customisation",
    "Plugin Development",
    "Website Maintenance"
  ],
  techs: [
    { Icon: SiWordpress, label: "WordPress" },
    { Icon: SiPhp, label: "PHP" },
    { Icon: SiMysql, label: "MySQL" },
  ],
  accent: "#2563eb",
  accentDark: "#1d4ed8",
  lightBg: "#eff6ff",
  headerBg: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
},
{
  id: "09",
  title: "Shopify Development",
  tagline: "High-converting eCommerce stores.",
  Icon: SiShopify,
  services: [
    "Shopify Store Setup",
    "Theme Customisation",
    "App Integration",
    "Product & Payment Setup"
  ],
  techs: [
    { Icon: SiShopify, label: "Shopify" },
    { Icon: SiJavascript, label: "JavaScript" },
    { Icon: TbBrandCodepen, label: "Liquid (Shopify)" },
  ],
  accent: "#10b981",
  accentDark: "#059669",
  lightBg: "#ecfdf5",
  headerBg: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
}
];

/* ─── Card ───────────────────────────────────────────────── */
function CategoryCard({
  cat,
  index,
  inView,
}: {
  cat: (typeof categories)[number];
  index: number;
  inView: boolean;
}) {
  const CatIcon = cat.Icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.07 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
      className="group relative bg-white rounded-2xl overflow-hidden flex flex-col h-full cursor-default"
      style={{
        border: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 3px 16px rgba(0,0,0,0.04)",
      }}
    >
      {/* Hover shadow elevation */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `0 16px 48px ${cat.accent}16, 0 4px 16px rgba(0,0,0,0.07)` }}
        aria-hidden="true"
      />

      {/* ── Header zone ── */}
      <div
        className="relative overflow-hidden px-4 pt-4 pb-3 sm:px-5 sm:pt-5 sm:pb-4 shrink-0"
        style={{ background: cat.headerBg }}
      >
        {/* Diagonal texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, ${cat.accent}07 0px, ${cat.accent}07 1px, transparent 1px, transparent 14px)`,
          }}
          aria-hidden="true"
        />
        {/* Watermark icon */}
        <div
          className="absolute -right-3 -bottom-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-8deg] pointer-events-none"
          aria-hidden="true"
        >
          <CatIcon size={84} style={{ color: cat.accent, opacity: 0.1 }} />
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <span
              className={`${grotesk.className} text-[9.5px] font-bold tracking-[3px] uppercase`}
              style={{ color: `${cat.accent}90` }}
            >
              {cat.id}
            </span>
            <motion.div
              whileHover={{ scale: 1.12, rotate: -8 }}
              transition={{ duration: 0.2 }}
              className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"
              style={{ background: "white", color: cat.accent, boxShadow: `0 2px 12px ${cat.accent}28` }}
            >
              <CatIcon size={22} />
            </motion.div>
          </div>
          <h3
            className={`${grotesk.className} font-bold leading-tight mb-1`}
            style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.15rem)", color: cat.accentDark }}
          >
            {cat.title}
          </h3>
          <p className={`${poppins.className} text-[10.5px] font-medium`} style={{ color: `${cat.accent}95` }}>
            {cat.tagline}
          </p>
        </div>
      </div>

      {/* ── Content zone — flex-1 so all cards fill available height equally ── */}
      <div className="relative z-10 flex flex-col flex-1 px-4 pt-3 pb-4 sm:px-5 sm:pt-4 sm:pb-5">

        {/* Divider */}
        <div
          className="h-px -mx-5 mb-4 opacity-50"
          style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}30, transparent)` }}
          aria-hidden="true"
        />

        {/* Services list — exactly 4 items, no wrapping labels → consistent height */}
        <ul className="space-y-[9px] flex-1">
          {cat.services.map((svc, si) => (
            <motion.li
              key={svc}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.28 + index * 0.08 + si * 0.04, duration: 0.36 }}
              className="flex items-center gap-2 group/item"
            >
              <FaCheckCircle size={11} style={{ color: cat.accent, flexShrink: 0 }} aria-hidden="true" />
              <span
                className={`${poppins.className} text-[12px] text-gray-600 font-medium leading-none group-hover/item:text-gray-900 transition-colors duration-200`}
              >
                {svc}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Divider before footer */}
        <div className="h-px -mx-5 mt-4 mb-3.5 opacity-40 bg-gray-100" aria-hidden="true" />

        {/* Tech pills + arrow — always at the bottom */}
        <div className="flex items-center justify-between gap-2 shrink-0">
          <div className="flex flex-wrap gap-1">
            {cat.techs.map((tech, ti) => {
              const TIcon = tech.Icon;
              return (
                <motion.span
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.32 + index * 0.08 + ti * 0.055, duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className={`${poppins.className} inline-flex items-center gap-1 px-2 py-[3px] rounded-md text-[9.5px] font-semibold`}
                  style={{ background: cat.lightBg, color: cat.accent, border: `1px solid ${cat.accent}20` }}
                >
                  <TIcon size={8} />
                  {tech.label}
                </motion.span>
              );
            })}
          </div>
          <motion.div
            whileHover={{ x: 3 }}
            transition={{ duration: 0.18 }}
            className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 opacity-35 group-hover:opacity-100 transition-opacity duration-250"
            style={{ background: cat.lightBg, color: cat.accent }}
            aria-hidden="true"
          >
            <FaArrowRight size={9} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────── */
export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      id="services"
      className={`${poppins.className} relative overflow-hidden`}
      style={{ background: "linear-gradient(160deg, #f0fafa 0%, #ffffff 50%, #f8f8ff 100%)" }}
    >
      {/* ── Background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,121,121,0.08) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          opacity: 0.55,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[130px] pointer-events-none"
        style={{ background: "rgba(0,121,121,0.07)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-[110px] pointer-events-none"
        style={{ background: "rgba(124,58,237,0.04)" }}
        aria-hidden="true"
      />
      {/* Geometric ring — top left */}
      <div className="absolute top-20 left-10 pointer-events-none opacity-[0.05]" aria-hidden="true">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="#007979" strokeWidth="1" strokeDasharray="5 7" />
          <circle cx="100" cy="100" r="60" stroke="#007979" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="30" stroke="#007979" strokeWidth="0.5" strokeDasharray="3 6" />
        </svg>
      </div>
      {/* Geometric ring — bottom right */}
      <div className="absolute bottom-16 right-10 pointer-events-none opacity-[0.04]" aria-hidden="true">
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
          <circle cx="80" cy="80" r="72" stroke="#007979" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="80" cy="80" r="48" stroke="#007979" strokeWidth="0.75" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={inView ? { width: 36 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-px bg-[#007979] block"
                aria-hidden="true"
              />
              <span className={`${poppins.className} text-[11px] tracking-[5px] uppercase font-semibold text-[#007979]`}>
                What I Offer
              </span>
            </motion.div>

            {/* Heading */}
            <div className="overflow-visible pb-2">
              <motion.h2
                initial={{ y: 64, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className={`${playfair.className} text-gray-900 leading-[1.1]`}
                style={{ fontSize: "clamp(1.9rem, 6.5vw, 5rem)", fontStyle: "italic" }}
              >
                My{" "}
                <span className="relative inline-block" style={{ color: "#007979" }}>
                  Services
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 -bottom-1 w-full h-[4px] rounded-full origin-left"
                    style={{ background: "linear-gradient(90deg, #007979, #00c4c4)" }}
                    aria-hidden="true"
                  />
                </span>
              </motion.h2>
            </div>

            {/* Stat row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.42, duration: 0.55 }}
              className="flex items-center gap-6 mt-3"
            >
              {[
                { num: "9", label: "Service areas" },
                { num: "10+", label: "Deliverables" },
                { num: "100%", label: "End-to-end" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  {i > 0 && (
                    <span className="w-px h-7 bg-gray-200" aria-hidden="true" />
                  )}
                  <div>
                    <span className={`${grotesk.className} text-xl font-bold text-[#007979] block leading-none`}>
                      {stat.num}
                    </span>
                    <span className={`${poppins.className} text-[10.5px] text-gray-400 font-light`}>
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right descriptor */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="lg:max-w-sm"
          >
            <p className={`${poppins.className} text-gray-500 text-[14px] leading-relaxed font-light`}>
              From concept to deployment — I build digital products that are fast, beautiful and built to last. Every service is delivered end-to-end, by one developer who cares about the details.
            </p>
          </motion.div>
        </div>

        {/* ── 3 × 2 grid — items-stretch enforces equal card heights per row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  );
}
