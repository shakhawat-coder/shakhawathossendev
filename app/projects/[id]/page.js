"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaRocket, FaLightbulb } from "react-icons/fa";
import { projectsData } from "@/constants/projects";

const ProjectDetails = () => {
    const { id } = useParams();
    const router = useRouter();
    const project = projectsData.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0D1117] text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
                    <Link href="/" className="text-blue-500 hover:underline">Back to Portfolio</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#0D1117] text-white selection:bg-blue-600/30 selection:text-white relative overflow-hidden">
            {/* Premium Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.92),rgba(0,0,0,0.92)),url('/bannerbg2.jpg')] bg-cover bg-center bg-fixed" />
                <motion.div
                    animate={{
                        opacity: [0.05, 0.1, 0.05],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
                {/* Header / Back Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12 flex items-center"
                >
                    <Link
                        href="/"
                        className="group flex items-center gap-3 bg-white/5 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl border border-white/10 transition-all shadow-xl backdrop-blur-md"
                    >
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-black uppercase text-xs tracking-widest">Back to Home</span>
                    </Link>
                </motion.div>

                {/* Main Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Column: Image & Direct Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-7 space-y-8"
                    >
                        <div className="group relative rounded-[1rem] overflow-hidden border-2 border-white/10 shadow-2xl bg-gray-900 group">
                            <div className="overflow-hidden aspect-video">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="top"
                                    className="opacity-90 group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        </div>

                        <div className="flex flex-wrap gap-6">
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white h-20 rounded-3xl flex items-center justify-center gap-4 font-black uppercase text-sm tracking-[0.2em] shadow-2xl shadow-blue-600/30 transition-all transform hover:-translate-y-2 active:scale-95"
                            >
                                <FaExternalLinkAlt /> Launch Live Project
                            </Link>
                            {/* <a
                                href={project.githubClient}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white px-8 h-20 rounded-3xl flex items-center justify-center gap-4 border border-white/10 transition-all transform hover:-translate-y-2"
                            >
                                <FaGithub className="text-2xl" />
                                <span className="font-black uppercase text-xs tracking-widest hidden sm:block">Client Code</span>
                            </a> */}
                        </div>
                    </motion.div>

                    {/* Right Column: Case Study Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-5 space-y-12"
                    >
                        <div>
                            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-none uppercase tracking-tighter drop-shadow-2xl">
                                {project.title}
                            </h1>
                            <p className="text-blue-500 font-black uppercase text-sm tracking-[0.4em] mb-8">
                                Project Intelligence Report
                            </p>
                            <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-blue-600 pl-6 py-2">
                                "{project.longDescription}"
                            </p>
                        </div>

                        {/* Tech Stack Segment */}
                        <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/10 shadow-xl">
                            <div className="flex items-center gap-4 mb-8 text-white font-black uppercase text-xs tracking-[0.2em]">
                                <FaCode className="text-blue-500 text-lg" /> Core Tech Stack
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {project.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-5 py-3 bg-blue-600/10 border border-blue-600/20 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-blue-600 hover:text-white transition-all cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Practical Report Sections */}
                        <div className="space-y-8">
                            <div className="p-8 bg-orange-600/5 border-l-4 border-orange-500 rounded-r-[2rem] backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-4 text-orange-500 font-black uppercase text-xs tracking-widest">
                                    <FaRocket /> Technical Challenges
                                </div>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                    {project.challenges}
                                </p>
                            </div>

                            <div className="p-8 bg-blue-600/5 border-l-4 border-blue-600 rounded-r-[2rem] backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-4 text-blue-500 font-black uppercase text-xs tracking-widest">
                                    <FaLightbulb /> Future Roadmap
                                </div>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                    {project.futurePlans}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default ProjectDetails;
