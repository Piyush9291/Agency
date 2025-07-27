// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaPhoneAlt, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { FaFacebookF } from "react-icons/fa6";

// export default function Footer() {
//   const quickLinks = [
//     { name: "SEO Services", href: "/services/seo" },
//     { name: "Lead Generation", href: "/services/lead-generation" },
//     { name: "Digital Marketing Services", href: "/services/digital-marketing" },
//     { name: "Website Designing Services", href: "/services/website-designing" },
//     { name: "Social Media Marketing", href: "/services/social-media-marketing" },
//     { name: "Email Marketing", href: "/services/email-marketing" },
//     { name: "Local SEO Services", href: "/services/local-seo" },
//     { name: "Sitemap", href: "/sitemap" },
//     { name: "Career", href: "/career" },
//   ];

//   const weWorkForLinks = [
//     { name: "Real Estate Marketing", href: "/industry/real-estate" },
//     { name: "Healthcare Marketing", href: "/industry/healthcare" },
//     { name: "Education Marketing", href: "/industry/education" },
//     { name: "Manufacturer Marketing", href: "/industry/manufacturer" },
//     { name: "B2B Digital Marketing", href: "/industry/b2b" },
//     { name: "Small Business Marketing", href: "/industry/small-business" },
//     { name: "Startup Digital Marketing", href: "/industry/startup" },
//     { name: "Jewellery Marketing", href: "/industry/jewellery" },
//     { name: "Video Production", href: "/services/video-production" },
//   ];

//   const expertArticles = [
//     {
//       title: "Enhance Your Immigration Consultancy Business with Digital Marketing Expertise",
//       href: "/blog/immigration-consultancy-marketing",
//       imgSrc: "/images/expert1.png",
//     },
//     {
//       title: "Zero Click Searches SEO Strategies",
//       href: "/blog/zero-click-seo",
//       imgSrc: "/images/expert2.png",
//     },
//     {
//       title: "How a Digital Marketing Agency Helps Dental Clinics Grow Online",
//       href: "/blog/dental-clinic-marketing",
//       imgSrc: "/images/expert3.png",
//     },
//     {
//       title: "The Benefits of Digital Marketing for Businesses and How Itorix Can Help",
//       href: "/blog/benefits-of-digital-marketing",
//       imgSrc: "/images/expert4.png",
//     },
//   ];

//   const googleMapsEmbedUrl = "https://www.google.com/maps/embed?..."; // shorten for clarity

//   return (
//     <footer className="bg-[#252b5c] text-white px-4 sm:px-6 lg:px-12 py-10 lg:py-14 text-sm font-poppins">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
//         {/* Contact Us */}
//         <div>
//           <h2 className="text-lg font-semibold mb-5">Contact Us</h2>
//           <iframe
//             className="rounded-lg w-full aspect-video mb-4"
//             src={googleMapsEmbedUrl}
//             allowFullScreen
//             loading="lazy"
//             title="Itorix Infotech Location"
//           ></iframe>
//           <p className="flex items-center gap-2 mb-2">
//             <FaPhoneAlt className="text-[#28a9b3]" />
//             <a href="tel:+919579335001" className="hover:text-blue-400">+91 9579335001</a> / <a href="tel:+919096456355" className="hover:text-blue-400">9096456355</a>
//           </p>
//           <p className="flex items-center gap-2">
//             <MdEmail className="text-[#28a9b3]" />
//             <a href="mailto:info@itorixinfotech.com" className="hover:text-blue-400">info@itorixinfotech.com</a>
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h2 className="text-lg font-semibold mb-5">Quick Links</h2>
//           <ul className="space-y-2 text-white/90">
//             {quickLinks.map((link) => (
//               <li key={link.name}>
//                 <Link href={link.href} className="hover:text-blue-400 block">{link.name}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* We Work For */}
//         <div>
//           <h2 className="text-lg font-semibold mb-5">We Work For</h2>
//           <ul className="space-y-2 text-white/90">
//             {weWorkForLinks.map((link) => (
//               <li key={link.name}>
//                 <Link href={link.href} className="hover:text-blue-400 block">{link.name}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* From Our Experts */}
//         <div>
//           <h2 className="text-lg font-semibold mb-5">From Our Experts</h2>
//           <ul className="space-y-4">
//             {expertArticles.map((article, index) => (
//               <li key={index} className="flex items-start gap-3 group">
//                 <Link href={article.href} className="flex gap-3 hover:text-blue-400 transition-all">
//                   <Image
//                     src={article.imgSrc}
//                     alt={article.title}
//                     width={48}
//                     height={48}
//                     className="w-12 h-12 object-cover rounded-md group-hover:scale-105 transition-transform duration-200"
//                   />
//                   <span>{article.title}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-white/80 gap-4 text-xs sm:text-sm">
//         <p className="text-center order-2 md:order-1">
//           © {new Date().getFullYear()} Itorix Infotech — All Rights Reserved | Crafted by <span className="text-white font-semibold">Itorix Infotech</span>
//         </p>

//         <div className="flex gap-3 order-1 md:order-2">
//           {[
//             { href: "https://www.facebook.com/Itorixinfotech/", icon: <FaFacebookF /> },
//             { href: "https://www.instagram.com/itorixinfotech/", icon: <FaInstagram /> },
//             { href: "https://www.linkedin.com/company/itorixinfotech/", icon: <FaLinkedinIn /> },
//           ].map((social, i) => (
//             <a
//               key={i}
//               href={social.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-8 h-8 sm:w-9 sm:h-9 bg-white text-[#2d3363] hover:bg-blue-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//             >
//               {social.icon}
//             </a>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// }


import Link from "next/link"
import Image from "next/image"
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const googleMapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9499494933536!2d72.50949707465185!3d23.02504177916646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd447%3A0x21c8299ca45c0c9f!2sItorix%20Infotech%20-%20Web%20%26%20Mobile%20App%20Development%20Company!5e0!3m2!1sen!2sin!4v1708939528473!5m2!1sen!2sin"

const quickLinks = [
  { name: "SEO Services", href: "pages/Seo" },
  { name: "Lead Generation", href: "/services" },
  { name: "Digital Marketing Service's", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
]

const weWorkForLinks = [
  { name: "Startups", href: "/startups" },
  { name: "Enterprises", href: "/enterprises" },
  { name: "Agencies", href: "/agencies" },
]

const expertArticles = [
  {
    title: "The Future of Mobile App Development",
    href: "/blog/future-of-mobile-app-development",
    imgSrc: "/images/blog/future-of-mobile-app-development.jpg",
  },
  {
    title: "Top 5 Web Development Trends in 2024",
    href: "/blog/top-5-web-development-trends",
    imgSrc: "/images/blog/top-5-web-development-trends.jpg",
  },
]

const Footer = () => {
  return (
    <footer className="bg-[#252b5c] text-white px-4 sm:px-6 lg:px-12 py-10 lg:py-14 font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
        {/* Contact Us */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5">Contact Us</h2>
          <iframe
            className="rounded-lg w-full aspect-video mb-4"
            src={googleMapsEmbedUrl}
            allowFullScreen
            loading="lazy"
            title="Itorix Infotech Location"
          ></iframe>
          <p className="flex items-center gap-2 mb-2 text-sm sm:text-base">
            <FaPhoneAlt className="text-[#28a9b3] w-4 h-4 sm:w-5 sm:h-5" />
            <a href="tel:+919579335001" className="hover:text-blue-400 transition-colors">
              +91 9579335001
            </a>{" "}
            /{" "}
            <a href="tel:+919096456355" className="hover:text-blue-400 transition-colors">
              9096456355
            </a>
          </p>
          <p className="flex items-center gap-2 text-sm sm:text-base">
            <MdEmail className="text-[#28a9b3] w-4 h-4 sm:w-5 sm:h-5" />
            <a href="mailto:info@itorixinfotech.com" className="hover:text-blue-400 transition-colors">
              info@itorixinfotech.com
            </a>
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5">Quick Links</h2>
          <ul className="space-y-2 text-white/90 text-sm sm:text-base">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-blue-400 block transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* We Work For */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5">We Work For</h2>
          <ul className="space-y-2 text-white/90 text-sm sm:text-base">
            {weWorkForLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-blue-400 block transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* From Our Experts */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5">From Our Experts</h2>
          <ul className="space-y-4">
            {expertArticles.map((article, index) => (
              <li key={index} className="flex items-start gap-3 group">
                <Link
                  href={article.href}
                  className="flex gap-3 hover:text-blue-400 transition-all text-sm sm:text-base"
                >
                  <Image
                    src={article.imgSrc || "/placeholder.svg"}
                    alt={article.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-cover rounded-md group-hover:scale-105 transition-transform duration-200"
                  />
                  <span>{article.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-white/80 gap-4 text-xs sm:text-sm">
        <p className="text-center order-2 md:order-1">
          © {new Date().getFullYear()} Itorix Infotech — All Rights Reserved | Crafted by{" "}
          <span className="text-white font-semibold">Itorix Infotech</span>
        </p>
        <div className="flex gap-3 order-1 md:order-2">
          {[
            { href: "https://www.facebook.com/Itorixinfotech/", icon: <FaFacebookF /> },
            { href: "https://www.instagram.com/itorixinfotech/", icon: <FaInstagram /> },
            { href: "https://www.linkedin.com/company/itorixinfotech/", icon: <FaLinkedinIn /> },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 bg-white text-[#2d3363] hover:bg-blue-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

