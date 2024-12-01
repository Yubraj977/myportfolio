import React from "react";
import { BackgroundLines } from "@/app/components/Ancertenity/background-lines";

export function BackgroundLinesDemo() {
  return (
    (<BackgroundLines className="flex items-center justify-center w-full flex-col px-4 z-0" >
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Yubraj Khatri, <br /> Mini House.
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 text-center">
        Scroll Click hover and explore more about me. I am Good at copy Design and Ideas from others.
      </p>
    </BackgroundLines>)
  );
}
