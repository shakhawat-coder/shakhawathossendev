"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-[#0D1117] text-gray-800 dark:text-gray-200 px-6 py-16 md:py-20 transition-colors duration-500 overflow-hidden relative"
    >
      {/* Visual Background Accents */}
      <div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-10 w-[400px] h-[400px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -left-10 w-[300px] h-[300px] bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-24 z-10">

        {/* Profile Image with Refined Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-64 sm:w-80 md:w-1/2 lg:w-[400px] relative group"
        >
          <div className="absolute inset-0 bg-blue-600 rounded-[2rem] rotate-6 group-hover:rotate-3 transition-transform duration-700 -z-10 opacity-20 blur-sm"></div>
          <div className="overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative z-10 border-8 border-white dark:border-gray-800 backdrop-blur-sm bg-white/50 dark:bg-gray-800/20">
            <Image
              src="/shamim.png"
              alt="Profile"
              width={500}
              height={500}
              className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          {/* Experience Badge - Animated */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.5 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block"
          >
            <p className="text-3xl font-bold">1+</p>
            <p className="text-xs uppercase tracking-widest font-semibold">Years Exp.</p>
          </motion.div>
        </motion.div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white uppercase tracking-tighter drop-shadow-2xl">
            My <span className="text-blue-600">Story</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full mb-8 shadow-[0_0_15px_rgba(37,99,235,0.5)] mx-auto md:mx-0"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6 text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-xl leading-relaxed max-w-2xl"
          >
            <p>
              I'm a results-driven frontend developer with over a year of hands-on
              experience — including 6 months as a{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400 underline decoration-2 underline-offset-4">
                Frontend Design Intern
              </span>{" "}
              and 1+ year as a{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400 underline decoration-2 underline-offset-4">
                Junior Frontend Developer
              </span>
              . My work centers on transforming creative ideas into functional,
              engaging digital interfaces.
            </p>

            <p>
              I thrive on solving UI/UX challenges, ensuring every element serves
              both purpose and polish. I enjoy collaborating with teams, learning
              from real-world projects, and continuously exploring new front-end
              tools and performance optimization techniques.
            </p>

            <p>
              My work bridges the gap between design and development, ensuring
              every interface feels intuitive, engaging, and technically solid.
            </p>
          </motion.div>

          {/* Cards with Glassmorphism */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Experience", desc: "1+ year in frontend development roles.", icon: "🚀" },
              { title: "Work Style", desc: "Collaborative and detail-oriented.", icon: "💎" },
              { title: "Focus", desc: "Next.js & TypeScript specialist.", icon: "⚡" }
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-50/50 dark:bg-gray-800/30 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm backdrop-blur-md hover:shadow-xl hover:shadow-blue-500/10 transition-all group"
              >
                <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform">{item.icon}</span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

