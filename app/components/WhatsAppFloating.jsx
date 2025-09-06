"use client";

import { MessageCircle } from "lucide-react";

const WhatsAppFloating = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "919654746691"; // Remove + and spaces
    const message = "Hello! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Mobile WhatsApp Floating Button */}
      <div className="fixed bottom-4 right-4 z-50 lg:hidden">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-2.5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </button>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </div>

      {/* Desktop WhatsApp Floating Button (smaller, less prominent) */}
      <div className="fixed bottom-4 right-4 z-50 hidden lg:block">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </button>
      </div>
    </>
  );
};

export default WhatsAppFloating;
