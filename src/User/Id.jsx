import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoFilter } from "react-icons/io5";
import { MdSort } from "react-icons/md";
import axios from 'axios'

function Id() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/company_approve/dashboard_data"
        );
        console.log(response.data);
        setData(response.data.result);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    fetchData();
  }, []);
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
        {data.map((data, index) => (
          <div
            key={index}
            className={`w-full sm:mb-0 sm:mr-0 
                     
                     md:w-1/4 h-auto bg-gray-200 p-2  mr-4  shadow-md rounded-md `}
          >
            <span className="flex justify-center text-center flex-col">
              {data.company_name}
              <br />
              {data.sector}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Id;
