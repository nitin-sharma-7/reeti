import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import CommonBanner from "../components/common/CommonBanner";

/* =========================
   COMMON SECTION HEADER
========================= */
const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-10">
    <h2 className="text-2xl font-semibold text-[var(--color-brand)]">
      {title}
    </h2>
    <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
      {subtitle}
    </p>
  </div>
);

/* =========================
   SERVICES
========================= */
const services = [
  { title: "tableware", img: "/images/Category/2- tableware.jpg" },
  { title: "jewellery", img: "/images/Category/3- jewellery1.jpg" },
  { title: "home decor", img: "/images/Category/1- home decor.jpg" },
  
];

const ServicesSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title="Our Services"
          subtitle="You will love the experience we provide."
        />

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
        >
          {services.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img
                  src={item.img}
                  className="w-full h-auto object-contain"
                />
                <div className="p-4 text-center">
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-gray-500 mt-2">
                    Premium service experience for our clients.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

/* =========================
   PRICING
========================= */
const pricing = [
  { title: "somethng", duration: "someting", price: "$40" },
  { title: "somethng", duration: "someting", price: "$35" },
];

const PricingSection = () => {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="Our Pricing" />

        <div className="grid md:grid-cols-2 gap-6">
          {pricing.map((item, i) => (
            <div
              key={i}
              className="flex justify-between bg-gray-50 p-4 rounded-xl"
            >
              <div>
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-sm text-gray-500">
                  {item.duration}
                </p>
              </div>
              <div className="font-semibold text-[var(--color-brand)]">
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* =========================
   TEAM
========================= */
const team = [
  { name: "Ann Smith", img: "/images/Category/4- jewellery2.jpg" },
  { name: "Mary Lucas", img: "/images/Category/4- jewellery2.jpg" },
  { name: "Jennifer", img: "/images/Category/4- jewellery2.jpg" },
];

const TeamSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="Our Team" />

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((item, i) => (
            <div key={i} className="text-center">
              <img
                src={item.img}
                className="w-full h-auto object-contain rounded-xl"
              />
              <h4 className="mt-3 font-medium">{item.name}</h4>
              <p className="text-sm text-gray-500">
                Professional Specialist
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* =========================
   BLOG
========================= */
const blogs = [
  { img: "/images/Category/4- jewellery2.jpg", title: "Amazing Spa Offers" },
  { img: "/images/Category/4- jewellery2.jpg", title: "Beauty Tips" },
  { img: "/images/Category/4- jewellery2.jpg", title: "Amazing Spa Offers" },
  { img: "/images/Category/4- jewellery2.jpg", title: "Beauty Tips" },
];

const BlogSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="Our Blog" />

        <Swiper slidesPerView={3} spaceBetween={20} loop>
          {blogs.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img src={item.img} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h4 className="font-medium">{item.title}</h4>
                  <button className="text-sm text-[var(--color-brand)] mt-2">
                    Read More →
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

/* =========================
   MAIN ABOUT PAGE
========================= */
const About = () => {
  return (
    <div className="bg-white">
      <CommonBanner title="About Us"/>
      <ServicesSection />
      <PricingSection />
      <TeamSection />
      <BlogSection />
    </div>
  );
};

export default About;