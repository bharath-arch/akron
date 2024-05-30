import React, { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { MdPictureAsPdf } from "react-icons/md";
import axios from "axios";
import Graph from "../components/Graph";

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
  }, []);

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
    const email = localStorage.getItem("email");
    const companyName = data[count].company_name;

    try {
      const response = await axios.put("http://localhost:4000/LotsData/", {
        id,
        email,
        lots,
        companyName,
      });

      console.log(response);
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
    <section className="">
      <div className="md:flex md:justify-between hidden text-blue-800">
        <button className="flex items-center" onClick={handlePrevious}>
          <GrPrevious />
          Previous
        </button>
        <button className="flex items-center" onClick={handleNext}>
          Next <GrNext />
        </button>
      </div>
      <div className="flex mr-2 md:mr-0 mb-3 items-center w-full justify-end">
        <span className="flex justify-end w-full text-blue-800 text-lg md:hidden">
          Next
        </span>
        <div className="left-7/12 md:hidden">
          <span>
            <GrNext />
          </span>
        </div>
      </div>

      <div className="w-full h-full bg-gradient-to-br pt-5 pr-8 pl-8">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <span className="font-bold text-3xl">
              {data && data[count]?.company_name}
            </span>
            <div className="flex gap-2 text-center items-center">
              <span
                className="p-2 border cursor-pointer"
                onClick={positivelotshandle}
              >
                +
              </span>
              <button
                className="p-2 cursor-pointer bg-blue-700 text-white rounded-md px-6 text-xl hover:scale-95 "
                onClick={handleLotsize}
              >
                Buy {lots} lots
              </button>
              <span
                className="p-2 border cursor-pointer"
                onClick={negativelotshandle}
              >
                -
              </span>
            </div>
          </div>
          <span className="mt-2">
            <span className="font-bold">Sector :</span>{" "}
            {data && data[count]?.sector}
          </span>
          <span className="mt-2 font-semibold text-xl">About</span>
          <span className="mt-2 font-semibold ">Product Description</span>
          <span className="mt-2">
            {data && data[count]?.previous_fundraising_rounds_description}
          </span>
          <span className="mt-2 font-semibold ">
            Previous Fund Raising Round
          </span>
          <span className="mt-2">
            {data && data[count]?.product_description}
          </span>
          <span className="mt-2 font-semibold ">Traction</span>
          <span className="mt-2"> {data && data[count]?.traction}</span>
        </div>
        <div className="flex gap-x-5 mt-9 mb-5">
          <div className="h-auto flex flex-wrap md:w-full gap-10">
            <span>
              <span className="font-bold">Mkt Cap :</span>{" "}
              {data && data[count]?.market_cap} Cr.
            </span>
            <span>
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
            </span>
            <span>
              <span className="font-bold">Target Amount :</span>{" "}
              {data[count]?.amount_expected_to_raise} Cr.
            </span>
            <span>
              <span className="font-bold">Lot Size:</span> {data[count]?.lots}{" "}
              Lots
            </span>
            <div className="flex mt-2 md:mt-0">
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
            </div>
          </div>
        </div>

        {exceldata && (
          <div className="flex justify-center items-center text-center mt-20">
            <Graph data={exceldata} />
          </div>
        )}

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
