"use client";
import React, { useState, useEffect } from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import logo from "../public/logo.jpg"; // Adjust the path to your logo

export default function FloatingNavDemo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  

  return (
    <div className="relative w-full">
      {/* For larger screens, show the floating navbar */}
      <div className="hidden md:block">
        <FloatingNav navItems={navItems} />
      </div>

      {/* For mobile view, show the logo and hamburger menu */}
      <div
        className={`flex justify-between items-center md:hidden p-4 shadow-md fixed w-full z-[5000] transition-transform duration-30 backdrop-blur-md`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" className="w-[120px]" />
        </div>

        {/* Hamburger Menu */}
        <button
          className="focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <IconMenu2 className="h-6 w-6 text-neutral-500 dark:text-white" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden backdrop-blur-md

 p-4 fixed z-[5000] right-0 top-14">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.link} className="flex items-center space-x-2">
                  {item.icon}
                  <span className="text-neutral-500 dark:text-white">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
