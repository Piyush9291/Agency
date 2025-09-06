"use client"
import { useState } from "react"
import Image from "next/image"
import CountUp from "react-countup"
import Footer from "@/app/components/Footer"

const services = [
  {
    title: "PPC Management",
    content:
      "Platforms such as Google AdWords and Bing Ads are important to your business. With our pay-per-click marketing (PPC) expertise, we can help take your accounts to the next level. We customize strategy and reporting tailored to your needs. We provide the support and guidance you require to accomplish your goal, be it maximizing return on investment, increasing leads, or driving brand awareness.",
  },
  {
    title: "Brief Process Of Our Pay Per Click Campaign:",
    content: `Our pay-per-click (PPC) management service includes the following components:• PPC search campaign strategy  • Keyword research and selection  • Ad creative development  • Campaign set-up  • Bid management and ROI tracking  • Landing page optimization and development  • Campaign management and analysis`,
  },
  {
    title: "Deliverables",
    content:
      "We report monthly on your campaign's success regarding keyword choice and text choice, and we create a rank report so you know where you rank organically for the keywords you pay for. Additionally, after you review the report, we'll book a one hour call with the members of your team to explain your campaign's progress, direction, and answer any questions you may have.",
  },
]

const features = [
  "Pune's Premier PPC Experts",
  "Tailored PPC Solutions",
  "Proven Marketing Excellence",
  "Affordable Advertising Services",
  "Localized PPC Strategies",
  "Exceptional ROI, Guaranteed",
]

const steps = [
  {
    id: "01",
    title: "Targeted Advertising",
    desc: "Establish credibility and reach a global audience with custom-designed websites crafted by experienced professionals.",
    img: "/icons/megaphone.png",
  },
  {
    id: "02",
    title: "Enhanced Visibility",
    desc: "Elevate your online presence with tailored digital marketing strategies including SEO, social media, and PPC management, ensuring visibility across diverse industries.",
    img: "/icons/graph.png",
  },
  {
    id: "03",
    title: "Expert Management",
    desc: "With over a decade of industry experience and 500+ successful projects worldwide, trust Itorix Infotech for reliable, customer-focused web solutions.",
    img: "/icons/moneybag.png",
  },
]

const Page = () => {
  const [selected, setSelected] = useState(0)

  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="w-full text-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-r from-[#f3f0f3] to-[#dcbae8]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight drop-shadow-md text-transparent bg-clip-text bg-gradient-to-r from-[#199db2] via-[#2D3363] to-[#d2276e] leading-tight">
            Google Ads <br /> Marketing
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Itorix Infotech is a professional <strong className="text-black">Google Ads marketing company in DELHI</strong>.
            We create targeted ad campaigns that drive qualified traffic, increase conversions, and maximize your ROI with strategic Google Ads management.
          </p>
        </div>
        <img
          src="/Payperclick.webp"
          alt="Pay Per Click Marketing"
          className="mx-auto mt-6 sm:mt-8 md:mt-10 max-w-[90%] sm:max-w-[800px] w-full h-auto rounded-xl shadow-lg"
        />
      </section>

      {/* Why Choose Us */}
      <section className="w-full px-4 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-[#FAD0FE] to-white text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#1e1e4b] mb-3 sm:mb-4 leading-tight">
          Why Itorix Infotech is
          <br />
          <span className="text-[#1e1e4b]">the Best PPC Marketing</span>
        </h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 leading-relaxed">
          Itorix Infotech excels in PPC marketing, particularly in Pune. Benefit from a variety of affordable paid
          advertising services tailored to your needs.
        </p>
        <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-gradient-to-r from-[#6D5ACD] to-[#C091D1] text-white font-medium text-sm sm:text-base md:text-lg p-4 sm:p-5 md:p-6 shadow-lg transition-transform duration-300 hover:scale-105 text-center"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <video
              src="/PPC.mp4"
              autoPlay
              controls
              muted
              loop
              playsInline
              className="w-full max-w-md h-auto object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          {/* Right Content */}
          <div className="w-full lg:w-1/2 text-left space-y-3 sm:space-y-4">
            <h3 className="text-[#2D3363] text-lg sm:text-xl md:text-2xl font-semibold">PPC Marketing</h3>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#2D3363] via-[#5f67d1] to-[#d2276e]">
              Why PPC Marketing is
              <br />
              <span className="text-[#2D3363]">Important For your</span>
              <br />
              <span className="text-[#2D3363]">Business?</span>
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              PPC marketing is crucial for your business as it provides immediate visibility to your target audience,
              ensuring your ads are seen by potential customers actively searching for products or services like yours.
              With PPC, you have control over your budget and can track the performance of your ads in real-time,
              allowing you to optimize campaigns for maximum ROI. Additionally, PPC enables you to compete effectively
              in the online marketplace, driving qualified traffic to your website and ultimately increasing sales and
              revenue for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Business Website Section */}
      <section className="w-full text-center py-12 sm:py-16 md:py-20 px-4 bg-white">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight drop-shadow-md text-transparent bg-clip-text bg-gradient-to-r from-[#199db2] via-[#2D3363] to-[#d2276e] leading-tight mb-4 sm:mb-6">
          Why do you need a
          <br /> PPC Marketing Management?
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#199db2] via-[#7e5bef] to-[#d2276e] max-w-4xl mx-auto leading-relaxed">
          Leverage global reach and credibility with custom PPC solutions from Itorix Infotech. Benefit from a decade of
          industry expertise for exponential growth
        </p>
      </section>

      {/* Final Step Section */}
      <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 md:px-10 font-poppins">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-[#6D5ACD] to-[#C091D1] text-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {/* Vertical Dashed Line for sm+ screens */}
              {index !== steps.length - 1 && (
                <div className="absolute top-6 left-10 h-full border-l-2 border-dashed border-white/40 z-0 hidden sm:block"></div>
              )}
              {/* Icon */}
              <div className="bg-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg mb-3 sm:mb-4 z-10">
                <Image
                  src={step.img || "/placeholder.svg"}
                  alt={step.title}
                  width={32}
                  height={32}
                  className="sm:w-10 sm:h-10 object-contain"
                />
              </div>
              {/* Number */}
              <div className="text-2xl sm:text-3xl font-extrabold mb-2 z-10">{step.id}</div>
              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase leading-snug mb-2 sm:mb-3 z-10">
                {step.title}
              </h3>
              {/* Description */}
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed z-10">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-10 lg:px-20 font-poppins">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {/* Left Stats */}
          <div className="flex flex-col gap-8 sm:gap-10 items-center lg:items-start justify-center">
            {/* Website Design */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-[#6D5ACD] to-[#C091D1] text-transparent bg-clip-text">
                <CountUp start={1} end={500} duration={3} />+
              </h2>
              <p className="text-gray-700 mt-2 text-base sm:text-lg md:text-xl font-medium">Website Design</p>
            </div>
            {/* UI/UX Design */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-[#6D5ACD] to-[#C091D1] text-transparent bg-clip-text">
                <CountUp start={1} end={600} duration={3} />+
              </h2>
              <p className="text-gray-700 mt-2 text-base sm:text-lg md:text-xl font-medium">UI/UX Design</p>
            </div>
          </div>
          {/* Right Features */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="bg-[#f8f8fc] rounded-2xl border border-gray-100 p-5 sm:p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition duration-300 ease-in-out hover:-translate-y-1">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1a1a40] mb-2 sm:mb-3 leading-snug">
                  Decade of Excellence
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  With over 10 years of B2B client services and industry experience, trust our seasoned expertise.
                </p>
              </div>
              <Image
                src="/img1.png"
                alt="Decade of Excellence"
                width={150}
                height={75}
                className="mt-4 sm:mt-6 mx-auto w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] object-contain"
              />
            </div>
            {/* Card 2 */}
            <div className="bg-[#f8f8fc] rounded-2xl border border-gray-100 p-5 sm:p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition duration-300 ease-in-out hover:-translate-y-1">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1a1a40] mb-2 sm:mb-3 leading-snug">
                  Global Impact
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Serving 500+ clients worldwide, our highly skilled team delivers tailored, quality web solutions for
                  sustainable business growth.
                </p>
              </div>
              <Image
                src="/img1.png"
                alt="Global Impact"
                width={150}
                height={75}
                className="mt-4 sm:mt-6 mx-auto w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services Section */}
      <section className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] py-12 sm:py-16 px-4 text-white font-poppins">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <p className="text-indigo-400 font-semibold text-xs sm:text-sm mb-2 uppercase tracking-wider">Our Services</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-8 sm:mb-10">
            Our best services for <span className="text-white">PPC Marketing</span>
          </h2>
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            {/* Left Tabs */}
            <div className="w-full lg:w-1/2 bg-[#090c14] rounded-[20px] overflow-hidden border border-[#334155]">
              {services.map((item, idx) => {
                const isSelected = selected === idx
                const isFirst = idx === 0
                const isLast = idx === services.length - 1
                return (
                  <div
                    key={idx}
                    onClick={() => setSelected(idx)}
                    className={`cursor-pointer px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base md:text-lg font-semibold border-b border-[#334155] transition-all duration-300 ${
                      isSelected ? "bg-gradient-to-r from-[#6D5ACD] to-[#C091D1] text-white" : "hover:bg-[#1E293B]"
                    } ${isFirst ? "rounded-t-[20px]" : ""} ${isLast ? "border-b-0 rounded-b-[20px]" : ""}`}
                  >
                    {item.title}
                  </div>
                )
              })}
            </div>
            {/* Right Content */}
            <div className="w-full lg:w-1/2 bg-[#1E293B] rounded-[20px] p-4 sm:p-6 md:p-8 text-sm sm:text-base leading-relaxed">
              {services[selected].content}
            </div>
          </div>
          {/* Tags */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">
            {["Social Media", "Marketing", "Advertisement", "Content Creation"].map((tag, i) => (
              <button
                key={i}
                className="border border-white/20 px-3 sm:px-5 py-2 rounded-md text-sm sm:text-base text-white hover:bg-white/10 transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ and Contact Section */}
      <section className="min-h-screen bg-white px-4 py-8 sm:py-10 md:py-12 lg:py-16 md:px-10 font-poppins">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* FAQ SECTION */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#2D3363] mb-4 sm:mb-6 leading-tight">
              What Benefits Can a Social media Bring to Your Business?
            </h2>
            <p className="text-gray-800 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg leading-relaxed">
              "Social Media Marketing enhance reach, credibility, engagement, and growth, vital for modern businesses to
              thrive in competitive markets."
            </p>
            <h3 className="mt-6 sm:mt-8 md:mt-10 text-lg sm:text-xl font-bold text-[#2D3363]">
              Web Development In Pune
            </h3>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-xl border w-full">
            <h4 className="text-[#2A63FE] font-semibold text-sm sm:text-base md:text-lg mb-1">WE ARE HERE FOR YOU!</h4>
            <h2 className="text-[#2D3363] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6">
              Get A Free Consultation
            </h2>
            <form className="space-y-4 sm:space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border-b border-gray-400 px-1 py-2 placeholder-gray-600 text-black text-sm sm:text-base focus:outline-none focus:border-[#2A63FE] transition-colors duration-300"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border-b border-gray-400 px-1 py-2 placeholder-gray-600 text-black text-sm sm:text-base focus:outline-none focus:border-[#2A63FE] transition-colors duration-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border-b border-gray-400 px-1 py-2 placeholder-gray-600 text-black text-sm sm:text-base focus:outline-none focus:border-[#2A63FE] transition-colors duration-300"
                />
              </div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full border-b border-gray-400 px-1 py-2 placeholder-gray-600 text-black text-sm sm:text-base focus:outline-none focus:border-[#2A63FE] transition-colors duration-300"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full border-b border-gray-400 px-1 py-2 placeholder-gray-600 text-black text-sm sm:text-base resize-none focus:outline-none focus:border-[#2A63FE] transition-colors duration-300"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#7b86d4] text-white py-2 sm:py-3 rounded-md font-semibold text-sm sm:text-base hover:bg-[#1c224f] transition duration-300 transform hover:scale-[1.02]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Page
