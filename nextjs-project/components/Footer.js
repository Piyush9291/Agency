import Link from 'next/link'
import { Twitter, Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-xl border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-syne">K</span>
              </div>
              <span className="text-xl font-bold text-white font-syne">Kaaftek</span>
            </div>
            <p className="text-white/70 text-sm mb-6 max-w-md">
              Transforming businesses through innovative digital solutions. We create exceptional experiences that drive growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Github className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-4 font-syne">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white/70 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-white text-sm transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="text-white/70 hover:text-white text-sm transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 font-syne">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-white/70 hover:text-white text-sm transition-colors">Contact</Link></li>
              <li><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Kaaftek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}