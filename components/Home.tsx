import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import Background from "../public/background.svg";
import Image from "next/image";
import MagicButton from "./ui/hover-border-gradient";

export default function SpotlightPreview() {
  return (
    <div className="md:h-full md:pt-0 pt-10 h-full w-full rounded-md flex flex-col items-center justify-start md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden scale-105">
      <Image
        src={Background}
        className="h-screen w-full absolute scale-150 opacity-50"
        alt=""
      />
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="h-[60vh] md:h-[80vh] w-[70vw] md:w-[50vw] top-10 left-full"
        fill="gray"
      />
      <Spotlight
        className="left-40 top-28 h-[60vh] md:h-[80vh] w-[70vw] md:w-[50vw]"
        fill="gray"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-16 md:pt-0">
        <p className="text-xs md:text-[0.8rem] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 uppercase bg-opacity-50 py-2 md:py-0">
        Dynamic Web Magic with Next.js        </p>
        <h1 className="text-[2.6rem] md:text-6xl leading-tight  font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 py-2 md:py-4">
          Transforming Concepts into
        </h1>
        <h1 className="text-[2.6rem] md:text-6xl leading-tight  font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-2 md:pb-4">
          Seamless <span className="gradient">User Experiences</span>
        </h1>
        <p className="mt-4 flex items-center flex-wrap md:max-w-96 max-w-72 font-normal text-sm md:text-base text-neutral-300 text-center mx-auto">
          Hi! We are Start Up, a Dev Group based in India.
        </p>
        <div className="text-center mt-8 md:mt-10">
          <a href="#contacts">
          <MagicButton title="Get In Touch" position="center" />

          </a>
        </div>
      </div>
    </div>
  );
}
