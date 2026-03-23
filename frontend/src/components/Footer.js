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
    <footer className="relative bg-slate-950 border-t border-white/10" data-testid="footer">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950 opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl font-syne">A</span>
              </div>
              <span className="text-2xl font-bold font-syne tracking-tight">
                Aether <span className="text-indigo-400">Digital</span>
              </span>
            </div>
            <p className="text-slate-400 font-jakarta text-sm leading-relaxed mb-6">
              Constructing digital realities with engineering precision and artistic chaos.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center hover:border-indigo-500/50 transition-colors duration-200"
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <social.icon size={18} className="text-slate-400" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-syne font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-slate-400 font-jakarta text-sm hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-syne font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-slate-400 font-jakarta text-sm hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-syne font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-slate-400 font-jakarta text-sm hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-slate-500 font-jakarta text-sm">
              © {new Date().getFullYear()} Aether Digital. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="#"
                className="text-slate-500 font-jakarta text-sm hover:text-indigo-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-slate-500 font-jakarta text-sm hover:text-indigo-400 transition-colors duration-200"
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