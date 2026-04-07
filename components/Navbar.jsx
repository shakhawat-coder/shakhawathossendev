"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith("/projects/");

  if (isProjectPage) return null;
  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "mywork" },
    { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className={`fixed bg-white dark:bg-[#0D1117] lg:bg-transparent lg:dark:bg-transparent top-0 left-0 w-full z-50 transition-all duration-300 ${(mounted && scrolled)
      ? "backdrop-blur-xl bg-white/80 dark:bg-[#0D1117]/80 shadow-lg py-2"
      : "bg-transparent py-2 lg:py-4 transition-all"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 lg:h-16">
          <Link
            to="home"
            href="#home"
            smooth={true}
            duration={500}
            offset={-65}
            spy={true}
            className="group relative flex items-center gap-2 cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20"
            >
              S
            </motion.div>
            <span className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors hidden lg:block">SHAKHAWAT</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                href={`#${link.to}`}
                smooth={true}
                duration={500}
                offset={-65}
                spy={true}
                activeClass="!text-blue-600 dark:!text-blue-400 font-bold"
                className="relative px-4 py-2 cursor-pointer text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                {link.name}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-300"
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="relative p-2.5 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-all"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {!mounted ? (
                  <div key="placeholder" className="w-5 h-5" />
                ) : resolvedTheme === "light" ? (
                  <motion.div
                    key="moon"
                    initial={{ y: 20, rotate: 45, opacity: 0 }}
                    animate={{ y: 0, rotate: 0, opacity: 1 }}
                    exit={{ y: -20, rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MdNightlight className="h-5 w-5 text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ y: 20, rotate: 45, opacity: 0 }}
                    animate={{ y: 0, rotate: 0, opacity: 1 }}
                    exit={{ y: -20, rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CiLight className="h-5 w-5 text-yellow-400" />
                  </motion.div>
                )
                }
              </AnimatePresence>
            </motion.button>

            <button
              className="md:hidden p-2 text-gray-700 dark:text-gray-300 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            data-lenis-prevent
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0D1117] border-t border-gray-200 dark:border-gray-800 shadow-2xl overflow-y-scroll max-h-[90vh] touch-pan-y"
          >
            <ul className="flex flex-col p-6 space-y-1 h-[calc(100vh-64px)]">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    href={`#${link.to}`}
                    smooth={true}
                    duration={500}
                    offset={-65}
                    spy={true}
                    onClick={() => setIsMenuOpen(false)}
                    activeClass="!text-blue-600 dark:!text-blue-400 font-bold bg-blue-50 dark:bg-blue-900/20"
                    className="flex w-full px-6 py-2 rounded-2xl text-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

