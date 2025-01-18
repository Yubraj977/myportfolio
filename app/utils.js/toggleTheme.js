"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  return (
    <div
      className={`relative w-14 h-8 flex items-center bg-gray-200 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-all duration-300`}
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
    >
      {/* Sun Icon */}
      <SunIcon
        className={`absolute left-1 w-6 h-6 text-yellow-400 transition-all duration-300 ${
          isDarkMode ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Moon Icon */}
      <MoonIcon
        className={`absolute right-1 w-6 h-6 text-gray-800 dark:text-gray-200 transition-all duration-300 ${
          isDarkMode ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Slider Circle */}
      <div
        className={`absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-all duration-300 ${
          isDarkMode ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};