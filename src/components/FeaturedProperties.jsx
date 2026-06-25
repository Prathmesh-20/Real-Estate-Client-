import PropertyCard from "./PropertyCard";
import properties from "../data/Properties";

const FeaturedProperties = () => {
  return (
    <section
      id="properties"
      className="py-20 bg-gray-50"
    >
      <div className="w-full px-6 lg:px-12">
        
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            Featured Properties
          </h2>

          <p className="text-gray-600 text-lg">
            Explore our hand-picked premium properties.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.slice(0, 8).map((property) => (
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

export default FeaturedProperties;