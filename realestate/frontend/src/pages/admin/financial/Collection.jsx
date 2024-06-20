import React, { useState } from "react";
import Sidebar from "/src/components/Sidebar";

const CollectionPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [timeRangeFilter, setTimeRangeFilter] = useState("all");

  const transactions = [
    {
      id: 1,
      clientName: "Client 1",
      amount: 5000,
      status: "Pending",
      date: "2023-01-15",
    },
    {
      id: 2,
      clientName: "Client 2",
      amount: 8000,
      status: "Paid",
      date: "2023-02-20",
    },
    {
      id: 3,
      clientName: "Client 3",
      amount: 3500,
      status: "Delayed",
      date: "2023-03-10",
    },
    // Add more transaction data as needed
  ];

  const statusOptions = ["all", "Pending", "Paid", "Delayed", "Backout"];
  const timeRangeOptions = ["all", "Weekly", "Monthly"];

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const handleStatusFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setStatusFilter(selectedFilter);
  };

  const handleTimeRangeFilterChange = (e) => {
    const selectedTimeRange = e.target.value;
    setTimeRangeFilter(selectedTimeRange);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    const searchTermMatches = transaction.clientName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const statusFilterMatches =
      statusFilter === "all" || transaction.status === statusFilter;
    const timeRangeFilterMatches =
      timeRangeFilter === "all" ||
      (timeRangeFilter === "Weekly" && isWithinWeek(transaction.date)) ||
      (timeRangeFilter === "Monthly" && isWithinMonth(transaction.date));

    return searchTermMatches && statusFilterMatches && timeRangeFilterMatches;
  });

  const isWithinWeek = () => {
    // Add logic to check if the date is within the current week
    // You can use external libraries like date-fns or write custom logic
    return true;
  };

  const isWithinMonth = () => {
    // Add logic to check if the date is within the current month
    // You can use external libraries like date-fns or write custom logic
    return true;
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12 bg-gray-100">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              Payment Collection
            </h1>
          </div>

          <div className="container mx-auto bg-white rounded-md shadow-lg p-8">
            <div className="flex flex-col md:flex-row space-x-4 space-y-4 md:space-y-0 items-start md:items-center">
              <div className="flex gap-4 items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="px-2 md:px-6 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="flex gap-4 items-center">
                <select
                  value={statusFilter}
                  onChange={handleStatusFilterChange}
                  className="px-2 md:px-6 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  {statusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option === "all" ? "All" : option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-4 items-center">
                <select
                  value={timeRangeFilter}
                  onChange={handleTimeRangeFilterChange}
                  className="px-2 md:px-6 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  {timeRangeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option === "all" ? "All" : option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <table className="w-full bg-white border border-gray-300 mt-4">
              <thead>
                <tr>
                  <th className="py-3 px-6 text-left">#</th>
                  <th className="py-3 px-6 text-left">Client Name</th>
                  <th className="py-3 px-6 text-left">Amount</th>
                  <th className="py-3 px-6 text-left">Status</th>
                  <th className="py-3 px-6 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction, index) => (
                  <tr
                    key={transaction.id}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">{transaction.clientName}</td>
                    <td className="py-3 px-6">{transaction.amount}</td>
                    <td className="py-3 px-6">{transaction.status}</td>
                    <td className="py-3 px-6">{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CollectionPage;
