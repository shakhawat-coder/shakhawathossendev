"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const socialLinks = [
  {
    icon: <BsGithub />,
    href: "https://github.com/shakhawat-coder",
    label: "GitHub",
    color: "hover:bg-gray-900 dark:hover:bg-white dark:hover:text-black",
  },
  {
    icon: <BsLinkedin />,
    href: "https://www.linkedin.com/in/md-shakhawat-hossen-209992180/",
    label: "LinkedIn",
    color: "hover:bg-blue-600",
  },
  {
    icon: <BsWhatsapp />,
    href: "https://wa.me/8801780551403",
    label: "WhatsApp",
    color: "hover:bg-green-500",
  },
];

const FloatingSocials = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            
            // Logic for social icons: only show in Banner (top of the page)
            // Hide after scrolling 100px away from top
            setIsVisible(scrollY < 100);

            // Show Back to Top after some scrolling
            setShowBackToTop(scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed bottom-2 sm:bottom-6 right-2 sm:right-6 z-40 flex flex-col gap-4 items-center">
            {/* Social Icons */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex flex-col gap-4"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.1, x: -5 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={social.label}
                                className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-[#161B22] text-gray-700 dark:text-gray-300 shadow-xl border border-gray-100 dark:border-gray-800 transition-all ${social.color} hover:text-white group`}
                            >
                                <span className="text-xl transform group-hover:scale-110 transition-transform">
                                    {social.icon}
                                </span>
                                
                                {/* Tooltip */}
                                <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-white/10 dark:border-black/10">
                                    {social.label}
                                </span>
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Back to Top Button */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        onClick={scrollToTop}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 flex flex-col items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.4)] transition-all border border-blue-500/20 group overflow-hidden"
                    >
                        <motion.div
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <HiOutlineChevronDoubleUp className="text-2xl" />
                        </motion.div>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingSocials;
