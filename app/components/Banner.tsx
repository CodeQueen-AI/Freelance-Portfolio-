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
      className={`${elite.className} relative min-h-screen overflow-hidden`}
      style={{ background: "linear-gradient(135deg, #f0fafa 0%, #ffffff 45%, #f5fffe 100%)" }}
    >

      {/* ── Fine grid overlay ───────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right,  rgba(0,121,121,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,121,121,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Dot-matrix accent (top-right) ───────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.4, delay: 0.2 }}
        className="pointer-events-none absolute right-8 top-16 hidden md:block"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,121,121,0.22) 1.2px, transparent 1.2px)`,
          backgroundSize: "18px 18px",
          width: "180px",
          height: "180px",
          borderRadius: "4px",
        }}
      />

      {/* ── Dot-matrix accent (bottom-left) ─────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="pointer-events-none absolute bottom-24 left-6 hidden md:block"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,121,121,0.18) 1.2px, transparent 1.2px)`,
          backgroundSize: "18px 18px",
          width: "140px",
          height: "140px",
          borderRadius: "4px",
        }}
      />

      {/* ── Large blurred glow — teal, center-left ──────────── */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: "520px",
          height: "520px",
          top: "50%",
          left: "12%",
          transform: "translate(-50%, -55%)",
          background: "radial-gradient(circle, rgba(0,200,180,0.13) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── Large blurred glow — warm, center-right ─────────── */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: "460px",
          height: "460px",
          top: "60%",
          right: "8%",
          transform: "translate(30%, -50%)",
          background: "radial-gradient(circle, rgba(0,121,121,0.09) 0%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />

      {/* ── Floating decorative ring (top-left) ─────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-10 top-24 hidden lg:block"
        style={{
          width: "88px",
          height: "88px",
          borderRadius: "50%",
          border: "1.5px solid rgba(0,121,121,0.25)",
          boxShadow: "inset 0 0 24px rgba(0,121,121,0.07)",
        }}
      />

      {/* ── Smaller decorative ring (bottom-right) ──────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute bottom-32 right-16 hidden lg:block"
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          border: "1.5px solid rgba(0,121,121,0.2)",
        }}
      />

      {/* ── Corner bracket — top-right ───────────────────────── */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="pointer-events-none absolute right-10 top-10 hidden md:block"
        width="40" height="40" viewBox="0 0 40 40" fill="none"
      >
        <path d="M40 0H24M40 0V16" stroke="rgba(0,121,121,0.35)" strokeWidth="2" strokeLinecap="round"/>
      </motion.svg>

      {/* ── Corner bracket — bottom-left ─────────────────────── */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="pointer-events-none absolute bottom-10 left-10 hidden md:block"
        width="40" height="40" viewBox="0 0 40 40" fill="none"
      >
        <path d="M0 40H16M0 40V24" stroke="rgba(0,121,121,0.35)" strokeWidth="2" strokeLinecap="round"/>
      </motion.svg>

      {/* ── Thin horizontal rule — top ────────────────────────── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] origin-left"
        style={{ background: "linear-gradient(to right, rgba(0,121,121,0.55), rgba(0,121,121,0.0))" }}
      />

      {/* ── Thin horizontal rule — bottom ────────────────────── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.55, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-right"
        style={{ background: "linear-gradient(to left, rgba(0,121,121,0.55), rgba(0,121,121,0.0))" }}
      />

      {/* ═══════════════ MAIN CONTENT ═══════════════════════════ */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-9xl text-center">

          {/* Subtle eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6 flex items-center justify-center gap-2"
          >
            <span
              className="inline-block h-px w-10"
              style={{ background: "rgba(0,121,121,0.45)" }}
            />
            <span
              className="rounded-full px-4 py-1 text-[11px] uppercase tracking-[0.22em]"
              style={{
                color: "#007979",
                background: "rgba(0,121,121,0.07)",
                border: "1px solid rgba(0,121,121,0.18)",
                letterSpacing: "0.22em",
              }}
            >
              Portfolio
            </span>
            <span
              className="inline-block h-px w-10"
              style={{ background: "rgba(0,121,121,0.45)" }}
            />
          </motion.div>

          {/* ── FIRST ROW ─────────────────────────────────────── */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
            style={{ fontSize: "clamp(28px, 5vw, 56px)", lineHeight: 1.3 }}
          >
            {words1.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="font-medium tracking-tight"
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
              className="relative cursor-default px-4 py-1.5 text-white"
              style={{ fontSize: "clamp(22px, 4vw, 46px)" }}
            >
              <span
                className="absolute inset-0 rounded-sm"
                style={{
                  background: "linear-gradient(120deg, #007979 0%, #00a0a0 100%)",
                  transform: "skewX(-6deg)",
                  boxShadow: "0 4px 20px rgba(0,121,121,0.35)",
                }}
              />
              <span className="relative drop-shadow-sm">Modern Digital Products</span>
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

          {/* ── SECOND ROW ────────────────────────────────────── */}
          <div
            className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
            style={{ fontSize: "clamp(28px, 5.2vw, 58px)", lineHeight: 1.3 }}
          >
            {words2.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="tracking-tight"
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* ── THIRD ROW ─────────────────────────────────────── */}
          <div
            className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            style={{ fontSize: "clamp(28px, 5.2vw, 58px)", lineHeight: 1.3 }}
          >
            {words3.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="tracking-tight"
              >
                {word}
              </motion.span>
            ))}

            <motion.span
              initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.06, rotate: 1 }}
              className="relative cursor-default px-6 py-2 text-white"
              style={{ fontSize: "clamp(22px, 4vw, 50px)" }}
            >
              <span
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(120deg, #0a0a0a 0%, #2a2a2a 100%)",
                  transform: "skewX(-6deg)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.22)",
                }}
              />
              <span className="relative">for real-world Problems</span>
            </motion.span>
          </div>

          {/* ── Bottom scroll indicator ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.6, duration: 0.7 }}
            className="mt-14 flex flex-col items-center gap-2"
          >
            <span
              className="text-[11px] uppercase tracking-[0.2em]"
              style={{ color: "rgba(0,121,121,0.6)" }}
            >
              Scroll
            </span>
            <motion.span
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="block h-8 w-px"
              style={{ background: "linear-gradient(to bottom, rgba(0,121,121,0.5), transparent)" }}
            />
          </motion.div>

        </div>
      </section>
    </main>
  );
}
