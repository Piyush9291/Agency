import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SEO from "../components/SEO";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API}/contact`, formData);
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@aetherdigital.com",
      link: "mailto:hello@aetherdigital.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Office",
      content: "123 Digital Street, San Francisco, CA 94102",
      link: "#"
    },
  ];

  return (
    <>
      <SEO 
        title="Contact Us - Get in Touch | Aether Digital"
        description="Contact Aether Digital for web development, digital marketing, and branding services. Available 24/7. Email: hello@aetherdigital.com | Phone: +1-555-123-4567"
        keywords="contact digital agency, get quote, web development inquiry, marketing consultation, project inquiry"
        url="https://agency-hub-167.preview.emergentagent.com/contact"
      />
      <div className="bg-slate-950 pt-20" data-testid="contact-page">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-indigo-400 font-jakarta mb-4 block">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-syne tracking-tight mb-8">
              Let's Start a
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-300">
                Conversation
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 font-jakarta max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? We'd love to hear about it. Send us a message and we'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900 border border-white/10"
                  data-testid={`contact-info-${idx}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center mb-4">
                    <info.icon size={24} className="text-indigo-400" />
                  </div>
                  <h3 className="font-syne font-bold text-lg mb-2">{info.title}</h3>
                  <a
                    href={info.link}
                    className="text-slate-400 font-jakarta hover:text-indigo-400 transition-colors duration-200"
                  >
                    {info.content}
                  </a>
                </div>
              ))}

              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600/10 to-cyan-600/10 border border-indigo-500/20">
                <h3 className="font-syne font-bold text-lg mb-3">Business Hours</h3>
                <div className="space-y-2 text-slate-400 font-jakarta text-sm">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="p-8 md:p-12 rounded-3xl bg-slate-900 border border-white/10">
                <h2 className="text-3xl font-bold font-syne mb-2">Send Us a Message</h2>
                <p className="text-slate-400 font-jakarta mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold font-jakarta mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-xl bg-slate-950/50 border border-white/10 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white font-jakarta transition-all duration-200"
                        placeholder="John Doe"
                        data-testid="contact-name-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold font-jakarta mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-xl bg-slate-950/50 border border-white/10 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white font-jakarta transition-all duration-200"
                        placeholder="john@example.com"
                        data-testid="contact-email-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold font-jakarta mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl bg-slate-950/50 border border-white/10 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white font-jakarta transition-all duration-200"
                      placeholder="How can we help you?"
                      data-testid="contact-subject-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold font-jakarta mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-6 py-4 rounded-xl bg-slate-950/50 border border-white/10 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white font-jakarta resize-none transition-all duration-200"
                      placeholder="Tell us about your project..."
                      data-testid="contact-message-input"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto px-10 py-5 rounded-full bg-white text-black font-bold font-jakarta text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    data-testid="contact-submit-button"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}