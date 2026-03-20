import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { FaChevronDown, FaHeart, FaUser } from "react-icons/fa";
import { FaCartShopping, FaGear } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/shop" },
];

const Header = ({ img, img2 }) => {
  const location = useLocation().pathname;

  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [catDropdown, setCatDropdown] = useState(false);
  const [craftDropdown, setCraftDropdown] = useState(false);
  const [scroll, setScroll] = useState(0);

  const dropdownRef = useRef(null);
  const catRef = useRef(null);
  const craftRef = useRef(null);

  // Active menu
  useEffect(() => {
    const current = menuItems.find((item) => item.link === location);
    if (current) setActive(current.name);
  }, [location]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setUserDropdown(false);
      }
      if (catRef.current && !catRef.current.contains(e.target)) {
        setCatDropdown(false);
      }
      if (craftRef.current && !craftRef.current.contains(e.target)) {
        setCraftDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
 const [activeMenu, setActiveMenu] = useState(null);

let timeout;

const handleEnter = (menu) => {
  clearTimeout(timeout);
  setActiveMenu(menu);
};

const handleLeave = () => {
  timeout = setTimeout(() => {
    setActiveMenu(null);
  }, 200); // smooth delay
};
  return (
    <header
      className={`fixed pt-2 w-full top-0 z-50 transition-all ${
        scroll > 80 ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/">
          <img
            src={scroll > 80 ? img2 : img}
            alt="logo"
            className="h-20 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.link}
                className={`transition uppercase ${
                  active === item.name
                    ? "text-brand"
                    : "text-white hover:text-brand"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li
  className="relative"
  onMouseEnter={() => handleEnter("cat")}
  onMouseLeave={handleLeave}
>
  <button className="uppercase text-white hover:text-brand flex items-center gap-1">
    Categories
    <FaChevronDown
      className={`text-sm transition-transform ${
        activeMenu === "cat" ? "rotate-180" : ""
      }`}
    />
  </button>

  <div
    className={`absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-lg py-3 z-50
    transition-all duration-200 origin-top
    ${
      activeMenu === "cat"
        ? "opacity-100 scale-100 translate-y-0"
        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
    }`}
  >
    {[
      "Handcrafted Brass Accents",
      "Artisan Animal Figurines",
      "Designer Vases & Decor Pieces",
      "Curated Earrings Collection",
      "Elegant Storage Solutions",
      "Divine Idols",
      "Heritage Bandhani Sarees",
      "Premium Suit Fabrics (Unstitched)",
    ].map((cat, i) => (
      <Link
        key={i}
        to={`/product/${cat.toLowerCase().replace(/\s+/g, "-")}`}
        className="block px-6 py-2 text-sm text-gray-700 hover:bg-brand/10 hover:text-brand transition"
      >
        {cat}
      </Link>
    ))}
  </div>
</li>
          <li
  className="relative"
  onMouseEnter={() => handleEnter("craft")}
  onMouseLeave={handleLeave}
>
  <button className="uppercase text-white hover:text-brand flex items-center gap-1">
    Craft
    <FaChevronDown
      className={`text-sm transition-transform ${
        activeMenu === "craft" ? "rotate-180" : ""
      }`}
    />
  </button>

  <div
    className={`absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-lg py-3 z-50
    transition-all duration-200 origin-top
    ${
      activeMenu === "craft"
        ? "opacity-100 scale-100 translate-y-0"
        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
    }`}
  >
    {["Meenakari", "Blue pottery", "Dhokra craft"].map((cat, i) => (
      <Link
        key={i}
        to={`/product/${cat.toLowerCase().replace(/\s+/g, "-")}`}
        className="block px-6 py-2 text-sm text-gray-700 hover:bg-brand/10 hover:text-brand transition"
      >
        {cat}
      </Link>
    ))}
  </div>
</li>
          
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">

          {/* User Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setUserDropdown(!userDropdown)} className="text-white">
              <FaUser className="text-xl" />
            </button>

            {userDropdown && (
              <div className="absolute right-0 mt-3 w-44 bg-white shadow-lg rounded-lg py-2">
                <Link
                  to="/cart"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                  onClick={() => setUserDropdown(false)}
                >
                  <FaCartShopping /> Cart
                </Link>

                <Link
                  to="/wishlist"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                  onClick={() => setUserDropdown(false)}
                >
                  <FaHeart /> Wishlist
                </Link>

                <Link
                  to="/settings"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                  onClick={() => setUserDropdown(false)}
                >
                  <FaGear /> Settings
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black shadow-md px-4 pb-4">
          <ul className="flex flex-col gap-3 mt-4">
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className={`block ${
                    active === item.name
                      ? "text-brand"
                      : "text-white hover:text-brand"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            
            {/* Mobile Categories */}
            <li className="mt-2 pt-2 border-t border-gray-800">
              <span className="text-gray-500 text-xs uppercase font-bold px-2">Categories</span>
              <ul className="flex flex-col gap-2 mt-2">
                {[
                  "Handcrafted Brass Accents",
                  "Artisan Animal Figurines",
                  "Designer Vases & Decor Pieces",
                  "Curated Earrings Collection",
                  "Elegant Storage Solutions",
                  "Divine Idols",
                  "Heritage Bandhani Sarees",
                  "Premium Suit Fabrics (Unstitched)"
                ].map((cat, i) => (
                  <li key={i}>
                    <Link
                      // to={`/shop/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                      to={`/shop`}
                      onClick={() => setIsOpen(false)}
                      className="block px-2 py-1 text-sm text-gray-400 hover:text-brand"
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Mobile Craft */}
            <li className="mt-2 pt-2 border-t border-gray-800">
              <span className="text-gray-500 text-xs uppercase font-bold px-2">Craft</span>
              <ul className="flex flex-col gap-2 mt-2">
                {[
                  "Meenakari",
                  "Blue pottery",
                  "Dhokra craft",
                ].map((cat, i) => (
                  <li key={i}>
                    <Link
                      // to={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                      to={`/shop`}
                      onClick={() => setIsOpen(false)}
                      className="block px-2 py-1 text-sm text-gray-400 hover:text-brand"
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;