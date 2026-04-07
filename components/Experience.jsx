"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        role: "Junior Frontend Developer",
        company: "Optilius",
        location: "Dhaka, Bangladesh",
        period: "April 2025 - Present",
        description:
            "Working as a Junior Frontend Developer, crafting responsive and performant web interfaces using React, Tailwind CSS, HTML, CSS , Bootstrap, and modern JavaScript. Collaborating with backend teams to deliver seamless digital experiences.",
        link: "https://optilius.com",
    },
    {
        role: "Frontend Design Intern",
        company: "Optilius",
        location: "Dhaka, Bangladesh",
        period: "October 2024 - March 2025",
        description:
            "Completed a 6-month internship focused on frontend design. Worked closely with mentors to convert Figma designs into clean, maintainable code using HTML, CSS, Bootstrap, and JavaScript.",
        link: "https://optilius.com",
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="min-h-screen flex flex-col justify-center items-center py-16 md:py-32 px-6 transition-colors duration-500 bg-[linear-gradient(rgba(255,255,255,0.75),rgba(255,255,255,0.75)),url('/skillbg2.jpg')] dark:bg-[linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9)),url('/skillbg2.jpg')] bg-cover bg-center bg-fixed text-center relative overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.05, 0.1, 0.05],
                    x: [0, 100, -100, 0],
                    y: [0, -100, 100, 0],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.05, 0.1, 0.05],
                    x: [0, -100, 100, 0],
                    y: [0, 100, -100, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="max-w-6xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-24"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter drop-shadow-2xl">
                        Professional <span className="text-blue-600">Journey</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium italic">
                        "Building the web, one pixel at a time. My professional evolution and industry impact."
                    </p>
                </motion.div>

                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-40 bottom-0 w-1 bg-gradient-to-b from-blue-600/0 via-blue-600/50 to-blue-600/0 md:-translate-x-1/2 z-0 hidden md:block" />

                <div className="space-y-20 relative z-10">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Empty space for desktop alignment */}
                            <div className="hidden md:block w-[45%]" />

                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border-[3px] border-blue-600 rounded-full md:-translate-x-1/2 z-20 hidden md:flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                                <motion.div
                                    animate={{ scale: [1, 1.25, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-2.5 h-2.5 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.7)]"
                                />
                            </div>

                            {/* Content Card */}
                            <motion.div
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.2)",
                                    borderColor: "rgba(37, 99, 235, 0.3)"
                                }}
                                className="w-full md:w-[42%] bg-white/45 dark:bg-[#161B22]/50 p-6 md:p-8 rounded-[2rem] border-2 border-white/30 dark:border-white/10 backdrop-blur-2xl shadow-xl transition-all duration-300 text-left"
                            >
                                <div className="mb-4">
                                    <span className="px-4 py-1 bg-blue-600 text-white text-[9px] font-medium rounded-full uppercase tracking-[0.2em] w-fit shadow-md shadow-blue-600/10">
                                        {exp.period}
                                    </span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                                    {exp.role}
                                </h3>

                                <h4 className="text-base md:text-lg font-bold text-blue-600 dark:text-blue-400 mb-6 flex flex-wrap items-center gap-2">
                                    <span>{exp.company}</span>
                                    <span className="w-1.5 h-1.5 bg-blue-600/30 rounded-full"></span>
                                    <span className="text-gray-500 dark:text-gray-400 text-[11px] font-black uppercase tracking-widest">{exp.location}</span>
                                </h4>

                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic text-sm md:text-base border-l-4 border-blue-600/20 pl-4 py-1.5 bg-blue-600/5 rounded-r-lg">
                                    "{exp.description}"
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;


