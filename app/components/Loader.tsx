"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dancing_Script, Poppins } from "next/font/google";
import Image from "next/image";

const dancing = Dancing_Script({ subsets: ["latin"], weight: ["600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500"] });

/* SVG ring dimensions */
const R = 54;          // radius
const STROKE = 3.5;
const CIRCUMFERENCE = 2 * Math.PI * R;

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    /* Accelerating counter: fast start, slows near 100 */
    let raf: number;
    let current = 0;
    const start = performance.now();
    const duration = 2600; // ms

    function easeInOutCubic(t: number) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function tick(now: number) {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const easedT = easeInOutCubic(t);
      current = Math.floor(easedT * 100);
      setProgress(current);

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        // brief pause at 100% before exit
        setTimeout(() => setDone(true), 400);
        setTimeout(() => onComplete(), 1200);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  const strokeDashoffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(8px)",
          }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white select-none"
        >
          {/* Soft radial glow behind avatar */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-[#007979]/8 blur-[80px] pointer-events-none" />

          {/* ── Avatar + ring ── */}
          <div className="relative flex items-center justify-center mb-10">
            {/* Outer decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute"
              style={{ width: R * 2 + 40, height: R * 2 + 40 }}
            >
              <svg
                width={R * 2 + 40}
                height={R * 2 + 40}
                viewBox={`0 0 ${R * 2 + 40} ${R * 2 + 40}`}
              >
                {/* Dashes decoration */}
                {Array.from({ length: 24 }).map((_, i) => {
                  const angle = (i / 24) * 360;
                  const rad = (angle * Math.PI) / 180;
                  const cx = R + 20;
                  const cy = R + 20;
                  const r = R + 14;
                  // Round to 4 dp so SSR and client produce identical attribute strings
                  const x = Math.round((cx + r * Math.cos(rad)) * 1e4) / 1e4;
                  const y = Math.round((cy + r * Math.sin(rad)) * 1e4) / 1e4;
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r={i % 6 === 0 ? 2 : 1}
                      fill="#007979"
                      opacity={i % 6 === 0 ? 0.5 : 0.18}
                    />
                  );
                })}
              </svg>
            </motion.div>

            {/* Progress ring SVG */}
            <svg
              width={R * 2 + 24}
              height={R * 2 + 24}
              viewBox={`0 0 ${R * 2 + 24} ${R * 2 + 24}`}
              className="absolute"
            >
              {/* Track */}
              <circle
                cx={R + 12}
                cy={R + 12}
                r={R}
                fill="none"
                stroke="#007979"
                strokeWidth={STROKE}
                opacity={0.1}
              />
              {/* Progress arc */}
              <motion.circle
                cx={R + 12}
                cy={R + 12}
                r={R}
                fill="none"
                stroke="#007979"
                strokeWidth={STROKE}
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={strokeDashoffset}
                transform={`rotate(-90 ${R + 12} ${R + 12})`}
                style={{ transition: "stroke-dashoffset 0.05s linear" }}
              />
              {/* Glowing tip — only rendered client-side to avoid hydration mismatch */}
              {progress > 2 && (
                <motion.circle
                  cx={Math.round((R + 12 + R * Math.cos(((progress / 100) * 360 - 90) * (Math.PI / 180))) * 1e4) / 1e4}
                  cy={Math.round((R + 12 + R * Math.sin(((progress / 100) * 360 - 90) * (Math.PI / 180))) * 1e4) / 1e4}
                  r={STROKE * 1.4}
                  fill="#007979"
                  opacity={0.9}
                />
              )}
            </svg>

            {/* Avatar circle */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-full overflow-hidden border-[3px] border-white shadow-[0_0_30px_rgba(0,121,121,0.2)]"
              style={{ width: R * 2 - 8, height: R * 2 - 8 }}
            >
              <Image
                src="/Hero.png"
                alt="Sumbal Naz"
                fill
                className="object-cover object-top scale-125"
                priority
              />
              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#007979]/10" />
            </motion.div>
          </div>

          {/* ── Name ── */}
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`${dancing.className} text-[42px] tracking-wide`}
            >
              <span className="text-[#007979]">S</span>
              <span className="text-black">umbal </span>
              <span className="text-[#007979]">N</span>
              <span className="text-black">az</span>
            </motion.h1>
          </div>

          {/* ── Role tag ── */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className={`${poppins.className} text-[10px] uppercase tracking-[4px] text-gray-400 mb-10`}
          >
            Full Stack &amp; AI Developer
          </motion.p>

          {/* ── Progress bar + counter ── */}
          <div className="flex flex-col items-center gap-3 w-[200px]">
            {/* Thin bar */}
            <div className="w-full h-[2px] bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#007979] rounded-full"
                style={{ width: `${progress}%`, transition: "width 0.05s linear" }}
              />
            </div>

            {/* Counter */}
            <div className="flex items-baseline gap-1">
              <motion.span
                className={`${poppins.className} text-2xl font-semibold text-black tabular-nums`}
              >
                {progress}
              </motion.span>
              <span className={`${poppins.className} text-sm text-gray-400`}>%</span>
            </div>

            {/* Status text */}
            <motion.p
              key={progress < 40 ? "a" : progress < 80 ? "b" : "c"}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${poppins.className} text-[10px] text-gray-300 tracking-widest uppercase`}
            >
              {progress < 40 ? "Initializing…" : progress < 80 ? "Loading assets…" : "Almost ready…"}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
