import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen relative" style={{ 
      background: 'linear-gradient(135deg, #0f0b1f 0%, #1a1333 25%, #0f0b1f 50%, #1e0f3d 75%, #0f0b1f 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;