import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="w-full px-6 lg:px-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold">Dream Homes</h2>

            <p className="mt-3 text-gray-400">
              Your trusted real estate partner.
            </p>
          </div>

          <div>
  <h3 className="text-xl font-semibold mb-4">
    Quick Links
  </h3>

  <ul className="space-y-3">
    <li>
      <Link
        to="/"
        className="text-gray-400 hover:text-white"
      >
        Home
      </Link>
    </li>

    <li>
      <Link
        to="/about"
        className="text-gray-400 hover:text-white"
      >
        About
      </Link>
    </li>

    <li>
      <Link
        to="/properties"
        className="text-gray-400 hover:text-white"
      >
        Properties
      </Link>
    </li>

    <li>
      <Link
        to="/contact"
        className="text-gray-400 hover:text-white"
      >
        Contact
      </Link>
    </li>
  </ul>
</div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>

            <p>📍 Ahmedabad, Gujarat</p>
            <p>📞 +91 9876543210</p>
            <p>✉ info@dreamhomes.com</p>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-400">
          © 2026 Dream Homes. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
