import React, { useState } from "react";

const ChatIntroClicker = ({ imageUrl }) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    setIsHidden(true);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen z-50 transition-transform duration-1000 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Background image with transparency */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      {/* Optional dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Button */}
      <div className="flex items-center justify-center h-full relative z-10">
        <button
          className="btn btn-secondary text-2xl px-12 font-bold rounded-full shadow-lg animate-pulse hover:scale-105 hover:animate-none transition-transform duration-300 flex items-center justify-center gap-4"
          onClick={handleClick}
        >
          <span className="font-bold">Launch React Chat App</span>
        </button>
      </div>
    </div>
  );
};

export default ChatIntroClicker;
