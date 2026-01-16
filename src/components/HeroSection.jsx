import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const HeroSection = () => {
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
      }, 2000); // change every 2s

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

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center"
      data-aos="zoom-in"
    >
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
        <div className="grid lg:grid-cols-2 relative pt-12 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
          <div className="lg:py-6 md:mt-2">
            <h1 className="text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-[3rem]/[0.9]">
              Hi, I'm Manojkumar.
            </h1>

            <h2 className="mt-2 text-xl font-medium text-gray-800">
              A passionate developer entering the tech industry
            </h2>

            <p className="mt-8 max-w-lg text-xl/7 font-medium text-white sm:text-2xl/8">
              I'm focused on learning and building modern, responsive web
              applications. I enjoy writing clean code, improving performance,
              and creating thoughtful user experiences through hands-on
              projects.
            </p>

            <div className="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:mx-auto lg:mx-0">
              {/* <button
                className="md:block w-48 bg-primary2 p-4 font-bold border border-b-4 border-black 
                        rounded-3xl hover:text-primary hover:border-primary2"
              >
                Hire Me
              </button> */}
              <button
                className="md:block bg-primary p-4 font-bold border border-b-4 border-black 
                        rounded-3xl text-white"
              >
                <a
                  href="/resume.pdf"
                  download="resume.pdf"
                  className="flex justify-between hover:scale-105
                            transition-all ease-in-out"
                >
                  Download Resume
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/ffffff/download--v1.png"
                    alt="download"
                    className="ml-2"
                    width={25}
                    height={25}
                  />
                </a>
              </button>
            </div>
          </div>
          <div className="flex w-full min-h-[24rem] lg:min-h-0 relative md:justify-end items-end">
            {/* Image + label wrapper */}
            <div className="flex w-full min-h-[24rem] lg:min-h-0 relative md:justify-end items-end">
              {/* IMAGE + LABEL WRAPPER */}
              <div className="relative inline-block w-full max-w-[480px]">
                {/* IMAGE (moved UP by label height) */}
                <img
                  src="/hero-pic.png"
                  alt="Hero Picture"
                  loading="lazy"
                  className="w-full max-w-[480px] h-auto object-contain -translate-y-12"
                />

                {/* ROLE LABEL (FULL WIDTH OF IMAGE, ATTACHED BOTTOM) */}
                <div className="absolute bottom-2 left-0 w-full">
                  <AnimatedRoleLabel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
