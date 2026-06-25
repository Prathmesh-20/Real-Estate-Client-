const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 lg:px-20 bg-gray-50"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1556155092-490a1ba16284"
          alt=""
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-4xl font-bold mb-6">
            About Our Company
          </h2>

          <p className="text-gray-600 mb-4">
            We help families and businesses find the
            perfect property with complete transparency
            and trusted support.
          </p>

          <p className="text-gray-600">
            With years of experience in real estate,
            we provide premium properties at the best
            locations and prices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;