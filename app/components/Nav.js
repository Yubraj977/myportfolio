"use client";
import React from "react";
import Image from "next/image";

import { SiGooglenews } from "react-icons/si";
import { IoPeopleSharp } from "react-icons/io5";
import { IoLinkSharp } from "react-icons/io5";
import { FaCat } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import { GiJumpingDog } from "react-icons/gi";

const Nav = () => {
  return (
    <div className=" -r-[0.5px] border-white w-full  00 flex flex-col pl-52  overflow-hidden">
      {/* The Profile Section which should be movabl */}
      <div className=" h-full  flex flex-col mt-10">
        <div className=" z-30 rounded-full flex justify-center items-center border h-60 w-60 object-contain ">
          {/* <Image
      src="/dog.jpg"
      className='rounded-full'
      width={80}
      height={80}
      alt="Picture of the author"
    /> */}
          {/* <img
            src="https://images.unsplash.com/photo-1651601787600-40ad979813ac?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Girl in a jacket"
            width="500"
            height="600"
            className=" z-10 object-cover rounded-full"
          /> */}


<img
            src="https://images.unsplash.com/photo-1645943020355-305df166473d?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Girl in a jacket"
            width="500"
            height="600"
            className=" z-10 object-cover rounded-full"
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
        <div className="mt-4 flex items-center gap-3 font-bold text-sm">
          <SiGooglenews />
          <p>8 Followers</p>
          <IoPeopleSharp />
          <p>Join Fast</p>
        </div>

        {/* My some important links */}
        <div className="mt-4 flex flex-col">
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
          <GiJumpingDog className="h-40 w-40 scale-x-[-1]"/>
        </div>
        <hr className="mt-4 w-[82%] " />
        <div className="flex">
          <GiSittingDog  className="h-40 w-40  " />
          <GiJumpingDog className="h-40 w-40 scale-x-[-1]"/>
          
        </div>
        <hr className="mt-4 w-[82%]" />
      </div>
    </div>
  );
};

export default Nav;
