import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ServiceSlider = ({ services, title, desc }) => {
  return (
    <section className="py-16">

      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
          {title}
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto px-4 relative">

        {/* NAV BUTTONS */}
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
          modules={[Navigation, Autoplay]}
          loop
          centeredSlides={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={60}
          slidesPerView={4}
          breakpoints={{
            1200: { slidesPerView: 4 },
            991: { slidesPerView: 3 },
            640: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          speed={1500}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {services.map((item, index) => {
            // stagger logic (desktop only)
            const offset =
              index % 2 === 1
                ? "md:mt-20"
                : index % 2 === 2
                ? "md:mt-40"
                : "md:mt-0";
              //  console.log(offset);
            return (
              <SwiperSlide key={index}>
                <div className={`relative group text-center`}>

                  {/* BIG NUMBER */}
                  <span className="absolute inset-0 flex items-center justify-center text-[130px] font-bold text-gray-300 opacity-20 z-0">
                    {item.id}
                  </span>

                  {/* IMAGE */}
                  <div className="relative z-10 overflow-hidden rounded-md">
                    {offset === "md:mt-20" ? (
                      <div className="h-20 flex items-center justify-center relative overflow-hidden">
                        <span
                           className="text-gray-400"
                          style={{
                            position: "absolute",
                            fontSize: "5rem",
                            fontWeight: "700",
                            opacity: 0.18,
                            lineHeight: 1,
                            userSelect: "none",
                            letterSpacing: "-2px",
                            zIndex: 0,
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h6 className="text-2xl text-gray-800 relative z-10">
                          {item.title}
                        </h6>
                      </div>
                    ) : ""}
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-[340px] object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 
                      opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">

                      <div className="transform translate-y-10 md:group-hover:translate-y-0 transition-all duration-500 ease-out">
                        <h4 className="text-white text-xl font-semibold mb-2">
                          {item.title}
                        </h4>

                        <p className="text-gray-200 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* TITLE */}
                  {offset === "md:mt-0" ? (
                    <div className="h-20 flex items-center justify-center relative overflow-hidden">
                      <span className="text-gray-400"
                        style={{
                          position: "absolute",
                          fontSize: "5rem",
                          fontWeight: "700",
                          opacity: 0.18,
                          lineHeight: 1,
                          userSelect: "none",
                          letterSpacing: "-2px",
                          zIndex: 0,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h6 className="text-2xl text-gray-800 relative z-10">
                        {item.title}
                      </h6>
                    </div>
                  ) : ""}

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default ServiceSlider;