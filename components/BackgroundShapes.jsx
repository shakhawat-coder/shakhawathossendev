"use client";
import React from "react";
import { motion } from "framer-motion";

const BackgroundShapes = () => {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none opacity-30 dark:opacity-20 transition-opacity">
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl opacity-40 lg:w-96 lg:h-96"
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full blur-3xl opacity-40 lg:w-[30rem] lg:h-[30rem]"
            />
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-teal-400 dark:bg-teal-600 rounded-full blur-3xl opacity-30"
            />
        </div>
    );
};

export default BackgroundShapes;
