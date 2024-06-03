import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Search_filter from "../components/Search_filter";

function Id() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
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
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <section className="mb-6">
        <Search_filter />
      </section>

      {error && <p className="text-red-500">{error.message}</p>}

      {data && (
        <section className="flex flex-wrap gap-5 mt-9 w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-300 to-gray-100  p-5 shadow-md rounded-md cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => navigate("/user/wealth")}
            >
              <div className="text-center">
                <span className="block font-semibold text-2xl">{item.company_name}</span>
                <span className="block text-lg text-gray-700">{item.sector}</span>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default Id;
