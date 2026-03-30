import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Target, Users, FileText, Mail, Palette, ArrowRight, CheckCircle } from "lucide-react";
import SEO from "../components/SEO";

export default function AllServices() {
  const services = [
    {
      icon: Search,
      title: "SEO",
      subtitle: "Search Engine Optimization",
      description: "Boost your website's visibility and rank higher on search engines",
      color: "cyan",
      features: [
        "Keyword Research & Analysis",
        "On-Page SEO Optimization",
        "Technical SEO Audit",
        "Link Building Strategy",
        "Local SEO Optimization",
        "Monthly Performance Reports"
      ],
      benefits: "Increase organic traffic by 200%+ and dominate search results"
    },
    {
      icon: Target,
      title: "Google Ads",
      subtitle: "Pay-Per-Click Advertising",
      description: "Drive targeted traffic with strategic Google Ads campaigns",
      color: "indigo",
      features: [
        "Campaign Strategy & Setup",
        "Keyword & Audience Targeting",
        "Ad Copy Creation & Testing",
        "Budget Optimization",
        "Conversion Tracking",
        "Real-time Performance Monitoring"
      ],
      benefits: "Get immediate results with ROI-focused ad campaigns"
    },
    {
      icon: Users,
      title: "Social Media",
      subtitle: "Social Media Marketing",
      description: "Build and engage your audience across all social platforms",
      color: "violet",
      features: [
        "Content Strategy & Planning",
        "Post Creation & Scheduling",
        "Community Management",
        "Social Media Advertising",
        "Influencer Partnerships",
        "Analytics & Growth Tracking"
      ],
      benefits: "Build a loyal community and increase brand awareness"
    },
    {
      icon: FileText,
      title: "Content Marketing",
      subtitle: "Strategic Content Creation",
      description: "Create compelling content that attracts and converts your audience",
      color: "pink",
      features: [
        "Content Strategy Development",
        "Blog Writing & Publishing",
        "Video Content Creation",
        "Infographics & Visual Content",
        "Content Distribution",
        "Performance Analytics"
      ],
      benefits: "Establish thought leadership and drive organic growth"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      subtitle: "Email Campaign Management",
      description: "Connect directly with your customers through personalized emails",
      color: "cyan",
      features: [
        "Email List Building & Segmentation",
        "Campaign Design & Copywriting",
        "Automation Workflows",
        "A/B Testing",
        "Newsletter Management",
        "Conversion Optimization"
      ],
      benefits: "Achieve 40%+ open rates and maximize customer lifetime value"
    },
    {
      icon: Palette,
      title: "Branding",
      subtitle: "Brand Identity & Strategy",
      description: "Create a memorable brand that stands out in the market",
      color: "indigo",
      features: [
        "Brand Strategy & Positioning",
        "Logo & Visual Identity Design",
        "Brand Guidelines Creation",
        "Brand Voice & Messaging",
        "Brand Collateral Design",
        "Brand Launch Strategy"
      ],
      benefits: "Build a strong brand identity that resonates with your audience"
    },
  ];

  return (
    <>
      <SEO 
        title="All Digital Marketing Services - SEO, Google Ads, Social Media | Kaaftek"
        description="Complete digital marketing services including SEO, Google Ads, Social Media Marketing, Content Marketing, Email Marketing, and Branding. Expert strategies for business growth."
        keywords="SEO services, Google Ads management, social media marketing, content marketing, email marketing, branding services, digital marketing agency, PPC advertising"
        url="https://agency-hub-167.preview.emergentagent.com/all-services"
      />
      <div className="bg-gray-50 pt-20" data-testid="all-services-page">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 rounded-full bg-cyan-600/20 border border-cyan-500/50 text-cyan-300 font-jakarta text-sm font-semibold tracking-wide">
                🚀 COMPLETE DIGITAL SOLUTIONS
              </span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-syne tracking-tight mb-8">
              All Marketing
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-cyan-500 to-indigo-500">
                Services
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-jakarta max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing services to grow your business and achieve your goals
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
                data-testid={`service-card-${idx}`}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-${service.color}-600 to-${service.color}-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className="relative h-full p-8 rounded-3xl bg-white border border-gray-200/50 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-${service.color}-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={32} className={`text-${service.color}-400`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold font-syne mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-9000 font-jakarta text-sm mb-4">{service.subtitle}</p>
                  
                  {/* Description */}
                  <p className="text-gray-600 font-jakarta leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-gray-900 font-syne font-semibold mb-3 text-sm uppercase tracking-wide">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start text-gray-600 font-jakarta text-sm">
                          <CheckCircle size={16} className={`text-${service.color}-400 mr-2 flex-shrink-0 mt-0.5`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits Badge */}
                  <div className={`p-4 rounded-2xl bg-${service.color}-600/10 border border-${service.color}-500/20 mb-6`}>
                    <p className="text-gray-700 font-jakarta text-sm leading-relaxed">
                      <strong className={`text-${service.color}-400`}>💡 Result: </strong>
                      {service.benefits}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Link to="/submit-project">
                    <button className="w-full rounded-full px-6 py-3 bg-gray-50 hover:bg-white/10 border border-gray-200/50 hover:border-cyan-500/50 transition-all duration-300 font-semibold font-jakarta flex items-center justify-center gap-2 group">
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

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 md:px-12 bg-gray-500">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-syne tracking-tight mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-gray-600 font-jakarta text-lg max-w-3xl mx-auto">
              We deliver results-driven solutions with proven strategies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Proven Track Record", 
                desc: "500+ successful campaigns with measurable results",
                icon: "📊"
              },
              { 
                title: "Expert Team", 
                desc: "Certified professionals with 10+ years experience",
                icon: "👨‍💼"
              },
              { 
                title: "Data-Driven Approach", 
                desc: "Every decision backed by analytics and insights",
                icon: "📈"
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white border border-gray-200/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
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
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-indigo-600/20"></div>
            <div className="relative backdrop-blur-xl bg-white/70 border border-gray-200/50 shadow-2xl p-12 md:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-syne tracking-tight mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-gray-600 font-jakarta text-lg mb-10 max-w-2xl mx-auto">
                Let's create a custom marketing strategy that drives real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/submit-project" data-testid="services-cta-submit">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full px-10 py-5 bg-white text-black font-bold font-jakarta text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 inline-flex items-center gap-3"
                  >
                    Start Your Project
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full px-10 py-5 border-2 border-white/20 hover:bg-white/10 transition-colors duration-200 font-bold font-jakarta text-lg"
                  >
                    Talk to an Expert
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}