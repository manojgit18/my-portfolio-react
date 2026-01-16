import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white border-t-4 border-black">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-2 text-center">

        {/* Credit */}
        <p className="text-sm flex items-center gap-1">
          Made with
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 relative top-[1px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 6.51c0-1.683-1.37-3.048-3.058-3.048-1.33 0-2.462.84-2.887 2.004-.425-1.164-1.558-2.004-2.887-2.004-1.689 0-3.058 1.365-3.058 3.048 0 4.23 5.945 7.845 5.945 7.845s5.945-3.615 5.945-7.845z"
            />
          </svg>
          by <span className="font-semibold">Manojkumar</span>
        </p>

        {/* Tech stack */}
        <p className="text-sm">Built with React & Tailwind CSS</p>

        {/* Copyright */}
        <p className="text-xs opacity-80">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
