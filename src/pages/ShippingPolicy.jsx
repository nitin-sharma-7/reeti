import CommonBanner from "../components/common/CommonBanner";

const ShippingPolicy = () => {
  return (
    <div className="">
      <CommonBanner title="Shipping Policy" />
      <div className="max-w-7xl mx-auto px-4 py-10 text-gray-700">

        <h1 className="text-3xl font-semibold text-[var(--color-brand)] mb-6">
          Shipping Policy
        </h1>

        <p className="text-sm mb-6">Last Updated: March 2026</p>

        <p className="mb-6">
          We aim to deliver your handcrafted products safely and on time.
        </p>

        {/* PROCESSING */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Order Processing
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Orders are processed within 1–3 business days.</li>
          <li>Custom or handcrafted items may take longer.</li>
          <li>You will receive order confirmation and tracking details.</li>
        </ul>

        {/* SHIPPING TIME */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Delivery Time
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Metro cities: 3–5 business days</li>
          <li>Other locations: 5–8 business days</li>
          <li>Delays may occur due to external factors</li>
        </ul>

        {/* SHIPPING CHARGES */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Shipping Charges
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Free shipping on orders above ₹2000</li>
          <li>Standard shipping charge applies below this value</li>
        </ul>

        {/* INTERNATIONAL */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          International Shipping
        </h2>
        <p className="mb-6">
          Currently, we may offer international shipping on select products.
          Additional charges and customs duties may apply.
        </p>

        {/* ADDRESS */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Shipping Address
        </h2>
        <p className="mb-6">
          Please ensure your shipping address is accurate. We are not responsible
          for delivery failures due to incorrect details.
        </p>

        {/* CONTACT */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Contact Us
        </h2>
        <p>
          For shipping queries:
          <br />
          <span className="text-[var(--color-brand)]">
            support@yourstore.com
          </span>
        </p>

      </div>
    </div>
  );
};

export default ShippingPolicy;