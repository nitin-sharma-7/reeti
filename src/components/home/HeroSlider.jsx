import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Swiper styles (IMPORTANT)
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  { img: "/images/1.jpg" },
  { img: "/images/2.jpg" },
  { img: "/images/3.jpg" },
  { img: "/images/4.jpg" },
];

const HeroSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full max-h-[100vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-full"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-auto relative">
              <img
                src={item.img}
                alt="banner"
                className="w-full h-auto object-contain"
              />

              {/* Optional Overlay */}
           

              {/* Optional Content */}
              {/* Uncomment if needed */}
              {/* 
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Experience The Best
                </h1>
                <p className="max-w-xl mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="flex gap-4">
                  <button className="bg-blue-600 px-6 py-2 rounded-lg">
                    Get A Quote
                  </button>
                  <button className="border border-white px-6 py-2 rounded-lg">
                    About Us
                  </button>
                </div>
              </div>
              */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left Arrow */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/10 hover:bg-white text-black p-3 rounded-full shadow-md"
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/10 hover:bg-white text-black p-3 rounded-full shadow-md"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default HeroSlider;