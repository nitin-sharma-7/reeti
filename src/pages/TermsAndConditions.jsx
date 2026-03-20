import CommonBanner from "../components/common/CommonBanner";

const TermsAndConditions = () => {
  return (
    <div className="">  
      <CommonBanner title="Terms & Conditions" />
      <div className="max-w-7xl mx-auto px-4 py-10 text-gray-700">

        {/* HEADER */}
        <h1 className="text-3xl font-semibold text-[var(--color-brand)] mb-6">
          Terms & Conditions
        </h1>

        <p className="text-sm mb-6">
          Last Updated: March 2026
        </p>

        {/* INTRO */}
        <p className="mb-6 leading-relaxed">
          Welcome to our store. By accessing or using our website, you agree to
          comply with and be bound by the following Terms & Conditions. Please
          read them carefully before using our services.
        </p>

        {/* PRODUCTS */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Products & Services
        </h2>

        <p className="mb-4">
          We offer a curated collection of handcrafted and heritage products,
          including:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Handcrafted Brass Accents</li>
          <li>Artisan Animal Figurines</li>
          <li>Designer Vases & Home Decor</li>
          <li>Curated Earrings Collection</li>
          <li>Elegant Storage Solutions</li>
          <li>Divine Idols</li>
          <li>Heritage Bandhani Sarees</li>
          <li>Premium Unstitched Suit Fabrics</li>
        </ul>

        <p className="mb-6">
          Our products are crafted using traditional techniques such as
          Meenakari, Blue Pottery, and Dhokra art. As these are handmade items,
          slight variations in color, texture, or finish are natural and should
          not be considered defects.
        </p>

        {/* ORDERS */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Orders & Payments
        </h2>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>All orders are subject to availability and confirmation.</li>
          <li>Prices are listed in INR and are subject to change.</li>
          <li>We use secure third-party payment gateways.</li>
          <li>We reserve the right to cancel or refuse any order.</li>
        </ul>

        {/* SHIPPING */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Shipping & Delivery
        </h2>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Delivery timelines are estimated and may vary.</li>
          <li>Delays may occur due to external factors (logistics, weather).</li>
          <li>Customers must provide accurate shipping details.</li>
        </ul>

        {/* RETURNS */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Returns & Refunds
        </h2>

        <p className="mb-6">
          Due to the handcrafted nature of our products, returns are only
          accepted for damaged or incorrect items. Please contact us within 48
          hours of delivery with proof.
        </p>

        {/* USER RESPONSIBILITY */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          User Responsibilities
        </h2>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>You agree not to misuse the website.</li>
          <li>You must provide accurate personal information.</li>
          <li>You are responsible for maintaining account confidentiality.</li>
        </ul>

        {/* INTELLECTUAL PROPERTY */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Intellectual Property
        </h2>

        <p className="mb-6">
          All content on this website, including images, designs, and text, is
          the property of our brand and may not be copied, reproduced, or used
          without permission.
        </p>

        {/* LIMITATION */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Limitation of Liability
        </h2>

        <p className="mb-6">
          We are not liable for any indirect or consequential damages arising
          from the use of our website or products.
        </p>

        {/* CHANGES */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Changes to Terms
        </h2>

        <p className="mb-6">
          We reserve the right to update these Terms & Conditions at any time.
          Continued use of the website implies acceptance of changes.
        </p>

        {/* CONTACT */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Contact Us
        </h2>

        <p className="mb-10">
          For any questions regarding these Terms, contact us at:
          <br />
          <span className="text-[var(--color-brand)]">
            support@yourstore.com
          </span>
        </p>

      </div>
    </div>
  );
};

export default TermsAndConditions;