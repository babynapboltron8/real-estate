export default function ContactSection() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="container max-w-5xl p-6 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Contact Information
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Have questions or need assistance? Reach out to us!
            </p>
            <ul className="list-disc list-inside">
              <li>Email: contact@example.com</li>
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
  );
}
