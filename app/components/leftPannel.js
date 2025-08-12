"use client";
import React from "react";
import Image from "next/image";
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

const LeftPannel = () => {
  return (
    <div className="bg-green300 h-full w-full flex flex-col lg:pl-10 overflow-y-auto no-scrollbar z-50 max-h-screen">
      {/* Profile Section */}
      <div className="flex flex-col items-center px-3 md:px-4 pt-3 md:pt-4 pb-5 md:pb-6">
        {/* Avatar (compact on mobile) */}
        <div className="rounded-full flex justify-center items-center border border-slate-900/70 md:border-2">
          <Image
            src="/cyberhead.png"
            width={260}
            height={260}
            alt="Picture of the author"
            className="h-32 w-32 sm:h-36 sm:w-36 md:h-48 md:w-48 object-cover rounded-full object-center scale-x-[-1] -rotate-[9deg]"
            priority
          />
        </div>

        {/* Name / handle / theme */}
        <div className="mt-3 md:mt-4 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 md:gap-4">
            <Link href="/">
              <h1 className="font-bold text-xl sm:text-[22px] md:text-2xl">Yubraj Khatri</h1>
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

          {/* Status — same hover style as bio */}
          <div className="mt-2.5 md:mt-3 max-w-xs">
            <div
              className="text-neutral-400 text-xs sm:text-sm whitespace-pre-line w-full text-justify break-words"
              role="paragraph"
            >
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

            <div
              className="mt-1 text-neutral-400 text-xs sm:text-sm whitespace-pre-line w-full text-justify break-words"
              role="paragraph"
            >
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

          {/* Quick links — 1 col on mobile, 2 cols from sm+ */}
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-xs text-[14px] sm:text-[15px]">
            <LinkPreview
              url="mailto:yubraj@example.com"
              imageSrc="https://images.unsplash.com/photo-1581091215360-1a1c91a3d658?q=80&w=1000&auto=format&fit=crop"
              isStatic
              className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-black/5 dark:hover:bg-white/5 transition w-full"
            >
              <FiMail className="opacity-80 text-[16px] sm:text-[17px]" />
              <span>Email</span>
            </LinkPreview>

            <LinkPreview
              url="https://github.com/Yubraj977"
              imageSrc="https://images.unsplash.com/photo-1629904853893-c2c8981a1cfe?q=80&w=1000&auto=format&fit=crop"
              isStatic
              className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-black/5 dark:hover:bg-white/5 transition w-full"
            >
              <FiGithub className="opacity-80 text-[16px] sm:text-[17px]" />
              <span>GitHub</span>
            </LinkPreview>

            <LinkPreview
              url="https://instagram.com/001mycreativesite"
              imageSrc="https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1000&auto=format&fit=crop"
              isStatic
              className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-black/5 dark:hover:bg-white/5 transition w-full"
            >
              <FiInstagram className="opacity-80 text-[16px] sm:text-[17px]" />
              <span>Instagram</span>
            </LinkPreview>

            <LinkPreview
              url="https://youtube.com/@yourchannel"
              imageSrc="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop"
              isStatic
              className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-black/5 dark:hover:bg-white/5 transition w-full"
            >
              <FiYoutube className="opacity-80 text-[16px] sm:text-[17px]" />
              <span>YouTube</span>
            </LinkPreview>
          </div>
        </div>

        {/* Newsletter — compact on mobile */}
        <div className="mt-3 w-full max-w-xs">
          <div className="rounded-lg border border-neutral-300/60 dark:border-neutral-800 bg-black/[0.04] dark:bg-white/[0.04] px-3 py-2.5 sm:px-3.5 sm:py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FiUsers className="opacity-80 text-[15px] sm:text-[16px]" />
                <span className="text-[14px] sm:text-[15px] font-medium">Newsletter</span>
                <span className="ml-1 text-[11px] px-2 py-0.5 rounded-full bg-black/10 dark:bg-white/10">8</span>
              </div>

              <Link
                href="/subscribe"
                className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-[12px] sm:text-[13px] font-semibold border border-neutral-300 dark:border-neutral-700 hover:bg-black/5 dark:hover:bg-white/5 transition"
                aria-label="Subscribe to newsletter"
              >
                <FiBell className="text-[14px] sm:text-[15px]" />
                Subscribe
              </Link>
            </div>

            <div className="mt-2 flex items-center justify-between text-[12px] sm:text-[13px] opacity-70">
              <span>Twice a month. No spam.</span>
              <Link
                href="/rss.xml"
                className="inline-flex items-center gap-1 hover:opacity-100 transition"
                aria-label="RSS feed"
              >
                <FiRss className="text-[14px] sm:text-[15px]" /> RSS
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-3 w-full" />

        {/* Languages — keep in one line on mobile, scroll if needed */}
        <div className="mt-2 w-full max-w-xs">
          <h4 className="text-xs sm:text-sm font-semibold opacity-80">🗣️ Languages</h4>
          <div className="mt-2 flex gap-2 text-[11px] sm:text-xs whitespace-nowrap overflow-x-auto no-scrollbar pr-1">
            <span className="px-2 py-0.5 rounded-md border border-neutral-300 dark:border-neutral-700">🇬🇧 English · B2</span>
            <span className="px-2 py-0.5 rounded-md border border-neutral-300 dark:border-neutral-700">🇮🇳 Hindi · C1</span>
            <span className="px-2 py-0.5 rounded-md border border-neutral-300 dark:border-neutral-700">🇳🇵 Nepali · Native</span>
          </div>
        </div>

        {/* Operating Systems — tighter on mobile */}
        <div className="mt-3 w-full">
          <h3 className="text-xs sm:text-sm font-bold mb-2 text-center">Operating Systems</h3>
          <div className="w-full bg-white/60 dark:bg-white/5 border dark:border-white/10 backdrop-blur-sm shadow-md dark:shadow-xl rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 flex justify-around items-center text-lg sm:text-2xl text-gray-700 dark:text-gray-300 transition-all duration-300">
            <FaApple className="hover:scale-110 transition-transform" />
            <FaWindows className="hover:scale-110 transition-transform" />
            <FaLinux className="hover:scale-110 transition-transform" />
          </div>
        </div>

        {/* Actions — compact on mobile */}
        <div className="mt-3 grid grid-cols-2 gap-2 w-full text-sm sm:text-[15px]">
          <Link
            href="/gallery"
            className="w-full bg-gray-800 hover:bg-gray-700 transition py-2 px-3 sm:py-2.5 sm:px-3.5 rounded-xl text-white font-semibold shadow-inner text-center"
          >
            Watch My Gallery
          </Link>
          <Link
            href="/Yubraj_Khatri_CV.pdf"
            className="w-full bg-white/10 hover:bg-white/20 border border-white/20 transition py-2 px-3 sm:py-2.5 sm:px-3.5 rounded-xl font-semibold text-center flex items-center justify-center gap-2"
          >
            <FiDownload className="text-[16px] sm:text-[17px]" /> CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftPannel;