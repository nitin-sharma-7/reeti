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
  const [promoInput, setPromoInput] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoMsg, setPromoMsg] = useState("");
  const [promoError, setPromoError] = useState(false);

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

  const applyPromoCode = () => {
    const code = promoInput.trim().toUpperCase();
    if (code === "REETI10" || code === "WELCOME10") {
      setDiscount(10); // 10% discount
      setPromoMsg("Promo code applied successfully!");
      setPromoError(false);
    } else {
      setDiscount(0);
      setPromoMsg("Invalid promo code");
      setPromoError(true);
    }
  };

  const discountAmount = (subtotal * discount) / 100;
  const shipping = subtotal > 2000 ? 0 : 100;
  const total = subtotal - discountAmount + shipping;

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
                <span>₹{subtotal.toFixed(2)}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount ({discount}%)</span>
                  <span>-₹{discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? "Free" : `₹${shipping}`}
                </span>
              </div>

              <div className="border-t pt-3 flex justify-between font-semibold">
                <span>Total</span>
                <span>₹{Math.max(0, total).toFixed(2)}</span>
              </div>
            </div>

            {/* PROMO CODE */}
            <div className="mt-6">
              <label className="text-sm font-medium mb-2 block">Promo Code</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code (e.g. REETI10)"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-brand"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                />
                <button
                  onClick={applyPromoCode}
                  className="bg-black text-white px-4 py-2 rounded text-sm hover:opacity-80 transition"
                >
                  Apply
                </button>
              </div>
              {promoMsg && (
                <p className={`text-xs mt-2 ${promoError ? 'text-red-500' : 'text-green-500'}`}>
                  {promoMsg}
                </p>
              )}
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