import PropertyCard from "../components/PropertyCard";
import Properties from "../data/Properties";

const Properties = () => {
  return (
      <section className="min-h-screen bg-gray-50 py-12">
        <div className="w-full px-6 lg:px-12">
          <h1 className="text-5xl font-bold text-center mb-12">
            All Properties
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        </div>
      </section>
  );
};

export default Properties;