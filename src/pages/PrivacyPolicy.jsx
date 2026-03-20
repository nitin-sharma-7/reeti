import CommonBanner from "../components/common/CommonBanner";


const PrivacyPolicy = () => {
  return (
    <div className="">
      <CommonBanner title="Privacy Policy" />
      <div className="max-w-7xl mx-auto px-4 py-10 text-gray-700">

        {/* HEADER */}
        <h1 className="text-3xl font-semibold text-[var(--color-brand)] mb-6">
          Privacy Policy
        </h1>

        <p className="text-sm mb-6">
          Last Updated: March 2026
        </p>

        {/* INTRO */}
        <p className="mb-6 leading-relaxed">
          We value your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, and
          safeguard your data when you visit or make a purchase from our
          e-commerce platform.
        </p>

        {/* PRODUCTS CONTEXT */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Our Products
        </h2>
        <p className="mb-4">
          We specialize in curated handcrafted and ethnic products including:
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
          Our collections are inspired by traditional crafts such as Meenakari,
          Blue Pottery, and Dhokra art.
        </p>

        {/* DATA COLLECTION */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Information We Collect
        </h2>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Name, email address, and phone number</li>
          <li>Shipping and billing address</li>
          <li>Payment information (processed securely via third-party gateways)</li>
          <li>Browsing behavior and device information</li>
        </ul>

        {/* USAGE */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          How We Use Your Information
        </h2>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>To process and deliver your orders</li>
          <li>To improve our website and user experience</li>
          <li>To communicate order updates and offers</li>
          <li>To provide customer support</li>
        </ul>

        {/* COOKIES */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Cookies & Tracking
        </h2>
        <p className="mb-6">
          We use cookies to enhance your browsing experience, analyze traffic,
          and personalize content. You can choose to disable cookies through
          your browser settings.
        </p>

        {/* DATA SECURITY */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Data Security
        </h2>
        <p className="mb-6">
          We implement industry-standard security measures to protect your data.
          However, no online transmission is 100% secure.
        </p>

        {/* THIRD PARTY */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Third-Party Services
        </h2>
        <p className="mb-6">
          We may use third-party services such as payment gateways, analytics,
          and shipping partners. These services have their own privacy policies.
        </p>

        {/* USER RIGHTS */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Your Rights
        </h2>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>You can request access to your data</li>
          <li>You can request correction or deletion</li>
          <li>You can opt-out of marketing communications</li>
        </ul>

        {/* CONTACT */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Contact Us
        </h2>
        <p className="mb-10">
          If you have any questions about this Privacy Policy, you can contact us at:
          <br />
          <span className="text-[var(--color-brand)]">
            support@yourstore.com
          </span>
        </p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;