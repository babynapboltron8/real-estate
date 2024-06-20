import React from "react";
import ContactForm from "./ContactForm";
import HeroBackground from "/src/assets/estate.jpg";

const ContactPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center relative text-white py-24"
        style={{ backgroundImage: `url(${HeroBackground})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container max-w-5xl p-6 mx-auto text-center relative z-10">
          <h1 className="text-4xl font-bold leading-tight mb-4">Contact Us</h1>
          <p className="text-lg">
            Have questions or need assistance? We are here to help!
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container max-w-5xl p-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Contact Information
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Have questions or need assistance? Reach out to us!
              </p>
              <ul className="list-disc list-inside">
                <li>Email: info@yourcompany.com</li>
                <li>Phone: +123 456 7890</li>
              </ul>
              <div className="mt-8">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.347030284776!2d126.00084487655036!3d7.510786789044926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fc078b375499c3%3A0xc5e7cc803b373ccc!2sSkapar%20philipines%20Mainit!5e0!3m2!1sen!2sph!4v1702436298492!5m2!1sen!2sph"
                  width="100%"
                  height="300"
                  frameBorder="0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  className="rounded-md shadow-md"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
