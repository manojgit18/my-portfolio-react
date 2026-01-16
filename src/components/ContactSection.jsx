import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const socials = [
  {
    name: "GitHub",
    icon: "https://img.icons8.com/ios-glyphs/30/ffffff/github.png",
    link: "https://github.com/manojgit18",
  },
  {
    name: "LinkedIn",
    icon: "https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png",
    link: "https://www.linkedin.com/in/manojkumar-r-7ab7a6312",
  },
];
;
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="bg-black w-full min-h-screen flex items-center border-y-4 border-primary2"
    >
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-white text-3xl font-extrabold">Get in Touch</h1>

          <p className="text-sm text-gray-500 mt-4">
            I am a fresher transitioning into the tech industry, learning full
            stack development and working on real-world projects to improve my
            skills. I am open to opportunities where I can learn, contribute,
            and grow as a developer.
          </p>

          {/* EMAIL */}
          <div className="mt-10">
            <h2 className="text-white text-base font-bold">Email</h2>

            <div className="mt-4 flex items-center gap-4">
              <div className="bg-[#6e5e5c6f] h-10 w-10 rounded-full flex items-center justify-center">
                <img
                  src="https://img.icons8.com/ios-filled/24/new-post.png"
                  alt="email icon"
                  width={20}
                  height={20}
                />
              </div>

              <a
                href="mailto:info@example.com"
                className="text-white text-sm hover:underline"
              >
                manojmaverick96@gmail.com
              </a>
            </div>
          </div>

          {/* SOCIALS */}

          <div className="mt-10">
            <h2 className="text-white text-base font-bold">Socials</h2>

            <ul className="flex mt-4 gap-4">
              {socials.map((social) => (
                <li
                  key={social.name}
                  className="bg-white/20 backdrop-blur-sm h-10 w-10 rounded-full 
                 flex items-center justify-center 
                 transition hover:scale-105 hover:bg-white/30"
                >
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-5 h-5 brightness-125"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            required
            className="w-full rounded-md py-3 px-4 bg-transparent border border-white text-white text-sm"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Email"
            required
            className="w-full rounded-md py-3 px-4 bg-transparent border border-white text-white text-sm"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full rounded-md py-3 px-4 bg-transparent border border-white text-white text-sm"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            required
            className="w-full rounded-md py-3 px-4 bg-transparent border border-white text-white text-sm"
          />

          <button
            type="submit"
            className="w-full bg-primary2 py-3 font-bold border-b-4 border-white rounded-3xl hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
