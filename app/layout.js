import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins, Inter, Playfair_Display } from "next/font/google";

// Modern Heading Font - Playfair Display (Elegant & Professional)
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

// Modern Body Font - Inter (Clean & Readable)
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// Secondary Font - Poppins (Modern & Friendly)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// Alternative Font - Using Inter as fallback (Professional)
const alternativeFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-alternative",
  display: "swap",
});

import Navbar from "./components/Navbar";
import WhatsAppFloating from "./components/WhatsAppFloating";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Itorix Infotech - Web Development & Digital Marketing Agency in Delhi",
  description: "Leading web development and digital marketing agency in Delhi. We offer SEO, Google Ads, social media marketing, website design, and custom software development services.",
  keywords: "web development, digital marketing, SEO, Google Ads, social media marketing, website design, Delhi, India",
  authors: [{ name: "Itorix Infotech" }],
  creator: "Itorix Infotech",
  publisher: "Itorix Infotech",
  robots: "index, follow",
  openGraph: {
    title: "Itorix Infotech - Web Development & Digital Marketing Agency",
    description: "Professional web development and digital marketing services in Delhi. Transform your business with our expert team.",
    url: "https://itorixinfotech.com",
    siteName: "Itorix Infotech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Itorix Infotech - Web Development & Digital Marketing Agency",
    description: "Professional web development and digital marketing services in Delhi.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${poppins.variable} ${alternativeFont.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
