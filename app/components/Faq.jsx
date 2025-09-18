"use client";

import { useState } from "react";

export default function FAQContactForm() {
    const [openIndex, setOpenIndex] = useState(null);
    const [selectedService, setSelectedService] = useState("");

    const services = [
        "Website Development",
        "Website Designing",
        "Website Maintenance",
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "E-commerce Website",
        "Google Adwords",
        "Lead Generation",
        "Graphics Design (Logo, Cards, Signage/Boards etc.)",
        "Web Hosting",
        "Domain Registration",
        "Others"
    ];

    const faqs = [
        {
            question: "What services does Itorix Infotech offer?",
            answer: [
                "Search Engine Optimization (SEO)",
                "Pay-Per-Click (PPC) Advertising",
                "Social Media Marketing (SMM)",
                "Content Marketing",
                "Email Marketing",
                "Conversion Rate Optimization (CRO)",
                "Web Design & Development",
                "Branding & Graphic Design",
            ],
        },
        {
            question: "Do you offer SEO & Local SEO services?",
            answer: [
                "Yes, we specialize in SEO & Local SEO Services to help businesses rank higher in location-based searches, improving visibility for nearby customers.",
            ],
        },
        {
            question: "Do you offer responsive web design?",
            answer: [
                "Yes, we offer affordable maintenance plans",
                "Security updates and bug fixes",
                "Performance monitoring and backups",
            ],
        },
        {
            question: "How much do your services cost?",
            answer: [
                "Fill out the contact form",
                "Schedule a free consultation call",
                "We’ll analyze your requirements and get started",
            ],
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className="min-h-screen bg-white px-4 md:px-10 py-10 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* ---------------- FAQ Section ---------------- */}
                <div>
                    <h2 className="text-[2.6rem] sm:text-5xl font-extrabold text-[#2D3363] mb-6">
                        Frequently Asked <br className="hidden md:block" /> Questions
                    </h2>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index}>
                                <div
                                    onClick={() => toggleFAQ(index)}
                                    className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-400 text-white px-6 py-4 rounded-t-xl flex justify-between items-center cursor-pointer"
                                >
                                    <span className="font-semibold">{faq.question}</span>
                                    <span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                                        ↑
                                    </span>
                                </div>

                                {openIndex === index && (
                                    <div className="bg-white px-6 py-4 text-gray-700 shadow-lg rounded-b-xl">
                                        <ul className="list-disc pl-6 space-y-2">
                                            {faq.answer.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ---------------- Contact Form ---------------- */}
                <div className="bg-white p-6 md:p-10 rounded-xl shadow-xl border max-w-lg w-full mx-auto">
                    <h3 className="text-[#2A63FE] font-bold text-lg mb-1">HAVE QUESTIONS?</h3>
                    <h2 className="text-[#2D3363] font-bold text-4xl mb-6">Send us a Message</h2>

                    <form className="space-y-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border-0 border-b border-gray-400 px-1 py-2 placeholder-gray-600 text-black focus:outline-none focus:border-[#2A63FE]"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full border-0 border-b border-gray-400 px-1 py-2 placeholder-gray-600 text-black focus:outline-none focus:border-[#2A63FE]"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full border-0 border-b border-gray-400 px-1 py-2 placeholder-gray-600 text-black focus:outline-none focus:border-[#2A63FE]"
                            />
                        </div>
                        <select
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            className="w-full border-0 border-b border-gray-400 px-1 py-2 bg-white text-black focus:outline-none focus:border-[#2A63FE]"
                        >
                            <option value="">Select a Service</option>
                            {services.map((service, index) => (
                                <option key={index} value={service}>{service}</option>
                            ))}
                        </select>
                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full border-0 border-b border-gray-400 px-1 py-2 placeholder-gray-600 text-black resize-none focus:outline-none focus:border-[#2A63FE]"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-[#2D3363] text-white py-2 rounded-md font-semibold hover:bg-[#1c224f] transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}
