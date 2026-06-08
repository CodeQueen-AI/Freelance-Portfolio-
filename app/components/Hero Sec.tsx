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
  { icon: <FaLaptopCode />, title: "Frontend & Full Stack Developer" },
  { icon: <FaRobot />,      title: "AI & Automation Engineer" },
  { icon: <FaBriefcase />,  title: "Freelance Developer (Remote Projects)" },
  { icon: <FaGlobe />,      title: "Working with Global Clients" },
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
      className={`relative min-h-screen overflow-hidden pt-20 ${inter.className}`}
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* ── Name ── */}
        <motion.div
          style={{ opacity }}
          className="text-center pt-10"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 110, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="leading-none tracking-tight flex justify-center gap-3 flex-wrap"
            >
              {["Sumbal", "Naz"].map((word, wi) => (
                <span
                  key={wi}
                  className={`${dancing.className} text-[68px] md:text-[118px] lg:text-[155px]`}
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
            className={`mt-5 flex justify-center ${poppins.className}`}
          >
            <span className="px-6 py-2 rounded-full border border-gray-300 text-gray-600 text-xs md:text-sm tracking-[3px] uppercase bg-white shadow-sm hover:border-[#007979] hover:text-[#007979] transition-all duration-300 cursor-default">
              Freelance Full Stack &amp; AI Developer
            </span>
          </motion.div>
        </motion.div>

        {/* ── Three columns ── */}
        <div className="relative mt-14 grid lg:grid-cols-3 items-center gap-10">

          {/* Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            transition={{ delayChildren: 0.7 }}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="leading-[1.85] font-serif text-gray-600 text-[15px]">
              I am a Freelance Full Stack &amp; AI Developer focused on building modern,
              scalable and user-friendly products. I create fast, clean web applications
              with AI-powered features that deliver real value and help businesses grow
              globally.
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#007979] text-white font-medium tracking-wide overflow-hidden relative cursor-pointer ${poppins.className}`}
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

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-8 pt-1">
              {[
                { num: "2+",  label: "Years Building" },
                { num: "10+", label: "Projects Done" },
                { num: "5+",  label: "Global Clients" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className={`text-2xl font-black text-[#007979] ${poppins.className}`}>
                    {stat.num}
                  </span>
                  <span className="text-[11px] text-gray-400 tracking-wide uppercase mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Center — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center relative"
            style={{ y: imageY }}
          >
            {/* Pulsing glow */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] bg-[#007979]/20 blur-3xl rounded-full"
            />
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[220px] h-[220px] md:w-[340px] md:h-[340px] rounded-full border border-dashed border-[#007979]/20"
            />
            <Image
              src="/Hero.png"
              alt="Sumbal Naz"
              width={900}
              height={900}
              priority
              className="relative scale-125 md:scale-150 drop-shadow-2xl"
            />
          </motion.div>

          {/* Right — role list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            transition={{ delayChildren: 0.8 }}
            className="w-full max-w-md"
          >
            {roleItems.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="flex items-center gap-4 py-4 border-b border-gray-100 cursor-default group"
              >
                <motion.span
                  whileHover={{ rotate: 12, scale: 1.25 }}
                  className="text-[18px] text-[#007979] shrink-0"
                >
                  {item.icon}
                </motion.span>
                <h3 className={`text-[15px] font-medium text-gray-700 group-hover:text-[#007979] transition-colors duration-300 italic font-serif leading-snug ${inter.className}`}>
                  {item.title}
                </h3>
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
          className="flex justify-center pb-10 mt-16"
        >
          <div className="flex flex-col items-center gap-2">
            <span className={`text-[10px] tracking-[4px] uppercase text-gray-400 ${poppins.className}`}>
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
