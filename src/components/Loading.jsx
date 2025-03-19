import React, { useEffect, useState } from "react";

const Loading = () => {
  const messages = [
    "Welcome to My Portfolio 🚀",
    "Crafting Creativity & Code ✨",
    "Optimizing Experience 🔥",
    "Almost There... 🌍",
  ];

  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Message rotation
    const messageInterval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 1000);

    // Simulated loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 5 : 100));
    }, 200);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-black text-white">
      {/* Animated Loader */}
      <div className="relative w-20 h-20 mb-6">
        <div className="animate-bounce w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex justify-center items-center">
          <span className="text-3xl font-bold">🚀</span>
        </div>
      </div>

      {/* Dynamic Welcome Messages */}
      <h2 className="text-2xl font-semibold transition-opacity duration-500">
        {messages[messageIndex]}
      </h2>

      {/* Loading Percentage */}
      <p className="text-gray-400 mt-2">Loading... {progress}% ⏳</p>
    </div>
  );
};

export default Loading;

