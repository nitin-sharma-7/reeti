import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#8c8366] text-white pt-16 pb-8 font-lato">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-10">

          {/* Logo / About */}
          <div>
            <img src="/reeti-logo.png" alt="logo" className="w-60 relative left-0 mb-6" />
            <p className="text-[#e0dbc9] text-sm leading-relaxed">
              Experience the essence of Indian heritage with our curated
              collection of handcrafted brass accents, artisan figurines,
              and traditional textiles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="pt-4">
            <h4 className="text-white mb-6 font-semibold relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {["Home", "Shop", "About Us", "Contact Us", "Blogs"].map((item, i) => (
                <li key={i}>
                  <Link
                    to="/"
                    className="text-white hover:text-white transition-all hover:-translate-y-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="pt-4">
            <h4 className="text-white mb-6 font-semibold relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-white">
              Information
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Return Policy",
                "Refund Policy",
                "Shipping Policy",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to="/"
                    className="text-white hover:text-white transition-all hover:-translate-y-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="pt-4">
            <h4 className="text-white mb-6 font-semibold relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-white">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white hover:text-white transition-all">
                <span className="text-white text-lg">
                  <FaLocationDot />
                </span>
                <span>Jaipur, Rajasthan, India</span>
              </li>

              <li className="flex items-center gap-3 text-white hover:text-white transition-all">
                <span className="text-white">
                  <FaPhone />
                </span>
                <span>+91 800-123456</span>
              </li>

              <li className="flex items-center gap-3 text-white hover:text-white transition-all">
                <span className="text-white">
                  <IoIosMail />
                </span>
                <span>info@reeti.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="pt-4">
            <h4 className="text-white mb-6 font-semibold relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-white">
              Follow Us
            </h4>
            <div className="flex gap-4 text-xl">
              {[FaInstagram, FaFacebook, FaTwitter, FaLinkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white hover:text-white transition-all hover:-translate-y-1"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#a79f84] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-white text-xs gap-4 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} REETI. All rights reserved.</p>
          <div>
            <span className="hover:text-white transition">
              Made with ❤️ in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;