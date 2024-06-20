import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroBackground from "/hero-bg.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleReserveClick = () => {
    // Check if the user is logged in
    if (isLoggedIn) {
      // User is logged in, navigate to the map page
      navigate("/map");
    } else {
      // User is not logged in, redirect to the login page
      navigate("/login");
    }
  };

  const handleLogin = () => {
    // Example usage of setIsLoggedIn for local state
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Example usage of setIsLoggedIn for local state
    setIsLoggedIn(false);
  };

  return (
    <>
      <div
        className="inset-0 bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="relative"></div>
        <div className="text-center sm:text-start justify-center p-4 text-white items-center max-w-5xl mx-auto">
          <div className="flex-1 py-32">
            <h1 className="font-bold text-4xl sm:text-5xl max-w-lg">
              Your Real Estate Project Name
            </h1>
            <p className="max-w-sm py-5 pb-12">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, to error sit voluptatem.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-600 rounded-md px-7 py-3 text-base"

              type="button"
              onClick={handleReserveClick}
            >
              Reserve Now
            </button>
            <button
              className="hidden bg-green-500 hover:bg-green-600 rounded-md px-7 py-3 text-base ml-4"
              type="button"
              onClick={handleLogin}
            >
              Log In
            </button>
            <button
              className="hidden bg-gray-500 hover:bg-gray-600 rounded-md px-7 py-3 text-base ml-4"
              type="button"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
