"use client";

import React, { useRef } from "react";
import { Poppins } from "next/font/google";
import { motion, useInView } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function HireMeSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className={`${poppins.className} bg-[#f6fffe] py-24 px-6`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[40px] bg-[#007979] px-8 py-20 md:px-16 text-center"
        >
          {/* Animated blobs */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[-10%] top-[30%] h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.4, 1], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute right-[-10%] bottom-[15%] h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[-20%] right-[30%] h-48 w-48 rounded-full bg-black/10 blur-3xl"
          />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative inline-flex items-center rounded-full bg-white/20 px-5 py-2 text-[10px] font-bold uppercase tracking-[3px] text-white mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white mr-2 animate-pulse" />
            Available for Projects
          </motion.div>

          {/* Heading */}
          <div className="overflow-hidden mb-2">
            <motion.h2
              initial={{ y: 80 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative font-black uppercase leading-[0.9] text-5xl md:text-7xl text-white"
            >
              Ready To Hire
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h2
              initial={{ y: 80 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative font-black uppercase leading-[0.9] text-5xl md:text-7xl text-white"
            >
              An
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h2
              initial={{ y: 80 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative font-black uppercase leading-[0.9] text-5xl md:text-7xl text-white/80"
            >
              AI Developer?
            </motion.h2>
          </div>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative mx-auto max-w-2xl text-white/75 text-lg leading-relaxed mb-12"
          >
            Let&apos;s turn your vision into an intelligent digital product. From AI automation and
            agents to full-stack applications, I build systems that help businesses scale faster.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.5 }}
            className="relative"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-sm font-bold uppercase tracking-widest text-[#007979] transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
            >
              Let&apos;s Start A Project
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
