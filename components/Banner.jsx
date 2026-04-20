"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { BsDownload } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen 
  py-12 sm:py-24 text-center px-4 sm:px-8 md:px-12 
  bg-[linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url('/bannerbg2.jpg')] 
  dark:bg-[linear-gradient(rgba(0,0,0,0.85),rgba(0,0,0,0.85)),url('/bannerbg2.jpg')] 
  bg-cover bg-center bg-no-repeat transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-[100px] pointer-events-none opacity-20 dark:opacity-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0.1, 0.2, 0.1],
          x: [0, -60, 60, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600 rounded-full blur-[120px] pointer-events-none opacity-20 dark:opacity-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="pt-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight"
        >
          Hi! I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">Shakhawat</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl text-gray-700 dark:text-gray-300 mt-4 font-medium"
        >
          <TypeAnimation
            sequence={[
              "Full-Stack Web Developer",
              2000,
              "Node.js Enthusiast",
              2000,
              "React & Next.js Specialist",
              2000,
              "Tailwind CSS Expert",
              2000,
              "Modern Web Architect",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="inline-block text-blue-600 dark:text-blue-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 w-full max-w-187.5"
        >
          <TypeAnimation
            splitter={(str) => str.split(/(?= )/)}
            sequence={[
              "Building premium, high-performance web interfaces with React, Next.js, and modern CSS. Dedicated to clean architecture and exceptional user experiences.",
              5000,
            ]}
            speed={{ type: "keyStrokeDelayInMs", value: 40 }}
            omitDeletionAnimation={true}
            style={{
              display: "block",
            }}
            className="text-sm sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mx-auto px-4"
            repeat={0}
            cursor={false}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mt-10"
        >
          <Link
            href="https://drive.google.com/file/d/1YMctZOL0aCEbp9NnIoeX-T4TCITVl-hL/view?usp=drive_link"
            download
            className="inline-block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center gap-3 px-10 py-5 text-sm sm:text-lg font-black bg-blue-600 text-white rounded-full shadow-[6px_6px_0px_rgba(30,58,138,1)] hover:shadow-[4px_4px_0px_rgba(30,58,138,1)] hover:translate-y-0.5 hover:translate-x-0.5 active:shadow-none active:translate-y-1.5 active:translate-x-1.5 transition-all duration-200 cursor-pointer"
            >
              <BsDownload className="text-2xl" /> Download Resume
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
