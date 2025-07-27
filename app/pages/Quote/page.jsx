import React from "react";
import Footer from "@/app/components/Footer";

const Quote = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="w-full text-center py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-[#FEDEFF] via-[#f8fafc] to-[#e8f4f8]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2D3363] font-extrabold tracking-tight drop-shadow-md bg-gradient-to-r from-[#199db2] via-[#7e5bef] to-[#d2276e] bg-clip-text text-transparent">
          Get A Quote
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium bg-gradient-to-r from-[#199db2] via-[#7e5bef] to-[#d2276e] bg-clip-text text-transparent max-w-2xl mx-auto leading-relaxed mt-6 md:mt-10 px-4">
          Please complete the form to receive a FREE Quotation for our Services. We will reply as soon as possible.
        </p>
      </div>

      {/* Quote Form Section */}
      <div className="min-h-screen bg-gray-50 py-8 md:py-12 px-4 sm:px-6 md:px-10 lg:px-20 flex items-center justify-center font-sans">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden bg-white">
          
          {/* Left Section */}
          <div className="w-full lg:w-[45%] bg-gradient-to-br from-[#d5edf5] to-[#e8f4f8] p-6 flex flex-col items-center justify-center space-y-6">
            {/* Logo Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {[
                { src: "https://www.itorixinfotech.com/wp-content/uploads/2024/04/36.png", alt: "Kedari" },
                { src: "https://www.itorixinfotech.com/wp-content/uploads/2024/04/35.png", alt: "Kleistech" },
                { src: "https://www.itorixinfotech.com/wp-content/uploads/2024/04/15-1.png", alt: "Aeromat" },
                { src: "https://www.itorixinfotech.com/wp-content/uploads/2024/04/14.png", alt: "Ways Organic" },
              ].map((item, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition duration-300 flex items-center justify-center">
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={100}
                    height={40}
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Quote Card */}
            <div className="bg-white p-4 rounded-xl shadow-md text-center max-w-sm">
              <p className="font-semibold text-base text-gray-800 leading-relaxed">
                Building more than just websites – we're creating digital experiences that captivate and convert.
              </p>
            </div>

            {/* Illustration */}
            <div className="w-full max-w-sm">
              <img
                src="https://www.itorixinfotech.com/wp-content/uploads/2024/03/2761619.webp"
                alt="Illustration"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full lg:w-[55%] bg-white p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="max-w-md mx-auto lg:max-w-none">
              <h3 className="text-blue-600 font-semibold text-xs sm:text-sm tracking-wide uppercase">
                HAVE QUESTIONS?
              </h3>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 mt-2">
                Send us a Message
              </h2>

              <form className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border-0 border-b-2 border-gray-300 p-3 sm:p-4 placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors duration-300 text-sm sm:text-base"
                  />
                </div>

                {/* Phone and Email Row */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="relative flex-1">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full border-0 border-b-2 border-gray-300 p-3 sm:p-4 placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors duration-300 text-sm sm:text-base"
                    />
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full border-0 border-b-2 border-gray-300 p-3 sm:p-4 placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors duration-300 text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full border-0 border-b-2 border-gray-300 p-3 sm:p-4 placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors duration-300 text-sm sm:text-base"
                  />
                </div>

                {/* Service Selection */}
                <div className="relative">
                  <select className="w-full border-0 border-b-2 border-gray-300 p-3 sm:p-4 bg-transparent text-gray-700 focus:outline-none focus:border-blue-500 transition-colors duration-300 text-sm sm:text-base appearance-none cursor-pointer">
                    <option value="">Services Looking For?</option>
                    <option value="web-development">Website Development</option>
                    <option value="web-design">Website Designing</option>
                    <option value="web-maintenance">Website Maintenance</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="ecommerce">E-commerce Solutions</option>
                    <option value="mobile-app">Mobile App Development</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    placeholder="Tell us about your project requirements..."
                    className="w-full border-0 border-b-2 border-gray-300 p-3 sm:p-4 placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none text-sm sm:text-base"
                    rows={4}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2a2d64] to-[#1e2150] hover:from-[#1e2150] hover:to-[#161940] text-white py-2 sm:py-3 rounded-full font-semibold text-lg sm:text-[17px] transition-all duration-300 transform hover:scale-[1.015] hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Quote;
