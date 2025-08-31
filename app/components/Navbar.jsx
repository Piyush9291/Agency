"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu, X, Layers, FileText, Settings,
  MonitorSmartphone, ShoppingBag, ShoppingCart, ChevronDown,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/pages/About" },
  { name: "Development", type: "dropdown" },
  { name: "Marketing", type: "dropdown" },
  { name: "Blog", href: "/pages/Blog" },
  { name: "Contact", href: "/pages/Contact" },
   { name: "Pages", href: "/pages/Contact" },
      { name: "Jatin", href: "/pages/Contact" },
];

const developmentItems = [
  { icon: <Layers className="text-cyan-500 w-5 h-5" />, text: "Website Designing", href: "/pages/WebsiteDesigning" },
  { icon: <FileText className="text-cyan-500 w-5 h-5" />, text: "Website Maintenance", href: "/pages/WebsiteMaintenance" },
  { icon: <Settings className="text-cyan-500 w-5 h-5" />, text: "Custom Software", href: "/pages/CustomSoftware" },
  { icon: <MonitorSmartphone className="text-cyan-500 w-5 h-5" />, text: "Website Development", href: "/pages/WebsiteDevelopment" },
  { icon: <ShoppingBag className="text-cyan-500 w-5 h-5" />, text: "Shopify Development", href: "/pages/Shopify" },
  { icon: <ShoppingCart className="text-cyan-500 w-5 h-5" />, text: "E-commerce Website", href: "/pages/Ecommerce" },
]

const marketingItems = {
  SEO: ["Local SEO", "International SEO", "Location Wise SEO", "Country Wise SEO", "State Wise SEO", "City Wise SEO", "E-Commerce SEO"],
  Social: ["Facebook Marketing", "Instagram Marketing", "LinkedIn Marketing", "PPC Marketing", "Lead Generation", "Email Marketing"],
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white z-50 border-b shadow-sm font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0">
            <Image src="/itorix-logo.png" alt="Itorix Infotech" width={200} height={40} className="h-8 w-auto" priority />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center flex-1 justify-center space-x-8">
            {navItems.map((item) =>
              item.type === "dropdown" ? (
                <div key={item.name} className="relative group">
                  <button className="flex items-center text-sm font-semibold text-gray-800 hover:text-blue-600 transition">
                    {item.name}
                    <ChevronDown className="w-3 h-3 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                  </button>

                  {/* Dropdown Content */}
                  <div className="absolute top-full left-0 mt-2 bg-white border rounded-xl shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-[540px]">
                    <div className="p-6 grid grid-cols-2 gap-4">
                      {item.name === "Development" &&
                        developmentItems.map(({ icon, text, href }) => (
                          <Link key={text} href={href} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                            {icon}
                            <span className="text-[15px] font-semibold text-slate-400 hover:text-blue-600">{text}</span>
                          </Link>
                        ))}

                      {item.name === "Marketing" && (
                        <>
                          <div>
                            <h4 className="text-lg font-semibold mb-4">SEO Services</h4>
                            {marketingItems.SEO.map((seo) => (
                              <Link key={seo} href={`/marketing/seo/${seo.toLowerCase().replace(/\s+/g, "-")}`} className="block px-3 py-1 text-sm font-semibold text-slate-400 hover:text-blue-600">
                                {seo}
                              </Link>
                            ))}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-4">Social Media</h4>
                            {marketingItems.Social.map((social) => (
                              <Link key={social} href={`/marketing/social/${social.toLowerCase().replace(/\s+/g, "-")}`} className="block px-3 py-1 text-sm font-semibold text-slate-400 hover:text-blue-600">
                                {social}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.name} href={item.href} className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition">
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/pages/Quote">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:from-purple-600 hover:to-blue-600 transition shadow-md">
                Get A Quote
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-x-0 top-16 bg-white z-40 transition-all duration-300 lg:hidden h-[calc(100vh-64px)] overflow-y-auto ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}`}>
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) =>
            item.type === "dropdown" ? (
              <details key={item.name} className="group">
                <summary className="flex justify-between items-center cursor-pointer px-4 py-3 font-semibold text-gray-800 hover:text-blue-600">
                  {item.name}
                  <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="ml-4 mt-2 space-y-1">
                  {item.name === "Development" &&
                    developmentItems.map(({ icon, text, href }) => (
                      <Link key={text} href={href} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 text-sm font-semibold text-slate-400 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                        {icon}
                        {text}
                      </Link>
                    ))}

                  {item.name === "Marketing" && (
                    <>
                      <h4 className="text-sm font-semibold mt-3">SEO Services</h4>
                      {marketingItems.SEO.map((seo) => (
                        <Link key={seo} href={`/marketing/seo/${seo.toLowerCase().replace(/\s+/g, "-")}`} className="block px-3 py-1 text-sm font-semibold text-slate-400 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                          {seo}
                        </Link>
                      ))}
                      <h4 className="text-sm font-semibold mt-3">Social Media</h4>
                      {marketingItems.Social.map((social) => (
                        <Link key={social} href={`/marketing/social/${social.toLowerCase().replace(/\s+/g, "-")}`} className="block px-3 py-1 text-sm font-semibold text-slate-400 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                          {social}
                        </Link>
                      ))}
                    </>
                  )}
                </div>
              </details>
            ) : (
              <Link key={item.name} href={item.href} className="block px-4 py-3 text-base font-semibold text-gray-800 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </Link>
            )
          )}

          <div className="px-4 pt-4 border-t mt-4">
            <Link href="/pages/Quote">
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-full font-semibold text-base hover:from-purple-600 hover:to-blue-600 transition">
                Get A Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
