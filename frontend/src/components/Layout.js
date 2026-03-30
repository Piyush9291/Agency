import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #fdfbf7 0%, #f8f6f3 50%, #faf8f5 100%)' }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;