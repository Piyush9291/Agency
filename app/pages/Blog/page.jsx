"use client"
import { useState } from "react"
import { PenTool, User, Calendar, Heart, ThumbsDown, Trash2 } from "lucide-react"

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
    },
  ])

  const [formData, setFormData] = useState({ title: "", author: "", content: "" })
  const [showForm, setShowForm] = useState(false)
  const [userReactions, setUserReactions] = useState({})

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-4 leading-tight">
            Digital Marketing Blog
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 px-2">
            Share your marketing ideas and experiences
          </p>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold flex items-center gap-2 mx-auto text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <PenTool className="w-4 h-4" />
            {showForm ? "Cancel" : "Write New Blog"}
          </button>
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

        {/* Blog List */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
            Latest Blogs ({blogs.length})
          </h2>

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl border shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-3 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 leading-tight break-words">
                    {blog.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                    <span className="flex items-center gap-1 sm:gap-2">
                      <User className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate">{blog.author}</span>
                    </span>
                    <span className="flex items-center gap-1 sm:gap-2">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      {new Date(blog.date).toLocaleDateString("en-US")}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                    Marketing
                  </span>
                  <button
                    onClick={() => handleDelete(blog.id, blog.title)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-all duration-300 group hover:scale-110"
                    title="Delete Blog"
                  >
                    <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>

              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
                {blog.content}
              </p>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3">
                  {/* Like Button */}
                  <button
                    onClick={() => handleLike(blog.id)}
                    className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm ${
                      userReactions[blog.id] === "liked"
                        ? "bg-red-500 text-white shadow-md transform scale-105"
                        : "text-red-500 border border-red-500 hover:bg-red-50"
                    }`}
                  >
                    <Heart
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${userReactions[blog.id] === "liked" ? "fill-current" : ""}`}
                    />
                    <span className="whitespace-nowrap">Like ({blog.likes})</span>
                  </button>

                  {/* Dislike Button */}
                  <button
                    onClick={() => handleDislike(blog.id)}
                    className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm ${
                      userReactions[blog.id] === "disliked"
                        ? "bg-gray-600 text-white shadow-md transform scale-105"
                        : "text-gray-600 border border-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <ThumbsDown
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${userReactions[blog.id] === "disliked" ? "fill-current" : ""}`}
                    />
                    <span className="whitespace-nowrap">Dislike ({blog.dislikes})</span>
                  </button>
                </div>

                <span className="text-xs sm:text-sm text-gray-500 font-medium self-start sm:self-center">
                  {Math.ceil(blog.content.length / 100)} min read
                </span>
              </div>
            </div>
          ))}

          {blogs.length === 0 && (
            <div className="bg-white rounded-xl border shadow-lg text-center p-6 sm:p-8 text-gray-500">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4">📝</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">No blogs yet</h3>
              <p className="text-sm sm:text-base">Write the first one and share your marketing insights!</p>
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
    </div>
  )
}
