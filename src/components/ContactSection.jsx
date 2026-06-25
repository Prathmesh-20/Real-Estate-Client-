const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 lg:px-20 bg-gray-100"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <form className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-4 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border p-4 rounded-lg"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-4 rounded-lg"
          />

          <input
            type="text"
            placeholder="Property Interested In"
            className="border p-4 rounded-lg"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="border p-4 rounded-lg md:col-span-2"
          />

          <button
            className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 md:col-span-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
