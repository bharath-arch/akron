import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoFilter } from "react-icons/io5";
import { MdSort } from "react-icons/md";
import axios from 'axios'

function Portfolio() {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:4000/company_approve/dashboard_data"
  //       );
  //       console.log(response.data);
  //       setData(response.data.result);
  //     } catch (error) {
  //       setError(error);
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <div className="">
      <section className="search-bar">
        <div className=" gap-2 w-full md:flex ">
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
      <section className="mt-6">
        <div className="flex items-center h-[120px] w-[95%] bg-gradient-to-br from-gray-300 to-gray-100">
          <div className="p-3 ">
            <div className="flex flex-col ">
              <span className=" mt- font-semibold text-xl mb-2">Company1</span>
              <span>Invested Amount : <span>10000 &#8377;</span></span>
              <div className="mt-2">
                <button class="px-3 py-2 text-xl rounded-md text-white w-[8rem] bg-red-700 font-arima hover:bg-red-800 transition-transform duration-300 ease-in-out transform hover:scale-95 ">
                  Sell
                </button>
                <button class="px-3 ml-2 py-2 text-xl rounded-md text-white w-[8rem] bg-blue-700 font-arima hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-95 ">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Portfolio
