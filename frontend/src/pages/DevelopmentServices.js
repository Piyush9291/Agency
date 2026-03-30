import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Smartphone, Layout, Database, ArrowRight, ShoppingCart } from "lucide-react";
import SEO from "../components/SEO";

export default function DevelopmentServices() {
  const services = [
    {
      icon: Layout,
      title: "Website Designing",
      description: "Beautiful, modern website designs that captivate your audience",
      features: [
        "Custom UI/UX Design",
        "Responsive Layouts",
        "Brand Identity Integration",
        "Figma/Adobe XD Prototypes",
        "Mobile-First Approach",
        "Conversion-Focused Design"
      ],
      color: "indigo"
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Full-stack web development with cutting-edge technologies",
      features: [
        "React/Next.js Development",
        "Node.js Backend",
        "MongoDB/PostgreSQL",
        "RESTful API Integration",
        "Cloud Deployment (AWS/Vercel)",
        "Performance Optimization"
      ],
      color: "cyan"
    },
    {
      icon: Smartphone,
      title: "E-commerce Website",
      description: "Complete online store solutions to sell your products globally",
      features: [
        "Shopping Cart System",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Tracking",
        "Product Search & Filters",
        "Customer Reviews & Ratings"
      ],
      color: "violet"
    },
    {
      icon: Database,
      title: "Shopify Development",
      description: "Custom Shopify stores with unique themes and functionality",
      features: [
        "Custom Theme Development",
        "App Integration",
        "Payment Setup",
        "SEO Optimization",
        "Migration from Other Platforms",
        "Ongoing Support"
      ],
      color: "green"
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions for your unique business needs",
      features: [
        "CRM/ERP Systems",
        "Business Automation",
        "API Development",
        "Third-party Integrations",
        "Scalable Architecture",
        "Maintenance & Support"
      ],
      color: "pink"
    },
    {
      icon: Layout,
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and performing at its best",
      features: [
        "Regular Updates & Backups",
        "Security Monitoring",
        "Bug Fixes & Patches",
        "Performance Optimization",
        "Content Updates",
        "24/7 Technical Support"
      ],
      color: "orange"
    },
  ];

  return (
    <>
      <SEO 
        title="Web Development Services - Custom Websites & E-commerce | Kaaftek"
        description="Expert web development services including Website Design, E-commerce, Shopify Development, Custom Software, and Website Maintenance. Modern, scalable solutions."
        keywords="website development, web design, e-commerce website, shopify development, custom software, website maintenance, web development services"
        url="https://agency-hub-167.preview.emergentagent.com/development"
      />
      <div className="bg-black/20 pt-20" data-testid="development-services-page">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-indigo-400 font-jakarta mb-4 block">
              DEVELOPMENT SERVICES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-syne tracking-tight mb-8">
              Web & Development
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500">
                Services
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 font-jakarta max-w-3xl mx-auto leading-relaxed">
              From stunning websites to powerful e-commerce platforms and custom software solutions - we build digital experiences that drive results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden border border-purple-500/50 mb-24"
          >
            <img
              src="https://images.unsplash.com/photo-1753998941540-081eed4f6397?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZyUyMHNjcmVlbnMlMjBkYXJrJTIwbW9kZXxlbnwwfHx8fDE3NzQyOTI5MjV8MA&ixlib=rb-4.1.0&q=85"
              alt="Development workspace"
              className="w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-purple-500/50 hover:border-indigo-500/50 transition-all duration-300"
                data-testid={`dev-service-${idx}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-teal-500/20 flex items-center justify-center mb-6">
                  <service.icon size={28} className="text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold font-syne mb-4">{service.title}</h3>
                <p className="text-gray-400 font-jakarta leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-gray-300 font-jakarta">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-teal-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
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
      <section className="py-24 px-6 md:px-12 bg-purple-500/100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="relative backdrop-blur-xl bg-white/10 backdrop-blur-xl/70 border border-purple-500/50 shadow-2xl p-12 md:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold font-syne tracking-tight mb-6">
                Ready to Build Your Project?
              </h2>
              <p className="text-gray-400 font-jakarta text-lg mb-10 max-w-2xl mx-auto">
                Let's discuss your development needs and create a solution that drives results.
              </p>
              <Link to="/submit-project" data-testid="dev-cta-button">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full px-10 py-5 bg-white/10 backdrop-blur-xl text-black font-bold font-jakarta text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 inline-flex items-center gap-3"
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
    </>
  );
}