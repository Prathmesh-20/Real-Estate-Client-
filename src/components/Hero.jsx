const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6)",
      }}
    >
      <div className="bg-black/60 min-h-screen flex items-center">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl text-white">
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Find Your Dream Property
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Explore premium villas, apartments, commercial spaces,
              offices, and investment opportunities across India.
            </p>


            {/* Statistics Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-blue-400">
                  500+
                </h3>
                <p>Properties</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-blue-400">
                  1200+
                </h3>
                <p>Happy Clients</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-blue-400">
                  50+
                </h3>
                <p>Expert Agents</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-blue-400">
                  15+
                </h3>
                <p>Years Experience</p>
              </div>

            </div>

            {/* Property Categories */}
            <div className="flex flex-wrap gap-4 mt-10">
              
              <span className="bg-blue-600 px-5 py-2 rounded-full">
                Villas
              </span>

              <span className="bg-blue-600 px-5 py-2 rounded-full">
                Apartments
              </span>

              <span className="bg-blue-600 px-5 py-2 rounded-full">
                Commercial
              </span>

              <span className="bg-blue-600 px-5 py-2 rounded-full">
                Office Spaces
              </span>

              <span className="bg-blue-600 px-5 py-2 rounded-full">
                Shops
              </span>

            </div>

            {/* Trust Message */}
            <div className="mt-10 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-2">
                Why Choose Us?
              </h3>

              <p className="text-gray-200">
                We provide verified properties, transparent pricing,
                expert guidance, and complete legal support to make
                your property buying journey smooth and secure.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;