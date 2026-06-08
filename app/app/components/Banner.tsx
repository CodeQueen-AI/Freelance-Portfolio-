"use client";

import { Special_Elite } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const elite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});

const words1 = ["I", "design", "&", "build"];
const words2 = ["using", "Modern", "Web", "Technologies", "&", "AI"];
const words3 = ["I", "deliver", "Fast,", "Scalable", "Solutions"];

export default function Banner() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <main
      ref={ref}
      className={`${elite.className} relative min-h-screen overflow-hidden bg-[#fafffe]`}
    >
      {/* Animated grid background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.5 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,121,121,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,121,121,0.07) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-9xl text-center">

          {/* FIRST ROW */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[28px] leading-[1.4] md:text-[52px]">
            {words1.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}

            {/* Scribble SVG */}
            <motion.span
              initial={{ opacity: 0, rotate: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, rotate: 12, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="relative -mt-2"
            >
              <svg width="52" height="52" viewBox="0 0 100 100" fill="none">
                <motion.path
                  d="M50 10C20 0 15 40 45 35C70 30 80 60 50 60C20 60 30 90 60 80"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ delay: 0.6, duration: 1.2 }}
                />
                <motion.path
                  d="M52 78L48 95"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ delay: 1.6, duration: 0.4 }}
                />
              </svg>
            </motion.span>

            {/* Highlighted tag */}
            <motion.span
              initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.06, rotate: -1 }}
              className="relative px-3 py-1 text-white cursor-default"
            >
              <span className="absolute inset-0 bg-[#007979] -skew-x-6 rounded-sm" />
              <span className="relative">Modern Digital Products</span>
            </motion.span>

            {/* Rays SVG */}
            <motion.svg
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              width="36" height="36" viewBox="0 0 40 40" fill="none" className="-mt-6"
            >
              <path d="M20 3V12M5 8L10 13M35 8L30 13" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </motion.svg>
          </div>

          {/* SECOND ROW */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-[28px] leading-[1.4] md:text-[55px]">
            {words2.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* THIRD ROW */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-5 text-[28px] leading-[1.4] md:text-[55px]">
            {words3.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}

            <motion.span
              initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.06, rotate: 1 }}
              className="relative px-6 py-2 text-white cursor-default"
            >
              <span className="absolute inset-0 bg-black -skew-x-6" />
              <span className="relative">for real-world Problems</span>
            </motion.span>
          </div>

        </div>
      </section>
    </main>
  );
}
