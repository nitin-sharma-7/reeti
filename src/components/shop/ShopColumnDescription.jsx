import { FaGift, FaPlane, FaHistory } from "react-icons/fa";

const details = [
  {
    icon: <FaGift />,
    title: "Free shipping on orders $60+",
    paragraph:
      "Order more than $60 and you will get free shipping worldwide.",
  },
  {
    icon: <FaPlane />,
    title: "Worldwide delivery",
    paragraph:
      "We deliver to USA, Canada, Europe, Australia and more.",
  },
  {
    icon: <FaHistory />,
    title: "60 days money back guarantee",
    paragraph:
      "Not happy? Return it and get 100% refund with no hassle.",
  },
];

const ShopColumnDescription = () => {
  return (
    <section className=" py-16">

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">

        {details.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 group"
          >

            {/* Icon */}
            <div className="
              text-2xl 
              bg-white 
              p-3 
              flex items-center justify-center 
              rounded-full 
              shadow-sm 
              group-hover:scale-110 
              transition
            ">
              {item.icon}
            </div>

            {/* Content */}
            <div>
              <h5 className="font-semibold text-lg mb-1">
                {item.title}
              </h5>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.paragraph}
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default ShopColumnDescription;