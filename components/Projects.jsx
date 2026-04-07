"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/constants/projects";

const Projects = () => {
  return (
    <section
      id="mywork"
      className="min-h-screen flex flex-col justify-center items-center py-16 md:py-32 px-6 transition-colors duration-500 bg-[linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.8)),url('/bannerbg2.jpg')] dark:bg-[linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9)),url('/bannerbg2.jpg')] bg-cover bg-center bg-fixed relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter drop-shadow-2xl">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium italic italic capitalize">
            "Turning complex challenges into elegant, high-impact digital solutions."
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/40 dark:bg-[#161B22]/50 backdrop-blur-2xl rounded-[1.5rem] border-2 border-white/30 dark:border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-blue-600/10 hover:border-blue-600/30"
            >
              <div className="overflow-hidden h-72 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full object-top object-cover transition-transform duration-[6s] ease-linear group-hover:-translate-y-[calc(100%-18rem)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-8">
                  <Link
                    href={`/projects/${project.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest transition-all transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg shadow-blue-600/30"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              <div className="p-8 text-left">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-600/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
