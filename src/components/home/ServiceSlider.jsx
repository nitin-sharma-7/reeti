import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const services = [
  {
    id: "01",
    img: "/images/Category/1- home decor.jpg",
    title: "Home Decor",
    desc: "Elegant handcrafted pieces to elevate your living space.",
  },
  {
    id: "02",
    img: "/images/Category/2- tableware.jpg",
    title: "Tableware",
    desc: "Premium dining essentials crafted with artistic precision.",
  },
  {
    id: "03",
    img: "/images/Category/3- jewellery1.jpg",
    title: "Jewellery",
    desc: "Timeless designs that define grace and beauty.",
  },
  {
    id: "04",
    img: "/images/Category/4- jewellery2.jpg",
    title: "Luxury Collection",
    desc: "Exclusive pieces curated for premium experiences.",
  },
  {
    id: "01",
    img: "/images/Category/1- home decor.jpg",
    title: "Home Decor",
    desc: "Elegant handcrafted pieces to elevate your living space.",
  },
  {
    id: "02",
    img: "/images/Category/2- tableware.jpg",
    title: "Tableware",
    desc: "Premium dining essentials crafted with artistic precision.",
  },
  {
    id: "03",
    img: "/images/Category/3- jewellery1.jpg",
    title: "Jewellery",
    desc: "Timeless designs that define grace and beauty.",
  },
  {
    id: "04",
    img: "/images/Category/4- jewellery2.jpg",
    title: "Luxury Collection",
    desc: "Exclusive pieces curated for premium experiences.",
  },
  {
    id: "01",
    img: "/images/Category/1- home decor.jpg",
    title: "Home Decor",
    desc: "Elegant handcrafted pieces to elevate your living space.",
  },
  {
    id: "02",
    img: "/images/Category/2- tableware.jpg",
    title: "Tableware",
    desc: "Premium dining essentials crafted with artistic precision.",
  },
  {
    id: "03",
    img: "/images/Category/3- jewellery1.jpg",
    title: "Jewellery",
    desc: "Timeless designs that define grace and beauty.",
  },
  {
    id: "04",
    img: "/images/Category/4- jewellery2.jpg",
    title: "Luxury Collection",
    desc: "Exclusive pieces curated for premium experiences.",
  },
];

const ServiceSlider = () => {
  return (
    <section className=" py-16">

      {/* Heading */}
      <div className="text-center mb-20">
        <h5 className="text-[#c5a47e] italic text-sm mb-2 tracking-wide">
          Welcome To Bridal Makeup
        </h5>

        <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
          Our Makeup Services
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
          Discover premium handcrafted collections designed with elegance and precision.
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto px-4 relative">
        <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 
    w-12 h-12 flex items-center justify-center 
    rounded-full border border-gray-300 
    bg-white/10 backdrop-blur-md 
    hover:bg-black hover:text-white 
    transition duration-300 shadow-md">
          <FaChevronLeft />
        </button>

        <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-20 
    w-12 h-12 flex items-center justify-center 
    rounded-full border border-gray-300 
    bg-white/10 backdrop-blur-md 
    hover:bg-black hover:text-white 
    transition duration-300 shadow-md">
          <FaChevronRight />
        </button>
        <Swiper
          modules={[Navigation, Pagination ,Autoplay]}
          loop
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={40}
          slidesPerView={4}
          // pagination={{ clickable: true }}
          breakpoints={{
            1200: { slidesPerView: 4 },
            991: { slidesPerView: 3 },
            640: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }} 
          speed={1500}
          autoplay={{
            delay: 1500, // 2 seconds
            disableOnInteraction: false, // keeps autoplay after click
          }}
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="relative group text-center">

                {/* BIG NUMBER */}
                <span className="absolute inset-0 flex items-center justify-center text-[130px] font-bold text-gray-300 opacity-20 z-0">
                  {item.id}
                </span>



                {/* IMAGE */}
                <div className="relative z-10 overflow-hidden rounded-md">

                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-[340px] object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute inset-0 
                      bg-gradient-to-t from-black/80 via-black/40 to-transparent
                      flex flex-col justify-end 
                      p-6
                      
                      opacity-100 md:opacity-0 
                      md:group-hover:opacity-100
                      
                      transition-all duration-500
                    "
                  >
                    <div
                      className="
                        transform translate-y-10 
                        md:group-hover:translate-y-0 
                        transition-all duration-500 ease-out
                      "
                    >
                      <h4 className="text-white text-xl font-semibold mb-2">
                        {item.title}
                      </h4>

                      <p className="text-gray-200 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                </div>

                {/* TITLE BOTTOM */}
                <h6 className="mt-5 font-serif text-lg text-gray-800 relative z-10">
                  {item.title}
                </h6>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default ServiceSlider;