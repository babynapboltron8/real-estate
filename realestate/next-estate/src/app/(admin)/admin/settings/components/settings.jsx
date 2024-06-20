"use client";

import React, { useState } from "react";

const Settings = () => {
  // State for payment schedule
  const [paymentSchedule, setPaymentSchedule] = useState({
    installment1: 30, // in days
    installment2: 60,
    installment3: 90,
  });

  // State for auto follow-up
  const [autoFollowUp, setAutoFollowUp] = useState(false);

  const handlePaymentScheduleChange = (installment, value) => {
    setPaymentSchedule((prevSchedule) => ({
      ...prevSchedule,
      [installment]: value,
    }));
  };

  const handleAutoFollowUpChange = () => {
    setAutoFollowUp((prevAutoFollowUp) => !prevAutoFollowUp);
  };

  const saveSettings = () => {
    // Add logic to save settings
    alert("Settings saved!");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="container mx-auto bg-white rounded-md shadow-lg p-8 mt-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
              Settings
            </h1>
            {/* Site Settings */}
            <div className="space-y-4">
              <div>
                <label htmlFor="siteName" className="text-gray-600">
                  Site Name
                </label>
                <input
                  type="text"
                  id="siteName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-gray-600">
                  Admin Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div>
                <label htmlFor="password" className="text-gray-600">
                  Admin Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              {/* Add more general settings fields as needed */}
            </div>

            {/* Payment Schedule Settings */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Payment Schedule
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600">
                    Installment 1 (in days)
                  </label>
                  <input
                    type="number"
                    value={paymentSchedule.installment1}
                    onChange={(e) =>
                      handlePaymentScheduleChange(
                        "installment1",
                        e.target.value
                      )
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div>
                  <label className="text-gray-600">
                    Installment 2 (in days)
                  </label>
                  <input
                    type="number"
                    value={paymentSchedule.installment2}
                    onChange={(e) =>
                      handlePaymentScheduleChange(
                        "installment2",
                        e.target.value
                      )
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                {/* Add more installment inputs as needed */}
              </div>
            </div>

            {/* Auto Follow-up Settings */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Auto Follow-up
              </h2>
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  id="autoFollowUp"
                  checked={autoFollowUp}
                  onChange={handleAutoFollowUpChange}
                  className="text-blue-500 focus:ring focus:border-blue-300"
                />
                <label htmlFor="autoFollowUp" className="text-gray-600">
                  Enable Auto Follow-up for Payment
                </label>
              </div>
            </div>

            {/* Save Button */}
            <div className="mt-6">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                onClick={saveSettings}
              >
                Save Settings
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
