import { motion } from "framer-motion";
import { Users, Target, Award, Heart } from "lucide-react";
import SEO from "../components/SEO";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "We're committed to delivering exceptional digital solutions that drive real business growth."
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Your success is our success. We work closely with you to understand and exceed your goals."
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We never compromise on quality. Every project is crafted with precision and attention to detail."
    },
    {
      icon: Heart,
      title: "Passionate Team",
      description: "Our team loves what they do, and it shows in every project we deliver."
    },
  ];

  return (
    <>
      <SEO 
        title="About Us - Our Story & Team | Aether Digital"
        description="Learn about Aether Digital - a passionate team transforming businesses since 2018. 500+ projects completed, 250+ happy clients, 98% success rate."
        keywords="about digital agency, our team, company history, mission vision, digital transformation experts"
        url="https://agency-hub-167.preview.emergentagent.com/about"
      />
      <div className="bg-slate-950 pt-20" data-testid="about-page">
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
              ABOUT US
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-syne tracking-tight mb-8">
              We Construct Digital
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-300">
                Realities
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 font-jakarta max-w-3xl mx-auto leading-relaxed">
              Aether Digital is a team of passionate creators, developers, and strategists dedicated to transforming businesses through innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1622676614630-a9109126264a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBjcmVhdGl2ZSUyMGRpZ2l0YWwlMjBhZ2VuY3klMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NzQyOTI5MTV8MA&ixlib=rb-4.1.0&q=85"
              alt="Aether Digital team collaboration"
              className="w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 md:px-12 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-syne mb-8">Our Story</h2>
            <div className="space-y-6 text-slate-400 font-jakarta leading-relaxed text-lg">
              <p>
                Founded in 2018, Aether Digital began with a simple mission: to help businesses thrive in the digital age. What started as a small team of three has grown into a full-service digital agency serving clients worldwide.
              </p>
              <p>
                We blend engineering precision with artistic chaos to create digital experiences that don't just look good—they perform. Our approach is rooted in understanding your business goals and translating them into effective digital strategies.
              </p>
              <p>
                Today, we're proud to have helped over 250 businesses transform their digital presence, from startups to established enterprises. Our team of designers, developers, and marketers work together to deliver results that exceed expectations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-syne tracking-tight mb-6">
              Our Values
            </h2>
            <p className="text-slate-400 font-jakarta text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
                data-testid={`value-${idx}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 flex items-center justify-center mb-6">
                  <value.icon size={28} className="text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold font-syne mb-4">{value.title}</h3>
                <p className="text-slate-400 font-jakarta leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-24 px-6 md:px-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="CEO of Aether Digital"
                className="w-full rounded-3xl border border-white/10"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="uppercase tracking-[0.2em] text-xs font-semibold text-cyan-400 font-jakarta mb-4 block">
                MESSAGE FROM OUR CEO
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-syne mb-6">
                Building the Future Together
              </h2>
              <p className="text-slate-400 font-jakarta leading-relaxed text-lg mb-6">
                "At Aether Digital, we believe that every business deserves a digital presence that truly represents their vision and drives results. Our commitment is to deliver not just services, but partnerships that fuel growth and innovation."
              </p>
              <p className="text-slate-400 font-jakarta leading-relaxed text-lg mb-6">
                "Thank you for trusting us with your digital journey. We're excited to help you achieve extraordinary success."
              </p>
              <div>
                <p className="font-bold font-syne text-xl">Alexandra Bennett</p>
                <p className="text-slate-400 font-jakarta">CEO & Founder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}