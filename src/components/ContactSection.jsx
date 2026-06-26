import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactSection = () => {
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
      .email("Enter a valid email")
      .required("Email is required"),

    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),

    propertyType: Yup.string()
      .required("Please enter property type"),

    message: Yup.string()
      .min(10, "Message must contain at least 10 characters")
      .required("Message is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);

    setTimeout(() => {
      alert("Inquiry Sent Successfully!");
      resetForm();
      setSubmitting(false);
    }, 2000);
  };

  return (
    <section>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Your entire form UI goes here */}
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactSection;