// File: components/WhyChooseUs.js
"use client";
import React from "react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Affordable Pricing",
      desc:
        "Our competitive rates make it easy for businesses of all sizes to access high-quality digital services.",
    },
    {
      title: "Innovative Technology",
      desc:
        "We harness the latest technologies to create scalable and future-ready digital solutions.",
    },
    {
      title: "Transparent Communication",
      desc:
        "We keep communication open, ensuring clients receive updates at every stage of the project.",
    },
    {
      title: "Proven Expertise",
      desc:
        "With years of experience in digital marketing and web development, we deliver effective solutions.",
    },
    {
      title: "Customized Strategies",
      desc:
        "Every business is unique. We build personalized strategies aligned with your goals and industry.",
    },
    {
      title: "Broad Industry Expertise",
      desc:
        "Expertise across healthcare, education, real estate, and more. We tailor solutions to your industry.",
      isSpecial: true,
    },
  ];

  return (
    <section className="bg-white font-[Poppins] py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-[#E4E5FA] rounded-3xl shadow-md px-6 sm:px-10 py-14">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-[#1f2a61] font-semibold text-xs sm:text-sm md:text-base uppercase tracking-widest mb-2">
            Why Choose Us
          </h3>
          <h2 className="text-[#1f2a61] text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug md:leading-tight">
            Itorix Infotech For Digital <br className="hidden md:block" />
            Marketing Services?
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <h4 className="text-lg font-semibold mb-3 text-[#1f2a61]">
                {item.isSpecial ? (
                  <span className="text-[#1f2a61] px-2 py-1 rounded ">
                    {item.title}
                  </span>
                ) : (
                  item.title
                )}
              </h4>
              <p className="text-gray-600 text-m  leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

