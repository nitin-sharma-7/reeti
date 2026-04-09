import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("discountPopupSeen");
    if (!hasSeenPopup) {
      // Show the popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle smooth fade-in animation
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsVisible(true), 50); // slight delay to allow DOM to render before animating
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("discountPopupSeen", "true");
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  if (!isOpen && !isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-500 px-4 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose} // Closes when clicking outside the modal
    >
      {/* Modal Container */}
      <div
        className={`relative w-full max-w-3xl bg-white flex flex-col md:flex-row overflow-hidden shadow-2xl transition-all duration-500 transform ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
      >
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-gray-800 rounded-full transition duration-200"
        >
          <IoMdClose size={20} />
        </button>

        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 h-48 md:h-auto bg-gray-100 relative">
          <img
            src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=800&auto=format&fit=crop"
            alt="Discount Offer"
            className="w-full h-full object-cover"
          />
          {/* Optional Overlay Text on Image */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
             <h2 className="text-white text-4xl md:text-5xl font-serif font-bold tracking-widest drop-shadow-lg">
               10% OFF
             </h2>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-center md:text-left">
          
          <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">
            Welcome Offer
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 leading-tight">
            Unlock 10% Off Your First Order
          </h3>
          
          <p className="text-sm text-gray-500 mb-8 leading-relaxed">
            Join our mailing list and be the first to know about new arrivals, special promotions, and exclusive artisan stories.
          </p>

          {/* Form */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Subscribed with: ${email}`);
              handleClose(); // Close after subscribing
            }} 
            className="flex flex-col gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-black text-white uppercase tracking-widest text-xs font-semibold py-4 hover:bg-gray-800 transition-colors"
            >
              Reveal My Discount
            </button>
          </form>

          <button 
            onClick={handleClose}
            className="mt-6 text-xs text-gray-400 hover:text-gray-800 underline transition-colors"
          >
            No thanks, I'll pay full price
          </button>

        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;