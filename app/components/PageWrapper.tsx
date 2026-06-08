"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./Loader";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  const handleComplete = useCallback(() => {
    setLoaded(true);
    // re-enable scroll after loader exits
    document.body.style.overflow = "";
  }, []);

  // Lock scroll while loader is showing
  if (typeof window !== "undefined" && !loaded) {
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      <Loader onComplete={handleComplete} />

      <AnimatePresence>
        {loaded && (
          <motion.div
            key="page"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
