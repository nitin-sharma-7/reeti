import {
  FaShoppingCart,
  FaEye,
  FaHeart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const ProductCard = ({
  images = [], // 👈 now array
  title,
  price,
  oldPrice,
  rating = 4.5,
  link = "/product/7394",
}) => {
  // ⭐ Rating Logic
  const renderStars = () => {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;

    for (let i = 0; i < full; i++) {
      stars.push(<FaStar key={`f-${i}`} />);
    }

    if (half) {
      stars.push(<FaStarHalfAlt key="half" />);
    }

    while (stars.length < 5) {
      stars.push(<FaRegStar key={`e-${stars.length}`} />);
    }

    return stars;
  };

  return (
    <div className="group text-center">

      {/* IMAGE SLIDER */}
      <div className="relative overflow-hidden">

        <Link to={link}>
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }} // 👈 smooth fade
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop
              speed={3000} // 👈 smooth transition speed
              className="w-full pointer-events-none"
            >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={title}
                  className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Link>

        {/* HOVER BAR */}
        <div className="
          absolute z-100 left-0 bottom-1/2 translate-y-1/2 w-full
          opacity-0 group-hover:opacity-100
          transition duration-500
        ">
          <div className="
            mx-auto w-[80%]
           bg-brand
            py-3 flex justify-center gap-6
            text-white text-lg
            rounded-md shadow-lg
          ">
            <button className="hover:scale-110 transition">
              <Link to="/cart">
              <FaShoppingCart />
              </Link>
            </button>

            <Link to={link} className="hover:scale-110 transition">
              <FaEye />
            </Link>

            <button className="hover:scale-110 transition">
              <Link to="/wishlist">
              <FaHeart />
              </Link>
            </button>
          </div>
        </div>

      </div>

      {/* CONTENT */}
      <div className="mt-4">

        <h6 className="font-medium">
          <Link to={link} className="hover:text-gray-500">
            {title}
          </Link>
        </h6>

        {/* RATING */}
        <div className="flex justify-center gap-1 text-yellow-400 text-sm mt-2">
          {renderStars()}
        </div>

        {/* PRICE */}
        <div className="mt-2 text-sm">
          {oldPrice && (
            <span className="line-through text-gray-400 mr-2">
              {oldPrice}
            </span>
          )}
          <span className="text-pink-500 font-semibold">
            {price}
          </span>
        </div>

      </div>

    </div>
  );
};

export default ProductCard;