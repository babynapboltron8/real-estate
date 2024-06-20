"use client";

import { saveAs } from "file-saver";

export default function PriceList() {
  const downloadPriceList = () => {
    const csvContent =
      "Block,Lot,Price\nBlock 1,Lot 1,$50.00\nBlock 2,Lot 2,$60.00";
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "price_list.csv");
  };

  return (
    <div>
      <button
        className="border border-gray-300 rounded-md mb-4 px-5 py-2 text-sm font-semibold text-gray-600"
        onClick={downloadPriceList}
      >
        Download Price List
      </button>
    </div>
  );
}
