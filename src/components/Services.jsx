import {
  Home,
  Building,
  ShieldCheck,
  Handshake
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home size={40} />,
      title: "Residential Properties",
      desc: "Buy premium homes and flats."
    },
    {
      icon: <Building size={40} />,
      title: "Commercial Spaces",
      desc: "Office and business properties."
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Legal Assistance",
      desc: "Complete documentation support."
    },
    {
      icon: <Handshake size={40} />,
      title: "Property Consultation",
      desc: "Expert property advice."
    }
  ];

  return (
    <section
      id="services"
      className="py-20 px-6 lg:px-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-all"
          >
            <div className="text-blue-600 mb-4">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;