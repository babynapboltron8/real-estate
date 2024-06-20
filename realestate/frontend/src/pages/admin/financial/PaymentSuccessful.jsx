// PaymentSuccessful.jsx
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Sidebar from "../../../components/Sidebar";

const PaymentSuccessful = ({ text }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <div className="flex items-center justify-center pt-24">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-green-600 mb-4">
                Payment Successful
              </h2>
              <p className="text-gray-700 mb-6">{text}</p>
              <Link
                to="/admin/map"
                className="bg-blue-500 hover:bg-blue-600  text-white px-5 text-base py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              >
                Back to Map
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

PaymentSuccessful.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PaymentSuccessful;
