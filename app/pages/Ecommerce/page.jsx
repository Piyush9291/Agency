"use client"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import CountUp from "react-countup"

const features = [
  "Decades of B2B experience",
  "Experienced, creative team",
  "500+ global clients",
  "Satisfaction-focused quality",
  "Tailored client-centric services",
  "Quality builds trust",
  "Cost-effective, productive services",
  "Analyze, test, assure",
]

const services = [
  "Prioritize user experience (UX)",
  "Optimize for mobile responsiveness",
  "Focus on visual aesthetics/branding",
  "Ensure fast loading times",
  "Implement SEO strategies",
  "Update and maintain regularly",
]

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
]

const Page = () => {
  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <section className="bg-white">
          <div className="w-full text-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-r from-[#f3f0f3] to-[#dcbae8]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight drop-shadow-md text-transparent bg-clip-text bg-gradient-to-r from-[#199db2] via-[#2D3363] to-[#d2276e] leading-tight">
            E-commerce Website <br /> Design Company In Pune
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Itorix Infotech LLP, a leading e-commerce website design firm in Pune, Maharashtra, boasting a decade of
            experience and over 500 successful global projects. Tailored solutions for business prosperity.
          </p>
        </div>
        <img
          src="/Ecommerce.webp"
          alt="E-commerce Website Design"
          className="mx-auto mt-6 sm:mt-8 md:mt-10 max-w-[90%] sm:max-w-[800px] w-full h-auto rounded-xl shadow-lg"
        />
      </section>

      {/* Why Choose Us */}
      <section className="w-full px-4 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-[#FAD0FE] to-white text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#1e1e4b] mb-3 sm:mb-4 leading-tight">
          Why Choose <br />
          <span className="text-[#1e1e4b]">Itorix Infotech?</span>
        </h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 leading-relaxed">
          Choose Itorix Infotech for expert web design: 10+ years experience, tailored solutions, 500+ successful
          projects worldwide, and a commitment to your business goals.
        </p>
        <div className="max-w-5xl mx-auto grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-[8px] bg-gradient-to-r from-[#6D5ACD] to-[#C091D1] text-white font-medium text-xs sm:text-sm md:text-base p-3 sm:p-4 md:p-5 shadow-md transition-all duration-300 hover:scale-105 text-center"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <video
              src="/Ecommerce.mp4"
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
            <h3 className="text-[#2D3363] text-lg sm:text-xl md:text-2xl font-semibold">Web Design</h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#2D3363] via-[#5f67d1] to-[#d2276e]">
              Transforming Ideas <br />
              <span className="text-[#2D3363]">into Online Reality</span>
            </h2>
            <div className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-3 sm:space-y-4">
              <p>
                Web design is the art of creating attractive, functional websites. It includes layout, graphics, and
                user experience — all aimed at engaging users and achieving your business goals.
              </p>
              <p>We deliver top-quality web solutions for small and medium businesses at affordable prices.</p>
            </div>
            {/* Services Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 rounded-lg bg-white/70 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium text-xs sm:text-sm md:text-base">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Website Section */}
      <section className="w-full text-center py-12 sm:py-16 md:py-20 px-4 bg-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight drop-shadow-md text-transparent bg-clip-text bg-gradient-to-r from-[#199db2] via-[#2D3363] to-[#d2276e] leading-tight mb-4 sm:mb-6">
          Why Your Business <br /> Needs a Website?
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#199db2] via-[#7e5bef] to-[#d2276e] max-w-4xl mx-auto leading-relaxed">
          Unlock global reach, credibility, and growth potential. Harness custom web solutions from Itorix Infotech,
          backed by a decade of industry expertise.
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
      <section className="w-full bg-white py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 font-poppins">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* Left Stats */}
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 items-center lg:items-start justify-center">
            {/* Website Design */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-[#6D5ACD] to-[#C091D1] text-transparent bg-clip-text">
                <CountUp start={1} end={500} duration={3} />+
              </h2>
              <p className="text-gray-700 mt-2 sm:mt-3 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
                Website Design
              </p>
            </div>
            {/* UI/UX Design */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-[#6D5ACD] to-[#C091D1] text-transparent bg-clip-text">
                <CountUp start={1} end={600} duration={3} />+
              </h2>
              <p className="text-gray-700 mt-2 sm:mt-3 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
                UI/UX Design
              </p>
            </div>
          </div>
          {/* Right Features */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-[#f8f8fc] rounded-xl border border-gray-100 p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition duration-300 ease-in-out hover:-translate-y-1">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#1a1a40] mb-2 sm:mb-3 md:mb-4 leading-snug">
                  Decade of Excellence
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed">
                  With over 10 years of B2B client services and industry experience, trust our seasoned expertise.
                </p>
              </div>
              <Image
                src="/img1.png"
                alt="Decade of Excellence"
                width={180}
                height={90}
                className="mt-4 sm:mt-6 md:mt-8 mx-auto w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] xl:max-w-[200px] object-contain"
              />
            </div>
            {/* Card 2 */}
            <div className="bg-[#f8f8fc] rounded-xl border border-gray-100 p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition duration-300 ease-in-out hover:-translate-y-1">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#1a1a40] mb-2 sm:mb-3 md:mb-4 leading-snug">
                  Global Impact
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed">
                  Serving 500+ clients worldwide, our highly skilled team delivers tailored, quality web solutions for
                  sustainable business growth.
                </p>
              </div>
              <Image
                src="/img1.png"
                alt="Global Impact"
                width={180}
                height={90}
                className="mt-4 sm:mt-6 md:mt-8 mx-auto w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] xl:max-w-[200px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
