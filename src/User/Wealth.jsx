import React, { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { MdPictureAsPdf } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import axios from "axios";

function Wealth() {
  const [data, setData] = useState();
  const [exceldata, setExceldata] = useState();
  const [count, setCount] = useState(0);
  const [view, setView] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/company_approve/dashboard_data"
        );

        const filteredData = response.data.result.filter(
          (item) => item.status === true
        );
        // console.log(filteredData);

        setData(filteredData);
        console.log();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  const handleClick = async () => {
    const id = data[count]._id;
    setView(!view);
    try {
      const response = await axios.post(
        `http://localhost:4000/company_data/${id}`
      );
      setExceldata(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

 // Make sure you have a condition to check if exceldata and its properties exist before accessing them



  const handlePrevious = () => {
    if (count === 0) {
      setCount(data.length - 1);
    } else {
      setCount((count) => count - 1);
    }
  };
  const handleNext = () => {
    if (count === data.length - 1) {
      setCount(0);
    } else {
      setCount((count) => count + 1);
    }
  };
console.log(exceldata)
  return (
    <section className="">
      <div className="md:flex md:justify-between  hidden text-blue-800 ">
        <button className="flex items-center" onClick={handlePrevious}>
          {" "}
          <GrPrevious />
          Previous
        </button>
        <button className="flex items-center" onClick={handleNext}>
          {" "}
          Next <GrNext />
        </button>
      </div>
      <div className="flex  mr-2 md:mr-0 mb-3  items-center w-full justify-end">
        <span className="flex justify-end w-full text-blue-800 text-lg md:hidden">
          {" "}
          Next
        </span>
        <div className="left-7/12 md:hidden">
          {" "}
          {/* Centered on mobile */}
          <span>
            <GrNext />
          </span>
        </div>
      </div>
      <div className="w-full h-full bg-gradient-to-br pt-5 pr-8 pl-8">
        <div className="flex flex-col">
          <span className="font-bold text-3xl">
            {data && data[count].company_name}
          </span>
          <span className="mt-2">
            <span className="font-bold">Sector :</span>{" "}
            {data && data[count].sector}
          </span>
          <span className="mt-2 font-semibold text-xl">About</span>
          <span className="mt-2 font-semibold ">Product Discription</span>
          <span className="mt-2">
            {" "}
            {data && data[count].previous_fundraising_rounds_discription}
          </span>
          <span className="mt-2 font-semibold ">
            Previous Fund Raising Round
          </span>
          <span className="mt-2">
            {" "}
            {data && data[count].product_discription}
          </span>
          <span className="mt-2 font-semibold ">Traction</span>
          <span className="mt-2"> {data && data[count].traction}</span>
        </div>
        <div className="flex gap-x-5  mt-9 mb-5 ">
          {" "}
          {/* Wrap content on mobile */}
          <div
            className={`h-auto flex flex-wrap 
                     
                     md:w-full  gap-10`}
          >
            {" "}
            {/* Adjust grid columns for mobile */}
            <span>
              <span className="font-bold">Mkt Cap :</span>{" "}
              {data && data[count].market_cap} Cr.
            </span>
            <span>
              <span className="font-bold">P/E Ratio : </span> xx.x
            </span>
            <span>
              <span className="font-bold">Industry P/E :</span> xx.x
            </span>
            <span>
              <span className="font-bold">ROE :</span> xx
            </span>
            <span>
              <span className="font-bold">EPS :</span> xx
            </span>
            <span>
              <span className="font-bold">Previous Valuation :</span> xx Cr.
            </span>
            <span className="font-bold">Earnings YOY :</span>
            <div className="flex mt-2 md:mt-0">
              {" "}
              {/* Move together on mobile */}
              <span className="font-bold">Financial Report </span>
              <span className="ml-2">
                <MdPictureAsPdf
                  className="cursor-pointer"
                  size={25}
                  onClick={() => {
                    const pdfUrl = `http://localhost:4000/uploads/${data[count].financials}`;
                    const link = document.createElement("a");
                    link.href = pdfUrl;
                    link.download =
                      (data && data[count].financials) || "document.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        {view && (
          <div className="overflow-x-auto flex justify-center flex-col">
            {exceldata?.incomeExpenses.incomeExpenses &&
                exceldata.incomeExpenses.incomeExpenses.length > 0 ? (
                  <table className="table-auto border-collapse border border-gray-400 ">
                    <thead>
                      <tr className="bg-gray-200">
                        {/* Render an empty header for the first cell */}
                        <th className="p-3 text-center text-xs font-medium text-gray-700 uppercase border border-gray-400"></th>
                        {/* Render headers for each metric */}
                        {exceldata.incomeExpenses.incomeExpenses.map(
                          (column, index) => (
                            <th
                              key={index}
                              className="p-3 text-center text-xs font-medium text-gray-700 uppercase border border-gray-400"
                            >
                              {column.metric}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {exceldata.incomeExpenses.incomeExpenses.length > 0 &&
                        Array.from(
                          {
                            length:
                            exceldata.incomeExpenses.incomeExpenses[0].values
                                .length,
                          },
                          (_, index) => index
                        ).map((rowIndex) => (
                          <tr key={rowIndex} className="bg-white">
                            {/* Print the quarter in the left column */}
                            <td className="p-3 text-center text-sm text-gray-600 border border-gray-400">
                              {exceldata.incomeExpenses.quaters[rowIndex + 1]}{" "}
                              {/* Add +1 to skip the 'Column1' */}
                            </td>
                            {/* Print the data for each metric */}
                            {exceldata.incomeExpenses.incomeExpenses.map(
                              (column, colIndex) => (
                                <td
                                  key={colIndex}
                                  className="p-3 text-center text-sm text-gray-600 border border-gray-400"
                                >
                                  {column.values[rowIndex]}
                                </td>
                              )
                            )}
                          </tr>
                        ))}
                    </tbody>
                  </table>
            ) : (
              <span className="text-gray-600">No data available</span>
            )}
          </div>
        )}

        <div className="flex justify-end mr-8">
          <button className="text-blue-900 font-bold " onClick={handleClick}>
            {view ? "view less" : "view more"}
          </button>
        </div>
        <div className="flex justify-center items-center text-center mt-5">
          <GoGraph size={300} color="green" />
        </div>
      </div>
    </section>
  );
}

export default Wealth;
