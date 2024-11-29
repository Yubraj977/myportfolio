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

const Nav = () => {
  return (
    <div className=" -r-[0.5px]  w-full  00 flex flex-col pl-52  overflow-hidden ">
      {/* The Profile Section which should be movabl */}
      <div className=" h-full  flex flex-col  items-center justify-center     p-4 ">
        <div className=" rounded-full flex justify-center items-center border-2  border-slate-900">
          {/* <img
            src="https://images.unsplash.com/photo-1645943020355-305df166473d?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="the image of the cyberpunk"
            className="h-60 w-60 object-cover rounded-full object-center transform scale-x-[-1] -rotate-[9deg]"
          /> */}
          <Image
            src="/cyberhead.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="h-60 w-60 object-cover rounded-full object-center scale-x-[-1] -rotate-[9deg]"
          />
        </div>

        <div className="mt-4 flex flex-col">
          <h1 className="font-bold text-3xl">Yubraj Khatri</h1>
          <p className="opacity-45"> Yubraj977</p>

          <p className="mt-4 font-bold text-sm">
            I am currently at suny brockport for my undergraduation in the
            computer science
          </p>
        </div>

        {/* Seciton for my newsletter */}
        <div className="mt-4 flex items-start gap-3 font-bold text-sm  w-full ">
          <SiGooglenews />
          <p>8 Followers</p>
          <IoPeopleSharp />
          <p>Join Fast</p>
        </div>

        {/* My some important links */}
        {/* <div className="mt-4 flex flex-col">
          <div className="flex items-center gap-2 ">
            <a
              href="https://github.com/Yubraj977"
              alt="the github profile"
              className="flex items-center gap-2"
            >
              {" "}
              <IoLinkSharp /> https://github.com/Yubraj977
            </a>
          </div>
          <div className="flex items-center gap-2 ">
            <a
              href="https://x.com/YubrajK81639352"
              alt="the github profile"
              className="flex items-center gap-2"
            >
              {" "}
              <IoLinkSharp /> https://x.com/YubrajK81639352
            </a>
          </div>
        </div>
        <hr className="mt-4 w-[82%]" />
        <div className="flex">
          <FaCat className="h-40 w-40 " />
          <GiJumpingDog className="h-40 w-40 scale-x-[-1]" />
        </div>
        <hr className="mt-4 w-[82%] " />
        <div className="flex">
          <GiSittingDog className="h-40 w-40  " />
          <GiJumpingDog className="h-40 w-40 scale-x-[-1]" />
        </div>
        <hr className="mt-4 w-[82%]" /> */}
        <div className=" w-full h-48  border-pink-700 object-cover  mt-4">
          
          <ImagesSliderDemo/>
        </div>

        {/* <div className="mt-10 text-center  w-96 p-4">
          <h4>💬 Languages:</h4>
          <pre className="text-[0.75rem] text-left mx-auto max-w-lg">
            {`
English     ████████░░░░░░   60.45%
Hindi       ███████████░░░░░   80.45%
Nepali      ████████████████ 99.99%
JavaScript  ████████████████ 100%
Java        ████████████████  100%
`}
          </pre>

          <h4>💻 Operating Systems:</h4>
          <pre className="text-sm text-left mx-auto max-w-lg">
            {`
Windows  ████████████████  100%
Mac      █████████████░░░░ 85%
Linux    ████████████░░░░░ 80%
`}
          </pre>
        </div> */}
        <div>
          {/* <GlobeDemo/> */}
          <LampDemo/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
