import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Rocket, Code, TrendingUp, Palette, Megaphone, Lightbulb } from "lucide-react";

export default function Blog() {
  const featuredPost = {
    title: "The Future of Web Development in 2026",
    excerpt: "Explore the cutting-edge technologies and trends shaping the future of web development, from AI-powered tools to next-generation frameworks.",
    date: "Jan 20, 2026",
    author: "Alex Bennett",
    category: "Development",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/17485706/pexels-photo-17485706.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  };

  const blogPosts = [
    {
      title: "10 Web Design Trends Dominating 2026",
      excerpt: "From immersive 3D experiences to minimalist interfaces, discover what's trending in web design.",
      date: "Jan 15, 2026",
      author: "Sarah Chen",
      category: "Design",
      icon: Palette,
      readTime: "5 min read"
    },
    {
      title: "How AI is Transforming Digital Marketing",
      excerpt: "Artificial intelligence is revolutionizing how brands connect with their audience. Here's what you need to know.",
      date: "Jan 10, 2026",
      author: "Michael Torres",
      category: "Marketing",
      icon: Megaphone,
      readTime: "6 min read"
    },
    {
      title: "Building Scalable Web Applications: Best Practices",
      excerpt: "Learn the architecture patterns and strategies for creating applications that grow with your business.",
      date: "Jan 5, 2026",
      author: "Emma Rodriguez",
      category: "Development",
      icon: Code,
      readTime: "10 min read"
    },
    {
      title: "SEO in 2026: What's Changed and What Matters",
      excerpt: "Search algorithms evolve constantly. Stay ahead with these essential SEO strategies.",
      date: "Dec 28, 2025",
      author: "David Kim",
      category: "Marketing",
      icon: TrendingUp,
      readTime: "7 min read"
    },
    {
      title: "The Power of User Experience in Driving Conversions",
      excerpt: "Great UX isn't just about aesthetics—it's about creating experiences that convert visitors into customers.",
      date: "Dec 20, 2025",
      author: "Lisa Anderson",
      category: "Design",
      icon: Lightbulb,
      readTime: "5 min read"
    },
    {
      title: "Starting Your First Tech Startup: A Complete Guide",
      excerpt: "From ideation to launch, here's everything you need to know about building a successful tech startup.",
      date: "Dec 15, 2025",
      author: "James Wilson",
      category: "Business",
      icon: Rocket,
      readTime: "12 min read"
    },
  ];

  const categories = ["All", "Development", "Design", "Marketing", "Business"];

  return (
    <div className="bg-slate-950 pt-20" data-testid="blog-page">
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
              OUR BLOG
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-syne tracking-tight mb-8">
              Insights & Stories
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-300">
                From Our Experts
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 font-jakarta max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends, tips, and insights in web development, design, and digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group cursor-pointer"
            data-testid="featured-post"
          >
            <div className="grid md:grid-cols-2 gap-8 rounded-3xl overflow-hidden bg-slate-900 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <div className="h-80 md:h-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="px-4 py-1 rounded-full bg-indigo-600/20 text-indigo-300 font-jakarta text-xs font-semibold uppercase tracking-wide inline-block w-fit mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-syne mb-4 group-hover:text-indigo-400 transition-colors duration-300">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-400 font-jakarta leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500 font-jakarta mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <button className="flex items-center gap-2 text-indigo-400 font-jakarta font-semibold group-hover:gap-3 transition-all duration-300">
                  Read More <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-3 rounded-full font-jakarta font-semibold transition-all duration-300 ${
                  idx === 0
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-900 text-slate-400 border border-white/10 hover:border-indigo-500/50 hover:text-white"
                }`}
                data-testid={`category-${idx}`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                data-testid={`blog-post-${idx}`}
              >
                <div className="rounded-2xl overflow-hidden bg-slate-900 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 flex items-center justify-center">
                    <post.icon size={48} className="text-indigo-400 opacity-50" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-jakarta font-semibold text-cyan-400 uppercase tracking-wide mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold font-syne mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 font-jakarta text-sm mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500 font-jakarta mb-4">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-xs font-jakarta">{post.date}</span>
                      <ArrowRight size={16} className="text-indigo-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 md:px-12 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-syne tracking-tight mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-slate-400 font-jakarta text-lg mb-8">
              Get the latest insights delivered straight to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 rounded-full bg-slate-950 border border-white/10 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white font-jakarta"
                data-testid="newsletter-email-input"
              />
              <button
                className="px-8 py-4 rounded-full bg-white text-black font-bold font-jakarta hover:scale-105 transition-transform duration-300 whitespace-nowrap"
                data-testid="newsletter-subscribe-button"
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}