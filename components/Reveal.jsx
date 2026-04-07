"use client";
import React from "react";
import { motion } from "framer-motion";

const Reveal = ({ children, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(4px)", scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for a "premium" feel
                delay: 0.1 
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;

