import { useState } from "react";
import MultiRangeSlider from "./MultiRangeSlider";

const filterData = [
  {
    id: 0,
    title: "Product Categories",
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
    id: 1,
    title: "Craft Type",
    type: "checkbox",
    data: ["Meenakari", "Blue Pottery", "Dhokra Craft"],
  },
  {
    id: 2,
    title: "Price Range",
    type: "price",
  },
  {
    id: 3,
    title: "Color",
    type: "color",
    data: ["#C19A6B", "#1A73E8", "#34A853", "#FABB05", "#202124"],
  },
];

const FilterSidebar = () => {
  const [open, setOpen] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);

  // ✅ PRICE STATE (THIS WAS MISSING)
  const [price, setPrice] = useState({
    min: 0,
    max: 10000,
  });

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <aside className="w-[280px] bg-[#f9f9f9] p-6 space-y-4 rounded-xl shadow-sm">

      {filterData.map((item) => (
        <div key={item.id} className="border-b pb-4">

          {/* Header */}
          <button
            onClick={() => toggle(item.id)}
            className="w-full flex justify-between items-center text-[15px] font-semibold text-gray-800"
          >
            {item.title}
            <span className="text-lg">{open === item.id ? "−" : "+"}</span>
          </button>

          {/* Content */}
          {open === item.id && (
            <div className="mt-4">

              {/* CATEGORY */}
              {item.type === "list" && (
                <ul className="space-y-2 text-sm text-gray-600">
                  {item.data.map((d, i) => (
                    <li key={i} className="cursor-pointer hover:text-black">
                      {d}
                    </li>
                  ))}
                </ul>
              )}

              {/* CRAFT */}
              {item.type === "checkbox" && (
                <div className="space-y-2 text-sm text-gray-700">
                  {item.data.map((v, i) => (
                    <label key={i} className="flex gap-2 items-center cursor-pointer">
                      <input type="checkbox" className="accent-black" />
                      {v}
                    </label>
                  ))}
                </div>
              )}

              {item.type === "price" && (
                <>
                  <p className="text-sm mb-3 text-gray-600">
                    ₹{price.min} - ₹{price.max}
                  </p>

                  <MultiRangeSlider
                    min={0}
                    max={10000}
                    onChange={({ min, max }) => {
                      setPrice({ min, max });
                    }}
                  />
                </>
              )}

              {/* COLOR */}
              {item.type === "color" && (
                <>
                  <p className="text-sm mb-3 text-gray-600">
                    Select Color
                  </p>
                  <div className="flex gap-3">
                    {item.data.map((c, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedColor(c)}
                        className={`w-8 h-8 rounded-full border-2 ${
                          selectedColor === c
                            ? "border-black scale-110"
                            : "border-transparent"
                        }`}
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                </>
              )}

            </div>
          )}
        </div>
      ))}

    </aside>
  );
};

export default FilterSidebar;