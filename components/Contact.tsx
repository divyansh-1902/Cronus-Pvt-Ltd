"use client";
import { socialMedia } from "@/data";
import MagicButton from "./ui/hover-border-gradient";
import Background from "../public/background.svg";
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "./ui/modal";
import Image from "next/image";

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/CRc4YArxSjL", {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
      .then(response => response.json())
      .then(response => {
        if (response.code === 200) {
          alert("We received your submission, thank you!");
          window.location.href = "/"; // Redirect to Formcarry's thank you page
        } else {
          // Field validation failed or other error
          setError(response.message);
        }
      })
      .catch(error => {
        // Request related error
        setError(error.message ? error.message : error);
      });
  }

  return (
    <div className="w-full md:h-full h-[60vh] relative md:px-24 md:py-24 px-0 py-32 md:mt-0  md:translate-y-[0px] " id="contact">
      {/* background grid */}
      <div className="w-[100vw] h-full absolute bottom-[-120px] left-0 min-h-96">
        <Image
          src={Background}
          alt="grid"
          fill
          className="w-full h-full object-cover opacity-50 z-0"
        />
      </div>
      <div className="text-center mt-[100px]">
        <h2 className="text-center md:text-[3rem] text-[2.3rem] font-bold leading-tight pb-10">
          Ready to take your digital <br className="md:block hidden"/> presence to{" "}
          <span className="gradient">the next level?</span>
        </h2>
        <p className="text-center pb-10 px-6 md:px-0">
          Reach out to us today and let&apos;s discuss how we can help you achieve
          your goals.
        </p>
        <div>

        <Modal>
          <ModalTrigger>
            <MagicButton title="Get In Touch" position="center" />
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-100 font-bold text-left mb-0 px-6">
                Let&apos;s Get In Touch
              </h4>
              <form onSubmit={(e) => onSubmit(e)} className="space-y-6 p-6 bg-[#0a0a0a] rounded-lg shadow-lg">
                <div className="formcarry-block">
                  <label htmlFor="name" className="block text-sm pb-2 font-medium text-gray-300 text-left">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-[#0A0A0A] border-gray-600 text-white"
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    placeholder="Your first and last name"
                    required
                  />
                </div>
                <div className="formcarry-block">
                  <label htmlFor="email" className="block text-sm pb-2 font-medium text-gray-300 text-left">Your Email Address</label>
                  <input
                    type="email"
                    value={email}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-[#0A0A0A] border-gray-600 text-white"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    placeholder="john@doe.com"
                    required
                  />
                </div>
                <div className="formcarry-block">
                  <label htmlFor="message" className="block text-sm pb-2 font-medium  text-gray-300 text-left">Your message</label>
                  <textarea
                    value={message}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-[#0A0A0A] border-gray-600 text-white"
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    placeholder="Enter your message..."
                    rows={4}
                    required
                  ></textarea>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28 formcarry-block"
                  >
                    Send
                  </button>
                </div>
              </form>
            </ModalContent>
          </ModalBody>
        </Modal>
        </div>
      </div>
    </div>
  );
};

export default Footer;
