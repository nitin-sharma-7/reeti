import { useState } from "react";
import CommonBanner from "../components/common/CommonBanner";
import ShopColumnDescription from "../components/shop/ShopColumnDescription";
import { Link } from "react-router-dom";

/* =========================
   SAMPLE CART DATA
========================= */
const initialCart = [
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
   CART PAGE
========================= */
const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  /* =========================
     HANDLERS
  ========================= */

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  /* =========================
     CALCULATIONS
  ========================= */

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const shipping = subtotal > 2000 ? 0 : 100;
  const total = subtotal + shipping;

  return (
    <div className="">
      <CommonBanner  title="Cart" />
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* HEADER */}
        <h2 className="text-2xl font-semibold mb-8 text-[var(--color-brand)]">
          Shopping Cart
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* LEFT - CART ITEMS */}
          <div className="md:col-span-2 space-y-4">

            {cart.length === 0 && (
              <p className="text-gray-500">Your cart is empty</p>
            )}

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-gray-50 p-4 rounded-xl shadow-sm"
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                {/* INFO */}
                <div className="flex-1">

                  <div className="flex justify-between">
                    <h3 className="font-medium text-gray-800">
                      {item.title}
                    </h3>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      ✕
                    </button>
                  </div>

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

                {/* TOTAL */}
                <div className="font-semibold text-gray-800">
                  ₹{item.price * item.qty}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT - SUMMARY */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm h-fit">

            <h3 className="font-semibold text-lg mb-4">
              Order Summary
            </h3>

            <div className="space-y-3 text-sm">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? "Free" : `₹${shipping}`}
                </span>
              </div>

              <div className="border-t pt-3 flex justify-between font-semibold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full mt-6 bg-[var(--color-brand)] text-white py-3 rounded-lg hover:opacity-90 transition">
              <Link to="/checkout">
              Proceed to Checkout
              </Link>
            </button>
          </div>
        </div>
      </div>
      <ShopColumnDescription/>
    </div>
  );
};

export default Cart;