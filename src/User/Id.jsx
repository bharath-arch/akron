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
        setError(error);
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <section>
        <Search_filter />
      </section>
      {data && (
        <section className="flex flex-wrap gap-5 mt-9 w-full ">
          {data.map((data, index) => (
            <div
              key={index}
              className={` sm:mb-0 sm:mr-0 
                      bg-gray-200 p-5  mr-4   shadow-md rounded-md  cursor-pointer`}
            >
              {/* <span>{data._id}</span> */}

              <span
                className="flex justify-center text-center flex-col"
                onClick={() => navigate("/user/wealth")}
              >
                <b>{data.company_name}</b>
                {data.sector}
              </span>
            </div>
          ))}
        </section>
      )}
    </>
  );
}

export default Id;
