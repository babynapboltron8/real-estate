"use client";

import React, { useState } from "react";
import PaymentSuccessful from "./paymentsuccessful";
import Link from "next/link";

const SPOT_CASH_TOTAL = 10000;
const INSTALLMENT_RATE = 2500;

const Payment = () => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [totalPayment, setTotalPayment] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [paymentReserved, setPaymentReserved] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const handlePaymentOptionChange = (option) => {
    setSelectedPaymentOption(option);
    calculateTotal(option, selectedDuration);
  };

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
    calculateTotal(selectedPaymentOption, duration);
  };

  const calculateTotal = (paymentOption, duration) => {
    let total = 0;

    if (paymentOption === "spotCash") {
      total = SPOT_CASH_TOTAL;
    } else if (paymentOption === "installment") {
      const years = parseInt(duration.split(" ")[0]);
      const installmentValue = INSTALLMENT_RATE * years;

      total = Math.round(installmentValue);
    }

    setTotalPayment(isNaN(total) ? 0 : total);
  };

  const paymentMethods = [
    { name: "Over the Counter", value: "overTheCounter" },
    { name: "Online", value: "online" },
  ];

  const monthlyPayment = selectedDuration
    ? (totalPayment / parseInt(selectedDuration.split(" ")[0])) * 12
    : 0;

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleProceedToPayment = () => {
    if (selectedPaymentMethod === "overTheCounter") {
      setPaymentReserved(true);
      console.log(
        "Payment reserved. Please proceed to the nearest payment center."
      );
    } else if (selectedPaymentMethod === "online") {
      setPaymentSuccessful(true);
      console.log("Redirecting to the payment gateway...");
      setTimeout(() => {
        console.log("Payment successful! Thank you for your purchase.");
        setPaymentReserved(true);
      }, 2000);
    } else {
      alert("Please select a payment method before proceeding.");
    }
  };

  if (paymentReserved) {
    return (
      <PaymentSuccessful
        text={
          selectedPaymentMethod === "overTheCounter"
            ? "Payment reserved. Please proceed to the nearest payment center."
            : "Successful transaction: Thank you for your purchase."
        }
      />
    );
  }

  if (paymentSuccessful) {
    return (
      <PaymentSuccessful text="Successful transaction: Thank you for your purchase." />
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-3xl font-semibold text-gray-800">Payment</h1>
          </div>
          <div className="flex justify-between space-between w-full mb-4">
            <div className="flex gap-4 items-center">
              <h2 className="font-normal text-lg hidden md:flex">
                Payment Details
              </h2>
            </div>
            <div className="flex">
              <Link
                href="/admin/map"
                className="bg-blue-500 text-white px-5 text-base py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Back to Map
              </Link>
            </div>
          </div>

          <div className="container max-w-6xl mx-auto p-4 md:p-8 bg-white rounded-md shadow-lg">
            <div className="bg-white p-4">
              <div className="">
                <div className="sm:flex items-center mb-4">
                  <label className="block text-gray-700 mr-4">
                    Payment Option:
                  </label>
                  <div className="flex items-center gap-4">
                    {["spotCash", "installment"].map((option) => (
                      <React.Fragment key={option}>
                        <input
                          type="radio"
                          id={option}
                          name="paymentOption"
                          value={option}
                          checked={selectedPaymentOption === option}
                          onChange={() => handlePaymentOptionChange(option)}
                        />
                        <label htmlFor={option}>
                          {option === "spotCash" ? "Spot Cash" : "Installment"}
                        </label>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {selectedPaymentOption === "installment" && (
                  <div className="sm:flex items-center mb-4">
                    <label className="block text-gray-700 mr-4">
                      Duration:
                    </label>
                    <div className="sm:flex items-center gap-4 ">
                      {[1, 2, 3, 4, 5].map((year) => (
                        <div key={year} className="flex items-center gap-1 ">
                          <input
                            type="radio"
                            id={`duration-${year}`}
                            name="duration"
                            value={`${year} year`}
                            checked={selectedDuration === `${year} year`}
                            onChange={() =>
                              handleDurationChange(`${year} year`)
                            }
                          />
                          <label htmlFor={`duration-${year}`}>
                            {`${year} Year${year > 1 ? "s" : ""}`}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4">
                  <label className="block mb-2 text-gray-700">
                    Total Payment:
                  </label>
                  <p className="text-lg font-bold">
                    {totalPayment.toLocaleString("en-US", {
                      style: "currency",
                      currency: "PHP",
                    })}
                  </p>
                </div>

                {selectedPaymentOption === "installment" && (
                  <div className="mt-4">
                    <label className="block mb-2 text-gray-700">
                      Monthly Payment:
                    </label>
                    <p className="text-lg font-bold">
                      {monthlyPayment.toLocaleString("en-US", {
                        style: "currency",
                        currency: "PHP",
                      })}
                    </p>
                  </div>
                )}

                <div className="mt-4">
                  <label className="block mb-2 text-gray-700">
                    Payment Method:
                  </label>
                  <div className="flex items-center space-x-4">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.name}
                        className="flex gap-2 items-center"
                      >
                        <input
                          type="radio"
                          id={method.value}
                          name="paymentMethod"
                          value={method.value}
                          checked={selectedPaymentMethod === method.value}
                          onChange={() =>
                            handlePaymentMethodChange(method.value)
                          }
                        />
                        <label htmlFor={method.value}>{method.name}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 items-center">
                  <button
                    type="button"
                    onClick={handleProceedToPayment}
                    className="bg-blue-500 mb-6 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full md:w-auto focus:outline-none focus:shadow-outline-blue"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Payment;
