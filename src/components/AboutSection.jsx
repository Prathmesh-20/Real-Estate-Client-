import {
  FaCheckCircle,
  FaHome,
  FaUsers,
  FaBuilding,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200"
              alt="Luxury Property"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

            {/* Experience Card */}
            <div className="absolute -bottom-8 -right-6 bg-white rounded-2xl shadow-2xl p-6 border-l-4 border-yellow-500">
              <h2 className="text-4xl font-bold text-yellow-500">15+</h2>

              <p className="text-gray-600 font-semibold">Years of Excellence</p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold mb-5">
              About Dream Homes
            </span>

            <h2 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
              Building Dreams,
              <span className="text-yellow-500"> Creating Futures</span>
            </h2>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              At Dream Homes, we believe buying a property is more than just a
              transaction—it's the beginning of a new chapter. Our experienced
              team helps clients discover luxury villas, premium apartments,
              commercial spaces, and investment opportunities with complete
              transparency.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              With over 15 years of experience, we have earned the trust of
              thousands of families and investors by offering verified listings,
              competitive pricing, legal assistance, and personalized support
              throughout every step of the property-buying journey.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-500 text-xl" />
                <span>Verified Properties</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-500 text-xl" />
                <span>Transparent Pricing</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-500 text-xl" />
                <span>Legal Assistance</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-500 text-xl" />
                <span>24/7 Customer Support</span>
              </div>
            </div>

            {/* Button */}

            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition duration-300 hover:scale-105 shadow-xl">
              Learn More
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Statistics */}

      
      </div>
    </section>
  );
};

export default AboutSection;
