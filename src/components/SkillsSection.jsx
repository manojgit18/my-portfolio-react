import React from "react";
import { motion } from "framer-motion";

// ✅ Marquee ONLY for skills
const MarqueeRow = ({ items, speed = 25 }) => {
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: [0, "-25%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="skill-card flex flex-col items-center"
          >
            <figure className="w-24 h-24 flex justify-center items-center rounded-full m-2 relative">
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.7)",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.7)",
                  backdropFilter: "blur(9px)",
                }}
              />
              <img
                src={item.icon}
                alt={item.name}
                className="w-14 h-14 absolute z-10"
              />
            </figure>
            <p className="text-center text-base text-white mt-2">{item.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    {
      id: 1,
      name: "HTML",
      icon: "https://img.icons8.com/color/96/html-5--v1.png",
    },
    { id: 2, name: "CSS", icon: "https://img.icons8.com/color/96/css3.png" },
    {
      id: 3,
      name: "JavaScript",
      icon: "https://img.icons8.com/color/96/javascript--v1.png",
    },
    {
      id: 4,
      name: "TypeScript",
      icon: "https://img.icons8.com/color/96/typescript.png",
    },
    {
      id: 5,
      name: "React",
      icon: "https://img.icons8.com/color/96/react-native.png",
    },
    {
      id: 6,
      name: "Node.js",
      icon: "https://img.icons8.com/color/96/nodejs.png",
    },
    {
      id: 7,
      name: "Express.js",
      icon: "https://img.icons8.com/color/96/express-js.png",
    },
    {
      id: 8,
      name: "MongoDB",
      icon: "https://img.icons8.com/color/96/mongodb.png",
    },
  ];

  const tools = [
    { id: 1, name: "Git", icon: "https://img.icons8.com/color/96/git.png" },
    {
      id: 2,
      name: "GitHub",
      icon: "https://img.icons8.com/color/96/github--v1.png",
    },
    {
      id: 3,
      name: "VS Code",
      icon: "https://img.icons8.com/color/96/visual-studio-code-2019.png",
    },
    {
      id: 4,
      name: "Firebase",
      icon: "https://img.icons8.com/color/96/firebase.png",
    },
  ];

  return (
    <section id="skills" className="bg-black py-10 space-y-14">
      <h2 className="text-center text-white text-2xl font-bold">Skills</h2>

      {/* ✅ Only Skills marquee */}
      <MarqueeRow items={skills} />

      <h2 className="text-center text-white text-2xl font-bold">
        Tools & Platforms
      </h2>

      {/* ✅ Tools static */}
      <div className="flex flex-wrap justify-center gap-8">
        {tools.map((tool) => (
          <div key={tool.id} className="flex flex-col items-center">
            <img src={tool.icon} alt={tool.name} className="w-20 h-20" />
            <p className="text-white text-sm mt-2">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
