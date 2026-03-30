import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, TrendingUp, Users, Award, CheckCircle, Rocket } from "lucide-react";
import SEO from "../components/SEO";

export default function Home() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites, web apps, and admin panels built with modern tech",
      icon: Code,
      link: "/development",
      color: "indigo"
    },
    {
      title: "Digital Marketing",
      description: "SEO, social media management, and paid advertising campaigns",
      icon: TrendingUp,
      link: "/marketing",
      color: "cyan"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "250+", label: "Happy Clients" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "Aether Digital transformed our online presence. Our revenue increased by 300% in just 6 months!",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200"
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoShop",
      content: "The team delivered beyond expectations. Professional, creative, and results-driven.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200"
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Director",
      content: "Best investment we made this year. The ROI speaks for itself. Highly recommended!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200"
    },
  ];

  const blogPosts = [
    {
      title: "10 Web Design Trends for 2026",
      excerpt: "Discover the latest design trends shaping the digital landscape",
      date: "Jan 15, 2026",
      category: "Design"
    },
    {
      title: "How AI is Transforming Marketing",
      excerpt: "Explore how artificial intelligence is revolutionizing digital marketing",
      date: "Jan 10, 2026",
      category: "Marketing"
    },
    {
      title: "Building Scalable Web Applications",
      excerpt: "Best practices for creating applications that grow with your business",
      date: "Jan 5, 2026",
      category: "Development"
    },
  ];

  return (
    <>
      <SEO 
        title="Aether Digital - Premium Digital Agency Services | Web Development & Marketing"
        description="Transform your business with expert web development, digital marketing, SEO, and branding services. 500+ successful projects delivered with 98% success rate."
        keywords="digital agency, web development, mobile app development, digital marketing, SEO services, social media marketing, branding, UI/UX design, Google Ads, content marketing"
        url="https://agency-hub-167.preview.emergentagent.com"
      />
      <div className="bg-gray-50" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white opacity-50"></div>
          <img
            src="https://images.unsplash.com/photo-1746796451196-5225bdcf3955?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwYWJzdHJhY3QlMjB0ZWNobm9sb2d5JTIwZGF0YSUyMGZsb3clMjBiYWNrZ3JvdW5kJTIwM2QlMjBnbGFzc21vcnBoaXNtfGVufDB8fHx8MTc3NDI5MjkxNnww&ixlib=rb-4.1.0&q=85"
            alt="Abstract technology background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 rounded-full bg-indigo-600/20 border border-indigo-500/50 text-indigo-300 font-jakarta text-sm font-semibold tracking-wide">
                🚀 DIGITAL TRANSFORMATION EXPERTS
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-syne tracking-tight mb-8 leading-tight" data-testid="hero-headline">
              Grow Your Business with
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500">
                Our Digital Services
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 font-jakarta mb-12 max-w-3xl mx-auto leading-relaxed">
              We blend engineering precision with artistic chaos to construct digital realities that drive results.
              Transform your vision into a high-performing digital presence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/submit-project" data-testid="hero-cta-submit">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full px-10 py-5 bg-white text-black font-bold font-jakarta text-lg shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center gap-3"
                >
                  Submit Your Project
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link to="/best-services" data-testid="hero-cta-services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full px-10 py-5 border-2 border-white/20 hover:bg-white/10 transition-colors duration-200 font-bold font-jakarta text-lg"
                >
                  Explore Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 px-6 md:px-12" data-testid="services-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-indigo-400 font-jakarta mb-4 block">
              OUR EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-syne tracking-tight mb-6">
              What We Offer
            </h2>
            <p className="text-gray-600 font-jakarta text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to elevate your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link to={service.link}>
                  <div className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-12 hover:border-indigo-500/50 transition-all duration-300 h-full" data-testid={`service-card-${idx}`}>
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-${service.color}-600/10 rounded-full blur-3xl group-hover:bg-${service.color}-600/20 transition-all duration-500`}></div>
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl bg-${service.color}-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon size={32} className={`text-${service.color}-400`} />
                      </div>
                      <h3 className="text-2xl font-bold font-syne mb-4">{service.title}</h3>
                      <p className="text-gray-600 font-jakarta leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex items-center text-indigo-400 font-jakarta font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                        Learn More <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 md:px-12 bg-gray-1000" data-testid="stats-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
                data-testid={`stat-${idx}`}
              >
                <div className="text-4xl lg:text-5xl font-bold font-syne text-indigo-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-jakarta text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 px-6 md:px-12" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-cyan-400 font-jakarta mb-4 block">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-syne tracking-tight mb-6">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-gray-100 border border-white/5 backdrop-blur-sm"
                data-testid={`testimonial-${idx}`}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold font-jakarta">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm font-jakarta">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 font-jakarta leading-relaxed">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gray-1000" data-testid="blog-preview-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-16"
          >
            <div>
              <span className="uppercase tracking-[0.2em] text-xs font-semibold text-indigo-400 font-jakarta mb-4 block">
                LATEST INSIGHTS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-syne tracking-tight">
                From Our Blog
              </h2>
            </div>
            <Link to="/blog" className="hidden md:block">
              <button className="text-indigo-400 font-jakarta font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
                View All <ArrowRight size={18} />
              </button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                data-testid={`blog-card-${idx}`}
              >
                <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-indigo-500/50 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 flex items-center justify-center">
                    <Rocket size={48} className="text-indigo-400 opacity-50" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-jakarta font-semibold text-cyan-400 uppercase tracking-wide">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold font-syne mt-3 mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 font-jakarta text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-9000 text-xs font-jakarta">{post.date}</span>
                      <ArrowRight size={16} className="text-indigo-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 px-6 md:px-12" data-testid="final-cta-section">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-cyan-600 opacity-10"></div>
            <div className="relative backdrop-blur-xl bg-white/70 border border-gray-200 shadow-2xl p-12 md:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-syne tracking-tight mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-600 font-jakarta text-lg mb-10 max-w-2xl mx-auto">
                Let's transform your vision into reality. Submit your project details and our team will get back to you within 24 hours.
              </p>
              <Link to="/submit-project" data-testid="final-cta-button">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full px-10 py-5 bg-white text-black font-bold font-jakarta text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 inline-flex items-center gap-3"
                >
                  Submit Your Project Now
                  <ArrowRight size={20} />
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