"use client";
import React from "react";
import { motion } from "framer-motion";

const education = [
    {
        degree: "Bachelor of Science in Computer Science and Engineering",
        institution: "Delta Computer Science College",
        location: "Rangpur, Bangladesh",
        session: "2016-2017",
        passingYear: "2022",
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Bhurungamari Degree College",
        location: "Kurigram, Bangladesh",
        session: "2014-2015",
        passingYear: "2016",
    },
];

const Education = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <section
            id="education"
            className="min-h-[70vh] flex flex-col justify-center items-center py-16 md:py-28 px-6 transition-colors duration-500 bg-[linear-gradient(rgba(255,255,255,0.85),rgba(255,255,255,0.85)),url('/bannerbg2.jpg')] dark:bg-[linear-gradient(rgba(0,0,0,0.92),rgba(0,0,0,0.92)),url('/bannerbg2.jpg')] bg-cover bg-center bg-fixed text-center relative overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.05, 0.1, 0.05],
                    x: [0, 50, -50, 0],
                    y: [0, -50, 50, 0],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="max-w-5xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter shadow-sm">
                        Academic <span className="text-blue-600">Background</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 25px 45px -10px rgba(37, 99, 235, 0.2)",
                                borderColor: "rgba(37, 99, 235, 0.3)"
                            }}
                            className="bg-white/50 dark:bg-[#161B22]/50 p-8 md:p-10 rounded-[2.5rem] border-2 border-white/40 dark:border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-300 text-left relative overflow-hidden group"
                        >
                            <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
                                <svg className="w-32 h-32 text-blue-600 -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path></svg>
                            </div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl shadow-transparent group-hover:shadow-blue-500/20">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2 leading-none tracking-tight">
                                    {edu.degree}
                                </h3>

                                <p className="text-blue-600 dark:text-blue-400 font-black uppercase text-[11px] tracking-widest mb-6 border-l-4 border-blue-600/20 pl-3">
                                    {edu.institution}
                                </p>

                                <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest mb-10">
                                    {edu.location}
                                </p>
                            </div>

                            <div className="pt-8 border-t border-gray-200/50 dark:border-gray-800/50 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">
                                <span className="opacity-70">Session: {edu.session}</span>
                                <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full shadow-lg shadow-blue-600/20">Passing Year: {edu.passingYear}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education;

