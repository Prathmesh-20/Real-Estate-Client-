import {
  FaMapMarkerAlt,
  FaHome,
  FaBuilding,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-800/40"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-28">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/30 text-yellow-300 px-5 py-2 rounded-full backdrop-blur-md mb-8">
          ⭐ Trusted by 1,200+ Happy Families
        </div>

        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Find Your
            <span className="block text-yellow-400">Dream Property</span>
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Explore luxury villas, premium apartments, commercial spaces and
            investment opportunities in India's most desirable locations.
          </p>


          {/* Search Box */}
          <div className="bg-white rounded-3xl shadow-2xl mt-16 p-6">
            <div className="grid md:grid-cols-4 gap-5">
              <div>
                <label className="text-sm font-semibold text-gray-500">
                  Location
                </label>

                <div className="flex items-center mt-2 border rounded-xl px-4 py-3">
                  <FaMapMarkerAlt className="text-yellow-500 mr-3" />
                  <input
                    type="text"
                    placeholder="Enter City"
                    className="outline-none w-full"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-500">
                  Property Type
                </label>

                <div className="flex items-center mt-2 border rounded-xl px-4 py-3">
                  <FaBuilding className="text-yellow-500 mr-3" />

                  <select className="outline-none w-full">
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Office</option>
                    <option>Shop</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-500">
                  Budget
                </label>

                <div className="flex items-center mt-2 border rounded-xl px-4 py-3">
                  <FaHome className="text-yellow-500 mr-3" />

                  <select className="outline-none w-full">
                    <option>₹20L - ₹50L</option>
                    <option>₹50L - ₹1Cr</option>
                    <option>₹1Cr - ₹2Cr</option>
                    <option>Above ₹2Cr</option>
                  </select>
                </div>
              </div>

              <div className="flex items-end">
                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl py-4 flex justify-center items-center gap-3 transition">
                  <FaSearch />
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
            {[
              ["500+", "Premium Properties"],
              ["1200+", "Happy Clients"],
              ["50+", "Expert Agents"],
              ["15+", "Years Experience"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-2 transition duration-300"
              >
                <h2 className="text-4xl font-bold text-yellow-400">{number}</h2>

                <p className="text-gray-300 mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
