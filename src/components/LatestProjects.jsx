import React from "react";
import homeRenovation from "../assets/home-renovation.PNG";
import synapseImg from "../assets/synapse.PNG";
import habitflowImg from "../assets/habitflow.PNG";

const LatestProjects = () => {
  const projects = [
    {
      id: 1,
      name: "Home Renovation Tracker",
      image: homeRenovation,
      description:
        "Web application to manage renovation tasks, expenses, and timelines with a clean, structured interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/manojgit18/Home-Renovation-Tracker-Management/tree/master",
      live: "https://homereset.netlify.app/",
    },
    {
      id: 2,
      name: "Synapse",
      image: synapseImg,
      description:
        "Real-time chat application with authentication, live messaging, and an AI-powered assistant.",
      tech: ["React", "Firebase", "Vite", "Gemini AI"],
      github: "https://github.com/manojgit18/Synapse-Chat-App",
      live: "https://synapse-chat-app.netlify.app/",
    },
    {
      id: 3,
      name: "Habitflow",
      image: habitflowImg,
      description:
        "Habit-tracking web application with calorie tracking and AI-based chat support for lifestyle monitoring.",
      tech: ["MERN", "Firebase", "Gemini AI"],
      github: "https://github.com/malbroo96/HabitFlow-project",
      live: "https://habit-flow-new.vercel.app/login",
    },
  ];
  return (
    <section
      id="projects"
      className="mt-16 md:mt-28 px-4 xl:px-16"
      data-aos="zoom-in-up"
    >
      {/* Section Title */}
      <h2 className="text-center text-3xl sm:text-5xl font-bold text-gray-950 mb-12">
        My Latest Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white border-b-4 border-black rounded-3xl overflow-hidden"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary">
                {project.name}
              </h3>

              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs font-medium 
                    border border-black rounded-2xl 
                    bg-white text-black"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-6 flex-col sm:flex-row">
                {/* Source Code */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 
                  bg-primary2 font-bold py-2.5 px-4 
                  border-b-4 border-black rounded-3xl 
                  hover:scale-105 transition text-sm"
                >
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"
                    alt="GitHub"
                    className="w-4 h-4"
                  />
                  Source Code
                </a>

                {/* Live Preview */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center 
                  bg-primary font-bold py-2.5 px-4 
                  border-b-4 border-black rounded-3xl 
                  hover:scale-105 transition text-white text-sm"
                >
                  Live Preview
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestProjects;
