import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { Folder, Clock, DollarSign, Mail, Plus, AlertCircle } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API}/projects`);
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };

  const getStatusColor = (idx) => {
    const statuses = ["indigo", "cyan", "violet", "pink"];
    return statuses[idx % statuses.length];
  };

  return (
    <div className="bg-gray-50 pt-20 min-h-screen" data-testid="dashboard-page">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
              <div>
                <span className="uppercase tracking-[0.2em] text-xs font-semibold text-indigo-400 font-jakarta mb-4 block">
                  YOUR WORKSPACE
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-syne tracking-tight mb-4">
                  Project
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500">
                    {" "}Dashboard
                  </span>
                </h1>
                <p className="text-lg text-gray-600 font-jakarta">
                  Track and manage all your submitted projects in one place.
                </p>
              </div>
              <Link to="/submit-project">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 md:mt-0 rounded-full px-8 py-4 bg-white text-black font-bold font-jakarta flex items-center gap-3 shadow-xl hover:shadow-white/50 transition-all duration-300"
                  data-testid="new-project-button"
                >
                  <Plus size={20} />
                  New Project
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-white border border-gray-200/50"
              data-testid="stats-total-projects"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 font-jakarta text-sm">Total Projects</span>
                <Folder size={20} className="text-indigo-400" />
              </div>
              <p className="text-4xl font-bold font-syne text-gray-900">{projects.length}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-white border border-gray-200/50"
              data-testid="stats-in-progress"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 font-jakarta text-sm">In Progress</span>
                <Clock size={20} className="text-cyan-400" />
              </div>
              <p className="text-4xl font-bold font-syne text-gray-900">{Math.floor(projects.length * 0.6)}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-white border border-gray-200/50"
              data-testid="stats-completed"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 font-jakarta text-sm">Completed</span>
                <DollarSign size={20} className="text-green-400" />
              </div>
              <p className="text-4xl font-bold font-syne text-gray-900">{Math.floor(projects.length * 0.4)}</p>
            </motion.div>
          </div>

          {/* Projects List */}
          {loading ? (
            <div className="flex items-center justify-center py-24">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : projects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-24"
              data-testid="no-projects-message"
            >
              <div className="w-20 h-20 rounded-full bg-white border border-gray-200/50 flex items-center justify-center mx-auto mb-6">
                <AlertCircle size={40} className="text-slate-600" />
              </div>
              <h3 className="text-2xl font-bold font-syne mb-4">No Projects Yet</h3>
              <p className="text-gray-600 font-jakarta mb-8">
                You haven't submitted any projects. Start your first project now!
              </p>
              <Link to="/submit-project">
                <button className="rounded-full px-8 py-4 bg-white text-black font-bold font-jakarta hover:scale-105 transition-transform duration-300">
                  Submit Your First Project
                </button>
              </Link>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="group p-6 md:p-8 rounded-3xl bg-white border border-gray-200/50 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer"
                  data-testid={`project-card-${idx}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`w-12 h-12 rounded-xl bg-${getStatusColor(idx)}-600/20 flex items-center justify-center`}>
                          <Folder size={24} className={`text-${getStatusColor(idx)}-400`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold font-syne group-hover:text-indigo-400 transition-colors duration-300">
                            {project.project_type}
                          </h3>
                          <p className="text-gray-9000 font-jakarta text-sm">
                            Submitted on {formatDate(project.timestamp)}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 font-jakarta leading-relaxed mb-4">
                        {project.description.length > 150
                          ? `${project.description.substring(0, 150)}...`
                          : project.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-9000 font-jakarta">
                          <Mail size={16} />
                          <span>{project.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-9000 font-jakarta">
                          <DollarSign size={16} />
                          <span>{project.budget}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <span className={`px-4 py-2 rounded-full text-xs font-semibold font-jakarta bg-${getStatusColor(idx)}-600/20 text-${getStatusColor(idx)}-300 border border-${getStatusColor(idx)}-500/30`}>
                        {idx % 3 === 0 ? "Under Review" : idx % 3 === 1 ? "In Progress" : "Pending"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}