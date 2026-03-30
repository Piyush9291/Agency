import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { Send, CheckCircle } from "lucide-react";
import SEO from "../components/SEO";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function SubmitProject() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project_type: "",
    budget: "",
    description: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Optimization",
    "E-commerce Solution",
    "Custom Software",
    "Other"
  ];

  const budgetRanges = [
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Not sure yet"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API}/projects`, formData);
      setSubmitted(true);
      toast.success("Project submitted successfully! We'll contact you within 24 hours.");
      
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      console.error("Error submitting project:", error);
      toast.error("Failed to submit project. Please try again.");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center px-6" data-testid="submit-project-success">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full p-12 rounded-3xl bg-white border border-gray-200 text-center"
        >
          <div className="w-20 h-20 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} className="text-green-400" />
          </div>
          <h2 className="text-4xl font-bold font-syne mb-4">Project Submitted!</h2>
          <p className="text-gray-600 font-jakarta text-lg mb-8">
            Thank you for submitting your project. Our team will review your requirements and get back to you within 24 hours.
          </p>
          <p className="text-gray-9000 font-jakarta text-sm">
            Redirecting to dashboard...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Submit Your Project - Get Free Quote | Kaaftek"
        description="Start your digital transformation journey. Submit your project details and get a personalized quote within 24 hours. Free consultation available."
        keywords="submit project, get quote, free consultation, project inquiry, start project, digital services quote"
        url="https://agency-hub-167.preview.emergentagent.com/submit-project"
      />
      <div className="bg-gray-50 pt-20" data-testid="submit-project-page">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-indigo-400 font-jakarta mb-4 block">
              START YOUR PROJECT
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-syne tracking-tight mb-8">
              Tell Us About
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500">
                Your Project
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-jakarta leading-relaxed">
              Fill out the form below and our team will get back to you within 24 hours with a personalized quote.
            </p>
          </motion.div>

          {/* Project Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 md:p-12 rounded-3xl bg-white border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-8" data-testid="project-form">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold font-jakarta mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl bg-gray-50/50 border border-gray-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white font-jakarta transition-all duration-200"
                      placeholder="John Doe"
                      data-testid="project-name-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold font-jakarta mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl bg-gray-50/50 border border-gray-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white font-jakarta transition-all duration-200"
                      placeholder="john@example.com"
                      data-testid="project-email-input"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="project_type" className="block text-sm font-semibold font-jakarta mb-2">
                    Project Type *
                  </label>
                  <select
                    id="project_type"
                    name="project_type"
                    required
                    value={formData.project_type}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-gray-50/50 border border-gray-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white font-jakarta transition-all duration-200"
                    data-testid="project-type-select"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type, idx) => (
                      <option key={idx} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold font-jakarta mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-gray-50/50 border border-gray-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white font-jakarta transition-all duration-200"
                    data-testid="project-budget-select"
                  >
                    <option value="">Select your budget range</option>
                    {budgetRanges.map((range, idx) => (
                      <option key={idx} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-semibold font-jakarta mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-6 py-4 rounded-xl bg-gray-50/50 border border-gray-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white font-jakarta resize-none transition-all duration-200"
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                    data-testid="project-description-input"
                  ></textarea>
                </div>

                {/* Info Box */}
                <div className="p-6 rounded-2xl bg-indigo-600/10 border border-indigo-500/20">
                  <p className="text-gray-700 font-jakarta text-sm leading-relaxed">
                    <strong className="text-white">What happens next?</strong>
                    <br />
                    Our team will review your project details and reach out within 24 hours to discuss your requirements, timeline, and provide a detailed quote.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-10 py-5 rounded-full bg-white text-black font-bold font-jakarta text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mx-auto"
                  data-testid="project-submit-button"
                >
                  {loading ? "Submitting..." : "Submit Project"}
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}