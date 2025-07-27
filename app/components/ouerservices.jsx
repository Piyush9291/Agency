"use client"

import Link from "next/link"
import { Code, Palette, Search, Settings, Share2, MousePointer } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description:
        "Enhance your online presence seamlessly with our all-in-one web design company. We offer comprehensive solutions including website..",
      iconColor: "text-yellow-400",
      href: "/pages/WebsiteDevelopment",
      gradient: "from-purple-600 via-purple-500 to-pink-400",
    },
    {
      icon: Palette,
      title: "Web Design",
      description:
        "Web designing is an art! Your website design shows your business insight. A well known saying is 'First impression is the lasting one'..",
      iconColor: "text-blue-400",
      href: "/pages/WebsiteDesigning",
      gradient: "from-purple-600 via-purple-500 to-pink-400",
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description:
        "Secure top search rankings for preferred keywords, generating vital leads essential for business development. Optimize for targeted search terms..",
      iconColor: "text-red-400",
      href: "/pages/",
      gradient: "from-purple-600 via-purple-500 to-pink-400",
    },
    {
      icon: Settings,
      title: "Custom Software Development",
      description:
        "Tailoring applications to meet specific business needs is crucial in today's competitive landscape. Custom software development involves..",
      iconColor: "text-green-400",
      href: "/pages/CustomSoftware",
      gradient: "from-purple-600 via-purple-500 to-pink-400",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Engage your audience and grow brand awareness through strategic and impactful social media campaigns that drive real results..",
      iconColor: "text-pink-400",
      href: "/pages/SocialMarketing",
      gradient: "from-purple-600 via-purple-500 to-pink-400",
    },
    {
      icon: MousePointer,
      title: "Pay Per Click Marketing",
      description:
        "Generate fast traffic and boost ROI with finely-tuned, performance-driven PPC campaigns that deliver measurable results..",
      iconColor: "text-purple-400",
      href: "/pages/PayPerClick",
      gradient: "from-purple-600 via-purple-500 to-pink-400",
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 py-16 px-4 sm:px-8 lg:px-16 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-blue-50 border border-blue-200 text-blue-900 text-sm sm:text-base font-semibold px-6 py-2.5 rounded-full shadow hover:scale-105 transition">
            <span className="text-lg">🛠️</span> OUR SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 font-poppins mt-6 leading-tight">
            Our Best Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                href={service.href}
                className="group block transform transition-all duration-500 hover:-translate-y-2 hover:scale-105"
              >
                <div
                  className={`bg-gradient-to-br ${service.gradient} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-purple-200/20 backdrop-blur-sm relative overflow-hidden`}
                >
                  {/* Decorative Background */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-poppins leading-tight pr-4">
                        {service.title}
                      </h3>
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-white/30 flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-white font-semibold text-sm sm:text-base inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                        Read More
                        <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </div>
                      <div className="flex space-x-1 opacity-60">
                        <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;600;700&display=swap");
        .font-inter {
          font-family: "Inter", sans-serif;
        }
        .font-poppins {
          font-family: "Poppins", sans-serif;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
