"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiX } from "react-icons/fi";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative">
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-neutral-800 dark:bg-neutral-200 text-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition"
              aria-label="Dismiss"
            >
              <FiX className="w-3 h-3" />
            </button>

            <a
              href="/contact"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all pulse-green"
            >
              <FiMail className="w-5 h-5" />
              <span>Get in Touch</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
