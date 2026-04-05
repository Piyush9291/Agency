import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed w-full bg-white/10 backdrop-blur-xl border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-syne">K</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white font-syne">Kaaftek</span>
              <span className="text-xs text-white/80">Digital Solutions</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-white font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact">
              <button className="px-6 py-3 rounded-full bg-white text-blue-600 font-bold hover:shadow-lg hover:scale-105 transition-all">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-white/90 hover:text-white font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact">
              <button className="w-full px-6 py-3 rounded-full bg-white text-blue-600 font-bold mt-4">
                Get Started
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}