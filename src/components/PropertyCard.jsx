import {
  FaMapMarkerAlt,
  FaRulerCombined,
  FaPhoneAlt,
  FaHome,
} from "react-icons/fa";

const PropertyCard = ({ property }) => {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      overflow-hidden
      border
      border-yellow-100
      shadow-md
      hover:shadow-2xl
      transition-all
      duration-500
      hover:-translate-y-3
      group
      "
    >
      {/* Property Image */}

      <div className="relative overflow-hidden">

        <img
          src={property.image}
          alt={property.title}
          className="
          w-full
          h-64
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          "
        />

        {/* Property Type Badge */}

        <span
          className="
          absolute
          top-4
          left-4
          bg-yellow-500
          text-white
          px-4
          py-2
          rounded-full
          text-sm
          font-semibold
          shadow-lg
          "
        >
          {property.type}
        </span>

      </div>

      {/* Card Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {property.title}
        </h3>

        {/* Location */}

        <div className="flex items-center gap-3 text-gray-600 mb-3">

          <FaMapMarkerAlt className="text-yellow-500" />

          <span>{property.location}</span>

        </div>

        {/* Area */}

        <div className="flex items-center gap-3 text-gray-600 mb-5">

          <FaRulerCombined className="text-yellow-500" />

          <span>{property.area}</span>

        </div>

        {/* Price */}

        <div className="flex justify-between items-center mb-6">

          <div>

            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <h4 className="text-3xl font-bold text-yellow-600">
              {property.price}
            </h4>

          </div>

          <div className="bg-yellow-100 p-4 rounded-2xl">

            <FaHome className="text-yellow-600 text-2xl" />

          </div>

        </div>

        {/* Button */}

        <a
          href={`tel:${property.contact}`}
          className="
          flex
          items-center
          justify-center
          gap-3
          bg-gradient-to-r
          from-yellow-400
          to-yellow-500
          text-gray-900
          font-bold
          py-3
          rounded-xl
          hover:shadow-lg
          hover:scale-105
          transition
          duration-300
          "
        >
          <FaPhoneAlt />

          {property.buttonText}
        </a>

      </div>
    </div>
  );
};

export default PropertyCard;