"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { FaInstagram,FaLinkedin ,FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Aryan from "../public/aryan.jpg"
import Sawant from "../public/sawant.jpeg"
import Shaurya from "../public/shaurya.jpg"
import Divyansh from "../public/divyansh.jpg"
import codeImg from "../public/b5.svg"
import androidImg from "../public/android1.png"

export default function About() {
  return (
    <div >
      <BentoGrid className="max-w-[90vw] mx-auto md:auto-rows-[20rem]  ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    </div>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[2rem] bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 items-center "
      >
      
      <Image className=" h-[240px] md:translate-y-[-30px] w-[300px] rounded-lg transition hover:translate-x-[-10px] cursor-pointer" src={androidImg} alt="codeimg"></Image>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
    >
      <Image className="h-[150px] w-full translate-x-[-20px] hover:translate-x-[-30px] cursor-pointer transition" src={codeImg} alt="codeimg"></Image>
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-row space-x-0 md:translate-x-[0px] translate-x-[-50px] z-[3000]"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl p-3 bg-black border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src={Sawant}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
Sawant Kumar        </p>
<div className="flex space-x-2 mt-2">
          <a href="https://www.linkedin.com/in/sawant-kumar-367638235/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin  className="h-5 w-5 text-gray-400" />
          </a>
          <a href="https://www.instagram.com/Sawant.jsx/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-5 w-5 text-gray-400" />
          </a>
          <a href="https://github.com/Sawantkun" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-5 w-5 text-gray-400" />
          </a>
        </div>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-black p-3  border-white/[0.1] border flex flex-col items-center justify-center">
        <Image
          src={Divyansh}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
Divyansh Singh        </p>
<div className="flex space-x-2 mt-2">
          <a href="https://www.linkedin.com/in/1902divyanshsingh/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin  className="h-5 w-5 text-gray-400" />
          </a>
          <a href="https://www.instagram.com/divyanshsingh__/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-5 w-5 text-gray-400" />
          </a>
          <a href="https://github.com/sawantkumar" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-5 w-5 text-gray-400" />
          </a>
        </div>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-black p-3  border-white/[0.1] border flex flex-col items-center justify-center">
        <Image
          src={Shaurya}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
Shaurya Singh        </p>
<div className="flex space-x-2 mt-2">
          <a href="https://www.linkedin.com/in/shaurya-verma-39a1996a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin  className="h-5 w-5 text-gray-400" />
          </a>
          <a href="https://www.instagram.com/shaurya_verma13/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-5 w-5 text-gray-400" />
          </a>
          <a href="https://github.com/sawantkumar" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-5 w-5 text-gray-400" />
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-black p-3  border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src={Aryan}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
Aryan        </p>
<div className="flex space-x-2 mt-2">
          <a href="https://www.linkedin.com/in/sawantkumar" target="_blank" rel="noopener noreferrer">
            <FaLinkedin  className="h-5 w-5 text-gray-400" />
          </a>
          <a href="https://www.instagram.com/sawantkumar" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-5 w-5 text-gray-400" />
          </a>
          <a href="https://github.com/sawantkumar" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-5 w-5 text-gray-400" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 border-white/[0.2] p-2  items-start spaceblack bg-black "
      >
        <Image
          src={Shaurya}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your project ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-black bg-black "
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <Image
          src={Sawant}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Mobile App Development",
    description: (
      <span className="text-sm">
Stay connected with your customers on the go with our mobile app development services, designed to enhance user engagement and satisfaction.     </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Website Development",
    description: (
      <span className="text-sm">
 Embrace the digital revolution with expert website development services designed to enhance your online presence and drive success.     </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "UX/UI Design",
    description: (
      <span className="text-sm">
        We craft UI/UX design that not only stand out but also resonate with your audience, driving engagement and ensuring your brand&apos;s success.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Our Work Force",
    description: (
      <span className="text-sm ">
We are a young and talented team of like-minded entrepreneurs and engineers, driven by a shared vision for success and united in our belief that our groundbreaking technology has the potential to become an industry sensation, contributing to a better tomorrow. </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Exceptional Customer Support",
    description: (
      <span className="text-sm">
Our dedicated team ensures seamless and responsive support to keep your projects running smoothly.      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
