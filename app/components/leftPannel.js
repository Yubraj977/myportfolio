import React from "react";
import Image from "next/image";
import { ImagesSliderDemo } from "./ui/ImagesSliderDemo";
import { SiGooglenews } from "react-icons/si";
import { IoPeopleSharp } from "react-icons/io5";
import { IoLinkSharp } from "react-icons/io5";
import { FaCat } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import { GiJumpingDog } from "react-icons/gi";
import { GlobeDemo } from "./ui/GlobeDemo";
import { LampDemo } from "./Ancertenity/lamp";
import { LinkPreviewDemoSecond } from "./ui/LinkPreviewDemo";
import Home from "./3D/Home";
import Link from "next/link";
import { ThemeChanger } from "../utils.js/toggleTheme";
import { FaApple, FaWindows, FaLinux } from "react-icons/fa";

const LeftPannel = () => {
  return (
    <div className="bg-green300 h-full -r-[0.5px]  w-full   flex flex-col lg:pl-20   overflow-hidden z-50 max-h-screen">
      {/* The Profile Section which should be movabl */}
      <div className=" h-full  flex flex-col  items-center  justify-center     px-4 ">
        <div className=" rounded-full flex justify-center items-center border-2  border-slate-900">
          {/* <div className="h-60 w-60 justify-center items-center flex object-cover rounded-full object-center">

<Home/>
</div> */}

          <Image
            src="/cyberhead.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="h-60 w-60 object-cover rounded-full object-center scale-x-[-1] -rotate-[9deg]"
          />
        </div>

        <div className="mt-4 flex flex-col ">
          <div className="flex gap-6 ">
            <Link href="/">
              <h1 className="font-bold text-3xl ">Yubraj Khatri</h1>
            </Link>
            <ThemeChanger />
          </div>
          <Link href="/">
            <p className="opacity-45"> Yubraj977</p>
          </Link>

          <LinkPreviewDemoSecond />
        </div>

        {/* Seciton for my newsletter */}
        <div className="mt-4 flex items-start gap-3 font-bold text-sm  w-full ">
          <SiGooglenews />
          <p>8 Followers</p>
          <IoPeopleSharp />
          <p>Join Fast</p>
        </div>

        {/* My some important links */}
        <hr />

        <div className="mt-10 text-center  w-full ">
          <hr />
          <h4 className="mt-2">💬 Languages:</h4>
          <pre className="text-[0.75rem] text-left mx-auto max-w-lg">
            {`
English     ████████░░░░░░░░  60.45%
Hindi       ███████████░░░░░   80.45%
Nepali      ████████████████ 99.99%
JavaScript  ████████████████ 100%
Java        ████████████████  100%
`}
          </pre>
        </div>
        {/* OS Skills */}
        <div className="mt-8 w-full">
          <h3 className="text-lg font-bold mb-4 text-center">
            Operating Systems
          </h3>

          <div className="w-full bg-white/70 dark:bg-white/5 border dark:border-white/10 backdrop-blur-sm shadow-md dark:shadow-xl rounded-2xl px-6 py-5 flex justify-around items-center text-3xl text-gray-700 dark:text-gray-300 transition-all duration-300">
            <FaApple className="hover:scale-110 hover:text-white dark:hover:text-white transition-transform" />
            <FaWindows className="hover:scale-110 hover:text-white dark:hover:text-white transition-transform" />
            <FaLinux className="hover:scale-110 hover:text-white dark:hover:text-white transition-transform" />
          </div>
        </div>
        {/* Gallery Button */}
        <button className="mt-4 w-full bg-gray-800 hover:bg-gray-700 transition p-3 rounded-xl text-white font-semibold shadow-inner">
          Watch My Gallery
        </button>
      </div>
    </div>
  );
};

export default LeftPannel;
