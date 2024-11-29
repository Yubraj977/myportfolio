"use client";
import { TextGenerateEffect } from "../Ancertenity/text-generate-effect";

const words = `Hi, I’m Yuvraj!
I’m an enthusiastic software developer and creative visionary passionate about crafting innovative digital solutions. With expertise in React, Next.js, and Tailwind CSS, I create responsive and user-friendly web applications. Beyond coding, I’m a skilled video editor, aspiring filmmaker, and an avid learner always seeking to merge technology with creativity
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
