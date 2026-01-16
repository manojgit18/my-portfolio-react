import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Menu = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Disable background scroll when menu is open (mobile)
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const scrollToSection = (href) => {
    setIsMenuOpen(false);

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex justify-center mt-4">
        <div className="flex items-center justify-between relative 
                        bg-white w-[90%] md:w-4/5 p-3 rounded-3xl">

          {/* Logo */}
          <div
            className="text-3xl font-bold flex cursor-pointer"
            onClick={() => scrollToSection("#home")}
          >
            Manoj
            <img
              src="https://img.icons8.com/material-outlined/24/F9E400/filled-circle--v1.png"
              alt="dot"
              className="w-2 h-3 ml-2"
            />
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <img
              src={
                isMenuOpen
                  ? "https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png"
                  : "https://img.icons8.com/ios-filled/100/menu--v6.png"
              }
              alt="menu"
              className="w-8 h-8"
            />
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 font-medium">
            {Menu.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm lg:text-lg hover:text-primary transition"
                >
                  {item.name}
                </button>
              </li>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary2 font-bold py-2 px-4 border-b-4 border-black 
                         rounded-3xl hover:scale-105 transition"
            >
              Let's Talk
            </button>
          </ul>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 bg-primary flex flex-col items-center justify-center
                    transition-opacity duration-300
                    ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
                    md:hidden`}
      >
        <ul className="flex flex-col items-center gap-8 text-2xl font-medium text-white">
          {Menu.map((item) => (
            <li key={item.name}>
              <button onClick={() => scrollToSection(item.href)}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
