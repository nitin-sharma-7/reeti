import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MultiRangeSlider from "./MultiRangeSlider"; // Ensure this component is in the same folder

const filterData = [
  {
    id: 1,
    title: "Product Categories",
    type: "list",
    data: ["Jewellery", "Home Decor", "Textiles"],
  },
  {
    id: 2,
    title: "Product Sub-Categories",
    type: "list",
    data: [
      "Handcrafted Brass Accents",
      "Artisan Animal Figurines",
      "Designer Vases & Decor Pieces",
      "Curated Earrings Collection",
      "Elegant Storage Solutions",
      "Divine Idols",
      "Heritage Bandhani Sarees",
      "Premium Suit Fabrics (Unstitched)",
    ],
  },
  {
    id: 3,
    title: "Craft Type",
    type: "checkbox",
    data: ["Meenakari", "Blue Pottery", "Dhokra Craft"],
  },
  {
    id: 4,
    title: "Price Range",
    type: "price",
  },
  {
    id: 5,
    title: "Color",
    type: "color",
    data: ["#C19A6B", "#1A73E8", "#34A853", "#FABB05", "#202124"],
  },
];

const FilterSidebar = () => {
  const [openSection, setOpenSection] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [price, setPrice] = useState({ min: 0, max: 10000 });

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <aside className="w-full bg-white pr-4">
      {/* Orange Filter Header */}
      <h3 className="text-orange-500 text-[13px] font-semibold tracking-widest uppercase mb-6">
        Filters
      </h3>

      {/* Filter Categories */}
      <div className="flex flex-col border-t border-gray-200">
        {filterData.map((item) => (
          <div key={item.id} className="border-b border-gray-200 py-4">
            {/* Header Button */}
            <button
              onClick={() => toggleSection(item.id)}
              className="w-full flex justify-between items-center text-[12px] font-medium text-gray-800 tracking-wider uppercase hover:text-black transition"
            >
              {item.title}
              <span className="text-gray-400 text-[10px]">
                {openSection === item.id ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>

            {/* Expanded Content Space */}
            {openSection === item.id && (
              <div className="mt-4 pl-1">
                
                {/* 1. LIST TYPE */}
                {item.type === "list" && (
                  <ul className="space-y-2.5 text-[13px] text-gray-600">
                    {item.data.map((d, i) => (
                      <li key={i} className="cursor-pointer hover:text-black transition">
                        {d}
                      </li>
                    ))}
                  </ul>
                )}

                {/* 2. CHECKBOX TYPE */}
                {item.type === "checkbox" && (
                  <div className="space-y-2.5 text-[13px] text-gray-600">
                    {item.data.map((v, i) => (
                      <label key={i} className="flex items-center gap-3 cursor-pointer hover:text-black">
                        <input type="checkbox" className="accent-black w-3.5 h-3.5" />
                        <span>{v}</span>
                      </label>
                    ))}
                  </div>
                )}

                {/* 3. PRICE TYPE */}
                {item.type === "price" && (
                  <div className="pt-2">
                    <p className="text-[13px] mb-4 text-gray-800 font-medium tracking-wide">
                      ₹{price.min} - ₹{price.max}
                    </p>
                    <MultiRangeSlider
                      min={0}
                      max={10000}
                      onChange={({ min, max }) => {
                        setPrice({ min, max });
                      }}
                    />
                  </div>
                )}

                {/* 4. COLOR TYPE */}
                {item.type === "color" && (
                  <div className="flex flex-wrap gap-3 pt-1">
                    {item.data.map((c, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedColor(c)}
                        className={`w-7 h-7 rounded-full border-2 transition-all ${
                          selectedColor === c
                            ? "border-black scale-110"
                            : "border-transparent shadow-sm"
                        }`}
                        style={{ background: c }}
                        title={`Color ${c}`}
                      />
                    ))}
                  </div>
                )}

              </div>
            )}
          </div>
        ))}
      </div>

      {/* Currency Selector */}
      <div className="mt-8 border inline-block border-gray-300 rounded px-2 py-1.5 cursor-pointer">
        <select className="bg-transparent text-sm text-gray-800 outline-none cursor-pointer">
          <option>🇮🇳 INR</option>
          <option>🇺🇸 USD</option>
          <option>🇪🇺 EUR</option>
        </select>
      </div>
    </aside>
  );
};

export default FilterSidebar;