import React, { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

function MiniPortfolio({ handleclosetogglebutton, selectedLots }) {
  // Correctly destructure props
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = () => {};

  return (
    <div className="w-full md:w-96 border-2 p-3 bg-white">
      <div className="relative mb-3">
        <span
          onClick={handleclosetogglebutton}
          className="absolute right-4 top-0 cursor-pointer"
        >
          <IoCloseOutline size={23} className="hover:bg-red-600" />
        </span>
      </div>
      <span className="font-semibold text-xl">Add Money</span>
      <div className="mt-2">
        <input
          ref={inputRef}
          type="text"
          onChange={handleChange}
          placeholder="Enter lot Amount"
          className="mb-2 w-full px-1 py-1 border border-gray-300 focus:outline-none focus:ring-1 text-black focus:ring-blue-500 bg-gray-300"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Price"
          className="mb-2 w-full px-1 py-1 border border-gray-300 focus:outline-none focus:ring-1 text-black focus:ring-blue-500 bg-gray-300"
        />
      </div>

      <div className="flex justify-center mt-2">
        <div className="w-full h-30 border-2 p-3">
          <div className="flex justify-between mb-1">
            <span className="text-gray-400">Before</span>
            <span className="text-gray-400">{selectedLots}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-gray-400">To sell</span>
            <span className="text-gray-400"></span>
          </div>
          <hr className="border-gray-300" />
          <div className="flex justify-between mb-1">
            <span className="text-gray-400">After</span>
            <span className="text-gray-400">{selectedLots}</span>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <button className="border bg-blue-600 hover:bg-blue-700 text-white px-8 py-1 font-arima rounded-lg">
          Pay
        </button>
      </div>
    </div>
  );
}

export default MiniPortfolio;
