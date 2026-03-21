import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaPhone, FaMailBulk } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-10 ">
          {/* Logo / About Section */}
          <div className="md:col-span-1">
            <img src="/reeti-logo.png" alt="logo" className="w-48 h-auto mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the essence of Indian heritage with our curated collection of handcrafted brass accents, artisan figurines, and traditional textiles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="pt-4">
            <h4 className="mb-6 font-semibold relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-brand">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm font-light">
              <li className="text-gray-400 hover:text-brand transition-all hover:-translate-y-1"><Link to="/" className="hover:text-brand transition-colors">Home</Link></li>
              <li className="text-gray-400 hover:text-brand transition-all hover:-translate-y-1"><Link to="/shop" className="hover:text-brand transition-colors">Shop</Link></li>
              <li className="text-gray-400 hover:text-brand transition-all hover:-translate-y-1"><Link to="/about" className="hover:text-brand transition-colors">About Us</Link></li>
              <li className="text-gray-400 hover:text-brand transition-all hover:-translate-y-1"><Link to="/contact" className="hover:text-brand transition-colors">Contact Us</Link></li>
              <li className="text-gray-400 hover:text-brand transition-all hover:-translate-y-1"><Link to="/blogs" className="hover:text-brand transition-colors">Blogs</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="pt-4">
            <h4 className="mb-6 font-semibold relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-brand">
              Information
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm font-light">
              <li className="text-gray-400 hover:text-brand transition-all hover:-translate-y-1"><Link to="/privacy-policy" className="hover:text-brand transition-colors">Privacy Policy</Link></li>
              <li className="text-gray-400 hover:text-brand transition-all hover:-translate-y-1"><Link to="/terms-and-conditions" className="hover:text-brand transition-colors">Terms & Conditions</Link></li>
              <li className="text-gray-400 hover:text-brand transition-all hover:-translate-y-1"><Link to="/return-policy" className="hover:text-brand transition-colors">Return Policy</Link></li>
              <li className="text-gray-400 hover:text-brand transition-all hover:-translate-y-1"><Link to="/return-policy" className="hover:text-brand transition-colors">Refund Policy</Link></li>
              <li className="text-gray-400 hover:text-brand transition-all hover:-translate-y-1"><Link to="/shipping-policy" className="hover:text-brand transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="pt-4">
            <h4 className="mb-6 font-semibold relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-brand">
              Contact Info
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li className="flex items-start gap-3 text-gray-400 hover:text-brand transition-all hover:-translate-y-1  ">
                <span className="text-brand"><FaLocationDot/></span>
                <span>Jaipur, Rajasthan, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-brand transition-all hover:-translate-y-1">
                <span className="text-brand"><FaPhone/></span>
                <span>+91 800-123456</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-brand transition-all hover:-translate-y-1">
                <span className="text-brand"><IoIosMail /></span>
                <span>info@reeti.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col pt-4">
            <h4 className="mb-6 font-semibold relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-brand">
              Follow Us
            </h4>
            <div className="flex gap-4 text-xl">
              <a href="#" className="text-gray-400 hover:text-brand transition-all hover:-translate-y-1"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-brand transition-all hover:-translate-y-1"><FaFacebook /></a>
              <a href="#" className="text-gray-400 hover:text-brand transition-all hover:-translate-y-1"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-brand transition-all hover:-translate-y-1"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} REETI . All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-300">Made with ❤️ in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
