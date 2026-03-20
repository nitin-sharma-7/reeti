import CommonBanner from "../components/common/CommonBanner";
import ContactSection from "../components/common/ContactSection";
import FilterSidebar from "../components/common/FilterSidebar";
import ProductCard from "../components/common/ProductCard";
import ShopColumnDescription from "../components/shop/ShopColumnDescription";

export const products = [
  {
    id: 1,
    img: ["/homedecor/WhatsApp Image 2026-03-10 at 5.51.36 PM.jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (1).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (2).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM.jpeg"],
    title: "Classic Handcrafted Vase",
    price: "₹2,499",
    oldPrice: "₹3,999",
    rating: 4.8,
  },
  {
    id: 2,
     img: ["/homedecor/WhatsApp Image 2026-03-10 at 5.51.36 PM.jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (1).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (2).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM.jpeg"],
    title: "Elegant Living Decor",
    price: "₹1,899",
    oldPrice: "₹2,599", 
    rating: 4.5,
  },
  {
    id: 3,
    img: ["/homedecor/WhatsApp Image 2026-03-10 at 5.51.36 PM.jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (1).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (2).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM.jpeg"],
    title: "Artistic Pottery Piece",
    price: "₹3,200",
    oldPrice: "₹4,500",
    rating: 4.9,
  },
  {
    id: 4,
   img: ["/homedecor/WhatsApp Image 2026-03-10 at 5.51.36 PM.jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (1).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (2).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM.jpeg"],
    title: "Premium Home Accent",
    price: "₹2,150",
    oldPrice: "₹2,999",
    rating: 4.6,
  },
  {
    id: 1,
    img: ["/homedecor/WhatsApp Image 2026-03-10 at 5.51.36 PM.jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (1).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (2).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM.jpeg"],
    title: "Classic Handcrafted Vase",
    price: "₹2,499",
    oldPrice: "₹3,999",
    rating: 4.8,
  },
  {
    id: 2,
    img: ["/homedecor/WhatsApp Image 2026-03-10 at 5.51.36 PM.jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (1).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM (2).jpeg","/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM.jpeg"],
    title: "Elegant Living Decor",
    price: "₹1,899",
    oldPrice: "₹2,599",
    rating: 4.5,
  },
  
  
];

export const Shop = () => {
  return (
    <div className="bg-white">
      <CommonBanner title={"Our Shop"} img={"/images/3.jpg"} />
      
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <div className="w-full md:w-auto shrink-0">
          <FilterSidebar />
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                images={product.img}
                title={product.title}
                price={product.price}
                oldPrice={product.oldPrice}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <ShopColumnDescription />
      </div>
      
      <ContactSection />
    </div>
  );
};
