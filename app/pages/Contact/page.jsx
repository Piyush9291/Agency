"use client";

import React from "react";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full text-center py-20 px-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f9e0ff] via-[#fad0fe] to-[#fcdcf5]">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#199db2] via-[#7e5bef] to-[#d2276e]">
          Contact Us
        </h1>
        <p className="text-base md:text-lg font-medium text-white mt-6 max-w-2xl mx-auto">
          Please complete the form to receive a FREE Quotation for our Services.
          We will reply as soon as possible.
        </p>
      </div>

      {/* Main Section */}
      <div className="bg-white text-[#1f1f1f] w-full px-4 md:px-10 lg:px-20 py-16 font-poppins">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left - Contact Info */}
          <div className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Contact Information
            </h2>

            <div>
              <h3 className="font-semibold text-xl">Pune Branch</h3>
              <p className="text-gray-700 mt-2 leading-relaxed text-base">
                C1 – 203, Saudamini Commercial Complex, Paud Road,<br />
                Bhusari Colony, Kothrud, Pune, Maharashtra – 411038
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-xl">Surat Branch</h3>
                <p className="text-gray-700 mt-2 leading-relaxed text-base">
                  Shop No. A/228, Udhna Sangh Market,<br />
                  Road No. 10, Opp. Bank of Baroda,<br />
                  Udhna Udhyog Nagar, Surat, Gujarat 394210
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-xl">Official Email</h3>
                  <p className="text-gray-700 mt-1">info@itorixinfotech.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Phone Numbers</h3>
                  <p className="text-gray-700 mt-1">+91 9579335001</p>
                  <p className="text-gray-700">+91 9096456355</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-gradient-to-br from-white via-blue-50 to-white shadow-xl rounded-xl p-6 md:p-8 border border-gray-200 transition-all duration-300 hover:shadow-2xl">
            <p className="text-blue-600 font-semibold uppercase text-sm">
              Have Questions?
            </p>
            <h2 className="text-2xl font-extrabold mt-1 mb-5">
              Send us a Message
            </h2>

            <form className="space-y-4">
              {["Name", "Phone no", "Email", "Company Name"].map((label, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={label}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              ))}

              <textarea
                placeholder="Message"
                rows="4"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#199db2] hover:bg-[#11798c] text-white font-semibold py-2.5 rounded-md text-base transition duration-300 shadow-md hover:shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
