import React from "react";

const PriceList = () => {
  const priceList = [
    {
      blockNumber: "A",
      lotNumber: "001",
      houseType: "Single Detached",
      lotArea: 150,
      floorArea: 120,
      sellingPrice: 5000000,
      reservation: 50000,
      installment18Months: 300000,
    },
    {
      blockNumber: "B",
      lotNumber: "002",
      houseType: "Duplex",
      lotArea: 120,
      floorArea: 100,
      sellingPrice: 4000000,
      reservation: 40000,
      installment18Months: 250000,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Price List</h1>
          </div>
          <div className="container mx-auto bg-white rounded-md shadow-lg">
            <div className="p-8">
              <table className="w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-3 px-6 text-left">Block #</th>
                    <th className="py-3 px-6 text-left">Lot #</th>
                    <th className="py-3 px-6 text-left">House Type</th>
                    <th className="py-3 px-6 text-left">Lot Area (sqm)</th>
                    <th className="py-3 px-6 text-left">Floor Area</th>
                    <th className="py-3 px-6 text-left">Selling Price</th>
                    <th className="py-3 px-6 text-left">Reservation</th>
                    <th className="py-3 px-6 text-left">
                      Installment 18 Months
                    </th>
                    {/* Add more columns as needed */}
                  </tr>
                </thead>
                <tbody>
                  {priceList.map((entry, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="py-3 px-6">{entry.blockNumber}</td>
                      <td className="py-3 px-6">{entry.lotNumber}</td>
                      <td className="py-3 px-6">{entry.houseType}</td>
                      <td className="py-3 px-6">{entry.lotArea}</td>
                      <td className="py-3 px-6">{entry.floorArea}</td>
                      <td className="py-3 px-6">
                        &#8369;{entry.sellingPrice.toLocaleString()}
                      </td>
                      <td className="py-3 px-6">
                        &#8369;{entry.reservation.toLocaleString()}
                      </td>
                      <td className="py-3 px-6">
                        &#8369;{entry.installment18Months.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PriceList;
