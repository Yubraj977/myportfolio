"use client";

import React from "react";
import Link from "next/link";
import { LinkPreviewDemoSecond } from "./ui/LinkPreviewDemo";
import { LinkPreview } from "@/app/components/Ancertenity/link-preview";
import { FaApple, FaWindows, FaLinux } from "react-icons/fa";
import {
  FiUsers,
  FiBell,
  FiMail,
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiDownload,
} from "react-icons/fi";

import dynamic from "next/dynamic";
import { SplineErrorFilter } from "./SplineErrorFilter"; // Import the improved filter

// Dynamically import SplineAvatar to avoid SSR issues
const SplineAvatar = dynamic(() => import("./SplineAvatar"), {
  ssr: false,
  loading: () => (
    <div className="relative overflow-hidden rounded-full w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function LeftPannel() {
  return (
    <div className="bg-green300 h-full w-full flex flex-col lg:pl-10 lg:overflow-y-auto lg:no-scrollbar z-50 lg:max-h-screen">
      {/* Enhanced Spline error filter */}
      <SplineErrorFilter />

      {/* Profile Section */}
      <div className="flex flex-col items-center justify-start px-3 md:px-4 pt-3 md:pt-4 pb-5 md:pb-6 w-full animate-fade-in">
        {/* Avatar (Spline) */}
        <div className="flex justify-center items-center">
          <SplineAvatar scale={1.5} offsetX={0.1} offsetY={0.14} />
        </div>

        {/* Name */}
        <div className="mt-3 md:mt-4 flex flex-col items-center w-full max-w-xs">
          <Link href="/">
            <h1 className="font-bold text-xl sm:text-[22px] md:text-2xl text-center">
              Yubraj Khatri
            </h1>
          </Link>

          {/* Bio */}
          <div className="mt-2 -mb-1 md:mb-0">
            <LinkPreviewDemoSecond />
          </div>

          {/* Status */}
          <div className="mt-2.5 md:mt-3 w-full">
            <div className="text-neutral-400 text-xs sm:text-sm whitespace-pre-line w-full text-justify break-words">
              <span className="font-semibold text-neutral-300 dark:text-neutral-200">
                Now:
              </span>{" "}
              <LinkPreview
                url="https://example.com/ai-pilot"
                imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
                isStatic
                className="inline-block align-baseline font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 ml-1"
              >
                Building an AI Pilot
              </LinkPreview>
              <span> (FastAPI, OpenAI)</span>
            </div>

            <div className="mt-1 text-neutral-400 text-xs sm:text-sm whitespace-pre-line w-full text-justify break-words">
              <span className="font-semibold text-neutral-300 dark:text-neutral-200">
                Open to:
              </span>{" "}
              <LinkPreview
                url="mailto:yubraj@example.com"
                imageSrc="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop"
                isStatic
                className="inline-block align-baseline font-bold bg-clip-text text-transparent bg-gradient-to-br from-cyan-500 to-pink-500 ml-1"
              >
                internships &amp; collabs
              </LinkPreview>
              <span> in web/app + AI tooling.</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full text-[14px] sm:text-[15px]">
            <a
              href="mailto:yubraj@example.com"
              className="flex items-center justify-center gap-2 px-3 py-2.5 sm:px-3.5 sm:py-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950/20 transition-all w-full group"
            >
              <FiMail className="opacity-80 text-[16px] sm:text-[17px] group-hover:scale-110 transition-transform" />
              <span className="font-medium">Email</span>
            </a>
            <a
              href="https://github.com/Yubraj977"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2.5 sm:px-3.5 sm:py-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950/20 transition-all w-full group"
            >
              <FiGithub className="opacity-80 text-[16px] sm:text-[17px] group-hover:scale-110 transition-transform" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://instagram.com/001mycreativesite"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2.5 sm:px-3.5 sm:py-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950/20 transition-all w-full group"
            >
              <FiInstagram className="opacity-80 text-[16px] sm:text-[17px] group-hover:scale-110 transition-transform" />
              <span className="font-medium">Instagram</span>
            </a>
            <a
              href="https://youtube.com/@yourchannel"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2.5 sm:px-3.5 sm:py-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950/20 transition-all w-full group"
            >
              <FiYoutube className="opacity-80 text-[16px] sm:text-[17px] group-hover:scale-110 transition-transform" />
              <span className="font-medium">YouTube</span>
            </a>
          </div>

          {/* Newsletter */}
          <div className="mt-3 w-full">
            <div className="rounded-xl border border-neutral-300/70 dark:border-neutral-700 bg-gradient-to-br from-green-50/50 to-purple-50/50 dark:from-green-950/20 dark:to-purple-950/20 px-3 py-2 sm:px-3.5 sm:py-2.5 backdrop-blur-sm">
              <div className="flex items-center justify-between w-full mb-1.5">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <FiUsers className="opacity-80 text-[16px] sm:text-[17px] text-green-600 dark:text-green-400" />
                  <span className="text-[14px] sm:text-[15px] font-semibold">
                    Newsletter
                  </span>
                </div>
                <Link
                  href="/subscribe"
                  className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] sm:text-[13px] font-semibold bg-green-600 text-white hover:bg-green-500 dark:bg-green-500 dark:hover:bg-green-400 transition-all duration-200 flex-shrink-0 shadow-sm hover:shadow-md"
                >
                  <FiBell className="text-[13px] sm:text-[14px]" />
                  <span>Subscribe</span>
                </Link>
              </div>
              <p className="text-[12px] sm:text-[13px] opacity-75 leading-relaxed">
                Get updates on new posts, projects, and tech insights. Twice a month, no spam.
              </p>
            </div>
          </div>

          <hr className="my-3 w-full" />

          {/* Languages */}
          <div className="mt-2 w-full">
            <h4 className="text-sm font-semibold opacity-90 mb-3 flex items-center gap-2">
              🗣️ Languages
            </h4>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center gap-1.5 px-2 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all hover:scale-105">
                <span className="text-3xl">🇬🇧</span>
                <span className="text-[10px] sm:text-xs font-medium">English</span>
                <span className="text-[9px] opacity-60">B2</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 px-2 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all hover:scale-105">
                <span className="text-3xl">🇮🇳</span>
                <span className="text-[10px] sm:text-xs font-medium">Hindi</span>
                <span className="text-[9px] opacity-60">C1</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 px-2 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all hover:scale-105">
                <span className="text-3xl">🇳🇵</span>
                <span className="text-[10px] sm:text-xs font-medium">Nepali</span>
                <span className="text-[9px] opacity-60">Native</span>
              </div>
            </div>
          </div>

          {/* Operating Systems */}
          <div className="mt-3 w-full">
            <h3 className="text-sm font-semibold opacity-90 mb-3 flex items-center gap-2">
              💻 Operating Systems
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <div
                className="flex flex-col items-center gap-2 px-3 py-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 hover:border-green-400 dark:hover:border-green-600 hover:bg-green-50 dark:hover:bg-green-950/30 transition-all cursor-pointer hover:scale-105 group"
                title="macOS - Primary"
              >
                <FaApple className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors" />
                <span className="text-[10px] sm:text-xs font-medium text-center">macOS</span>
              </div>
              <div
                className="flex flex-col items-center gap-2 px-3 py-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 hover:border-green-400 dark:hover:border-green-600 hover:bg-green-50 dark:hover:bg-green-950/30 transition-all cursor-pointer hover:scale-105 group"
                title="Windows - Familiar"
              >
                <FaWindows className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors" />
                <span className="text-[10px] sm:text-xs font-medium text-center">Windows</span>
              </div>
              <div
                className="flex flex-col items-center gap-2 px-3 py-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 hover:border-green-400 dark:hover:border-green-600 hover:bg-green-50 dark:hover:bg-green-950/30 transition-all cursor-pointer hover:scale-105 group"
                title="Linux - Experience"
              >
                <FaLinux className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors" />
                <span className="text-[10px] sm:text-xs font-medium text-center">Linux</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-4 w-full text-sm sm:text-[15px]">
            {/* CV with LinkPreview hover */}
            <LinkPreview
              url="/api/download-cv"
              imageSrc="/cv.png"
              isStatic
              className="w-full bg-neutral-800 dark:bg-neutral-200 hover:bg-neutral-700 dark:hover:bg-neutral-300 text-white dark:text-black transition-all py-3 px-3 sm:py-3.5 sm:px-4 rounded-xl font-bold shadow-lg hover:shadow-xl text-center flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <FiDownload className="text-[16px] sm:text-[17px]" />
              <span>Download CV</span>
            </LinkPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
