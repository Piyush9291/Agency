/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // If using App Router
    "./pages/**/*.{js,ts,jsx,tsx}",     // If using Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",// Common component folder
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],       // Default font
        mono: ['Courier New', 'monospace'],    // For code/monospace
      },
    },
  },
  plugins: [],
};
