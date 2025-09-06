"use client"
import Image from "next/image"
import CountUp from "react-countup"
import Footer from "@/app/components/Footer"

const features = [
  "Tailored Solutions: Personalized software",
  "Expertise: Extensive industry experience",
  "Cutting-edge technology solutions",
  "Dependable development partner",
  "Efficiency: Streamlined processes.",
  "Client Satisfaction: Customer-centric approach.",
  "Solutions adaptable to growth.",
  "Timely Delivery: Punctual project completion.",
]

const steps = [
  {
    id: "01",
    title: "Software Maintenance and Support",
    desc: "Following custom software development, we offer diverse maintenance and support services to meet client needs. Itorix Infotech provides instant support for resolving technical issues with proactive maintenance and ongoing bug fixes.",
    img: "/icons/megaphone.png",
  },
  {
    id: "02",
    title: "Software Integration",
    desc: "In a competitive industry, embracing new technologies presents challenges. Itorix Infotech's expert team ensures seamless custom software integration from planning to implementation, tackling complex challenges with top-grade solutions.",
    img: "/icons/graph.png",
  },
  {
    id: "03",
    title: "Software Solution",
    desc: "Itorix Infotech provides comprehensive custom software solutions, from idea to development, with an in-house team of experts. We ensure timely completion with well-planned solutions to accelerate progress.",
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
            Software
            <br /> Development
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Itorix Infotech is a top <strong className="text-black">software development company in Pune,</strong>{" "}
            offering reliable and innovative solutions. We specialize in creating custom software to meet your business
            needs.
          </p>
        </div>
        <img
          src="/software.webp"
          alt="Software Development"
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
          Choose Itorix Infotech for software development because we deliver tailored solutions that match your business
          goals. Our expertise ensures reliable and innovative software solutions to drive your success.
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
              src="/Custom-Software.mp4"
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
            <h3 className="text-[#2D3363] text-lg sm:text-xl md:text-2xl font-semibold">Software Development</h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#2D3363] via-[#5f67d1] to-[#d2276e]">
              Custom Software
              <br />
              <span className="text-[#2D3363]">Development Services</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
              As each business is totally different, and it has some demand on the customized software to be developed.
              Itorix Infotech, a{" "}
              <strong className="text-black font-semibold">software development company in DELHI</strong> provides
              software development services to deliver customized software solutions that match the client requirement
              and we try our best to fulfill the idea which they come up with. Although, custom software development
              involves a lot of work and it includes some effort from the developers side to get it done on-time, based
              on the project planning. We stay at the forefront in handling various types of custom software
              development, meeting advanced standards and client expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Business Website Section */}
      <section className="w-full text-center py-12 sm:py-16 md:py-20 px-4 bg-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight drop-shadow-md text-transparent bg-clip-text bg-gradient-to-r from-[#199db2] via-[#2D3363] to-[#d2276e] leading-tight mb-4 sm:mb-6">
          Shaping your idea
          <br /> to reality
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-slate-600 max-w-4xl mx-auto leading-relaxed">
          At its core, custom software development is about creating software that aligns with a company's specific
          requirements. This means that the software is built to fit the business processes, workflows, and systems
          already in place, rather than forcing the organization to adapt to off-the-shelf software. As the best{" "}
          <strong className="text-black">software development company in Pune</strong> we specialize in developing
          custom solutions that seamlessly integrate with your existing operations, ensuring maximum efficiency and
          productivity.
        </p>
      </section>

      {/* Final Step Section - ensure consistent 3-card UI */}
      <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 md:px-10 font-poppins">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-[#6D5ACD] to-[#C091D1] text-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {index !== steps.length - 1 && (
                <div className="absolute top-6 left-10 h-full border-l-2 border-dashed border-white/40 z-0 hidden sm:block"></div>
              )}
              <div className="bg-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg mb-3 sm:mb-4 z-10">
                <Image
                  src={step.img || "/placeholder.svg"}
                  alt={step.title}
                  width={32}
                  height={32}
                  className="sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold mb-2 z-10">{step.id}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase leading-snug mb-2 sm:mb-3 z-10">
                {step.title}
              </h3>
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
