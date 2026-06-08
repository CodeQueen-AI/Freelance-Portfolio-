"use client";

import Image from "next/image";
import { FaLaptopCode, FaRobot, FaBriefcase, FaGlobe } from "react-icons/fa";
import { Inter, Dancing_Script, Poppins } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roleItems = [
  { icon: <FaLaptopCode />, title: "Frontend & Full Stack Developer" },
  { icon: <FaRobot />, title: "AI & Automation Engineer" },
  { icon: <FaBriefcase />, title: "Freelance Developer (Remote Projects)" },
  { icon: <FaGlobe />, title: "Working with Global Clients" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className={`relative min-h-screen overflow-hidden pt-20 ${inter.className}`}
    >
      {/* Animated background gradient */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#00797918,transparent_60%)]"
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right,#007979 1px,transparent 1px),linear-gradient(to bottom,#007979 1px,transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Name */}
        <div className="text-center pt-10">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="leading-none tracking-tight flex justify-center gap-4 flex-wrap"
            >
              <span className={`${dancing.className} text-[70px] md:text-[120px] lg:text-[160px]`}>
                <span className="text-[#007979]">S</span>
                <span className="text-black">umbal</span>
              </span>
              <span className={`${dancing.className} text-[70px] md:text-[120px] lg:text-[160px]`}>
                <span className="text-[#007979]">N</span>
                <span className="text-black">az</span>
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className={`mt-4 flex justify-center ${poppins.className}`}
          >
            <span className="px-6 py-2 rounded-full border border-black text-black text-xs md:text-sm tracking-[3px] uppercase bg-white shadow-sm hover:shadow-md hover:border-[#007979] hover:text-[#007979] transition-all duration-300 cursor-default">
              Freelance Full Stack &amp; AI Developer
            </span>
          </motion.div>
        </div>

        {/* Three column layout */}
        <div className="relative mt-12 grid lg:grid-cols-3 items-center gap-10">

          {/* Left — bio + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="leading-relaxed italic font-serif text-gray-700">
              I am a Freelance Full Stack &amp; AI Developer focused on building modern,
              scalable and user-friendly products. I create fast and clean web applications
              with AI-powered features that deliver real value and help businesses grow
              globally with better digital experiences.
            </p>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`group flex items-center gap-3 px-7 py-3 rounded-full bg-[#007979] text-white font-medium tracking-wide overflow-hidden relative cursor-pointer ${poppins.className}`}
            >
              <span className="relative z-10">Start a Collaboration</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                →
              </motion.span>
              <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition duration-500" />
            </motion.button>

            {/* Stats */}
            <div className="flex gap-8 pt-2">
              {[
                { num: "2+", label: "Years Building" },
                { num: "10+", label: "Projects Done" },
                { num: "5+", label: "Global Clients" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + i * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="text-2xl font-black text-[#007979] font-serif">{stat.num}</span>
                  <span className="text-xs text-gray-500 tracking-wide uppercase">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center relative"
            style={{ y: imageY }}
          >
            {/* Pulsing glow */}
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#007979]/20 blur-3xl rounded-full"
            />
            <Image
              src="/Hero.png"
              alt="Sumbal Naz"
              width={900}
              height={900}
              className="relative scale-125 md:scale-150 drop-shadow-2xl"
            />
          </motion.div>

          {/* Right — role list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-md"
          >
            {roleItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.12, duration: 0.5 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 py-4 border-b border-gray-100 cursor-pointer group transition-all"
              >
                <motion.span
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  className="text-xl text-[#007979] shrink-0 transition duration-300"
                >
                  {item.icon}
                </motion.span>
                <h3 className="text-base md:text-lg font-medium text-gray-800 group-hover:text-[#007979] transition duration-300 italic font-serif leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex justify-center pb-10 mt-16"
        >
          <div className="flex flex-col items-center gap-2">
            <span className={`text-xs tracking-[3px] uppercase text-gray-400 ${poppins.className}`}>
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-[1.5px] h-10 bg-gradient-to-b from-[#007979] to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
