import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "one-time",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Mobile optimization",
        "Basic SEO setup",
        "Contact form integration",
        "30 days support",
        "Social media links"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "one-time",
      description: "Ideal for growing businesses",
      features: [
        "10-page custom website",
        "Advanced SEO optimization",
        "CMS integration",
        "E-commerce (up to 50 products)",
        "90 days support",
        "Analytics dashboard",
        "Performance optimization",
        "Email marketing setup"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "For large-scale projects and enterprises",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Advanced integrations",
        "Dedicated account manager",
        "1 year support",
        "Priority development",
        "Custom analytics",
        "Security audit",
        "Performance SLA"
      ],
      popular: false
    },
  ];

  const addOns = [
    { name: "Logo Design", price: "$499" },
    { name: "Content Writing (per page)", price: "$149" },
    { name: "Social Media Marketing (monthly)", price: "$999" },
    { name: "SEO Optimization (monthly)", price: "$799" },
    { name: "Additional Support Hours", price: "$150/hr" },
  ];

  return (
    <>
      <SEO 
        title="Pricing Plans - Affordable Digital Services | Kaaftek"
        description="Transparent pricing for web development and digital marketing services. Starter $2,999, Professional $7,999, Enterprise custom. No hidden fees. Free consultation."
        keywords="web development pricing, digital marketing cost, SEO pricing, web design packages, affordable digital services"
        url="https://agency-hub-167.preview.emergentagent.com/pricing"
      />
      <div className="bg-black/20 pt-20" data-testid="pricing-page">
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
              PRICING PLANS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-syne tracking-tight mb-8">
              Simple, Transparent
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500">
                Pricing
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 font-jakarta max-w-3xl mx-auto leading-relaxed">
              Choose the plan that fits your needs. All plans include premium features and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                  plan.popular
                    ? "bg-white/10 backdrop-blur-xl border-indigo-500/50 shadow-2xl shadow-indigo-500/20 scale-105"
                    : "bg-purple-500/100 border-purple-500/50 hover:border-indigo-500/30"
                }`}
                data-testid={`pricing-plan-${idx}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 text-white font-jakarta text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-syne mb-2">{plan.name}</h3>
                  <p className="text-gray-400 font-jakarta text-sm">{plan.description}</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold font-syne">{plan.price}</span>
                    <span className="text-gray-400 font-jakarta text-sm">/ {plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-gray-300 font-jakarta">
                      <Check size={20} className="text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/submit-project" className="mt-auto">
                  <button
                    className={`w-full rounded-full px-6 py-4 font-bold font-jakarta text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-white/10 backdrop-blur-xl text-black hover:scale-105 shadow-xl"
                        : "bg-white/10 backdrop-blur-xl/10 hover:bg-white/10 backdrop-blur-xl/20 border border-white/20"
                    }`}
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24 px-6 md:px-12 bg-purple-500/100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-syne tracking-tight mb-6">
              Optional Add-ons
            </h2>
            <p className="text-gray-400 font-jakarta text-lg">
              Enhance your package with additional services
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {addOns.map((addon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center justify-between p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-purple-500/50 hover:border-indigo-500/30 transition-all duration-300"
                data-testid={`addon-${idx}`}
              >
                <span className="font-jakarta font-medium text-slate-200">{addon.name}</span>
                <span className="font-syne font-bold text-xl text-indigo-400">{addon.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-syne tracking-tight mb-6">
              Have Questions?
            </h2>
            <p className="text-gray-400 font-jakarta text-lg mb-10">
              Get in touch with our team to discuss your specific needs and get a custom quote.
            </p>
            <Link to="/contact" data-testid="pricing-contact-cta">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full px-10 py-5 bg-white/10 backdrop-blur-xl text-black font-bold font-jakarta text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 inline-flex items-center gap-3"
              >
                Contact Us
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}