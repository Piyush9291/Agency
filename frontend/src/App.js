import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import DevelopmentServices from "./pages/DevelopmentServices";
import MarketingServices from "./pages/MarketingServices";
import BestServices from "./pages/BestServices";
import AllServices from "./pages/AllServices";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SubmitProject from "./pages/SubmitProject";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "@/components/ui/sonner";
import "@/App.css";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="development" element={<DevelopmentServices />} />
              <Route path="marketing" element={<MarketingServices />} />
              <Route path="best-services" element={<BestServices />} />
              <Route path="all-services" element={<AllServices />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="submit-project" element={<SubmitProject />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster position="top-right" />
      </div>
    </HelmetProvider>
  );
}

export default App;