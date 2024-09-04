"use client"
import { useState } from 'react';
import Image from 'next/image';
import { socialMedia } from "@/data";
import MagicButton from './ui/hover-border-gradient';
import { db } from "../lib/firebase"; // Adjust the path to your firebase file
import { collection, addDoc } from "firebase/firestore";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter an email address.");
      return;
    }

    try {
      // Add the email to the 'emails' collection in Firestore
      await addDoc(collection(db, "emails"), { email });
      alert("Subscription successful!");
      setEmail(""); // Clear the input field after successful submission
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Subscription failed. Please try again.");
    }
  };

  return (
    <div className='py-5 h-auto flex-col items-center justify-center w-full md:mt-0 mt-24 z-[0]'>
      <div className="mx-auto bg-dark-blue px-6 md:px-14 lg:px-28 py-10 flex flex-col lg:flex-row lg:justify-center lg:items-center w-full md:w-fit gap-x-10 md:gap-x-20 lg:gap-x-28 gap-y-10 lg:gap-y-14 text-white md:rounded-footerRadius">
        <section className="grid grid-cols-2 md:pl-0 pl-10 md:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-x-28 cursor-pointer">
          <div className="space-y-2">
            <h3 className="font-merriweather font-medium text-base md:text-lg uppercase tracking-widest">
              Info
            </h3>
            <ul className="font-ibm_plex_sans opacity-70 space-y-2">
              <li>Formats</li>
              <li>Compression</li>
              <li>Pricing</li>
              <li>FAQ</li>
              <li>Status</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-merriweather text-base md:text-lg uppercase tracking-widest">
              Resources
            </h3>
            <ul className="font-ibm_plex_sans opacity-70 space-y-2">
              <li>Developer API</li>
              <li>Tools</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="space-y-2 lg:col-span-1">
            <h3 className="font-merriweather text-base md:text-lg uppercase tracking-widest">
              Company
            </h3>
            <ul className="font-ibm_plex_sans opacity-70 space-y-2">
              <li>About Us</li>
              <li>Sustainability</li>
              <li>Terms of Service</li>
              <li>Privacy</li>
            </ul>
          </div>
        </section>

        <section className="font-ibm_plex_sans text-sm space-y-5 mt-10 md:mt-0">
          <div className="py-5 space-y-2 font-merriweather uppercase tracking-widest">
            <h3 className="text-base md:text-lg md:text-left text-center py-3">
              Subscribe to our email newsletter
            </h3>
            <div className="flex flex-col md:flex-row gap-y-3 gap-x-2">
              <input
                type="email" // Changed to 'email' type for better input validation
                placeholder="Your email"
                value={email} // Bind input value to state
                onChange={(e) => setEmail(e.target.value)} // Update state on input change
                className="border-inputBorder border rounded bg-transparent rounded-buttonRadius px-5 py-3 w-full md:w-[300px]"
              />
              <div className='text-center' onClick={handleSubscribe}>
                <MagicButton position='center' title='subscribe' />
              </div>
            </div>
          </div>
          <div className="space-y-2 md:text-left text-center">
            <span>Follow Us</span>
            <div className="flex md:justify-start justify-center gap-x-2.5">
              {socialMedia?.map((info) => (
                <a
                  key={info.id}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <Image src={info.img} alt="img" width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className='text-center pt-10'>
        <p>Copyright © 2024 Start Up</p>
      </div>
    </div>
  );
}
