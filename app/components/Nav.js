"use client";
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

const Nav = () => {
  return (
    <div className=" -r-[0.5px]  w-full  00 flex flex-col lg:pl-52  overflow-hidden z-50 ">
      {/* The Profile Section which should be movabl */}
      <div className=" h-full  flex flex-col  items-center  justify-center     px-4 ">
        <div className=" rounded-full flex justify-center items-center border-2  border-slate-900">
          
          <Image
            src="/cyberhead.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="h-60 w-60 object-cover rounded-full object-center scale-x-[-1] -rotate-[9deg]"
          />
        </div>

        <div className="mt-4 flex flex-col">
          <h1 className="font-bold text-3xl ">Yubraj Khatri</h1>
          <p className="opacity-45"> Yubraj977</p>
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
            <hr/>

        <div className="mt-10 text-center  w-full ">
          <hr/>
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
<hr className="mt-4"/>
          <h4 className="mt-2">💻 Operating Systems:</h4>
          <pre className="text-sm text-left mx-auto max-w-lg mb-2">
            {`
Windows  █████████████████  100%
Mac      █████████████░░░░ 85%
Linux    ████████████░░░░░ 80%
`}
          </pre>
          <hr/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
