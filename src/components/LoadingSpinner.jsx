import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-primary">
      <svg
        className="animate-spin h-16 w-16 text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#fff455" />
            <stop offset="100%" stopColor="#fff455" />
          </linearGradient>
        </defs>

        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="url(#gradient1)"
          strokeWidth="4"
          fill="none"
        />

        <path fill="#fff455" d="M12 2a10 10 0 0 1 10 10h-4a6 6 0 0 0-6-6z" />
      </svg>
    </div>
  );
};

export default LoadingSpinner;
