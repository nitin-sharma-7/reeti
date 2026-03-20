import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const items = [
  {
    id: 1,
    title: "Sehera Hand Block Print...",
    price: "₹2,499",
    oldPrice: "₹3,999",
    thumbnail: "/images/Category/1- home decor.jpg",
    youtubeId: "9JsTj1Ymi_I",
  },
  {
    id: 1,
    title: "Sehera Hand Block Print...",
    price: "₹2,499",
    oldPrice: "₹3,999",
    thumbnail: "/images/Category/1- home decor.jpg",
    youtubeId: "9JsTj1Ymi_I",
  },
  {
    id: 1,
    title: "Sehera Hand Block Print...",
    price: "₹2,499",
    oldPrice: "₹3,999",
    thumbnail: "/images/Category/1- home decor.jpg",
    youtubeId: "9JsTj1Ymi_I",
  },
  {
    id: 1,
    title: "Sehera Hand Block Print...",
    price: "₹2,499",
    oldPrice: "₹3,999",
    thumbnail: "/images/Category/1- home decor.jpg",
    youtubeId: "9JsTj1Ymi_I",
  },
  {
    id: 1,
    title: "Sehera Hand Block Print...",
    price: "₹2,499",
    oldPrice: "₹3,999",
    thumbnail: "/images/Category/1- home decor.jpg",
    youtubeId: "9JsTj1Ymi_I",
  },
  {
    id: 1,
    title: "Sehera Hand Block Print...",
    price: "₹2,499",
    oldPrice: "₹3,999",
    thumbnail: "/images/Category/1- home decor.jpg",
    youtubeId: "9JsTj1Ymi_I",
  },
  {
    id: 1,
    title: "Sehera Hand Block Print...",
    price: "₹2,499",
    oldPrice: "₹3,999",
    thumbnail: "/images/Category/1- home decor.jpg",
    youtubeId: "9JsTj1Ymi_I",
  },
  {
    id: 1,
    title: "Sehera Hand Block Print...",
    price: "₹2,499",
    oldPrice: "₹3,999",
    thumbnail: "/images/Category/1- home decor.jpg",
    youtubeId: "9JsTj1Ymi_I",
  },
  {
    id: 1,
    title: "Sehera Hand Block Print...",
    price: "₹2,499",
    oldPrice: "₹3,999",
    thumbnail: "/images/Category/1- home decor.jpg",
    youtubeId: "9JsTj1Ymi_I",
  },
  {
    id: 1,
    title: "Sehera Hand Block Print...",
    price: "₹2,499",
    oldPrice: "₹3,999",
    thumbnail: "/images/Category/1- home decor.jpg",
    youtubeId: "9JsTj1Ymi_I",
  },
  {
    id: 1,
    title: "Sehera Hand Block Print...",
    price: "₹2,499",
    oldPrice: "₹3,999",
    thumbnail: "/images/Category/1- home decor.jpg",
    youtubeId: "9JsTj1Ymi_I",
  },
  {
    id: 1,
    title: "Sehera Hand Block Print...",
    price: "₹2,499",
    oldPrice: "₹3,999",
    thumbnail: "/images/Category/1- home decor.jpg",
    youtubeId: "9JsTj1Ymi_I",
  },
  {
    id: 1,
    title: "Sehera Hand Block Print...",
    price: "₹2,499",
    oldPrice: "₹3,999",
    thumbnail: "/images/Category/1- home decor.jpg",
    youtubeId: "9JsTj1Ymi_I",
  },
  {
    id: 1,
    title: "Sehera Hand Block Print...",
    price: "₹2,499",
    oldPrice: "₹3,999",
    thumbnail: "/images/Category/1- home decor.jpg",
    youtubeId: "9JsTj1Ymi_I",
  },
];


export default function VideoSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        // centeredSlides={true}
        breakpoints={{
          1200: { slidesPerView: 4 },
          992: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">

              {/* VIDEO AREA */}
              <div className="relative w-full h-[320px] overflow-hidden">

                {/* VIDEO */}
                <iframe
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.youtubeId}&playsinline=1`}
                  title="video"
                  allow="autoplay"
                />

                {/* DARK GRADIENT (premium look) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                {/* FLOATING PRODUCT IMAGE */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 ">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="w-16 h-16 rounded-xl border border-white shadow-md object-cover group-hover:scale-110 transition "
                  />
                </div>

              </div>

              {/* DETAILS */}
              <div className="p-3 text-center">
                <p className="text-sm font-medium truncate">
                  {item.title}
                </p>

                <div className="flex justify-center gap-2 text-sm mt-1">
                  <span className="font-semibold">{item.price}</span>
                  <span className="line-through text-gray-400">
                    {item.oldPrice}
                  </span>
                </div>
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}