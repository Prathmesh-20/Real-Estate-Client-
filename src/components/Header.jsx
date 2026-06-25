import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <h1 className="text-3xl font-bold text-blue-600">Dream Homes</h1>

          <nav className="hidden md:flex gap-8 font-medium">
            <Link to="/">Home</Link>
            <Link to="/properties">Properties</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/admin"></Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
