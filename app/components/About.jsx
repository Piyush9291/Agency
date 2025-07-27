"use client"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  const services = [
    "Search Engine Optimization",
    "Creative and Graphic Design",
    "Social Media Marketing",
    "Website Design",
    "Google Ads & PPC",
    "Influencer Marketing",
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-8 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-inter overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* ABOUT US Badge */}
        <div className="text-center mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-semibold text-blue-900 border border-blue-200 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
            <span className="text-base md:text-lg">✨</span> ABOUT US
          </span>
        </div>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16 xl:gap-20">
          {/* Text Section */}
          <div className="w-full lg:w-3/5 animate-fade-in-right space-y-4 md:space-y-6">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight font-poppins animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Story of <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Itorix Infotech
              </span>
            </h1>

            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <strong className="text-slate-800">Itorix Infotech</strong> is a{" "}
              <strong className="text-slate-800">Web Development</strong> &{" "}
              <strong className="text-slate-800">Digital Marketing Agency in Pune</strong> that focuses on quality,
              innovation, and speed. We use technology to deliver measurable growth for our clients.
            </p>

            <h2
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-slate-700 font-poppins animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Your Ideal Digital Marketing Agency for Business Success
            </h2>

            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              Just like a good recipe needs the right ingredients, your digital strategy needs the right parts to
              succeed.
            </p>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 hover:scale-[1.02]"
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-slate-700 text-xs sm:text-sm md:text-base font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-2/5 flex justify-center animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
            <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                {/* Image */}
                <img
                  src="https://www.itorixinfotech.com/wp-content/uploads/2024/04/10-1.jpg"
                  alt="Itorix Team"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse-slow" />
              <div className="absolute top-1/3 -right-6 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-30 animate-float" />
              <div
                className="absolute top-1/4 -left-4 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-25 animate-float"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 md:mt-16 lg:mt-20 text-center space-y-4 md:space-y-6">
          {/* Trusted Heading */}
          <h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-poppins animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
          </h2>

          {/* Trusted Badge */}

        </div>
      </div>

      {/* Enhanced Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800;900&display=swap');
        
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-poppins { font-family: 'Poppins', sans-serif; }
        
        @keyframes fade-in-up {
          0% { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fade-in-left {
          0% { 
            opacity: 0; 
            transform: translateX(-30px); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes fade-in-right {
          0% { 
            opacity: 0; 
            transform: translateX(30px); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.4; 
            transform: scale(1.05); 
          }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.7; 
            transform: scale(1.1); 
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-10px) rotate(1deg); 
          }
          66% { 
            transform: translateY(-5px) rotate(-1deg); 
          }
        }
        
        .animate-fade-in-up { 
          animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; 
          opacity: 0; 
        }
        
        .animate-fade-in-left { 
          animation: fade-in-left 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; 
          opacity: 0; 
        }
        
        .animate-fade-in-right { 
          animation: fade-in-right 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; 
          opacity: 0; 
        }
        
        .animate-pulse-slow { 
          animation: pulse-slow 4s ease-in-out infinite; 
        }
        
        .animate-pulse-gentle { 
          animation: pulse-gentle 2s ease-in-out infinite; 
        }
        
        .animate-float { 
          animation: float 6s ease-in-out infinite; 
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Better backdrop blur support */
        @supports (backdrop-filter: blur(10px)) {
          .backdrop-blur-sm {
            backdrop-filter: blur(4px);
          }
        }
      `}</style>
    </div>
  )
}
