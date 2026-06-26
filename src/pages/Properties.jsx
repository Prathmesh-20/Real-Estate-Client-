import PropertyCard from "../components/PropertyCard";
import properties from "../data/Properties";
import {
  FaHome,
  FaSearch,
  FaBuilding,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Properties = () => {
  return (
    <div className="bg-slate-50">

      {/* Hero Section */}
      <section
        className="relative h-[55vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/75"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">

          <span className="bg-yellow-500 text-slate-900 px-5 py-2 rounded-full font-semibold mb-5">
            Premium Properties
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Find Your
            <span className="text-yellow-400">
              {" "}Dream Property
            </span>
          </h1>

          <p className="text-gray-300 text-lg mt-5 max-w-3xl">
            Explore luxury villas, apartments, office spaces,
            commercial buildings, and investment properties
            across India.
          </p>

        </div>
      </section>

      {/* Search Section */}
      <section className="-mt-14 relative z-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <div className="grid md:grid-cols-3 gap-5">

              <div className="relative">

                <FaSearch className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="text"
                  placeholder="Search Property..."
                  className="w-full pl-12 py-4 border rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none"
                />

              </div>

              <div className="relative">

                <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-12 py-4 border rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none"
                />

              </div>

              <button className="bg-gradient-to-r from-yellow-500 to-amber-600 text-slate-900 rounded-xl font-bold hover:scale-105 transition">
                Search Property
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {[
              {
                icon: <FaHome />,
                value: "500+",
                title: "Properties",
              },
              {
                icon: <FaBuilding />,
                value: "120+",
                title: "Builders",
              },
              {
                icon: <FaMapMarkerAlt />,
                value: "30+",
                title: "Cities",
              },
              {
                icon: <FaHome />,
                value: "1200+",
                title: "Happy Clients",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300"
              >
                <div className="text-5xl text-yellow-500 flex justify-center mb-4">
                  {item.icon}
                </div>

                <h2 className="text-4xl font-bold text-slate-900">
                  {item.value}
                </h2>

                <p className="text-gray-500 mt-2">
                  {item.title}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Categories */}

      <section className="pb-10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-wrap justify-center gap-4">

            {[
              "All",
              "Villa",
              "Apartment",
              "Commercial",
              "Office",
              "Penthouse",
            ].map((item) => (
              <button
                key={item}
                className="px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-yellow-500 hover:text-slate-900 transition font-semibold"
              >
                {item}
              </button>
            ))}

          </div>

        </div>

      </section>

      {/* Properties */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-5xl font-bold text-slate-900">
              Featured Properties
            </h2>

            <p className="text-gray-600 mt-4 text-lg">
              Choose from our premium collection of verified
              residential and commercial properties.
            </p>

          </div>

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

    </div>
  );
};

export default Properties;