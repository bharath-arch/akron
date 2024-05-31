import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoFilter } from "react-icons/io5";
import { MdSort } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Search_filter from "../components/Search_filter";

function Id() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/company_approve/dashboard_data"
        );
        console.log(response.data);
        const setfilterData = response.data.result.filter(
          (item) => item.status === true
        );
        setData(setfilterData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section>
        <Search_filter />
      </section>
      {data && (
        <section className="flex flex-wrap gap-5 mt-9 w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 p-5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 cursor-pointer"
              onClick={() => navigate("/user/wealth")}
            >
              <span className="block text-center">
                <b>{item.company_name}</b>
                {item.sector}
              </span>
            </div>
          ))}
        </section>
      )}
    </>
  );
}

export default Id;


//chat GPT