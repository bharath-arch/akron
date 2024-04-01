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
    <div className="container">
      <section className="search-bar">
        <div className=" gap-2 w-full md:flex">
          <div className="flex gap-2 items-center my-3 ">
            <input
              type="text"
              placeholder="Filter"
              className="w-auto px-3  py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <IoFilter size={25} className="-ml-9 mt-1" />
          </div>
          <div className="flex gap-2 items-center my-3">
            {" "}
            <input
              type="text"
              placeholder="Sort By"
              className="w-auto px-3 py-2 border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <MdSort size={25} className=" -ml-9" />{" "}
          </div>

          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search..."
              className={`w-[30rem] px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500`}
            />
            <AiOutlineSearch size={25} className="-ml-10 mt-1" />
          </div>
        </div>
      </section>
      <section className="flex flex-wrap gap-5 mt-9 w-full justify-center">
        {companies_data.map((data, index) => (
          <div
            key={index}
            className={`w-full sm:mb-0 sm:mr-0 
                     
                     md:w-1/4 h-auto bg-gray-200 p-2  mr-4  shadow-md rounded-md `}
          >
            <span className="flex justify-center text-center flex-col">
              {data.Company_name}
              <br />
              {data.Sector}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Id;
