"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./Loader";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  const handleComplete = useCallback(() => {
    setLoaded(true);
    document.body.style.overflow = "";
  }, []);

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
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
              filter: { duration: 0.6 },
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
