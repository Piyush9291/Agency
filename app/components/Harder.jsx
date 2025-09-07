"use client";

import { useState, useEffect } from "react";

// --- AnimatedText Component ---
const AnimatedText = () => {
  const texts = ["SEO Services", "Web Development", "Digital Marketing"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Set an interval to change the displayed text every 2 seconds (2000ms)
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    // Responsive text sizing from smallest to largest screens: text-xl (default), sm:text-2xl, md:text-3xl, lg:text-4xl.
    // font-semibold for emphasis.
    // text-blue-700 for color.
    // transition-all duration-700 ease-in-out for smooth text transitions.
    // text-left for alignment.
    // mt-3 for top margin.
    // animate-fade-in applies a custom fade-in animation defined in the CSS.
    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-blue-700 transition-all duration-700 ease-in-out text-left mt-3 animate-fade-in">
      {texts[index]}
    </h3>
  );
};

// --- Header Component ---
const Header = () => {
  return (
    // Section acts as the main container for the header.
    // relative for positioning decorative circles.
    // bg-gradient-to-br applies a background gradient for a visually appealing base.
    // overflow-hidden prevents content from spilling out.
    // min-h-[calc(100vh-64px)] ensures the section takes at least the viewport height minus 64px (assuming your Navbar is 64px tall),
    // providing consistent height.
    // flex items-center centers content vertically.
    // py-10 sm:py-16 md:py-20 lg:py-24 provides responsive vertical padding.
    // font-[Poppins] sets the custom font.
    <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 overflow-hidden min-h-[calc(100vh-64px)] flex items-center py-10 sm:py-16 md:py-20 lg:py-24 font-[Poppins]">
      {/* Decorative Circles - positioned absolutely for aesthetic effect. */}
      {/* Sizes and positions adjusted for better responsiveness across screens. */}
      <div className="absolute top-4 right-4 w-10 h-10 sm:w-14 sm:h-14 bg-purple-400 rounded-full opacity-20 animate-pulse-smooth"></div>
      <div className="absolute top-16 left-4 w-8 h-8 sm:w-10 sm:h-10 bg-blue-400 rounded-full opacity-15 animate-bounce-smooth"></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 sm:w-16 sm:h-16 bg-cyan-400 rounded-full opacity-10 animate-float-slow"></div>

      {/* Main Content Container */}
      {/* relative z-10 ensures content is above decorative elements. */}
      {/* max-w-7xl w-full mx-auto sets max width and centers the content. */}
      {/* px-4 sm:px-6 md:px-8 lg:px-10 provides responsive horizontal padding. */}
      {/* flex flex-col lg:flex-row makes content stack vertically on small screens, then horizontally on large screens. */}
      {/* items-center centers content within the flex container. */}
      {/* justify-between spreads text and image sections apart. */}
      {/* gap-8 sm:gap-10 lg:gap-16 provides responsive spacing between text and image sections. */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-16">
        {/* Text Section */}
        {/* w-full lg:w-1/2 ensures it takes full width on small screens, half on large. */}
        {/* text-left for alignment. */}
        {/* animate-slide-in-left applies custom animation. */}
        {/* order-1 ensures text appears first on all screen sizes. */}
        <div className="w-full lg:w-1/2 text-left animate-slide-in-left order-1">
          {/* Main Heading H1 - Responsive text sizing. */}
          {/* text-4xl (default) sm:text-5xl md:text-5xl lg:text-6xl for graduated sizing. */}
          {/* font-extrabold and text-gray-900 for strong visual impact. */}
          {/* leading-tight reduces line height for a more compact look. */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 leading-tight mb-2">
            Easy Way To
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 mb-4 leading-tight">
            Success
          </h1>

          {/* Animated Text Component */}
          <AnimatedText />

          {/* Description Paragraph */}
          {/* Responsive text sizing: text-base (default), sm:text-lg, md:text-xl. */}
          {/* text-gray-600 for softer contrast. */}
          {/* mt-4 for top margin. */}
          {/* leading-relaxed for comfortable line spacing. */}
          {/* max-w-full sm:max-w-xl prevents paragraph from becoming too wide on large screens, improving readability. */}
          {/* animate-fade-in-up applies custom animation. */}
          <p className="text-base sm:text-lg md:text-xl font-body text-gray-600 mt-4 leading-relaxed max-w-full sm:max-w-xl animate-fade-in-up">
            We've designed our entire process and products around providing
            everything a small business needs when starting out — quick,
            easy, and hassle-free.
          </p>

          {/* Buttons Container */}
          {/* mt-7 for top margin. */}
          {/* flex flex-col sm:flex-row ensures buttons stack vertically on small screens, then horizontally on wider screens. */}
          {/* items-center (default for flex-col) centers buttons, sm:items-start aligns them to the left on wider screens. */}
          {/* gap-4 for spacing between buttons. */}
          {/* animate-fade-in-up applies custom animation. */}
          <div className="mt-7 flex flex-col sm:flex-row items-center sm:items-start gap-4 animate-fade-in-up">
            {/* Schedule a Call Button */}
            {/* w-full sm:w-auto makes button full width on small screens, then auto width on wider screens. */}
            {/* bg-gradient-to-r... for appealing button background. */}
            {/* text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg for general styling. */}
            {/* hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 ease-out for hover effects. */}
            {/* flex items-center justify-center gap-2 for content alignment and spacing inside button. */}
            {/* whitespace-nowrap prevents text from wrapping inside the button. */}
            <button className="group w-full sm:w-auto bg-gradient-to-r from-purple-600 via-purple-700 to-cyan-600 text-white px-6 py-3 rounded-full text-base font-secondary font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 ease-out flex items-center justify-center gap-2 whitespace-nowrap">
              <span className="relative z-10 whitespace-nowrap">Schedule a Call</span>
              <span className="text-xl group-hover:translate-x-2 transition-transform duration-500">→</span>
            </button>

            {/* Our Portfolio Button */}
            {/* Similar responsive width and styling as the first button. */}
            {/* border-2 border-blue-600 text-blue-600 bg-white for outline style. */}
            {/* hover:bg-blue-600 hover:text-white for hover state inversion. */}
            <button className="group w-full sm:w-auto border-2 border-blue-600 text-blue-600 bg-white px-6 py-3 rounded-full text-base font-secondary font-semibold hover:bg-blue-600 hover:text-white transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-md hover:shadow-xl whitespace-nowrap">
              <span className="whitespace-nowrap">Our Portfolio</span>
              <span className="text-xl group-hover:translate-x-2 transition-transform duration-500">→</span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        {/* w-full lg:w-1/2 ensures it takes full width on small screens, half on large. */}
        {/* flex justify-center lg:justify-end centers image on small screens, right-aligns on large. */}
        {/* animate-slide-in-right applies custom animation. */}
        {/* order-2 ensures image appears after text on all screen sizes. */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-slide-in-right order-2">
          {/* Image container with responsive max-width to control image size. */}
          {/* max-w-xs (very small) sm:max-w-sm md:max-w-md lg:max-w-lg provides smooth scaling. */}
          <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="https://www.pngplay.com/wp-content/uploads/7/Digital-Marketing-PNG-HD-Quality.png"
              alt="Digital Marketing"
              // w-full h-auto ensures image scales correctly within its container.
              // object-contain ensures the entire image is visible without cropping.
              // drop-shadow-2xl for a prominent shadow effect.
              // transform hover:scale-105 transition-transform duration-700 ease-out for a subtle hover zoom effect.
              // loading="eager" to prioritize loading for this important image.
              className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-out"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Custom Animations - (No changes needed here as these are standard CSS keyframes) */}
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