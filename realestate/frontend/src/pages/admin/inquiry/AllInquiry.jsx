import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";

const AllInquiry = () => {
  const [inquiries] = useState([
    {
      id: 1,
      name: "John Doe",
      subject: "Product Inquiry",
      date: "2023-01-15T10:30:00Z",
      source: "Email",
    },
    {
      id: 2,
      name: "Jane Smith",
      subject: "Support Question",
      date: "2023-02-20T14:45:00Z",
      source: "Text",
    },
    // Add more inquiry data as needed
  ]);

  const formatShortDate = (fullDate) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(fullDate).toLocaleDateString("en-US", options);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredInquiries = inquiries.filter(
    (inquiry) =>
      inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === "all" || inquiry.source === filter)
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12 bg-gray-100">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">Inquiries</h1>
            <Link
              to="/admin/add-contact"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Add Contact
            </Link>
          </div>

          <div className="container mx-auto bg-white rounded-md shadow-lg p-8">
            <div className="flex items-center space-x-4 mb-4">
              {/* Add Search Bar */}
              <input
                type="text"
                placeholder="Search by name..."
                onChange={handleSearch}
                className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              {/* Add Filter Dropdown */}
              <select
                value={filter}
                onChange={handleFilterChange}
                className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="all">All Sources</option>
                <option value="Email">Email</option>
                <option value="Text">Text</option>
                {/* Add more sources as needed */}
              </select>
            </div>

            <table className="w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-3 px-6 text-left">ID</th>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Subject</th>
                  <th className="py-3 px-6 text-left">Date</th>
                  <th className="py-3 px-6 text-left">Source</th>
                  <th className="py-3 px-6 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInquiries.map((inquiry) => (
                  <tr key={inquiry.id}>
                    <td className="py-3 px-6">{inquiry.id}</td>
                    <td className="py-3 px-6">{inquiry.name}</td>
                    <td className="py-3 px-6">
                      <Link to={`/admin/view-message/${inquiry.id}`}>
                        {inquiry.subject}
                      </Link>
                    </td>
                    <td className="py-3 px-6">
                      {formatShortDate(inquiry.date)}
                    </td>
                    <td className="py-3 px-6">{inquiry.source}</td>
                    <td className="py-3 px-6">
                      <Link to={`/admin/view-message`}>View</Link>
                    </td>
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

export default AllInquiry;
