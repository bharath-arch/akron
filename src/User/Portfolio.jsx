import React, { useEffect, useState } from "react";
import Search_filter from "../components/Search_filter";
import MiniPortfolio from "./components/miniPortfolio";
import axios from "axios";

function Portfolio() {
  const [data, setData] = useState();
  const [selectedLots, setSelectedLots] = useState(null); // Add state for selected lots
  const [error, setError] = useState(null);
  const [toggle, setActivetoggle] = useState(false);
  //userEmail
  const email = localStorage.getItem("userEmail");

  const handletogglebutton = (lots, companyId, companyName) => {
    setActivetoggle(true);
    setSelectedLots({ lots, companyId, companyName }); // Set selected lots
    console.log(lots, companyId, companyName);
  };

  const handleclosetogglebutton = () => {
    setActivetoggle(false);
    setSelectedLots(null); // Reset selected lots when closing the toggle
  };

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

  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState();


  const searchContent = (searchValue) => {
    setSearch(searchValue);
  };
  
  const dropDownContent = (dropdownfromChild)=>{
    setDropdown(dropdownfromChild)
  }
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
    <section className="mb-6">
      <Search_filter data={data} searchContents={searchContent} dropDown = {dropDownContent} />
    </section>

      <section className="mt-6">
        {data && data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data?.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                {console.log(index)}
                <span className="font-semibold text-xl mb-2 block truncate">
                  {item.companyName}
                </span>
                <span className="block mb-1 truncate">
                  Invested Amount: <span>{item.amountInvested} &#8377;</span>
                </span>
                <span className="block mb-2 truncate">
                  Lot size: <span>{item.lots} </span>
                </span>
                <div className="mt-2 flex justify-between">
                  <button
                    className="px-3 py-1 text-xl rounded-md text-white bg-red-700 font-arima hover:bg-red-800 transition-transform duration-300 ease-in-out transform hover:scale-95"
                    onClick={() =>
                      handletogglebutton(
                        item.lots,
                        item.companyId,
                        item.companyName
                      )
                    } // Pass lots value to the function
                  >
                    Sell
                  </button>
                  {/* <button className="px-3 py-1 text-xl rounded-md text-white bg-blue-700 font-arima hover:bg-blue-800 transition-transform duration-300 ease-in-out transform hover:scale-95">
                    View More
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {" "}
            <p className="text-gray-500 text-center">No data available</p>
          </>
        )}
        <div className="flex justify-center">
          {error && <p className="text-red-500 mt-4">{error.message}</p>}
          {toggle && (
            <MiniPortfolio
              handleclosetogglebutton={handleclosetogglebutton}
              selectedLots={selectedLots} // Pass selected lots to MiniPortfolio
            />
          )}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
