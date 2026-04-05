import Head from 'next/head'
import { Code, Globe, Smartphone, Database, Layout, Settings } from 'lucide-react'

export default function Services() {
  const services = [
    { title: 'Website Development', desc: 'Custom websites built with modern technologies', icon: Globe },
    { title: 'Mobile Apps', desc: 'Native and cross-platform mobile applications', icon: Smartphone },
    { title: 'Web Applications', desc: 'Scalable, high-performance web apps', icon: Code },
    { title: 'E-commerce Solutions', desc: 'Complete online store solutions', icon: Layout },
    { title: 'API Development', desc: 'RESTful APIs and backend systems', icon: Database },
    { title: 'Maintenance & Support', desc: '24/7 technical support and updates', icon: Settings },
  ]

  return (
    <>
      <Head>
        <title>Our Services - Kaaftek</title>
      </Head>

      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-syne">Our Services</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business thrive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-syne">{service.title}</h3>
                <p className="text-white/80">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}