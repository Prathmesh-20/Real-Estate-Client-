import { Link } from "react-router-dom";
import { FaBuilding, FaHome, FaMapMarkedAlt, FaAward } from "react-icons/fa";

import PropertyCard from "./PropertyCard";
import properties from "../data/Properties";

const FeaturedProperties = () => {
  return (
    <section
      id="properties"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Heading */}

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mt-6">
            Featured
            <span className="text-yellow-500"> Properties</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-6 leading-8">
            Explore our hand-picked luxury villas, apartments, office spaces,
            commercial properties, and investment opportunities located in the
            most desirable locations.
          </p>
        </div>


        {/* Property Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.slice(0, 8).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Button */}

        <div className="text-center mt-16">
          <Link
            to="/properties"
            className="
            inline-flex
            items-center
            px-10
            py-4
            rounded-xl
            bg-gradient-to-r
            from-yellow-400
            to-amber-500
            text-slate-900
            font-bold
            text-lg
            shadow-lg
            hover:scale-105
            hover:shadow-yellow-400/40
            transition-all
            duration-300
            "
          >
            View All Properties →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
