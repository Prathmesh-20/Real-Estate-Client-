const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">
          {property.title}
        </h3>

        <p className="text-gray-600">
          📍 {property.location}
        </p>

        <p className="text-gray-600">
          📐 {property.area}
        </p>

        <p className="text-green-600 text-2xl font-bold my-3">
          {property.price}
        </p>

        <a
          href={`tel:${property.contact}`}
          className="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {property.buttonText}
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;