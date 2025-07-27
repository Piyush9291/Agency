"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import CountUp from "react-countup";

const features = [
  "Social media advertising: Facebook, Instagram, Twitter.",
  "Social media analytics: Tracking engagement.",
  "Ads analysis: Target audience.",
  "Beauty product targeting: Demographics, interests.",
  "Understanding consumers: Marketing campaigns.",
  "Beyond ads: Building relationships.",
];

const steps = [
  {
    id: "01",
    title: "PROFESSIONAL WEB PRESENCE",
    desc: "Establish credibility and reach a global audience with custom-designed websites crafted by experienced professionals.",
    img: "/icons/megaphone.png",
  },
  {
    id: "02",
    title: "COMPREHENSIVE DIGITAL MARKETING",
    desc: "Elevate your online presence with tailored digital marketing strategies including SEO, social media, and PPC management, ensuring visibility across diverse industries.",
    img: "/icons/graph.png",
  },
  {
    id: "03",
    title: "PROVEN TRACK RECORDS",
    desc: "With over a decade of industry experience and 500+ successful projects worldwide, trust Itorix Infotech for reliable, customer-focused web solutions.",
    img: "/icons/moneybag.png",
  },
];

const Page = () => {
  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="text-center py-16 px-4 sm:px-6 lg:px-10 bg-gradient-to-r from-[#ea9ee2] to-[#dbc8e2]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-md text-transparent bg-clip-text bg-gradient-to-r from-[#199db2] via-[#2D3363] to-[#d2276e] leading-tight">
            Social<br />Media Marketing Company In DELHI
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto">
            In today’s fast-moving digital world, a strong social media presence is crucial for business success. Pune, with its thriving industries and startups, has seen an increasing need for social media marketing services. If you’re looking for a trustworthy <strong className="text-black">social media marketing company in Delhi</strong>, Itorix Infotech is your best choice.
          </p>
        </div>
        <img
          src="/socialmarketing.webp"
          alt="Website Design"
          className="mx-auto mt-10 max-w-4xl w-full h-auto rounded-xl shadow-lg"
        />
      </section>

      {/* Why Choose Us */}
      <section className="w-full px-4 py-16 bg-gradient-to-b from-white via-[#FAD0FE] to-white text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1e1e4b] mb-10">
          Why Businesses in Pune Need Social Media Marketing
        </h2>
        <div className="max-w-4xl mx-auto text-left text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl space-y-5">
          <p><strong>Social media marketing:</strong> is essential for business growth in today’s competitive market.</p>
          <p><strong>Enhancing Digital Presence:</strong> Platforms like Instagram and Facebook are crucial for increasing brand visibility.</p>
          <p><strong>Boosting Brand Awareness:</strong> Strategic marketing efforts help raise recognition among potential customers.</p>
          <p><strong>Engaging Directly with Customers:</strong> Social media enables brands to connect directly with their target audience.</p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl bg-gradient-to-r from-[#6D5ACD] to-[#C091D1] text-white text-base md:text-lg p-4 min-h-[90px] flex items-center justify-center text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300 font-semibold"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full px-4 py-16 bg-gradient-to-b from-white via-[#FAD0FE] to-white text-center">
        <div className="max-w-4xl mx-auto text-left text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl space-y-5">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#1e1e4b] mb-10 leading-tight">
            Benefits of Choosing Social Media Marketing  Company
          </h2>
          <p>Collaborating with a professional <strong>social media marketing agency in Pune</strong> offers several key benefits:</p>
          <p><strong>Customized Strategy Development:</strong> Agencies create personalized campaigns aligned with your business objectives.</p>
          <p><strong>Targeted Audience Engagement:</strong> Connecting with the right audience leads to increased engagement and higher conversion rates.</p>
          <p><strong>Time and Cost Savings:</strong> Experts manage your campaigns, allowing you to concentrate on your core business activities.</p>
        </div>
      </section>

      <section className="w-full px-4 py-16 bg-gradient-to-b from-white via-[#FAD0FE] to-white">
        <div className="max-w-4xl mx-auto text-left text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl space-y-5">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#1e1e4b] mb-10 leading-tight">
            Key Services Provided by Social Media Marketing Companies in Pune
          </h2>

          <p>
            <strong>Social Media Strategy Development:</strong> Successful campaigns begin with strategic planning. Agencies perform market research and develop detailed content calendars to ensure consistency.
          </p>
          <p>
            <strong>Social Media Content Creation:</strong> Content is essential. From eye-catching graphics to engaging videos, companies produce tailored content that connects with your audience on each platform.
          </p>
          <p>
            <strong>Paid Advertising Campaigns:</strong> Effective paid advertising on platforms like Meta (Facebook, Instagram), LinkedIn, and Twitter helps your brand reach the right audience.
          </p>
          <p>
            <strong>Community Management:</strong> Interacting with customers, responding to comments, and managing feedback fosters a strong brand community.
          </p>
        </div>
      </section>

      <section className="w-full px-4 py-16 bg-gradient-to-b from-white via-[#FAD0FE] to-white text-center">
        <div className="max-w-4xl mx-auto text-left text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl space-y-5">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#1e1e4b] mb-10 leading-tight text-center">
            How to Select the
            Right Social Media Marketing Agency in Pune ?
          </h2>
          <p>Collaborating with a professional <strong>social media marketing agency in Pune</strong> offers several key benefits:</p>
          <p><strong>Customized Strategy Development:</strong> Agencies create personalized campaigns aligned with your business objectives.</p>
          <p><strong>Targeted Audience Engagement:</strong> Connecting with the right audience leads to increased engagement and higher conversion rates.</p>
          <p><strong>Time and Cost Savings:</strong> Experts manage your campaigns, allowing you to concentrate on your core business activities.</p>
        </div>
      </section>


      <section className="w-full px-4 py-16 bg-gradient-to-b from-white via-[#FAD0FE] to-white text-center">
        <div className="max-w-4xl mx-auto text-left text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl space-y-5">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#1e1e4b] mb-10 leading-tight text-center">
            Why Choose Itorix Infotech 
             for Social Media Marketing in Pune?
          </h2>
          
          <p>Collaborating with a professional <strong>social media marketing agency in Pune</strong> offers several key benefits:</p>
          <p><strong>Customized Strategy Development:</strong> Agencies create personalized campaigns aligned with your business objectives.</p>
          <p><strong>Targeted Audience Engagement:</strong> Connecting with the right audience leads to increased engagement and higher conversion rates.</p>
          <p><strong>Time and Cost Savings:</strong> Experts manage your campaigns, allowing you to concentrate on your core business activities.</p>
        </div>
      </section>


      {/* Business Website Section */}
      <section className="w-full text-center px-4 py-16 bg-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#199db2] via-[#2D3363] to-[#d2276e] leading-tight">
          Why Your Business <br /> Needs a Website?
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#199db2] via-[#7e5bef] to-[#d2276e] max-w-4xl mx-auto">
          Every business needs a website to reach more customers and showcase its services. Itorix Infotech, a web design and development company in Pune.
        </p>
      </section>

      {/* Final Steps Section */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 bg-gradient-to-br from-[#6D5ACD] to-[#C091D1] text-white shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg mb-4">
                <Image src={step.img} alt={step.title} width={40} height={40} className="object-contain" />
              </div>
              <div className="text-3xl font-extrabold mb-2">{step.id}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase leading-snug mb-2">
                {step.title}
              </h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="flex flex-col gap-10 items-center lg:items-start">
            {[{ end: 500, label: "Website Design" }, { end: 600, label: "UI/UX Design" }].map((stat, idx) => (
              <div key={idx} className="text-center lg:text-left">
                <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#6D5ACD] to-[#C091D1] text-transparent bg-clip-text">
                  <CountUp start={1} end={stat.end} duration={3} />+
                </h2>
                <p className="text-gray-700 mt-2 text-lg font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["Decade of Excellence", "Global Impact"].map((title, idx) => (
              <div
                key={idx}
                className="bg-[#f8f8fc] rounded-2xl border border-gray-100 p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-[#1a1a40] mb-3 leading-snug">{title}</h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    {title === "Decade of Excellence"
                      ? "With over 10 years of B2B client services and industry experience, trust our seasoned expertise."
                      : "Serving 500+ clients worldwide, our highly skilled team delivers tailored, quality web solutions for sustainable business growth."}
                  </p>
                </div>
                <Image
                  src="/img1.png"
                  alt={title}
                  width={200}
                  height={100}
                  className="mt-6 mx-auto w-full max-w-[180px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
