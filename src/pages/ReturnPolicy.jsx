import CommonBanner from "../components/common/CommonBanner";

const ReturnRefundPolicy = () => {
  return (
    <div className="">
      <CommonBanner title="Return & Refund Policy" />
      <div className="max-w-7xl mx-auto px-4 py-10 text-gray-700">

        <h1 className="text-3xl font-semibold text-[var(--color-brand)] mb-6">
          Return & Refund Policy
        </h1>

        <p className="text-sm mb-6">Last Updated: March 2026</p>

        {/* INTRO */}
        <p className="mb-6">
          We take pride in offering handcrafted products. Due to their unique
          nature, our return policy is limited.
        </p>

        {/* ELIGIBILITY */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Return Eligibility
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Item received is damaged or defective</li>
          <li>Wrong product delivered</li>
          <li>Request raised within 48 hours of delivery</li>
        </ul>

        {/* NON RETURN */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Non-Returnable Items
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Handcrafted items with minor variations</li>
          <li>Used or damaged products after delivery</li>
          <li>Custom or made-to-order items</li>
        </ul>

        {/* PROCESS */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Return Process
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Email us with images/video proof</li>
          <li>Our team will verify the request</li>
          <li>Return pickup or instructions will be provided</li>
        </ul>

        {/* REFUND */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Refund Policy
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Refunds are processed after inspection</li>
          <li>Refunds will be credited within 5–7 business days</li>
          <li>Original payment method will be used</li>
        </ul>

        {/* REPLACEMENT */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Replacement
        </h2>
        <p className="mb-6">
          In case of defective products, we may offer a replacement instead of a
          refund depending on availability.
        </p>

        {/* IMPORTANT NOTE */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Important Note
        </h2>
        <p className="mb-6">
          Since our products include handcrafted brass accents, artisan
          figurines, Meenakari, Blue Pottery, and Dhokra crafts, slight
          variations in design and finish are natural and not considered defects.
        </p>

        {/* CONTACT */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Contact Us
        </h2>
        <p>
          For returns & refunds:
          <br />
          <span className="text-[var(--color-brand)]">
            support@yourstore.com
          </span>
        </p>

      </div>
    </div>
  );
};

export default ReturnRefundPolicy;