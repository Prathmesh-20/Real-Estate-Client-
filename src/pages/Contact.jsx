import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Full Name is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),

    propertyType: Yup.string().required("Please select a property type"),

    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);

    setTimeout(() => {
      alert("Inquiry Submitted Successfully!");
      setSubmitting(false);
      resetForm();
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Contact Us</h2>

          <p className="text-gray-600">
            Get in touch with our property experts.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block mb-2 font-semibold">
                      Full Name
                    </label>

                    <Field
                      type="text"
                      name="fullName"
                      placeholder="Enter your name"
                      className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block mb-2 font-semibold">Email</label>

                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block mb-2 font-semibold">
                      Phone Number
                    </label>

                    <Field
                      type="text"
                      name="phone"
                      placeholder="Enter phone number"
                      className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Property Type */}
                  <div>
                    <label className="block mb-2 font-semibold">
                      Property Type
                    </label>

                    <Field
                      as="select"
                      name="propertyType"
                      className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Property Type</option>

                      <option value="Villa">Villa</option>

                      <option value="Apartment">Apartment</option>

                      <option value="Commercial">Commercial</option>

                      <option value="Office">Office</option>
                    </Field>

                    <ErrorMessage
                      name="propertyType"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mt-6">
                  <label className="block mb-2 font-semibold">Message</label>

                  <Field
                    as="textarea"
                    rows="5"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                  mt-8
                  w-full
                  bg-blue-600
                  text-white
                  py-4
                  rounded-xl
                  text-lg
                  font-semibold
                  hover:bg-blue-700
                  transition
                  disabled:bg-gray-400
                  "
                >
                  {isSubmitting ? "Submitting..." : "Send Inquiry"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Contact;
