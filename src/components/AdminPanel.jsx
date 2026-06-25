import React, { useState } from "react";

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    title: "",
    location: "",
    price: "",
    area: "",
    type: "",
    description: "",
    agentName: "",
    contact: "",
    buttonText: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Property Added Successfully");
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">
        Admin Panel
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="text"
          name="title"
          placeholder="Property Title"
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="text"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="text"
          name="area"
          placeholder="Area"
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="text"
          name="type"
          placeholder="Property Type"
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          rows="4"
          onChange={handleChange}
          className="border p-3 rounded md:col-span-2"
        />

        <input
          type="text"
          name="agentName"
          placeholder="Agent Name"
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="text"
          name="buttonText"
          placeholder="Button Text"
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <button
          type="submit"
          className="
          bg-green-600
          text-white
          p-3
          rounded
          hover:bg-green-700
          transition
          "
        >
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;