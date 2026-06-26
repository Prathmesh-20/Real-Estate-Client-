import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-3 rounded-xl shadow-lg">
              <FaHome className="text-slate-900 text-2xl" />
            </div>

            <div>
              <h1 className="text-3xl font-extrabold text-white">
                Dream
                <span className="text-yellow-400">
                  Homes
                </span>
              </h1>

              <p className="text-xs text-gray-300 tracking-widest uppercase">
                Luxury Real Estate
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">

            <Link
              to="/"
              className="text-gray-200 hover:text-yellow-400 font-semibold transition duration-300 relative group"
            >
              Home
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/properties"
              className="text-gray-200 hover:text-yellow-400 font-semibold transition duration-300 relative group"
            >
              Properties
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/about"
              className="text-gray-200 hover:text-yellow-400 font-semibold transition duration-300 relative group"
            >
              About
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/contact"
              className="text-gray-200 hover:text-yellow-400 font-semibold transition duration-300 relative group"
            >
              Contact
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>

          </nav>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="
              hidden
              md:inline-flex
              items-center
              bg-gradient-to-r
              from-yellow-400
              to-yellow-600
              text-slate-900
              px-6
              py-3
              rounded-xl
              font-bold
              shadow-lg
              hover:scale-105
              hover:shadow-yellow-500/40
              transition-all
              duration-300
            "
          >
            Contact Agent
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Header;