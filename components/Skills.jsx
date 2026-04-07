"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaNodeJs,
    FaNpm,
    FaFigma,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiRedux,
    SiVite,
    SiPostman,
    SiMongodb,
    SiJquery,
    SiExpress,
    SiPrettier,
    SiGooglechrome,
    SiTypescript,
    SiNextdotjs,
    SiPostgresql,
    SiPrisma,
    SiShadcnui,
} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { DiVisualstudio } from "react-icons/di";

const Skills = () => {
    const skillGroups = [
        {
            title: " Frontend Development",
            skills: [
                { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
                { name: "CSS3 / SCSS", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
                { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" />, level: 92 },
                { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 85 },
                { name: "jQuery", icon: <SiJquery className="text-blue-600" />, level: 80 },
                { name: "React.js", icon: <FaReact className="text-cyan-400" />, level: 93 },
                { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, level: 90 },
                { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" />, level: 95 },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: 92 },
                { name: "ShadCN UI", icon: <SiShadcnui className="text-black dark:text-white" />, level: 88 },
                { name: "Motion", img: "/motion.png", level: 85 },
                { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: 80 },
            ],
        },
        {
            title: " Backend / API Basics",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: 85 },
                { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-white" />, level: 82 },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" />, level: 75 },
                { name: "Prisma", icon: <SiPrisma className="text-gray-900 dark:text-white" />, level: 80 },
                { name: "REST API Integration", icon: <SiPostman className="text-orange-500" />, level: 90 },
                { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 70 },
            ],
        },
        {
            title: " Tools & Workflow",
            skills: [
                { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600" />, level: 95 },
                { name: "VS Code", icon: <DiVisualstudio className="text-blue-500" />, level: 98 },
                { name: "npm", icon: <FaNpm className="text-red-500" />, level: 92 },
                { name: "Vite", icon: <SiVite className="text-purple-500" />, level: 90 },
                { name: "Figma", icon: <FaFigma className="text-pink-500" />, level: 75 },
                { name: "Chrome DevTools", icon: <SiGooglechrome className="text-orange-500" />, level: 95 },
                { name: "Postman", icon: <SiPostman className="text-orange-500" />, level: 88 },
                { name: "Prettier", icon: <SiPrettier className="text-pink-600" />, level: 99 },
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            }
        }
    };

    return (
        <section
            id="skills"
            className="min-h-screen flex flex-col justify-center items-center text-gray-800 dark:text-gray-200 px-4 py-16 md:py-24 transition-colors duration-500 bg-[linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url('/skillbg2.jpg')] dark:bg-[linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9)),url('/skillbg2.jpg')] bg-cover bg-center bg-fixed text-center relative overflow-hidden"
        >
            {/* Graphical Background Elements */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none" style={{ backgroundImage: "radial-gradient(#2563EB 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto z-10 text-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-16 text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white uppercase tracking-tighter drop-shadow-2xl">
                        My <span className="text-blue-600">Skills</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium italic capitalize">
                        "Powering digital interfaces with a robust and modern tech stack."
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {skillGroups.map((group) => (
                        <div key={group.title} className="w-full">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center lg:mb-10 mb-8 space-y-4"
                            >
                                <h3 className="text-lg sm:text-xl md:text-3xl font-black text-gray-900 dark:text-gray-100 uppercase tracking-[0.3em] flex items-center gap-4">
                                    <span className="w-12 h-[2px] bg-blue-600/30"></span>
                                    {group.title}
                                    <span className="w-12 h-[2px] bg-blue-600/30"></span>
                                </h3>
                                <span className="text-[10px] font-bold text-blue-600/60 uppercase tracking-widest bg-blue-600/10 px-4 py-1 rounded-full border border-blue-600/20">
                                    {group.skills.length} Technologies
                                </span>
                            </motion.div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 px-2"
                            >
                                {group.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={skillVariants}
                                        whileHover={{
                                            y: -8,
                                            scale: 1.02,
                                            boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.3)"
                                        }}
                                        className="group relative flex flex-col items-center justify-between p-6 bg-white/40 dark:bg-[#161B22]/50 rounded-[1.5rem] border border-white/30 dark:border-white/10 backdrop-blur-xl shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600/0 to-transparent group-hover:via-blue-600/50 transition-all duration-500"></div>

                                        <div className="flex flex-col items-center justify-center flex-1 w-full relative">
                                            <motion.div
                                                className="text-4xl mb-4 transition-all duration-300 group-hover:scale-110 flex items-center justify-center drop-shadow-md text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                                            >
                                                {skill.icon ? (
                                                    skill.icon
                                                ) : skill.img ? (
                                                    <div className="relative w-10 h-10">
                                                        <Image
                                                            src={skill.img}
                                                            alt={skill.name}
                                                            fill
                                                            className="object-contain grayscale group-hover:grayscale-0 transition-all"
                                                        />
                                                    </div>
                                                ) : null}
                                            </motion.div>
                                            <div className="flex items-center gap-2 mb-5">
                                                <p className="text-[10px] font-black text-gray-900 dark:text-gray-300 uppercase tracking-wider group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-center">
                                                    {skill.name}
                                                </p>
                                                <span className="text-[9px] font-bold text-blue-600 dark:text-blue-400 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                        </div>

                                        {/* Graphical Skill Level Progress Bar */}
                                        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden relative">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                                className="absolute inset-0 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.6)]"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
