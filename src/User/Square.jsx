import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoFilter } from "react-icons/io5";
import { MdSort } from "react-icons/md";

function Square() {
  return (
    <div className="">
      <section>
        <div className="">
          <span className="font-semibold text-2xl ">Trade Share's</span>
        </div>
        <div className="mt-5 ml-3">
          <div className="flex ">
            <div className="relative">
              <input
                type="text"
                placeholder="Filter"
                className="w-60 mr-5 px-3 py-2  border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <span className="absolute right-7  top-1/2 -translate-y-1/2 text-gray-400">
                {/* Icon placement */}
                <IoFilter size={25} />
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Sort By"
                className="w-60 px-3 mr-5 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <span className="absolute right-7 top-1/2 -translate-y-1/2 text-gray-400">
                {/* Icon placement */}
                <MdSort size={25} />
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-96 px-3 py-2  border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                {/* Icon placement */}
                <AiOutlineSearch size={25} />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-6">
        <div className="flex items-center h-[120px] w-[95%] bg-gradient-to-br from-gray-300 to-gray-100">
          <div className="p-3 ">
            <div className="flex flex-col ">
              <span className=" mt- font-semibold text-xl mb-2">Company1</span>
              <span>Investment Amount : <span>10000 &#8377;</span></span>
              <div className="mt-2">
                <button class="px-3 py-2 text-xl rounded-md text-white w-[8rem] bg-blue-700 font-arima hover:bg-blue-800">
                  Buy
                </button>
                <button class="px-3 ml-2 py-2 text-xl rounded-md text-white w-[8rem] bg-blue-700 font-arima hover:bg-blue-800">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Square;
