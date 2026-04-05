import Head from 'next/head'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      features: ['5-page website', 'Responsive design', 'Basic SEO', '30 days support']
    },
    {
      name: 'Professional',
      price: '$7,999',
      popular: true,
      features: ['10-page website', 'Advanced SEO', 'E-commerce', 'CMS integration', '90 days support']
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Unlimited pages', 'Custom features', 'Dedicated support', '1 year support', 'Priority dev']
    },
  ]

  return (
    <>
      <Head>
        <title>Pricing - Kaaftek</title>
      </Head>

      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-syne">Simple Pricing</h1>
            <p className="text-xl text-white/80">Choose the perfect plan for your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl backdrop-blur-xl border transition-all ${
                  plan.popular
                    ? 'bg-white/20 border-white/40 scale-105'
                    : 'bg-white/10 border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="px-4 py-1 rounded-full bg-yellow-400 text-purple-900 text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2 font-syne">{plan.name}</h3>
                <div className="text-5xl font-bold text-white mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/90">
                      <Check className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <button className="w-full py-4 rounded-full bg-white text-purple-600 font-bold hover:shadow-xl transition-all">
                    Get Started
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}