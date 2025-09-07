"use client"
import { useState, useEffect } from "react"
import { PenTool, User, Calendar, Heart, ThumbsDown, Trash2, Search, Filter } from "lucide-react"

export default function BlogPage() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "How to Start Digital Marketing",
      author: "Marketing Expert",
      content:
        "Digital marketing is essential in today's world. Through social media, SEO, and content marketing, you can grow your business effectively and reach your target audience.",
      date: "2024-01-15",
      likes: 12,
      dislikes: 2,
      category: "Digital Marketing",
      readTime: "3",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Social Media Marketing Tips",
      author: "Social Media Pro",
      content:
        "Building your presence on Facebook, Instagram, and LinkedIn is very important. Regular posting and engagement help you increase your followers and brand awareness.",
      date: "2024-01-10",
      likes: 8,
      dislikes: 1,
      category: "Social Media",
      readTime: "2",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    },
  ])

  const [formData, setFormData] = useState({ title: "", author: "", content: "" })
  const [showForm, setShowForm] = useState(false)
  const [userReactions, setUserReactions] = useState({})
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isMounted, setIsMounted] = useState(false)

  const categories = ["All", "Digital Marketing", "Social Media", "SEO", "PPC", "Web Development"]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title || !formData.author || !formData.content) {
      alert("All fields are required!")
      return
    }

    const newBlog = {
      id: Date.now(),
      title: formData.title,
      author: formData.author,
      content: formData.content,
      date: new Date().toISOString().split("T")[0],
      likes: 0,
      dislikes: 0,
    }

    setBlogs([newBlog, ...blogs])
    setFormData({ title: "", author: "", content: "" })
    setShowForm(false)
  }

  const handleLike = (id) => {
    const currentReaction = userReactions[id]
    setBlogs(
      blogs.map((blog) => {
        if (blog.id === id) {
          if (currentReaction === "liked") {
            return { ...blog, likes: blog.likes - 1 }
          } else if (currentReaction === "disliked") {
            return { ...blog, likes: blog.likes + 1, dislikes: blog.dislikes - 1 }
          } else {
            return { ...blog, likes: blog.likes + 1 }
          }
        }
        return blog
      }),
    )

    setUserReactions((prev) => ({
      ...prev,
      [id]: currentReaction === "liked" ? null : "liked",
    }))
  }

  const handleDislike = (id) => {
    const currentReaction = userReactions[id]
    setBlogs(
      blogs.map((blog) => {
        if (blog.id === id) {
          if (currentReaction === "disliked") {
            return { ...blog, dislikes: blog.dislikes - 1 }
          } else if (currentReaction === "liked") {
            return { ...blog, likes: blog.likes - 1, dislikes: blog.dislikes + 1 }
          } else {
            return { ...blog, dislikes: blog.dislikes + 1 }
          }
        }
        return blog
      }),
    )

    setUserReactions((prev) => ({
      ...prev,
      [id]: currentReaction === "disliked" ? null : "disliked",
    }))
  }

  const handleDelete = (id, title) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete the blog "${title}"?`)
    if (confirmDelete) {
      setBlogs(blogs.filter((blog) => blog.id !== id))
      setUserReactions((prev) => {
        const newReactions = { ...prev }
        delete newReactions[id]
        return newReactions
      })
    }
  }

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-8">
            <div className="h-12 w-96 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 w-64 bg-gray-200 rounded mx-auto mb-6 animate-pulse"></div>
            <div className="h-10 w-32 bg-gray-200 rounded mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 font-body">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 leading-tight mb-4">
            Digital Marketing <br />
            <span className="bg-gradient-to-r from-[#199db2] via-[#2D3363] to-[#d2276e] bg-clip-text text-transparent">
              Blog & Insights
            </span>
          </h1>
          <p className="text-lg sm:text-xl font-body text-gray-600 max-w-3xl mx-auto mb-8">
            Stay updated with the latest trends, tips, and strategies in digital marketing
          </p>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-purple-600 via-purple-700 to-cyan-600 text-white px-6 py-3 rounded-full text-base font-secondary font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 ease-out flex items-center gap-2 mx-auto"
          >
            <PenTool className="w-5 h-5" />
            {showForm ? "Cancel" : "Write New Blog"}
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-400 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Form */}
        {showForm && (
          <div className="bg-white rounded-xl border shadow-lg mb-6 sm:mb-8 overflow-hidden">
            <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">Write New Blog Post</h2>
              <p className="text-xs sm:text-sm text-blue-100">Write your blog and submit it</p>
            </div>
            <div className="p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Blog Title
                  </label>
                  <input
                    id="title"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all duration-300"
                    placeholder="Enter your blog title..."
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="author" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Author Name
                  </label>
                  <input
                    id="author"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all duration-300"
                    placeholder="Your name..."
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="content" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Blog Content
                  </label>
                  <textarea
                    id="content"
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base resize-none transition-all duration-300"
                    placeholder="Write your blog content here..."
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] shadow-lg"
                >
                  Submit Blog
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-8 text-center">
            Latest Blogs ({filteredBlogs.length})
          </h2>

          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-400 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-purple-200/20 backdrop-blur-sm relative overflow-hidden h-full flex flex-col group"
                >
                  {/* Decorative Background */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Blog Image */}
                    <div className="mb-6 rounded-2xl overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white leading-tight mb-4 line-clamp-2">
                      {blog.title}
                    </h3>

                    {/* Content Preview */}
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3 flex-1">
                      {blog.content}
                    </p>

                    {/* Author and Date */}
                    <div className="flex items-center gap-3 mb-4 text-white/80 text-sm">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                      <span>•</span>
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blog.date).toLocaleDateString("en-US")}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        {/* Like Button */}
                        <button
                          onClick={() => handleLike(blog.id)}
                          className={`flex items-center gap-2 px-3 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                            userReactions[blog.id] === "liked"
                              ? "bg-white/30 text-white shadow-md"
                              : "text-white/80 hover:bg-white/20"
                          }`}
                        >
                          <Heart
                            className={`w-4 h-4 ${userReactions[blog.id] === "liked" ? "fill-current" : ""}`}
                          />
                          <span>{blog.likes}</span>
                        </button>

                        {/* Dislike Button */}
                        <button
                          onClick={() => handleDislike(blog.id)}
                          className={`flex items-center gap-2 px-3 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                            userReactions[blog.id] === "disliked"
                              ? "bg-white/30 text-white shadow-md"
                              : "text-white/80 hover:bg-white/20"
                          }`}
                        >
                          <ThumbsDown
                            className={`w-4 h-4 ${userReactions[blog.id] === "disliked" ? "fill-current" : ""}`}
                          />
                          <span>{blog.dislikes}</span>
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-white/60 text-sm">{blog.readTime} min read</span>
                        <button
                          onClick={() => handleDelete(blog.id, blog.title)}
                          className="p-2 text-white/60 hover:text-white hover:bg-white/20 rounded-full transition-all duration-300"
                          title="Delete Blog"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg text-center p-12 text-gray-500">
              <div className="text-6xl mb-6">📝</div>
              <h3 className="text-2xl font-semibold mb-4">No blogs found</h3>
              <p className="text-lg">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 sm:mt-12 py-6 sm:py-8 border-t border-gray-200">
          <p className="text-gray-600 text-xs sm:text-sm md:text-base px-4">
            © 2024 Digital Marketing Blog. Made with ❤️ for marketers.
          </p>
        </div>
      </div>

      {/* Fonts and Styles */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;600;700&display=swap");
        .font-poppins {
          font-family: "Poppins", sans-serif;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
