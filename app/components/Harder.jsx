"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// --- AnimatedText Component ---
const AnimatedText = () => {
  const texts = ["SEO Services", "Web Development", "Digital Marketing"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-blue-700 transition-all duration-700 ease-in-out text-left mt-3 animate-fade-in">
      {texts[index]}
    </h3>
  );
};

// --- Header Component ---
const Header = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 overflow-hidden min-h-[calc(100vh-64px)] flex items-center py-10 sm:py-16 md:py-20 lg:py-24 font-poppins">
      {/* Decorative Circles */}
      <div className="absolute top-4 right-4 w-10 h-10 sm:w-14 sm:h-14 bg-purple-400 rounded-full opacity-20 animate-pulse-smooth"></div>
      <div className="absolute top-16 left-4 w-8 h-8 sm:w-10 sm:h-10 bg-blue-400 rounded-full opacity-15 animate-bounce-smooth"></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 sm:w-16 sm:h-16 bg-cyan-400 rounded-full opacity-10 animate-float-slow"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-16">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-left animate-slide-in-left order-1">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 leading-tight mb-2">
            Easy Way To
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 mb-4 leading-tight">
            Success
          </h1>

          <AnimatedText />

          <p className="text-base sm:text-lg md:text-xl font-body text-gray-600 mt-4 leading-relaxed max-w-full sm:max-w-xl animate-fade-in-up">
            We've designed our entire process and products around providing
            everything a small business needs when starting out — quick,
            easy, and hassle-free.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-center sm:items-start gap-4 animate-fade-in-up">
            <button
              type="button"
              className="group w-full sm:w-auto bg-gradient-to-r from-purple-600 via-purple-700 to-cyan-600 text-white px-6 py-3 rounded-full text-base font-body font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 ease-out flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span className="relative z-10 whitespace-nowrap">Schedule a Call</span>
              <span className="text-xl group-hover:translate-x-2 transition-transform duration-500">→</span>
            </button>
            <button
              type="button"
              className="group w-full sm:w-auto border-2 border-blue-600 text-blue-600 bg-white px-6 py-3 rounded-full text-base font-body font-semibold hover:bg-blue-600 hover:text-white transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-md hover:shadow-xl whitespace-nowrap"
            >
              <span className="whitespace-nowrap">Our Portfolio</span>
              <span className="text-xl group-hover:translate-x-2 transition-transform duration-500">→</span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-slide-in-right order-2">
          <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              src="/header.png"
              alt="Digital Marketing"
              width={500}
              height={500}
              className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-6px) scale(1.05); }
        }

        @keyframes pulse-smooth {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }

        @keyframes bounce-smooth {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes slide-in-left {
          0% { transform: translateX(-30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        @keyframes slide-in-right {
          0% { transform: translateX(30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes fade-in-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-pulse-smooth {
          animation: pulse-smooth 3s ease-in-out infinite;
        }

        .animate-bounce-smooth {
          animation: bounce-smooth 2s ease-in-out infinite;
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out both;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out 0.3s both;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out 0.5s both;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.7s both;
        }
      `}</style>
    </section>
  );
};

export default Header;