import React from "react";

const BulkPricingBanner = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-[#FCFCFA] border border-[#EFE5D5] rounded-xl p-2 sm:p-3 shadow-sm max-w-7xl mx-auto gap-4 sm:gap-0">
      
      {/* Left Side: Icon & Text */}
      <div className="flex items-center gap-3 sm:gap-4 pl-1 sm:pl-2">
        {/* Box Icon Container */}
        <div className="bg-[#FCE6BA] w-10 h-10 flex items-center justify-center rounded-lg shadow-sm text-xl">
          📦
        </div>
        
        {/* Heading Text */}
        <span className="text-[#987642] font-bold text-sm sm:text-[15px] tracking-wide">
          Looking for Bulk Pricing (30+ Qty)?
        </span>
      </div>

      {/* Right Side: Button */}
      <button 
        className="w-full sm:w-auto bg-[#FCE6BA] hover:bg-[#F3D7A3] transition-colors duration-300 text-[#987642] font-bold text-sm px-5 py-2.5 rounded-lg flex items-center justify-center gap-2"
        onClick={() => alert("Redirect to enquiry form!")}
      >
        Enquire Now <span className="text-lg leading-none">&rarr;</span>
      </button>

    </div>
  );
};

export default BulkPricingBanner;