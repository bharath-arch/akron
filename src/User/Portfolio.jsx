import React, { useEffect, useRef, useState } from "react";
import Search_filter from "../components/Search_filter";
import MiniPortfolio from './components/miniPortfolio'

import axios from "axios";

function Portfolio() {
  const [data, setData] = useState();


  const [error, setError] = useState(null);
  const [toggle, setActivetoggle] = useState(false);
  const email = localStorage.getItem("email");

  
  const handletogglebutton = ()=>{
    setActivetoggle(true);
  }

  const handleclosetogglebutton =()=>{
    setActivetoggle(false);
  }
  useEffect(() => {
    const fetchLotData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/LotsData/getLotData",
          {
            params: { email },
          }
        );
        setData(response.data.result);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    fetchLotData();
  }, [email]);

  console.log(data);

  return (
    <div className="container mx-auto p-4">

      <section className="mb-6">
        <Search_filter />
      </section>
     

      <section className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <span className="font-semibold text-xl mb-2 block truncate">
                {item.companyName}
              </span>
              <span className="block mb-1 truncate">
                Invested Amount: <span>{item.lots * 10000} &#8377;</span>
              </span>
              <span className="block mb-2 truncate">
                Lot size: <span>{item.lots} </span>
              </span>
              <div className="mt-2 flex justify-between">
                <button className="px-3 py-1 text-xl rounded-md text-white bg-red-700 font-arima hover:bg-red-800 transition-transform duration-300 ease-in-out transform hover:scale-95" onClick={handletogglebutton}>
                  Sell
                </button>
                <button className="px-3 py-1 text-xl rounded-md text-white bg-blue-700 font-arima hover:bg-blue-800 transition-transform duration-300 ease-in-out transform hover:scale-95">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {error && <p className="text-red-500 mt-4">{error.message}</p>}
      {toggle && (<MiniPortfolio handleclosetogglebutton ={handleclosetogglebutton}/>)}
      
    </div>
  );
}

export default Portfolio;
