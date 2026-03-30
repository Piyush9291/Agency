import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, Search, Share2, BarChart, ArrowRight } from "lucide-react";

export default function MarketingServices() {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and organic traffic",
      features: [
        "Keyword research",
        "On-page optimization",
        "Link building",
        "Technical SEO"
      ]
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Engage your audience across all major social platforms",
      features: [
        "Content strategy",
        "Community management",
        "Influencer partnerships",
        "Social analytics"
      ]
    },
    {
      icon: TrendingUp,
      title: "Paid Advertising",
      description: "Drive targeted traffic with Google Ads, Facebook Ads, and more",
      features: [
        "Campaign strategy",
        "Ad creation",
        "Budget optimization",
        "A/B testing"
      ]
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your marketing performance",
      features: [
        "Performance tracking",
        "Custom dashboards",
        "ROI analysis",
        "Competitor research"
      ]
    },
  ];

  return (
    <div className="bg-transparent pt-20" data-testid="marketing-services-page">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-cyan-400 font-jakarta mb-4 block">
              MARKETING SERVICES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-syne tracking-tight mb-8">
              Grow Your Brand
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-cyan-500 to-indigo-500">
                Drive Real Results
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-jakarta max-w-3xl mx-auto leading-relaxed">
              Strategic digital marketing solutions that increase visibility, engagement, and conversions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden border border-purple-100/50 mb-24"
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwc2NyZWVufGVufDB8fHx8MTc3NDI5MjkyNXww&ixlib=rb-4.1.0&q=85"
              alt="Marketing analytics dashboard"
              className="w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/95 border border-purple-100/50 hover:border-cyan-500/50 transition-all duration-300"
                data-testid={`marketing-service-${idx}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-600/20 flex items-center justify-center mb-6">
                  <service.icon size={28} className="text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold font-syne mb-4">{service.title}</h3>
                <p className="text-gray-600 font-jakarta leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-gray-700 font-jakarta">
                      <div className="w-5 h-5 rounded-full bg-cyan-600/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-purple-500">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="relative backdrop-blur-xl bg-white/95/70 border border-purple-100/50 shadow-2xl p-12 md:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold font-syne tracking-tight mb-6">
                Ready to Accelerate Your Growth?
              </h2>
              <p className="text-gray-600 font-jakarta text-lg mb-10 max-w-2xl mx-auto">
                Let's create a marketing strategy that drives measurable results for your business.
              </p>
              <Link to="/submit-project" data-testid="marketing-cta-button">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full px-10 py-5 bg-white/95 text-black font-bold font-jakarta text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 inline-flex items-center gap-3"
                >
                  Get Started
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}