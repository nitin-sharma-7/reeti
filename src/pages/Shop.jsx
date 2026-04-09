import React from "react";
import FilterSidebar from "../components/common/FilterSidebar"; 
import ProductCard from "../components/common/ProductCard"; 
import CommonBanner from "../components/common/CommonBanner";
import ShopColumnDescription from "../components/shop/ShopColumnDescription";
import ContactSection from "../components/common/ContactSection";

export const products = [
  {
    id: 1,
    img: ["/homedecor/WhatsApp Image 2026-03-10 at 5.51.36 PM.jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (1).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (2).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM.jpeg"],
    title: "Classic Handcrafted Vase",
    price: "₹2,499",
    oldPrice: "₹3,999",
  },
  {
    id: 2,
    img: ["/homedecor/WhatsApp Image 2026-03-10 at 5.51.36 PM.jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (1).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (2).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM.jpeg"],
    title: "Elegant Living Decor",
    price: "₹1,899",
    oldPrice: "₹2,599",
  },
  {
    id: 3,
    img: ["/homedecor/WhatsApp Image 2026-03-10 at 5.51.36 PM.jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (1).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (2).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM.jpeg"],
    title: "Artistic Pottery Piece",
    price: "₹3,200",
    oldPrice: "₹4,500",
  },
  {
    id: 4,
    img: ["/homedecor/WhatsApp Image 2026-03-10 at 5.51.36 PM.jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (1).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (2).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM.jpeg"],
    title: "Premium Home Accent",
    price: "₹2,150",
    oldPrice: "₹2,999",
  },
  {
    id: 5, 
    img: ["/homedecor/WhatsApp Image 2026-03-10 at 5.51.36 PM.jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (1).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (2).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM.jpeg"],
    title: "Classic Handcrafted Vase",
    price: "₹2,499",
    oldPrice: "₹3,999",
  },
  {
    id: 6, 
    img: ["/homedecor/WhatsApp Image 2026-03-10 at 5.51.36 PM.jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (1).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (2).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM.jpeg"],
    title: "Elegant Living Decor",
    price: "₹1,899",
    oldPrice: "₹2,599",
  },
];

export const Shop = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <CommonBanner title={"Our Shop"} img={"/images/3.jpg"} />
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        
        {/* Top Header: Count & Sort */}
        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
          <p className="text-sm text-gray-700 tracking-wide font-medium">{products.length} Products</p>
          <div className="relative">
            <select className="border border-gray-200 text-sm px-4 py-2 pr-8 appearance-none outline-none cursor-pointer bg-white min-w-[150px]">
              <option>Sort</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Selling</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar */}
          <div className="hidden lg:block w-[240px] shrink-0">
            <FilterSidebar /> 
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* 👇 Changed lg:grid-cols-4 to lg:grid-cols-3 to make items bigger */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  img={product.img}
                  title={product.title}
                  price={product.price}
                  oldPrice={product.oldPrice}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
      <ShopColumnDescription/>
      <ContactSection/>
    </div>
  );
};