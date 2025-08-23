"use client";
import React from "react";
import { LinkPreview } from "@/app/components/Ancertenity/link-preview";

/** Reusable inline preview for single words/phrases */
export function InlinePreview({
  url,
  imageSrc,
  children,
  className = "",
  isStatic = true,
}) {
  return (
    <LinkPreview
      url={url}
      imageSrc={imageSrc}
      isStatic={isStatic}
      className={`inline-block align-baseline font-semibold bg-clip-text text-transparent ${className}`}
    >
      {children}
    </LinkPreview>
  );
}

export function LinkPreviewDemoSecond() {
  return (
    <div className="flex flex-col text-clip">
      {/* Use a div (not <p>) so the inline preview (a block element) is valid HTML */}
      <div
        role="paragraph"
        className="
          text-neutral-400
          text-[13px] sm:text-sm md:text-md
          md:text-justify text-left
          leading-[1.35] md:leading-relaxed
          tracking-[0.005em]
          max-w-[20.5rem] md:max-w-3xl
          w-full mx-auto md:mx-0
          break-words
        "
      >
        <span>I am </span>

        <InlinePreview
          url="https://res.cloudinary.com/dr040e5us/image/upload/v1733011951/pldzyrtmcmeju3tfbdan.jpg"
          imageSrc="https://res.cloudinary.com/dr040e5us/image/upload/v1733011951/pldzyrtmcmeju3tfbdan.jpg"
          className="font-bold bg-gradient-to-br from-purple-500 to-pink-500 ml-1"
        >
          Yubraj
        </InlinePreview>
        <span> </span>
        <InlinePreview
          url="https://res.cloudinary.com/dr040e5us/image/upload/v1755941101/yubraj2_fzuphy.jpg"
          imageSrc="https://res.cloudinary.com/dr040e5us/image/upload/v1755941101/yubraj2_fzuphy.jpg"
          className="font-bold bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Khatri
        </InlinePreview>

        <span> Web Developer, App Developer, Bot gamer. I am learning </span>

        <InlinePreview
          url="https://images.unsplash.com/photo-1501731146954-20371d3b1afb?q=80&w=3540&auto=format&fit=crop"
          imageSrc="https://images.unsplash.com/photo-1501731146954-20371d3b1afb?q=80&w=3540&auto=format&fit=crop"
          className="font-bold bg-gradient-to-br from-cyan-500 to-pink-500 ml-1"
        >
          Guitar
        </InlinePreview>

        <span>, </span>

        <InlinePreview
          url="https://www.instagram.com/001mycreativesite/"
          imageSrc="https://res.cloudinary.com/dr040e5us/image/upload/v1733011951/pldzyrtmcmeju3tfbdan.jpg"
          className="font-bold bg-gradient-to-br from-pink-500 to-yellow-500 ml-1"
        >
          Video Editing
        </InlinePreview>

        <span> and I watch </span>

        <InlinePreview
          url="https://www.youtube.com/watch?v=8wSpIuyX78Q"
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKZ9zj3EssUi2OpgIsR1hLwxE83P6WFHFaQ&s"
          className="font-bold bg-gradient-to-br from-purple-500 to-pink-500 ml-1"
        >
          this song
        </InlinePreview>

        <span> twice a day.</span>
      </div>
    </div>
  );
}