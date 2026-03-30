import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Services", path: "/best-services" },
      { name: "Pricing", path: "/pricing" },
      { name: "Contact", path: "/contact" },
    ],
    services: [
      { name: "Web Development", path: "/development" },
      { name: "Digital Marketing", path: "/marketing" },
      { name: "Submit Project", path: "/submit-project" },
      { name: "Dashboard", path: "/dashboard" },
    ],
    resources: [
      { name: "Blog", path: "/blog" },
      { name: "Privacy Policy", path: "#" },
      { name: "Terms of Service", path: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Github, url: "#", label: "Github" },
    { icon: Mail, url: "#", label: "Email" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl font-syne">K</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-syne tracking-tight text-gray-900 leading-none">
                  Kaaftek
                </span>
                <span className="text-xs text-indigo-600 font-jakarta font-semibold tracking-wider">DIGITAL SOLUTIONS</span>
              </div>
            </div>
            <p className="text-gray-600 font-jakarta text-sm leading-relaxed mb-6">
              Constructing digital realities with engineering precision and artistic chaos.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 shadow-sm"
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <social.icon size={18} className="text-gray-600" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-syne font-bold text-lg mb-6 text-gray-900">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-gray-600 font-jakarta text-sm hover:text-indigo-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-syne font-bold text-lg mb-6 text-gray-900">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-gray-600 font-jakarta text-sm hover:text-indigo-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-syne font-bold text-lg mb-6 text-gray-900">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-gray-600 font-jakarta text-sm hover:text-indigo-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-500 font-jakarta text-sm">
              © {new Date().getFullYear()} Kaaftek. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="#"
                className="text-gray-500 font-jakarta text-sm hover:text-indigo-600 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-gray-500 font-jakarta text-sm hover:text-indigo-600 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;