import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, TrendingUp, Users, Award, CheckCircle, Rocket, Star, Zap } from "lucide-react";
import SEO from "../components/SEO";

export default function Home() {
  const services = [
    {
      title: "Web Development",
      description: "Build powerful, scalable web applications with modern technologies",
      icon: Code,
      link: "/development",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Digital Marketing",
      description: "Grow your brand with data-driven marketing strategies",
      icon: TrendingUp,
      link: "/marketing",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "UI/UX Design",
      description: "Create stunning user experiences that convert",
      icon: Zap,
      link: "/best-services",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Rocket },
    { number: "250+", label: "Happy Clients", icon: Users },
    { number: "98%", label: "Success Rate", icon: Award },
    { number: "24/7", label: "Support", icon: CheckCircle },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Kaaftek transformed our digital presence completely. Highly professional team!",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoShop",
      content: "Outstanding service! They delivered beyond our expectations.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Director",
      content: "Best investment we made. The ROI speaks for itself!",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
  ];

  return (
    <>
      <SEO 
        title="Kaaftek - Premium Digital Solutions | Web Development & Marketing"
        description="Transform your business with expert web development, digital marketing, SEO, and branding services. 500+ successful projects delivered."
        url="https://agency-hub-167.preview.emergentagent.com"
      />
      <div className="bg-white" data-testid="home-page">
        {/* Modern Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" data-testid="hero-section">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.05) 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-cyan-100 border border-indigo-200 mb-8"
              >
                <Star className="w-4 h-4 text-indigo-600" fill="currentColor" />
                <span className="text-sm font-semibold text-indigo-700 font-jakarta">Trusted by 250+ Companies</span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-syne mb-8 text-gray-900 leading-tight" data-testid="hero-headline">
                Build Your Dream
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Digital Product
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl sm:text-2xl text-gray-600 font-jakarta mb-12 max-w-3xl mx-auto leading-relaxed">
                We create exceptional digital experiences that drive growth and transform businesses
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/submit-project" data-testid="hero-cta-submit">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-bold font-jakarta text-lg shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300 flex items-center gap-2"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <Link to="/pricing" data-testid="hero-cta-pricing">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full bg-white text-gray-900 font-bold font-jakarta text-lg border-2 border-gray-200 hover:border-indigo-600 hover:bg-gray-50 transition-all duration-300 shadow-lg"
                  >
                    View Pricing
                  </motion.button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-600 font-jakarta"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Money Back Guarantee</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-6 md:px-12 bg-white" data-testid="services-section">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-indigo-600 font-semibold font-jakarta text-sm uppercase tracking-wide">Our Services</span>
              <h2 className="text-4xl sm:text-5xl font-bold font-syne mt-4 mb-6 text-gray-900">What We Do Best</h2>
              <p className="text-xl text-gray-600 font-jakarta max-w-2xl mx-auto">Comprehensive digital solutions to elevate your business</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Link to={service.link}>
                    <div className="group relative p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 h-full">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold font-syne mb-3 text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 font-jakarta mb-4">{service.description}</p>
                      <div className="flex items-center text-indigo-600 font-jakarta font-semibold group-hover:gap-2 gap-1 transition-all duration-300">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-indigo-600 to-cyan-600" data-testid="stats-section">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-bold font-syne text-white mb-2">{stat.number}</div>
                  <div className="text-white/90 font-jakarta">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 md:px-12 bg-gray-50" data-testid="testimonials-section">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-indigo-600 font-semibold font-jakarta text-sm uppercase tracking-wide">Testimonials</span>
              <h2 className="text-4xl sm:text-5xl font-bold font-syne mt-4 mb-6 text-gray-900">Loved by Clients</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 font-jakarta mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-bold font-syne text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 font-jakarta">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-600"></div>
              <div className="relative px-12 py-20 text-center">
                <h2 className="text-4xl sm:text-5xl font-bold font-syne text-white mb-6">
                  Ready to Start Your Project?
                </h2>
                <p className="text-xl text-white/90 font-jakarta mb-10 max-w-2xl mx-auto">
                  Let's bring your vision to life with our expert team
                </p>
                <Link to="/submit-project" data-testid="final-cta-button">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 rounded-full bg-white text-indigo-600 font-bold font-jakarta text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 inline-flex items-center gap-3"
                  >
                    Get Started Now
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}