# Kaaftek - Modern Digital Solutions Website

## 🚀 Simple Next.js Project - Frontend Only

### 🎨 Beautiful UI Theme
- **Background:** Purple gradient (from #667eea to #764ba2)
- **Design:** Modern glassmorphism with backdrop blur
- **Colors:** White text on gradient background
- **Effects:** Smooth animations and hover effects

### 📁 Project Structure

```
kaaftek-website/
├── pages/
│   ├── index.js        # Home page
│   ├── services.js     # Services page
│   ├── pricing.js      # Pricing page
│   ├── about.js        # About page
│   ├── contact.js      # Contact page
│   ├── _app.js         # App wrapper
│   └── _document.js    # Document
├── components/
│   ├── Navbar.js       # Navigation
│   └── Footer.js       # Footer
├── styles/
│   └── globals.css     # Global styles
├── package.json
├── next.config.js
└── tailwind.config.js
```

### 🛠️ Installation & Setup

```bash
# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 📚 Pages Included

1. **Home** - Hero section, services, stats, CTA
2. **Services** - All services with icons
3. **Pricing** - 3 pricing plans
4. **About** - Company story and values
5. **Contact** - Contact form (frontend only)

### ✨ Features

- ✅ Modern gradient background
- ✅ Glassmorphism design
- ✅ Smooth animations (Framer Motion)
- ✅ Fully responsive
- ✅ Clean and simple code
- ✅ No backend required
- ✅ Easy to customize

### 🎨 Customization

**Change Background Gradient:**
Edit `styles/globals.css`:
```css
body {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}
```

**Change Brand Colors:**
Edit Tailwind classes in components (e.g., `from-purple-600 to-pink-600`)

### 📦 Build for Production

```bash
npm run build
npm start
```

### 🚀 Deploy

Easiest way: Deploy to **Vercel**

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

**Or deploy to:**
- Netlify
- GitHub Pages
- Any Node.js hosting

### 📝 Notes

- **Frontend Only:** No backend/database
- **Contact Form:** Shows alert (add backend later if needed)
- **Simple & Clean:** Easy to understand and modify
- **Modern UI:** Purple gradient theme with glassmorphism

---

Made with ❤️ by Kaaftek