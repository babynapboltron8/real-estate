// SingleClient.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "/src/components/Sidebar";

const Client = () => {
  const { clientId } = useParams();

  // Replace this with actual data fetching logic for a single client based on the clientId
  const clientDetails = {
    id: clientId,
    name: "Client 1",
    number: "123-456-7890",
    address: "123 Main Street, City",
    lots: [
      {
        lotNumber: "Lot 1",
        payments: [
          { id: 1, date: "2023-01-15", amount: 5000, status: "Paid" },
          { id: 2, date: "2023-02-15", amount: 6000, status: "Paid" },
          // Add more payment data as needed
        ],
      },
      {
        lotNumber: "Lot 2",
        payments: [
          { id: 1, date: "2023-01-15", amount: 7000, status: "Paid" },
          { id: 2, date: "2023-02-15", amount: 8000, status: "Pending" },
          // Add more payment data as needed
        ],
      },
      // Add more lot data as needed
    ],
    profileImage: "/src/assets/myAvatar.png", // Add the path to your profile image
  };

  const calculatePaymentSummary = (lots) => {
    const totalPaymentMade = lots.reduce((total, lot) => {
      return (
        total +
        lot.payments.reduce((lotTotal, payment) => lotTotal + payment.amount, 0)
      );
    }, 0);

    const totalBalance = totalPaymentMade; // Assuming total balance is the sum of all payments
    const monthsPaid = lots.reduce(
      (totalMonths, lot) => totalMonths + lot.payments.length,
      0
    );
    const remainingMonths = lots.length * 12 - monthsPaid; // Assuming a 12-month period for each lot

    return { totalPaymentMade, totalBalance, monthsPaid, remainingMonths };
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-3xl font-semibold text-gray-800">
              {clientDetails.name}s Profile
            </h1>
          </div>
          <div className="bg-white p-8 rounded-md shadow-lg">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={clientDetails.profileImage}
                    alt={`${clientDetails.name}'s Profile`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p>Name: {clientDetails.name}</p>
                  <p>Phone Number: {clientDetails.number}</p>
                  <p>Address: {clientDetails.address}</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Lot Information</h2>
              {clientDetails.lots.map((lot, lotIndex) => (
                <div key={lotIndex} className="mb-4">
                  <p>Lot Number: {lot.lotNumber}</p>
                  <h3 className="text-lg font-semibold">Payment History</h3>
                  <table className="w-full bg-white border border-gray-300">
                    <thead>
                      <tr>
                        <th className="py-3 px-6 text-left">#</th>
                        <th className="py-3 px-6 text-left">Date</th>
                        <th className="py-3 px-6 text-left">Amount</th>
                        <th className="py-3 px-6 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lot.payments.map((payment, paymentIndex) => (
                        <tr
                          key={paymentIndex}
                          className={
                            paymentIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }
                        >
                          <td className="py-3 px-6">{paymentIndex + 1}</td>
                          <td className="py-3 px-6">{payment.date}</td>
                          <td className="py-3 px-6">{payment.amount}</td>
                          <td className="py-3 px-6">{payment.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold">Payment Summary</h4>
                    <p>
                      Total Payment Made:{" "}
                      {calculatePaymentSummary([lot]).totalPaymentMade}
                    </p>
                    <p>
                      Total Balance:{" "}
                      {calculatePaymentSummary([lot]).totalBalance}
                    </p>
                    <p>
                      Months Paid: {calculatePaymentSummary([lot]).monthsPaid}
                    </p>
                    <p>
                      Remaining Months:{" "}
                      {calculatePaymentSummary([lot]).remainingMonths}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Overall Payment Summary</h3>
              <p>
                Total Payment Made:{" "}
                {calculatePaymentSummary(clientDetails.lots).totalPaymentMade}
              </p>
              <p>
                Total Balance:{" "}
                {calculatePaymentSummary(clientDetails.lots).totalBalance}
              </p>
              <p>
                Months Paid:{" "}
                {calculatePaymentSummary(clientDetails.lots).monthsPaid}
              </p>
              <p>
                Remaining Months:{" "}
                {calculatePaymentSummary(clientDetails.lots).remainingMonths}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Client;
