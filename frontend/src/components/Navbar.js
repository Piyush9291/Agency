import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/all-services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-2xl bg-black/40 border-b border-purple-500/20 shadow-2xl shadow-purple-500/10"
          : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group" data-testid="logo-link">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-purple-500/50 transform group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-2xl font-syne">K</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-syne tracking-tight text-white leading-none">
                Kaaftek
              </span>
              <span className="text-xs text-purple-400 font-jakarta font-semibold tracking-wider">DIGITAL SOLUTIONS</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.name.toLowerCase()}`}
                className={`font-jakarta font-semibold transition-all duration-200 relative group ${
                  location.pathname === link.path
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transform origin-left transition-transform duration-300 ${
                  location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
            <Link to="/submit-project" data-testid="nav-submit-cta">
              <button className="relative group rounded-full px-7 py-3.5 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold font-jakarta overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">Submit Project</span>
              </button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
            data-testid="mobile-menu-button"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden backdrop-blur-2xl bg-black/60 border-t border-purple-500/20 shadow-2xl"
          data-testid="mobile-menu"
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 font-jakarta font-semibold transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-purple-400"
                    : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/submit-project" onClick={() => setIsOpen(false)}>
              <button className="w-full rounded-full px-6 py-3.5 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold font-jakarta mt-4">
                Submit Project
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;