import {
  FaAward,
  FaBuilding,
  FaCheckCircle,
  FaHandshake,
  FaHome,
  FaUsers,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/75"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">

          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Building Dreams,
            <span className="text-yellow-400"> One Home at a Time</span>
          </h1>

          <p className="text-gray-300 text-lg mt-6 max-w-3xl">
            We help families, businesses, and investors discover premium
            properties with complete transparency, trusted guidance, and
            exceptional service.
          </p>
        </div>
      </section>

      {/* About Company */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200"
                alt="Luxury Home"
                className="rounded-3xl shadow-2xl"
              />

              <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-2xl p-6 border-l-4 border-yellow-500">
                <h2 className="text-4xl font-bold text-yellow-500">15+</h2>

                <p className="text-gray-600 font-medium">Years of Experience</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">
                Who We Are
              </span>

              <h2 className="text-5xl font-bold text-slate-900 mt-6 mb-6">
                Your Trusted
                <span className="text-yellow-500"> Real Estate Partner</span>
              </h2>

              <p className="text-lg text-gray-600 leading-8 mb-6">
                Dream Homes is one of India's trusted real estate companies,
                helping buyers and investors find luxury villas, apartments,
                commercial offices, and investment properties.
              </p>

              <p className="text-gray-600 leading-8 mb-8">
                Our experienced team ensures verified listings, transparent
                pricing, legal assistance, and a seamless buying experience from
                start to finish.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-yellow-500" />
                  Verified Properties
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-yellow-500" />
                  Trusted Agents
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-yellow-500" />
                  Legal Assistance
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-yellow-500" />
                  Best Market Prices
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Mission & Vision */}

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition">
              <FaHandshake className="text-5xl text-yellow-500 mb-6" />

              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>

              <p className="text-gray-600 leading-8">
                To help every client find the perfect property while maintaining
                honesty, transparency, and exceptional customer service.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition">
              <FaAward className="text-5xl text-yellow-500 mb-6" />

              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>

              <p className="text-gray-600 leading-8">
                To become India's most trusted real estate company by delivering
                premium properties and unforgettable customer experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
