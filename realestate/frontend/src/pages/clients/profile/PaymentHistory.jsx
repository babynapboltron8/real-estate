// PaymentHistory.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ManageAccountSidebar from "./ManageAccountSidebar"; // Adjust the path accordingly

const PaymentHistory = () => {
  const { clientId, lotNumber } = useParams();

  const [paymentHistory, setPaymentHistory] = useState([]);

  // Replace this with actual data fetching logic based on clientId and lotNumber
  useEffect(() => {
    // Example data fetching logic (replace with your actual implementation)
    const fetchPaymentHistory = async () => {
      try {
        // Assuming you have an API endpoint to fetch payment history
        const response = await fetch(
          `/api/clients/${clientId}/lots/${lotNumber}/payments`
        );
        const data = await response.json();
        setPaymentHistory(data); // Update the state with the fetched payment history
      } catch (error) {
        console.error("Error fetching payment history:", error);
      }
    };

    fetchPaymentHistory();
  }, [clientId, lotNumber]);

  return (
    <div className="flex h-screen bg-gray-100">
      <ManageAccountSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              Payment History - Lot {lotNumber}
            </h1>
          </div>

          <div className="bg-white p-8 rounded-md shadow-lg">
            {paymentHistory.length > 0 ? (
              <table className="w-full border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-3 px-6 text-left">Date</th>
                    <th className="py-3 px-6 text-left">Amount</th>
                    <th className="py-3 px-6 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory.map((payment, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="py-3 px-6">{payment.date}</td>
                      <td className="py-3 px-6">{payment.amount}</td>
                      <td className="py-3 px-6">{payment.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No payment history available for Lot {lotNumber}.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PaymentHistory;
