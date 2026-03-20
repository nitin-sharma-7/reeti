import { useState } from "react";
import CommonBanner from "../components/common/CommonBanner";
import ShopColumnDescription from "../components/shop/ShopColumnDescription";
import ContactSection from "../components/common/ContactSection";

/* =========================
   SAMPLE DATA
========================= */
const initialWishlist = [
  {
    id: 1,
    title: "Wooden Elephant",
    price: 999,
    image: "/homedecor/WhatsApp Image 2026-03-10 at 5.51.36 PM.jpeg",
    qty: 1,
  },
  {
    id: 2,
    title: "Decor Vase",
    price: 1499,
    image: "/homedecor/WhatsApp Image 2026-03-10 at 5.51.37 PM.jpeg",
    qty: 1,
  },
];

/* =========================
   WISHLIST PAGE
========================= */
export const Wishlist = () => {
  const [wishlist, setWishlist] = useState(initialWishlist);

  /* =========================
     HANDLERS
  ========================= */

  const increaseQty = (id) => {
    setWishlist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setWishlist((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setWishlist((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const addToCart = (item) => {
    console.log("Add to cart:", item);
    // 👉 later connect with cart system
  };

  return (
    <div className="">
      <CommonBanner  title="Wishlist" />
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* HEADER */}
        <h2 className="text-2xl font-semibold text-[var(--color-brand)] mb-8">
          Wishlist
        </h2>

        {wishlist.length === 0 && (
          <p className="text-gray-500">Your wishlist is empty</p>
        )}

        <div className="space-y-4">

          {wishlist.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-gray-50 p-4 rounded-xl shadow-sm items-center"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                className="w-24 h-24 object-cover rounded-lg"
              />

              {/* INFO */}
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  ₹{item.price}
                </p>

                {/* QUANTITY */}
                <div className="flex items-center gap-2 mt-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    −
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col gap-2">

                <button
                  onClick={() => addToCart(item)}
                  className="bg-[var(--color-brand)] text-white px-4 py-2 rounded-md text-sm hover:opacity-90 transition"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-gray-400 hover:text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
      <ShopColumnDescription/>
      <ContactSection/>
    </div>
  );
};

