import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    img: "/images/hero-Images-1.png",
    name: "David Martin",
    role: "Client",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting ",
  },
  {
    img: "/images/hero-Images-1.png",
    name: "Sarah Williams",
    role: "Client",
    text: "Lorem Ipsum has survived not only five centuries but also the leap into .",
  },
  {
    img: "/images/hero-Images-1.png",
    name: "Michael Smith",
    role: "Client",
    text: "It was popularised in the 1960s with the release of Letraset sheets.",
  },
];

const TestimonialSection = () => {
  return (
    <section
      className="py-24 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(/images/bg10.jpg)` }}
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h5 className="text-[#c5a47e] italic text-sm mb-2">
            Our Client
          </h5>

          <h2 className="text-4xl font-semibold">
            Our Testimonial
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          loop
          // centeredSlides={true}
          slidesPerView={3}
          spaceBetween={30}
          speed={1000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
            <SwiperSlide key={index}>

              <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-8 m-2 text-center transition-all duration-500 hover:shadow-xl">

                {/* Image */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow"
                />

                {/* Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.text}
                </p>

                {/* Name */}
                <h5 className="font-semibold text-lg">
                  {item.name}
                </h5>

                {/* Role */}
                <span className="text-gray-400 text-sm">
                  {item.role}
                </span>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default TestimonialSection;