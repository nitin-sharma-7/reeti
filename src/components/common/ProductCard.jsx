import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; 

const ProductCard = ({ img = [], title, price, oldPrice, link = "#" }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Handle Left Arrow Click
  const prevImage = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? img.length - 1 : prev - 1));
  };

  // Handle Right Arrow Click
  const nextImage = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === img.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group flex flex-col gap-3 relative cursor-pointer h-full">
      
      {/* --- IMAGE CONTAINER --- */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        
        <Link to={link} className="block w-full h-full">
          {/* Active Image */}
          <img
            src={img[currentImgIndex]}
            alt={title}
            className="w-full h-full object-cover transition-all duration-300"
          />
        </Link>

        {/* LEFT / RIGHT ARROWS */}
        {img.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white text-black p-2 rounded-full shadow-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white text-black p-2 rounded-full shadow-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"
            >
              <FiChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      {/* --- DETAILS & BUTTONS CONTAINER --- */}
      <div className="flex flex-col px-1 pt-1 flex-1">

        {/* Title */}
        <h6 className="text-[15px] text-gray-800 leading-tight mb-1.5 truncate">
          <Link to={link} className="hover:underline">
            {title}
          </Link>
        </h6>

        {/* Price & Old Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[15px] text-gray-900 font-medium">
            {price}
          </span>
          {oldPrice && (
            <span className="text-[14px] text-gray-400 line-through">
              {oldPrice}
            </span>
          )}
        </div>

        {/* --- HOVER BUTTONS (BELOW TEXT) --- */}
        {/* They take up space but remain invisible until hover */}
        <div className="mt-auto pt-2 grid grid-cols-2 gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <button className="border border-black text-black text-[12px] uppercase tracking-wider font-medium py-2 hover:bg-black hover:text-white transition duration-300 text-center">
             Quick View
           </button>
           <button className="bg-black border border-black text-white text-[12px] uppercase tracking-wider font-medium py-2 hover:bg-gray-800 hover:border-gray-800 transition duration-300 text-center">
             Add to Cart
           </button>
        </div>
        
      </div>

    </div>
  );
};

export default ProductCard;