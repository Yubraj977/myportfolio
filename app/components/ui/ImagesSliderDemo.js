"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../Ancertenity/images-slider";
import Image from "next/image";
export function ImagesSliderDemo() {
  const images = [
    "https://github-readme-stats.vercel.app/api/top-langs/?username=Yubraj977&count_private=true&theme=dark&card_width=400",
    
    "https://github-readme-stats.vercel.app/api/top-langs?username=Yubraj977&layout=pie&langs_count=8&card_width=400&theme=dark",
    "https://github-readme-stats.vercel.app/api?username=Yubraj977&theme=dark",
    // "https://github-readme-stats.vercel.app/api/top-langs?username=Yubraj977&layout=donut&langs_count=8&card_width=400&theme=dark&card_height=400",
    
  ];
  return (
    (<ImagesSlider className="   object-contain " images={images}>
      
    </ImagesSlider>)


    
  );
}
