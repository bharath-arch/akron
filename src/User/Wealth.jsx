import React, { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { MdPictureAsPdf } from "react-icons/md";
import axios from "axios";
import Graph from "../components/Graph";
import toast, { Toaster } from "react-hot-toast";

function Wealth() {
  const [data, setData] = useState([]);
  const [exceldata, setExceldata] = useState(null);
  const [count, setCount] = useState(0);
  const [view, setView] = useState(false);
  const [lots, setLots] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/company_approve/dashboard_data"
        );
        const filteredData = response.data.result.filter(
          (item) => item.status === true
        );
        setData(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [lots]);

  const positivelotshandle = () => {
    if (lots >= data[count].lots) {
      setLots(data[count].lots);
    } else {
      setLots((pre) => pre + 1);
    }
  };

  const negativelotshandle = () => {
    if (lots <= 1) {
      setLots(1);
    } else {
      setLots((pre) => pre - 1);
    }
  };

  const handleLotsize = async () => {
    const id = data[count]?._id;
    //userEmail
    const email = localStorage.getItem("userEmail");
    const companyName = data[count].company_name;
    const companyEmail = data[count].email;
    const price = lots * 10000;
    console.log(companyEmail)
    console.log(lots)

    try {
      const response = await axios.put("http://localhost:4000/LotsData/", {
        id,
        email,
        lots,
        companyName,
        companyEmail,
        price,
      });
      if (response.data.message !== "Updated") {
        if (response.data.message === "please do kyc befor investing...") {
          toast.error("please do kyc befor investing...");
        } else {

          toast.error("insufficient Money!");
        }
      }
      else {
        toast.success(`${lots} Lots buyed`);
      }
      setLots(1);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const functionCall = async () => {
      if (data.length > 0) {
        const id = data[count]._id;
        try {
          const response = await axios.post(
            `http://localhost:4000/company_data/${id}`
          );
          setExceldata(response.data.result);
        } catch (error) {
          console.log(error);
        }
      }
    };
    functionCall();
  }, [data, count]);

  const handleClick = () => {
    setView(!view);
  };

  const handlePrevious = () => {
    setCount(count === 0 ? data.length - 1 : count - 1);
  };

  const handleNext = () => {
    setCount(count === data.length - 1 ? 0 : count + 1);
  };

  return (
    <section className="container mx-auto md:p-5">
      <Toaster position="top-center" reverseOrder={false} />
      <div className=" flex justify-between  text-blue-800">
        <button className="flex items-center" onClick={handlePrevious}>
          <GrPrevious />
          Previous
        </button>
        <button className="flex items-center" onClick={handleNext}>
          Next <GrNext />
        </button>
      </div>


      <div className="w-full h-full bg-gradient-to-br p-1 md:pt-5 md:pr-8 md:pl-8">
        {data[count]?.lots === 0 ? ('Lots are Taken please Check Squre for lots Avalibility') : (<p className="font-semibold text-sm mt-2 md:mt-0 md:text-xl ">Investment Amount - {lots * 10000}</p>)}

        <div className="flex flex-col">
          <div className="flex justify-between ">
            <span className="font-bold text-2xl mt-2  md:text-3xl">
              {data && data[count]?.company_name}
            </span>
            {data[count]?.lots === 0 ? ('') : (<>
              <div className="flex gap-2 text-center items-center">
                <button
                  className="p-2 border cursor-pointer select-none"
                  onClick={negativelotshandle}
                >
                  &minus;
                </button>

                <button
                  className="p-2 cursor-pointer bg-blue-700 text-white rounded-md px-3 md:px-6 text-lg md:text-xl hover:scale-95 "
                  onClick={handleLotsize}
                >
                  Buy {lots} lots
                </button>
                <button
                  className="p-2 border cursor-pointer select-none"
                  onClick={positivelotshandle}
                >
                  &#43;
                </button>
              </div>
            </>)}


          </div>
          <span className="mt-2">
            <span className="font-bold">Sector :</span>{" "}
            {data && data[count]?.sector}
          </span>
          <span className="mt-2 font-semibold text-xl">About</span>
          <span className="mt-2 font-semibold ">Product Description</span>
          <span className="mt-2">
            {data && data[count]?.product_discription}
          </span>
          <span className="mt-2 font-semibold ">
            Previous Fund Raising Round
          </span>
          <span className="mt-2">
            {data && data[count]?.previous_fundraising_rounds_discription}
          </span>
          <span className="mt-2 font-semibold ">Traction</span>
          <span className="mt-2"> {data && data[count]?.traction}</span>
        </div>
        <div className="flex md:gap-x-5 mt-9 mb-5 ">
          <div className="h-auto flex flex-wrap md:w-full gap-10">
            <span>
              <span className="font-bold">Mkt Cap :</span>{" "}
              {data && data[count]?.market_cap} Cr.
            </span>
            {/* <span>
              <span className="font-bold">P/E Ratio :</span> xx.x
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
            </span> */}
            <span>
              <span className="font-bold">Target Amount :</span>{" "}
              {data[count]?.amount_expected_to_raise} Cr.
            </span>
            <span>
              <span className="font-bold">Lot Size:</span> {data[count]?.lots}{" "}
              Lots
            </span>
            {/* <div className="flex mt-2 md:mt-0 items-center"> */}
            <span className="flex">
              <span className="font-bold">Financial Report</span>
              <span className="ml-2">
                <MdPictureAsPdf
                  className="cursor-pointer"
                  size={25}
                  onClick={() => {
                    const pdfUrl = `http://localhost:4000/uploads/${data[count].financials}`;
                    const link = document.createElement("a");
                    link.href = pdfUrl;
                    link.download =
                      (data && data[count]?.financials) || "document.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                />
              </span>

            </span>
            {/* </div> */}
          </div>
        </div>
        <div className="mr-8">
          {exceldata && (

            <Graph data={exceldata} />

          )}</div>

        {view && (
          <div className="overflow-x-auto flex justify-center flex-col">
            {exceldata?.incomeExpenses.incomeExpenses &&
              exceldata.incomeExpenses.incomeExpenses.length > 0 ? (
              <table className="table-auto border-collapse border border-gray-400">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-3 text-center text-xs font-medium text-gray-700 uppercase border border-gray-400"></th>
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
                  {exceldata.incomeExpenses.incomeExpenses[0].values.map(
                    (value, rowIndex) => (
                      <tr key={rowIndex} className="bg-white">
                        <td className="p-3 text-center text-sm text-gray-600 border border-gray-400">
                          {exceldata.incomeExpenses.quaters[rowIndex + 1]}
                        </td>
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
                    )
                  )}
                </tbody>
              </table>
            ) : (
              <span className="text-gray-600">No data available</span>
            )}
          </div>
        )}
        <div className="flex justify-end mr-8">
          <button
            className="text-blue-900 font-bold mb-20"
            onClick={handleClick}
          >
            {view ? "view less" : "view more"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Wealth;
