"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";

export default function MapSelection() {
  const [selectedItems, setSelectedItems] = useState([
    { block: "Block 1", lot: "Lot 1" },
  ]);
  const router = useRouter();

  const handleSelectionChange = (event, index, key) => {
    const updatedItems = [...selectedItems];
    updatedItems[index][key] = event.target.value;
    setSelectedItems(updatedItems);
  };

  const handleAddSelection = () => {
    setSelectedItems([...selectedItems, { block: "", lot: "" }]);
  };

  const handleDeleteSelection = (index) => {
    const updatedItems = selectedItems.filter((_, i) => i !== index);
    setSelectedItems(updatedItems);
  };

  const calculateTotalPrice = () => {
    // Replace this with your pricing mechanism
    const pricing = {
      "Block 1": { "Lot 1": 5000, "Lot 2": 6000, "Lot 3": 7000 },
      // Add pricing for other blocks and lots
    };

    let total = 0;
    selectedItems.forEach((item) => {
      const block = item.block;
      const lot = item.lot;
      if (block && lot && pricing[block] && pricing[block][lot]) {
        total += pricing[block][lot];
      }
    });

    return total;
  };

  const handleSubmit = () => {
    const hasValidSelection = selectedItems.some(
      (item) => item.block !== "" && item.lot !== ""
    );

    if (hasValidSelection) {
      const total = calculateTotalPrice();
      router.push(`/info-sheet?total=${total}`);
    } else {
      alert("Please select at least one block and lot before proceeding.");
    }
  };

  return (
    <div className=" sm:mt-8">
      {selectedItems.map((item, index) => (
        <div key={index} className="flex  space-x-4 mt-4">
          <div className="w-full text-start flex gap-4 items-center">
            <select
              className="border rounded-md p-2 outline-none w-full"
              id={`block-${index}`}
              onChange={(e) => handleSelectionChange(e, index, "block")}
              value={item.block}
            >
              <option value="Block 1">Block</option>
              <option value="Block 2">Block 2</option>
              <option value="Block 3">Block 3</option>
            </select>
          </div>
          <div className="w-full text-start flex gap-4 items-center">
            <select
              className="border rounded-md p-2 outline-none w-full"
              id={`lot-${index}`}
              onChange={(e) => handleSelectionChange(e, index, "lot")}
              value={item.lot}
            >
              <option value="Lot 1">Lot</option>
              <option value="Lot 1">Lot 1</option>
              <option value="Lot 2">Lot 2</option>
              <option value="Lot 3">Lot 3</option>
            </select>
          </div>
          <button
            className="hover:text-red-600"
            type="button"
            onClick={() => handleDeleteSelection(index)}
          >
            <IoMdClose size={20} />
          </button>
        </div>
      ))}
      <div className="flex gap-4 items-center mt-6 justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 rounded-xl  px-5 py-3 text-sm font-semibold text-white"
          type="button"
          onClick={handleAddSelection}
        >
          Add Lot
        </button>
        <button
          className="  bg-blue-500 hover:bg-blue-600  rounded-xl px-5 py-3 font-semibold text-sm text-white"
          type="button"
          onClick={handleSubmit}
        >
          Continue <span className="text-base">&rarr;</span>
        </button>
      </div>
    </div>
  );
}
