import React from 'react'
// import Navbar from './components/Navbar';
import Header from './components/Harder';
import AboutPage from './components/About';
import ServicesSection from './components/ouerservices';
import WhyChooseUs from './components/WhyChooseUs';
import FAQContactForm from './components/Faq';
import Footer from './components/Footer';

const page = () => {
  return (
    <div>
     {/* <Navbar />cd */}
     <Header/>
     <AboutPage/>
     <ServicesSection/>
     <WhyChooseUs/>
     <FAQContactForm/>
     <Footer/>
    </div>
  )
}

export default page