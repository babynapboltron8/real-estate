import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectMap from "/src/assets/map.png"; // Update the path with your image

const MapSection = () => {
  const navigate = useNavigate();

  // Function to handle the reservation process
  const handleReserveNow = () => {
    // Implement reservation logic or navigate to the reservation page
    console.log("Reserve Now button clicked!");

    // Redirect to the map page
    navigate("/map"); // Replace "/map" with the actual route for the map page
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container max-w-5xl mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Explore the Project Map
        </h2>

        {/* Display the project map image */}
        <div className="relative rounded-md shadow-md overflow-hidden mx-auto max-w-2xl border-2 border-gray-300">
          <img src={ProjectMap} alt="Project Map" className="w-full h-auto" />
        </div>

        {/* Project Description */}
        <div className="mt-12 text-center text-gray-700 max-w-2xl mx-auto">
          <p className="text-lg leading-relaxed">
            Embark on a journey through our meticulously planned real estate
            development. Discover the perfect location for your dream home or
            investment within our expansive project map.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Ready to take the next step? Click the &quot;Reserve Now&quot;
            button below.
          </p>
        </div>

        {/* Reserve Now button */}
        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={handleReserveNow}
          >
            Reserve Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
