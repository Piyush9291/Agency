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
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3" data-testid="logo-link">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl font-syne">A</span>
            </div>
            <span className="text-2xl font-bold font-syne tracking-tight text-gray-900">
              Aether <span className="text-indigo-600">Digital</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.name.toLowerCase()}`}
                className={`font-jakarta font-medium transition-colors duration-200 hover:text-indigo-600 ${
                  location.pathname === link.path
                    ? "text-indigo-600"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/submit-project" data-testid="nav-submit-cta">
              <button className="rounded-full px-6 py-3 bg-indigo-600 text-white font-bold font-jakarta hover:bg-indigo-700 hover:shadow-lg transition-all duration-200">
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
                className={`block py-2 font-jakarta font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-indigo-600"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/submit-project" onClick={() => setIsOpen(false)}>
              <button className="w-full rounded-full px-6 py-3 bg-indigo-600 text-white font-bold font-jakarta mt-4 hover:bg-indigo-700 transition-colors duration-200">
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