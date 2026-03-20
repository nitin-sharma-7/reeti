import { FaTruck, FaLeaf, FaHome, FaPenNib, FaFlag } from "react-icons/fa";

const features = [
  { icon: <FaTruck />, text: "Free Shipping" },
  { icon: <FaLeaf />, text: "Eco Friendly Inks" },
  { icon: <FaHome />, text: "Homegrown" },
  { icon: <FaPenNib />, text: "Hand Illustrated" },
  { icon: <FaFlag />, text: "Made in India" },
];

const FeatureBar = () => {
  const repeated = [...features, ...features, ...features];

  return (
    <div className="w-full bg-[#7a1f2b] text-white overflow-hidden py-2.5">
      <div className="flex w-max animate-[scrollStrip_30s_linear_infinite]">
        {repeated.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-10 text-sm whitespace-nowrap"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBar;