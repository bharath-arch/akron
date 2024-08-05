import axios from "axios";
import React, { useEffect, useState } from "react";
import Search_filter from "../components/Search_filter";
import toast, { Toaster } from "react-hot-toast";

function Square() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/square/squareData"
        );
        setData(response.data.result);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    fetchData();
  }, [data]);

  const handleBuy = async (companyId, amount, lots, companyName, sellEmail) => {
    // console.log(companyId, amount, lots, companyName, sellEmail);

    //userEmail
    const email = localStorage.getItem("userEmail");
    // console.log(sellEmail,'userEmail')

    try {
      const response = await axios.put(
        "http://localhost:4000/LotsData/squareLots",
        {
          companyId,
          amount,
          lots,
          companyName,
          sellEmail,
          email,
        }
      );
      if (response.data.message === 'please do Kyc before investing') {
        toast.error("please do kyc befor investing...");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(data);
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState();


  const searchContent = (searchValue) => {
    setSearch(searchValue);
  };

  const dropDownContent = (dropdownfromChild) => {
    setDropdown(dropdownfromChild)
  }
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <Toaster position="top-center" reverseOrder={false} />
      {/* <section className="mb-6">
      <Search_filter data={data} searchContents={searchContent} dropDown = {dropDownContent} />
      </section> */}

      {error && <p className="text-red-500">{error.message}</p>}

      {data && data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.filter((item) => {
            return (
              search.toLowerCase() === "" ? item :
                item.companyName.toLowerCase().includes(search.toLowerCase())
            );
          }).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="bg-gradient-to-br from-gray-300 to-gray-100 p-3">
                <div className="flex flex-col">
                  <span className="font-semibold text-lg sm:text-xl mb-2">
                    {item.companyName}
                  </span>
                  <span className="text-sm sm:text-base">
                    Investment Amount:{" "}
                    <span className="font-medium">&#8377;{item.amount}</span>
                  </span>
                  <span className="text-sm sm:text-base">
                    Lot Size: <span className="font-medium">{item.lots}</span>
                  </span>
                  <div className="mt-4 flex justify-between">
                    <button
                      className="px-4 py-2 text-lg sm:text-xl rounded-md text-white bg-blue-700 font-arima hover:bg-blue-800 transition-transform duration-300 ease-in-out transform hover:scale-95"
                      onClick={() => {
                        handleBuy(
                          item.companyId,
                          item.amount,
                          item.lots,
                          item.companyName,
                          item.email
                        );
                      }}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No data available</p>
      )}
    </div>
  );
}

export default Square;
