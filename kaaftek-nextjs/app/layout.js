import '../styles/globals.css'

export const metadata = {
  title: 'Kaaftek - Premium Digital Solutions',
  description: 'Transform your business with cutting-edge web development, digital marketing, and design services.',
  keywords: 'web development, digital marketing, UI/UX design, software development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}