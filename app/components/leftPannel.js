"use client";

import React from "react";
import Link from "next/link";
import { ThemeChanger } from "../utils.js/toggleTheme";
import { LinkPreviewDemoSecond } from "./ui/LinkPreviewDemo";
import { LinkPreview } from "@/app/components/Ancertenity/link-preview";
import { FaApple, FaWindows, FaLinux } from "react-icons/fa";
import {
  FiUsers,
  FiBell,
  FiRss,
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
      <div className="flex flex-col items-center justify-start px-3 md:px-4 pt-3 md:pt-4 pb-5 md:pb-6 w-full">
        {/* Avatar (Spline) */}
        <div className="flex justify-center items-center">
          <SplineAvatar scale={1.5} offsetX={0.1} offsetY={0.14} />
        </div>

        {/* Name / handle / theme */}
        <div className="mt-3 md:mt-4 flex flex-col items-center w-full max-w-xs">
          <div className="flex items-center gap-3 md:gap-4">
            <Link href="/">
              <h1 className="font-bold text-xl sm:text-[22px] md:text-2xl">
                Yubraj Khatri
              </h1>
            </Link>
            <ThemeChanger />
          </div>
          <Link href="/">
            <p className="opacity-60 text-xs sm:text-sm">Yubraj977</p>
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
              className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-black/5 dark:hover:bg-white/5 transition w-full"
            >
              <FiMail className="opacity-80 text-[16px] sm:text-[17px]" />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/Yubraj977"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-black/5 dark:hover:bg-white/5 transition w-full"
            >
              <FiGithub className="opacity-80 text-[16px] sm:text-[17px]" />
              <span>GitHub</span>
            </a>
            <a
              href="https://instagram.com/001mycreativesite"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-black/5 dark:hover:bg-white/5 transition w-full"
            >
              <FiInstagram className="opacity-80 text-[16px] sm:text-[17px]" />
              <span>Instagram</span>
            </a>
            <a
              href="https://youtube.com/@yourchannel"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-black/5 dark:hover:bg-white/5 transition w-full"
            >
              <FiYoutube className="opacity-80 text-[16px] sm:text-[17px]" />
              <span>YouTube</span>
            </a>
          </div>

          {/* Newsletter */}
          <div className="mt-3 w-full">
            <div className="rounded-lg border border-neutral-300/60 dark:border-neutral-800 bg-black/[0.04] dark:bg-white/[0.04] px-3 py-2.5 sm:px-3.5 sm:py-3">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <FiUsers className="opacity-80 text-[15px] sm:text-[16px]" />
                  <span className="text-[14px] sm:text-[15px] font-medium">
                    Newsletter
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-black/10 dark:bg-white/10">
                    8
                  </span>
                </div>
                <Link
                  href="/subscribe"
                  className="flex items-center gap-1 rounded-md px-2.5 py-1.5 text-[12px] sm:text-[13px] font-semibold border border-neutral-300 dark:border-neutral-700 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200 flex-shrink-0"
                >
                  <FiBell className="text-[13px] sm:text-[14px]" />
                  <span>Subscribe</span>
                </Link>
              </div>
              <div className="mt-2 flex items-center justify-between w-full text-[12px] sm:text-[13px] opacity-70">
                <span className="flex-shrink-0">Twice a month. No spam.</span>
                <Link
                  href="/rss.xml"
                  className="flex items-center gap-1 hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                >
                  <FiRss className="text-[13px] sm:text-[14px]" />
                  <span>RSS</span>
                </Link>
              </div>
            </div>
          </div>

          <hr className="my-3 w-full" />

          {/* Languages */}
          <div className="mt-2 w-full">
            <h4 className="text-xs sm:text-sm font-semibold opacity-80">
              🗣️ Languages
            </h4>
            <div className="mt-2 flex gap-2 text-[11px] sm:text-xs whitespace-nowrap overflow-x-auto no-scrollbar pr-1">
              <span className="px-2 py-0.5 rounded-md border border-neutral-300 dark:border-neutral-700">
                🇬🇧 English · B2
              </span>
              <span className="px-2 py-0.5 rounded-md border border-neutral-300 dark:border-neutral-700">
                🇮🇳 Hindi · C1
              </span>
              <span className="px-2 py-0.5 rounded-md border border-neutral-300 dark:border-neutral-700">
                🇳🇵 Nepali · Native
              </span>
            </div>
          </div>

          {/* Operating Systems */}
          <div className="mt-3 w-full">
            <h3 className="text-xs sm:text-sm font-bold mb-2 text-center">
              Operating Systems
            </h3>
            <div className="w-full bg-white/60 dark:bg-white/5 border dark:border-white/10 backdrop-blur-sm shadow-md dark:shadow-xl rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 flex justify-around items-center text-lg sm:text-2xl text-gray-700 dark:text-gray-300">
              <FaApple className="hover:scale-110 transition-transform" />
              <FaWindows className="hover:scale-110 transition-transform" />
              <FaLinux className="hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* Actions */}
          {/* Actions */}
          <div className="mt-3 grid grid-cols-2 gap-2 w-full text-sm sm:text-[15px]">
            <Link
              href="/gallery"
              className="w-full bg-gray-800 hover:bg-gray-700 transition py-2 px-3 sm:py-2.5 sm:px-3.5 rounded-xl text-white font-semibold shadow-inner text-center"
            >
              Watch My Gallery
            </Link>

            {/* CV with LinkPreview hover */}
            <LinkPreview
              url="/api/download-cv" // keeps your download endpoint
              imageSrc="/cv.png"
              isStatic
              className="w-full bg-white/10 hover:bg-white/20 border border-white/20 transition py-2 px-3 sm:py-2.5 sm:px-3.5 rounded-xl font-semibold text-center flex items-center justify-center gap-2"
            >
              <FiDownload className="text-[16px] sm:text-[17px]" />
              <span>CV</span>
            </LinkPreview>
          </div>
        </div>
      </div>
    </div>
  );
}
