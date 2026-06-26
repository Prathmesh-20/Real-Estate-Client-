import {
  Home,
  Building,
  ShieldCheck,
  Handshake,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home size={45} />,
      title: "Residential Properties",
      desc: "Explore luxurious villas, apartments, and premium homes designed for modern living.",
    },
    {
      icon: <Building size={45} />,
      title: "Commercial Spaces",
      desc: "Discover offices, retail spaces, and commercial properties in prime business locations.",
    },
    {
      icon: <ShieldCheck size={45} />,
      title: "Legal Assistance",
      desc: "Enjoy a hassle-free buying experience with complete legal documentation support.",
    },
    {
      icon: <Handshake size={45} />,
      title: "Property Consultation",
      desc: "Our experienced advisors help you make the right real estate investment decisions.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white via-yellow-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold">
            Our Services
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900">
            Exceptional Real Estate
            <span className="text-yellow-500"> Services</span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            We provide complete real estate solutions, from finding your dream
            home to handling legal formalities and investment guidance.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((item, index) => (

            <div
              key={index}
              className="
              group
              bg-white
              rounded-3xl
              p-8
              border
              border-yellow-100
              shadow-md
              hover:shadow-2xl
              hover:-translate-y-3
              transition-all
              duration-500
              "
            >

              {/* Icon */}

              <div
                className="
                w-20
                h-20
                rounded-2xl
                bg-gradient-to-r
                from-yellow-400
                to-yellow-500
                flex
                items-center
                justify-center
                text-white
                mb-8
                group-hover:rotate-6
                group-hover:scale-110
                transition-all
                duration-300
                "
              >
                {item.icon}
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>

              {/* Description */}

              <p className="text-gray-600 leading-7 mb-8">
                {item.desc}
              </p>

              {/* Learn More */}

              <button
                className="
                text-yellow-600
                font-semibold
                hover:text-yellow-700
                transition
                flex
                items-center
                gap-2
                "
              >
                Learn More

                <span className="group-hover:translate-x-2 transition">
                  →
                </span>
              </button>

            </div>

          ))}

        </div>

        {/* Bottom Banner */}

        <div
          className="
          mt-20
          bg-gradient-to-r
          from-yellow-400
          to-yellow-500
          rounded-3xl
          px-10
          py-12
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-8
          shadow-xl
          "
        >

          <div>

            <h3 className="text-3xl font-bold text-white">
              Looking for Your Dream Property?
            </h3>

            <p className="text-yellow-100 mt-3 text-lg">
              Let our experienced real estate experts help you find the perfect property.
            </p>

          </div>

          <button
            className="
            bg-white
            text-yellow-600
            px-8
            py-4
            rounded-xl
            font-bold
            hover:bg-gray-100
            hover:scale-105
            transition
            "
          >
            Contact Our Experts
          </button>

        </div>

      </div>
    </section>
  );
};

export default Services;