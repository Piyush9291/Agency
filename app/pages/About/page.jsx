"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
// import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const About = () => {
    const services = [
        "Business Growth",
        "Market Research",
        "Great Skilled Consultant",
        "Business Innovation",
        "New Project Idea",
        "Expert Team Members",
    ];

    return (
        <>
        {/* <Navbar/> */}
        <div className="w-full text-center font-poppins">
            {/* Header Section */}
            <div className="bg-black py-20 px-4">
                 <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#199db2] via-[#7e5bef] to-[#d2276e]">
          About Us
        </h1>
                <p className="text-lg md:text-xl font-medium bg-clip-text text-white bg-gradient-to-r from-[#199db2] via-[#7e5bef] to-[#d2276e] max-w-2xl mx-auto mt-6 leading-relaxed">
                    Our company philosophy is to create the kind of website that most businesses want:
                    easy to find, stylish, fast, mobile-friendly, and easy to use.
                </p>
            </div>

            {/* Main Content Section */}
            <div className="bg-white py-20 px-4 md:px-10 lg:px-20">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
                    {/* Left: Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src="https://wordpress.validthemes.net/dilabs/wp-content/uploads/2023/06/6.jpg"
                            alt="Team"
                            className="w-full max-w-md h-104 object-cover rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Right: Text */}
                    <div className="w-full lg:w-1/2 text-left space-y-4">
                        <h3 className="text-blue-600 text-xl font-semibold leading-snug">
                            About our Company
                        </h3>

                        <h2 className="text-3xl md:text-5xl font-bold text-[#2D3363] leading-tight">
                            Working together <br />
                            <span className="text-[#2D3363]">to deliver value</span>
                        </h2>

                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            Itorix Infotech is a Web Development & Digital Marketing Agency that focuses on quality,
                            innovation, & speed. We utilize technology to bring results that grow our clients' businesses.
                            We pride ourselves in great work ethic, integrity, and end-results.
                            Throughout the years, Itorix Infotech has been able to create stunning, award-winning designs
                            in multiple verticals while helping clients build a strong web presence.
                        </p>

                        {/* Services Tags in 2 Columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 cursor-pointer">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg shadow text-sm sm:text-base"
                                >
                                    <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-3.5 h-3.5 text-white" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Creative Section */}
            <section className="text-white px-4 py-16 font-poppins bg-[#0D1B2A]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    {/* Left: Text Section */}
                    <div className="w-full md:w-1/2 space-y-10">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            Grow business with <br className="hidden sm:block" />
                            creative ideas
                        </h2>

                        {/* Mission */}
                        <div className="flex items-start gap-4 text-start">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                <CheckCircle className="text-white w-10 h-5" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                                    Mission
                                </h3>
                                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                    We’ve designed our entire process and products around providing
                                    everything a small business needs when starting out — ensuring that
                                    working with us is always quick, easy, and hassle-free. We give our
                                    clients full control of their website without a ridiculous price
                                    tag, and our friendly team offers their expertise even after your
                                    website is live.
                                </p>
                            </div>
                        </div>

                        <hr className="border-gray-600" />

                        {/* Philosophy */}
                        <div className="flex items-start gap-4 text-start">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                <CheckCircle className="text-white w-10 h-5" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                                    Philosophy
                                </h3>
                                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                    Know more about digital direct response than virtually any digital
                                    marketing agency in the industry — same as distribution.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image + Since 2016 */}
                    <div className="w-full md:w-1/2 space-y-6 text-center md:text-right">
                        <div>
                            <p className="text-sm text-gray-300">We have worked for you</p>
                            <h3 className="text-4xl md:text-6xl font-bold">SINCE 2016</h3>
                        </div>
                        <div>
                            <img
                                src="https://wordpress.validthemes.net/dilabs/wp-content/uploads/2023/06/4-1.jpg"
                                alt="Team working"
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
         <Footer/>
        </>
    );
};

export default About;