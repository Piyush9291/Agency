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
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group" data-testid="logo-link">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-white font-bold text-2xl font-syne">K</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-syne tracking-tight text-gray-900 leading-none">
                Kaaftek
              </span>
              <span className="text-xs text-indigo-600 font-jakarta font-semibold tracking-wider">DIGITAL SOLUTIONS</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.name.toLowerCase()}`}
                className={`font-jakarta font-semibold transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/submit-project" data-testid="nav-submit-cta">
              <button className="rounded-full px-7 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold font-jakarta hover:shadow-lg hover:scale-105 transition-all duration-300">
                Submit Project
              </button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-900"
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
          className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
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
                    ? "text-indigo-600"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/submit-project" onClick={() => setIsOpen(false)}>
              <button className="w-full rounded-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold font-jakarta mt-4">
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