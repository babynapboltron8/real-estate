"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function PaymentList() {
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
  );
}
