import { useState } from "react";
import CommonBanner from "../components/common/CommonBanner";

/* =========================
   DATA
========================= */
const contactInfo = [
  {
    title: "Address",
    value: "123 West Street, Melbourne Victoria 3000 Australia",
    icon: "📍",
  },
  {
    title: "Email",
    value: "info@example.com",
    icon: "✉️",
  },
  {
    title: "Phone",
    value: "+91 987 654 3210",
    icon: "📞",
  },
];

/* =========================
   CONTACT PAGE
========================= */
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="">
      <CommonBanner  title="Contact Us" />
      <div className="max-w-6xl mx-auto px-4 py-16">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-[var(--color-brand)]">
            Contact Us
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* LEFT - CONTACT INFO */}
          <div className="bg-gray-50 p-6 rounded-xl space-y-6 shadow-sm">
            <h3 className="font-semibold text-lg">Quick Contact</h3>

            {contactInfo.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-xl">{item.icon}</div>
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* SOCIAL */}
            <div className="flex gap-3 pt-4">
              {["facebook", "twitter", "linkedin", "instagram"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-[var(--color-brand)] text-white flex items-center justify-center text-sm cursor-pointer"
                  >
                    {item[0].toUpperCase()}
                  </div>
                )
              )}
            </div>
          </div>

          {/* CENTER - FORM */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-4">
              Send Message
            </h3>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)]"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)]"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />

              <textarea
                rows={4}
                placeholder="Your Message..."
                className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)]"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />

              <button className="w-full bg-[var(--color-brand)] text-white py-3 rounded-lg hover:opacity-90 transition">
                Submit
              </button>
            </div>
          </div>

          {/* RIGHT - MAP */}
          <div className="rounded-xl overflow-hidden shadow-sm h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;