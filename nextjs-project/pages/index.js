import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Code, TrendingUp, Zap, Star, CheckCircle } from 'lucide-react'

export default function Home() {
  const services = [
    { title: 'Web Development', desc: 'Modern, scalable websites & applications', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { title: 'Digital Marketing', desc: 'Data-driven growth strategies', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
    { title: 'UI/UX Design', desc: 'Beautiful, user-friendly interfaces', icon: Zap, color: 'from-orange-500 to-red-500' },
  ]

  return (
    <>
      <Head>
        <title>Kaaftek - Modern Digital Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge digital solutions" />
      </Head>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
                <Star className="w-4 h-4 text-yellow-300" fill="currentColor" />
                <span className="text-white text-sm font-semibold">Trusted by 250+ Companies</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-syne leading-tight">
                Build Amazing
                <br />
                <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
                  Digital Products
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
                We create exceptional digital experiences that drive growth and transform businesses
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 rounded-full bg-white text-purple-600 font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 justify-center">
                    Start Your Project
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all">
                    View Services
                  </button>
                </Link>
              </div>

              <div className="mt-12 flex items-center justify-center gap-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-syne">Our Services</h2>
              <p className="text-xl text-white/80">Comprehensive solutions for your digital needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all group cursor-pointer"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-syne">{service.title}</h3>
                  <p className="text-white/80">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Projects' },
                { number: '250+', label: 'Clients' },
                { number: '98%', label: 'Success Rate' },
                { number: '24/7', label: 'Support' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-5xl font-bold text-white mb-2 font-syne">{stat.number}</div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-syne">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Let's bring your vision to life
              </p>
              <Link href="/contact">
                <button className="px-10 py-5 rounded-full bg-white text-purple-600 font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}