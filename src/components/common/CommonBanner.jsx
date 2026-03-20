import { Link } from "react-router-dom";

const CommonBanner = ({ img, title }) => {
  return (
    <section
      className="relative w-full h-[420px] md:h-[470px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${img || "/images/1.jpg"})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-serif font-semibold mb-3">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-200">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">{title}</span>
        </div>

      </div>
    </section>
  );
};

export default CommonBanner;