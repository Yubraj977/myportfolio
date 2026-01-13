"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const handleLoad = () => {
      if (mounted) {
        setTimeout(() => setIsLoading(false), 300); // Small delay for smoothness
      }
    };

    // Set minimum loading time
    const minTimer = setTimeout(() => {
      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
      }
    }, 800);

    return () => {
      mounted = false;
      clearTimeout(minTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const emojiVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-md bg-background/80"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="status"
          aria-live="polite"
          aria-label="Loading website content"
        >
          <div className="relative">
            {/* Spinner Ring with Gradient */}
            <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 border-4 border-transparent border-t-green-500 border-r-purple-500 border-b-pink-500 rounded-full animate-spin" />

            {/* Robot Emoji */}
            <motion.div
              className="relative z-10 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
              variants={emojiVariants}
              initial="initial"
              animate="animate"
            >
              <span className="text-6xl md:text-7xl select-none">🤖</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
