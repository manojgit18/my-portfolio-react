import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroPic from "../assets/hero-pic.png";

const AnimatedRoleLabel = () => {
  const roles = [
    "Full Stack Developer",
    "React Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Developer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="block w-full text-center bg-black text-white text-xl font-semibold skew-y-3 py-1 shadow-lg"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center"
      data-aos="zoom-in"
    >
      {/* …unchanged layout… */}
      <img
        src={heroPic}
        alt="Hero Picture"
        loading="lazy"
        className="w-full max-w-[480px] h-auto object-contain -translate-y-12"
      />
      <AnimatedRoleLabel />
    </section>
  );
};

export default HeroSection;
