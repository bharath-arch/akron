import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoFilter } from "react-icons/io5";
import { MdSort } from "react-icons/md";

const companies_data = [
  { id: 1, Company_name: "Company", Sector: "CEO", image: "" },
  { id: 2, Company_name: "Company", Sector: "CFO", image: "" },
  { id: 3, Company_name: "Company", Sector: "Developer", image: "" },
  { id: 4, Company_name: "Company", Sector: "Developer", image: "" },
  {
    id: 5,
    Company_name: "Company",
    Sector: "Developer",
    image: "../assets/ceo.png",
  },
  {
    id: 6,
    Company_name: "Company",
    Sector: "Investment Advisor",
    image: "../assets/ceo.png",
  },
  {
    id: 7,
    Company_name: "Company",
    Sector: "Investment Advisor",
    image: "../assets/ceo.png",
  },
  {
    id: 8,
    Company_name: "Company",
    Sector: "Investment Advisor",
    image: "../assets/ceo.png",
  },
];

function Id() {
  return (
    <div>
      
      <section>
        <div className="">
          <span className="font-bold text-2xl ">Live Opportunities</span>
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
      <section className="mt-8">
        <div className="w-[96%] h-auto bg-gray-200">
          <div className="ml-6 pt-8 pb-8">
            <div className="flex justify-center ">
              <div className=" grid grid-cols-4 gap-6 sm:grid-cols-auto">
                {companies_data.map((data, index) => (
                  <div className=" border-2  bg-gray-300  w-[16rem] h-[5rem] ">
                    <span
                      key={index}
                      className="flex justify-center text-center flex-col"
                    >
                      {data.Company_name} <br />
                      {data.Sector}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Id;
