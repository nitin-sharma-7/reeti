import { useState } from "react";
import CommonBanner from "../components/common/CommonBanner";
import ShopColumnDescription from "../components/shop/ShopColumnDescription";
import ContactSection from "../components/common/ContactSection";

/* =========================
   SAMPLE ORDER DATA
========================= */
const orderItems = [
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
   CHECKOUT PAGE
========================= */
const Checkout = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [createAccount, setCreateAccount] = useState(false);
  const [differentAddress, setDifferentAddress] = useState(false);

  /* =========================
     CALCULATIONS
  ========================= */
  const subtotal = orderItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const shipping = subtotal > 2000 ? 0 : 100;
  const total = subtotal + shipping;

  return (
    <div className="">
      <CommonBanner  title="Checkout" />
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* HEADER */}
        <h2 className="text-2xl font-semibold text-[var(--color-brand)] mb-8">
          Checkout
        </h2>

        {/* FORM */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT - FORM */}
          <div className="bg-gray-50 p-6 rounded-xl space-y-4">

            <h3 className="font-semibold text-lg">
              Billing Details
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="First Name"
                className="input"
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
              />
              <input
                placeholder="Last Name"
                className="input"
                onChange={(e) =>
                  setForm({ ...form, lastName: e.target.value })
                }
              />
            </div>

            <input
              placeholder="Email"
              className="input"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              placeholder="Phone"
              className="input"
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <input
              placeholder="Address"
              className="input"
              onChange={(e) =>
                setForm({ ...form, address: e.target.value })
              }
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="City"
                className="input"
                onChange={(e) =>
                  setForm({ ...form, city: e.target.value })
                }
              />
              <input
                placeholder="State"
                className="input"
                onChange={(e) =>
                  setForm({ ...form, state: e.target.value })
                }
              />
            </div>

            <input
              placeholder="ZIP Code"
              className="input"
              onChange={(e) =>
                setForm({ ...form, zip: e.target.value })
              }
            />

            {/* CHECKBOXES */}
            <div className="space-y-2 text-sm">
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  onChange={() =>
                    setCreateAccount(!createAccount)
                  }
                />
                Create an account
              </label>

              <label className="flex gap-2">
                <input
                  type="checkbox"
                  onChange={() =>
                    setDifferentAddress(!differentAddress)
                  }
                />
                Ship to different address
              </label>
            </div>

            {createAccount && (
              <input
                placeholder="Password"
                className="input"
              />
            )}

            {differentAddress && (
              <textarea
                placeholder="Shipping Address"
                className="input h-24"
              />
            )}
          </div>

          {/* RIGHT - ORDER SUMMARY */}
          <div className="space-y-6">

            {/* ITEMS */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-4">
                Your Order
              </h3>

              {orderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-4"
                >
                  <div className="flex gap-3 items-center">
                    <img
                      src={item.image}
                      className="w-14 h-14 rounded object-cover"
                    />
                    <div>
                      <p className="text-sm">{item.title}</p>
                      <p className="text-xs text-gray-500">
                        Qty: {item.qty}
                      </p>
                    </div>
                  </div>

                  <span className="text-sm font-medium">
                    ₹{item.price * item.qty}
                  </span>
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-4">
                Order Total
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
            </div>

            {/* PAYMENT */}
            <div className="bg-gray-50 p-6 rounded-xl space-y-4">
              <h3 className="font-semibold text-lg">
                Payment Method
              </h3>

              <input
                placeholder="Name on Card"
                className="input"
              />
              <input
                placeholder="Card Number"
                className="input"
              />
              <input
                placeholder="CVV"
                className="input"
              />

              <button className="w-full bg-[var(--color-brand)] text-white py-3 rounded-lg hover:opacity-90 transition">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* GLOBAL INPUT STYLE */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          outline: none;
        }
        .input:focus {
          border-color: var(--color-brand);
          box-shadow: 0 0 0 1px var(--color-brand);
        }
      `}</style>
      <ShopColumnDescription/>
      <ContactSection/>
    </div>
  );
};

export default Checkout;