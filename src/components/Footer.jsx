import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHome,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>

            <div className="flex items-center gap-3 mb-6">

              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-3 rounded-xl">
                <FaHome className="text-slate-900 text-xl" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">
                  Dream
                  <span className="text-yellow-400">
                    Homes
                  </span>
                </h2>

                <p className="text-sm text-gray-400 uppercase tracking-widest">
                  Luxury Real Estate
                </p>
              </div>

            </div>

            <p className="leading-8 text-gray-400">
              We help families and investors find luxury
              villas, apartments, office spaces and
              commercial properties with complete
              transparency and trusted guidance.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-2xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/properties"
                  className="hover:text-yellow-400 transition"
                >
                  Properties
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-400 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-400 transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Property Types */}
          <div>

            <h3 className="text-2xl font-semibold text-white mb-6">
              Property Types
            </h3>

            <ul className="space-y-4">

              <li className="hover:text-yellow-400 transition cursor-pointer">
                Luxury Villas
              </li>

              <li className="hover:text-yellow-400 transition cursor-pointer">
                Apartments
              </li>

              <li className="hover:text-yellow-400 transition cursor-pointer">
                Commercial Spaces
              </li>

              <li className="hover:text-yellow-400 transition cursor-pointer">
                Office Spaces
              </li>

              <li className="hover:text-yellow-400 transition cursor-pointer">
                Investment Properties
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-yellow-400" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-yellow-400" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-yellow-400" />
                <span>info@dreamhomes.com</span>
              </div>

            </div>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-yellow-500 hover:text-black transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-yellow-500 hover:text-black transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-yellow-500 hover:text-black transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-yellow-500 hover:text-black transition"
              >
                <FaTwitter />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-center md:text-left">
            © 2026 <span className="text-yellow-400">Dream Homes</span>. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <Link
              to="/"
              className="hover:text-yellow-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/"
              className="hover:text-yellow-400 transition"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;