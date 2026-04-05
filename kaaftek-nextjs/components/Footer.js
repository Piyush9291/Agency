import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-xl font-bold text-slate-900">Kaaftek</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md">
              Transforming businesses through innovative digital solutions. We create exceptional experiences that drive growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-slate-600 hover:text-slate-900 text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-slate-600 hover:text-slate-900 text-sm">Services</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-slate-900 text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 hover:text-slate-900 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-600 hover:text-slate-900 text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-600 text-sm">
            © {currentYear} Kaaftek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}