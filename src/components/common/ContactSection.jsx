import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <section className="py-16 bg-[#f8f8f8]">

      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h5 className="text-[#c5a47e] italic text-sm mb-2">
            Contact Us
          </h5>

          <h2 className="text-4xl font-serif font-semibold">
          <span className="text-[#c5a47e]">Vendor ? </span>  Get in touch
          </h2>
        </div>

        {/* Form */}
        <form className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

          <div className="grid md:grid-cols-2 gap-6">

            {/* Left */}
            <div className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border-b border-gray-300 focus:border-black outline-none py-3 bg-transparent"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border-b border-gray-300 focus:border-black outline-none py-3 bg-transparent"
              />

              <input
                type="text"
                placeholder="Phone"
                className="w-full border-b border-gray-300 focus:border-black outline-none py-3 bg-transparent"
              />

            </div>

            {/* Right */}
            <div>
              <textarea
                rows="6"
                placeholder="Your Message..."
                className="w-full border-b border-gray-300 focus:border-black outline-none py-3 bg-transparent"
              ></textarea>
            </div>

          </div>

          {/* Button */}
          <div className="text-center mt-10">
            <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Send Message
            </button>
          </div>

        </form>

      </div>

    </section>
  );
};

export default ContactSection;