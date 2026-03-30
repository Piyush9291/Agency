import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, TrendingUp, Palette, Megaphone, ArrowRight, Sparkles } from "lucide-react";

export default function BestServices() {
  const bestServices = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "End-to-end web solutions from concept to deployment",
      highlight: "Most Popular",
      color: "indigo",
      features: [
        "Custom web applications",
        "E-commerce platforms",
        "Progressive web apps",
        "API integrations"
      ]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love",
      highlight: "Premium",
      color: "violet",
      features: [
        "User research",
        "Wireframing & prototyping",
        "Visual design",
        "Usability testing"
      ]
    },
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      description: "Data-driven strategies for rapid business growth",
      highlight: "Results Guaranteed",
      color: "cyan",
      features: [
        "Growth hacking",
        "Conversion optimization",
        "Marketing automation",
        "Performance analytics"
      ]
    },
    {
      icon: Megaphone,
      title: "Brand Strategy",
      description: "Build a memorable brand that stands out",
      highlight: "Exclusive",
      color: "pink",
      features: [
        "Brand identity",
        "Market positioning",
        "Content strategy",
        "Brand guidelines"
      ]
    },
  ];

  return (
    <div className="bg-gray-50 pt-20" data-testid="best-services-page">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-600/20 border border-indigo-500/50 text-indigo-300 font-jakarta text-sm font-semibold tracking-wide mb-6"
            >
              <Sparkles size={16} />
              OUR BEST SERVICES
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-syne tracking-tight mb-8">
              Premium Services for
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500">
                Exceptional Results
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-jakarta max-w-3xl mx-auto leading-relaxed">
              Our most requested services, refined through hundreds of successful projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {bestServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
                data-testid={`best-service-${idx}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-cyan-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative p-8 rounded-3xl bg-white/90 border border-gray-200 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-${service.color}-600/20 flex items-center justify-center`}>
                      <service.icon size={28} className={`text-${service.color}-400`} />
                    </div>
                    <span className={`px-4 py-1 rounded-full text-xs font-semibold font-jakarta bg-${service.color}-600/20 text-${service.color}-300 border border-${service.color}-500/30`}>
                      {service.highlight}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-syne mb-4">{service.title}</h3>
                  <p className="text-gray-600 font-jakarta leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-gray-700 font-jakarta">
                        <div className={`w-5 h-5 rounded-full bg-${service.color}-600/20 flex items-center justify-center mr-3 flex-shrink-0`}>
                          <div className={`w-2 h-2 rounded-full bg-${service.color}-400`}></div>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/submit-project">
                    <button className="w-full rounded-full px-6 py-3 bg-gray-100 hover:bg-white/10 border border-gray-200 hover:border-indigo-500/50 transition-all duration-300 font-semibold font-jakarta flex items-center justify-center gap-2 group">
                      Get Started
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-6 md:px-12 bg-gray-1000">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-syne tracking-tight mb-6">
              Why Choose Kaaftek?
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Expert Team", desc: "Industry veterans with 10+ years experience" },
              { title: "Proven Track Record", desc: "500+ successful projects delivered" },
              { title: "24/7 Support", desc: "Always available when you need us" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center p-8"
              >
                <h3 className="text-xl font-bold font-syne mb-3">{item.title}</h3>
                <p className="text-gray-600 font-jakarta">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="relative backdrop-blur-xl bg-white/70 border border-gray-200 shadow-2xl p-12 md:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold font-syne tracking-tight mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 font-jakarta text-lg mb-10 max-w-2xl mx-auto">
                Submit your project and let's create something extraordinary together.
              </p>
              <Link to="/submit-project" data-testid="best-services-cta-button">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full px-10 py-5 bg-white text-black font-bold font-jakarta text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 inline-flex items-center gap-3"
                >
                  Submit Your Project
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