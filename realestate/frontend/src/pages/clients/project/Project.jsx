import Hero from "./Hero";
import Introduction from "./Introduction";
import Gallery from "./Gallery";

import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  // const [reservationData, setReservationData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setReservationData((prevData) => ({ ...prevData, [name]: value }));
  // };
  const handleBuyNow = () => {
    // Redirect to the map page or any other page you desire
    navigate("/map"); // Replace "/map" with the actual route for the map page
  };

  const navigate = useNavigate();
  const handleReservationSubmit = (event) => {
    event.preventDefault();
    // Implement reservation submission logic here
    console.log("Reservation submitted successfully!");
    // Redirect to success page or any other page you desire
    navigate("/reservation-success");
  };
  return (
    <div>
      <Hero />
      <Introduction />
      <Gallery />
      <section className="bg-gray-200 py-16">
        <div className="container max-w-5xl mx-auto p-6">
          <h2 className="text-4xl font-bold text-center mb-8">
            Reservation Form
          </h2>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleReservationSubmit} className="space-y-6">
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
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                  Submit Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-gray-00 py-16">
        <div className="container max-w-5xl mx-auto p-6">
          <h2 className="text-4xl font-bold text-center mb-8">Buy Now</h2>

          {/* Buy Now Button */}
          <div className="text-center bg-custom-color">
            {" "}
            {/* Replace "bg-custom-color" with your desired color class */}
            <p className="text-lg mb-4">
              Ready to make your dream home a reality? Click the button below to
              buy now!
            </p>
            <button
              onClick={handleBuyNow}
              className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600"
            >
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
