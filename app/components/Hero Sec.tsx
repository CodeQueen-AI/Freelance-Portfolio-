"use client";

import Image from "next/image";
import { FaLaptopCode, FaRobot, FaBriefcase, FaGlobe } from "react-icons/fa";
import { Inter, Dancing_Script, Poppins } from "next/font/google";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const inter  = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const roleItems = [
  {
    icon: <FaLaptopCode />,
    category: "Development",
    title: "Frontend & Full Stack",
    accent: "#007979",
    lightBg: "rgba(0,121,121,0.06)",
    active: true,
  },
  {
    icon: <FaRobot />,
    category: "Intelligence",
    title: "AI & Automation Engineer",
    accent: "#0891b2",
    lightBg: "rgba(8,145,178,0.06)",
    active: false,
  },
  {
    icon: <FaBriefcase />,
    category: "Availability",
    title: "Freelance · Remote Projects",
    accent: "#7c3aed",
    lightBg: "rgba(124,58,237,0.06)",
    active: false,
  },
  {
    icon: <FaGlobe />,
    category: "Reach",
    title: "Working with Global Clients",
    accent: "#059669",
    lightBg: "rgba(5,150,105,0.06)",
    active: false,
  },
];

/* stagger children inside a container */
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -55]);
  const bgY    = useTransform(scrollYProgress, [0, 1], [0,  80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="about"
      className={`relative h-screen overflow-hidden pt-20 ${inter.className}`}
    >
      {/* Parallax gradient bg */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,121,121,0.10),transparent)]"
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle,#007979 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Outer flex container fills the remaining height below the navbar */}
      <div className="relative z-10 h-full flex flex-col mx-auto max-w-7xl px-6 lg:px-10" style={{ paddingTop: "clamp(16px, 3vh, 40px)", paddingBottom: "clamp(12px, 2vh, 24px)" }}>

        {/* ── Name ── */}
        <motion.div
          style={{ opacity }}
          className="text-center shrink-0"
        >
          <div>
            <motion.h1
              initial={{ y: 110, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="leading-none tracking-tight flex justify-center gap-3 flex-wrap"
            >
              {["Sumbal", "Naz"].map((word, wi) => (
                <span
                  key={wi}
                  className={`${dancing.className} text-[56px] md:text-[82px] lg:text-[96px]`}
                >
                  <span className="text-[#007979]">{word[0]}</span>
                  <span className="text-black">{word.slice(1)}</span>
                </span>
              ))}
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className={`mt-1 flex justify-center ${poppins.className}`}
          >
            <span className="px-6 py-2 rounded-full border border-gray-300 text-gray-600 text-xs md:text-sm tracking-[3px] uppercase bg-white shadow-sm hover:border-[#007979] hover:text-[#007979] transition-all duration-300 cursor-default">
              Freelance Full Stack &amp; AI Developer
            </span>
          </motion.div>
        </motion.div>

        <div className="relative shrink-0 mt-3 grid lg:grid-cols-[1fr_1.5fr_1fr] items-center gap-8" style={{ height: "clamp(320px, 58vh, 500px)" }}>

          {/* Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            transition={{ delayChildren: 0.7 }}
            className="flex flex-col gap-6"
          >
            <motion.p
              variants={itemVariants}
              className={`${poppins.className} leading-[1.9] text-gray-500 text-[14.5px] font-light`}
            >
              I design and build modern web applications and AI-powered
              products that help businesses grow. Fast delivery, clean code,
              and a relentless focus on what actually matters — results.
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#007979] text-white font-medium tracking-wide overflow-hidden relative cursor-pointer w-fit ${poppins.className}`}
              >
                <span className="relative z-10">Start a Collaboration</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                >
                  →
                </motion.span>
                <span className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Center — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center items-center relative h-full"
            style={{ y: imageY }}
          >
            {/* Pulsing glow */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[320px] h-[320px] md:w-[460px] md:h-[460px] bg-[#007979]/20 blur-3xl rounded-full"
            />
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[240px] h-[240px] md:w-[360px] md:h-[360px] rounded-full border border-dashed border-[#007979]/20"
            />
            <Image
              src="/Hero.png"
              alt="Sumbal Naz"
              width={600}
              height={600}
              priority
              className="relative w-auto max-h-full object-contain drop-shadow-2xl"
              style={{ height: "clamp(300px, 54vh, 480px)" }}
            />
          </motion.div>

          {/* Right — role list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            transition={{ delayChildren: 0.8 }}
            className="w-full space-y-1"
          >
            {roleItems.map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 24 },
                  show:   { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="group flex items-center gap-3 py-2.5 px-1 cursor-default"
              >
                {/* Icon */}
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 relative"
                  style={{
                    background: `${item.accent}10`,
                    color: item.accent,
                    fontSize: "14px",
                  }}
                >
                  {item.icon}
                  {/* Availability dot — first card only */}
                  {item.active && (
                    <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2" aria-label="Available">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50"
                        style={{ background: "#22c55e" }} />
                      <span className="relative inline-flex rounded-full h-2 w-2"
                        style={{ background: "#22c55e" }} />
                    </span>
                  )}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className={`${poppins.className} text-[9px] font-semibold tracking-[2px] uppercase mb-0.5`}
                    style={{ color: `${item.accent}80` }}>
                    {item.category}
                  </p>
                  <h3 className={`${poppins.className} text-[13px] font-medium text-gray-800 leading-tight truncate
                    group-hover:transition-colors group-hover:duration-200`}
                    style={{ color: undefined }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Accent dot */}
                <span
                  className="w-1 h-1 rounded-full shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: item.accent }}
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          style={{ opacity }}
          className="flex justify-center pt-2 shrink-0"
        >
          <div className="flex flex-col items-center gap-2">
            <span className={`text-[10px] tracking-[4px] uppercase text-gray-500 ${poppins.className}`}>
              Scroll
            </span>
            {/* Mouse icon */}
            <div className="w-5 h-8 rounded-full border-2 border-gray-300 flex justify-center pt-1.5">
              <motion.div
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="w-[3px] h-[6px] rounded-full bg-[#007979]"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}