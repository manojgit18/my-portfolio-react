import React from "react";

const AboutSection = () => {
  const education = [
    {
      id: 1,
      role: "Bachelor of Mechanical Engineering",
      school: "Anna University",
      year: "2013 – 2017",
    },
    {
      id: 2,
      role: "Full Stack Development (Training)",
      school: "Masai School",
      year: "2024 – Present",
    },
  ];

  const experience = [
    {
      id: 1,
      role: "Mechanical Engineer",
      company: "Manufacturing Industry",
      year: "14 Months Experience",
    },
  ];

  return (
    <section id="about" className="mt-9 md:mt-48" data-aos="zoom-in-up">
      <div className="md:grid md:grid-cols-2 gap-12 items-start py-8 px-4 xl:px-16">
        {/* LEFT: ABOUT TEXT */}
        <div className="flex flex-col gap-6">
          <h2
            className="text-4xl text-gray-950 sm:text-6xl font-bold"
            data-aos="zoom-in-up"
          >
            About Me
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed">
            I am a Mechanical Engineering graduate with 14 months of industry
            experience, currently transitioning into the tech field. I am
            passionate about learning software development and building modern
            web applications through hands-on projects.
          </p>

          <p className="text-lg text-gray-800 leading-relaxed">
            Since 2024, I have been pursuing a structured full stack development
            program at Masai School, where I am strengthening my fundamentals in
            JavaScript, React, backend development, and problem-solving through
            continuous practice and real-world projects.
          </p>

          <p className="text-lg text-gray-800 leading-relaxed">
            I enjoy problem-solving, continuous learning, and applying logical
            thinking from my engineering background to software development.
          </p>
        </div>

        {/* RIGHT: EDUCATION */}
        <div className="flex flex-col gap-4">
          <h2
            className="text-3xl text-gray-950 font-bold"
            data-aos="zoom-in-up"
          >
            Education
          </h2>

          <div className="space-y-6" data-aos="zoom-in-up">
            {education.map((element) => (
              <div
                key={element.id}
                className="flex items-center rounded-xl bg-primary p-5"
              >
                <div className="w-1/4">
                  <img
                    src="https://img.icons8.com/ios-filled/100/ffffff/graduation-cap.png"
                    alt="education"
                    className="w-12 h-12"
                  />
                </div>

                <div className="w-3/4 pl-4">
                  <h5 className="text-xl font-semibold tracking-tight text-primary2">
                    {element.role}
                  </h5>

                  <p className="text-white font-medium">{element.school}</p>

                  <p className="text-white">{element.year}</p>
                </div>
              </div>
            ))}
          </div>

          {/* EXPERIENCE (NON-TECH) */}
          <h2 className="text-3xl text-gray-950 font-bold mt-3 " >Experience</h2>

          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id} className="rounded-xl bg-primary p-5">
                <h5 className="text-xl font-semibold text-primary2">
                  {exp.role}
                </h5>
                <p className="text-white">{exp.company}</p>
                <p className="text-white">{exp.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
