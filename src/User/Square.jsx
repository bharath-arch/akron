import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import Search_filter from "../components/Search_filter";

function Square() {
  const [data, setData] = useState([]);

  
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
    <>
      <section>
      <Search_filter />
      </section>

      {data &&
        data.length > 0 &&
        data.map((item, index) => (
          <section key={index} className="mt-6">
            {item.status === true && (
              <div className="flex items-center h-[120px] w-[95%] bg-gradient-to-br from-gray-300 to-gray-100">
                <div className="p-3">
                  <div className="flex flex-col">
                    <>
                      <span className="mt- font-semibold text-xl mb-2">
                        {item.company_name}
                      </span>
                      <span>
                        Investment Amount: <span>10000 &#8377;</span>
                      </span>
                      <div className="mt-2">
                        <button className="px-3 py-2 text-xl rounded-md text-white w-[8rem] bg-blue-700 font-arima hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-95 ">
                          Buy
                        </button>
                        <button className="px-3 ml-2 py-2 text-xl rounded-md text-white w-[8rem] bg-blue-700 font-arima hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-95 ">
                          View More
                        </button>
                      </div>
                    </>
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}
    </>
  );
}

export default Square;
