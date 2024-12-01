"use client";
import React from "react";
import { LinkPreview } from "@/app/components/Ancertenity/link-preview";

export function LinkPreviewDemoSecond() {
  return (
    <div className="flex  flex-col    text-clip  ">
      <p className="text-neutral-400 text-sm md:text-md max-w-3xl whitespace-pre-line w-full text-justify break-words border-green-400">
  I am{" "}
  <LinkPreview
    url="https://res.cloudinary.com/dr040e5us/image/upload/v1733011951/pldzyrtmcmeju3tfbdan.jpg"
    imageSrc="https://res.cloudinary.com/dr040e5us/image/upload/v1733011951/pldzyrtmcmeju3tfbdan.jpg"
    isStatic
    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 ml-1"
  >
    Yubraj Khatri
  </LinkPreview>{" "}
  Web Developer, App Developer, Bot gamer. I am learning{" "}
  <LinkPreview
    url="https://images.unsplash.com/photo-1501731146954-20371d3b1afb?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    imageSrc="https://images.unsplash.com/photo-1501731146954-20371d3b1afb?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-cyan-500 to-pink-500 ml-1"
  >
    Guitar
  </LinkPreview>{" "}
  ,
  <LinkPreview
    url="https://www.instagram.com/001mycreativesite/"
    imageSrc="https://res.cloudinary.com/dr040e5us/image/upload/v1733011951/pldzyrtmcmeju3tfbdan.jpg"
    isStatic
    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-yellow-500 ml-1"
  >
    Video Editing
  </LinkPreview>{" "}
  and I watch{" "}
  <LinkPreview
    url="https://www.youtube.com/watch?v=8wSpIuyX78Q&ab_channel=TheElements-Topic"
    imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKZ9zj3EssUi2OpgIsR1hLwxE83P6WFHFaQ&s"
    isStatic
    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 ml-1"
  >
    this song
  </LinkPreview>{" "}
  twice a day.
</p>


      
    </div>
  );
}
