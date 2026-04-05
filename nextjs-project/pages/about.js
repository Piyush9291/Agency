import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Kaaftek</title>
      </Head>

      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-syne">About Kaaftek</h1>
            <p className="text-xl text-white/80">
              Transforming businesses through innovative digital solutions
            </p>
          </div>

          <div className="space-y-12">
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4 font-syne">Our Story</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Founded in 2018, Kaaftek began with a simple mission: to help businesses thrive in the digital age. 
                What started as a small team has grown into a full-service digital agency serving clients worldwide.
              </p>
              <p className="text-white/80 leading-relaxed">
                We blend engineering precision with creative innovation to create digital experiences that don't just 
                look good—they perform. Our approach is rooted in understanding your business goals and translating 
                them into effective digital strategies.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4 font-syne">Our Values</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Quality First</h3>
                  <p className="text-white/80">We never compromise on quality. Every project is crafted with precision and attention to detail.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Client Focused</h3>
                  <p className="text-white/80">Your success is our success. We work closely with you to understand and exceed your goals.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                  <p className="text-white/80">We stay ahead of the curve, using the latest technologies and methodologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}