import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import setBodyColor from "../setBodyColor";
import axios from "axios";
import { MdPictureAsPdf } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import Spinner from "./Spinner";

function Application_data() {
  setBodyColor({ color: "lightgray" });

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [view, setView] = useState(false);

  const handleClick = () => {
    setView(!view);
  };

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `http://localhost:4000/company_data/${id}`
        );
        setData(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  console.log(data);
  const acceptCompany = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/company_approve/${id}`
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const rejectCompany = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/company_approve/rejectCompany/${id}`
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {data.isMatch ? (
        <section className="  ">
          <div>
            <div className="">
              <div className="flex justify-between text-center items-center ml-8 mr-8 mt-3">
                <div className="">
                  <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                    Akorn
                  </span>
                </div>
                <div className="flex gap-5 items-center text-center ">
                  <Link to="/admin_dashboard">
                    <span
                      className="font-semibold text-xl"
                      onClick={() => navigate("/admin_dashboard")}
                    >
                      Admin Dashboard
                    </span>
                  </Link>
                  <span className="text-xl">Logout</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[81rem] h-full bg-gradient-to-br m-10 from-gray-200 to-gray-100 pt-5 pr-8 pl-8">
            <div className="flex flex-col">
              <span className="font-bold text-3xl">
                <span>{data.isMatch.company_name}</span>
              </span>
              <span className="mt-2">
                <span className="font-bold">Sector :</span>{" "}
                <span>{data.isMatch?.sector}</span>
              </span>
              <span className="mt-2 font-semibold text-xl">About</span>

              <span className="mt-2 font-semibold text-xl">
                product discription
              </span>
              <span className="mt-2">
                <span>{data.isMatch?.product_discription}</span>
              </span>
              <span className="mt-2 font-semibold text-xl">Traction</span>
              <span className="mt-2">
                <span>{data.isMatch?.traction}</span>
              </span>
            </div>
            <div className="flex mt-4 ">
              <div className="grid grid-cols-6 gap-x-3 gap-y-3">
                <span>
                  <span className="font-bold">Mkt Cap :</span>{" "}
                  {data.isMatch?.market_cap} Cr.
                </span>
                <span>
                  <span className="font-bold">P/E Ratio : </span>
                </span>
                <span>
                  <span className="font-bold">Industry P/E :</span> xx.x
                </span>
                <span>
                  <span className="font-bold">ROE :</span> xx
                </span>
                <span>
                  <span className="font-bold">
                    EPS in{" "}
                    {data.incomeExpenses[10] &&
                      Object.keys(data.incomeExpenses[10])[0]}{" "}
                    :{" "}
                  </span>
                  {data.incomeExpenses[10] && data.incomeExpenses[10].values[0]}
                </span>

                <span>
                  <span className="font-bold">Previous Valuation :</span> xx Cr.
                </span>
              </div>{" "}
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <span>
                <span className="font-bold">Address :</span>{" "}
                {data.isMatch?.address}
              </span>
              <span>
                <span className="font-bold">Website :</span>{" "}
                {data.isMatch?.website}
              </span>
              <span>
                <span className="font-bold">Founder's LinkedIn URL :</span>{" "}
                {data.isMatch?.linkedin_founder}.
              </span>
              <span>
                <span className="font-bold">Company Email :</span>{" "}
                {data.isMatch?.email}.
              </span>
              <span>
                <span className="font-bold">product Description :</span>{" "}
                {data.isMatch?.product_discription}.
              </span>
              <span>
                <span className="font-bold">Previous fundraising rounds :</span>{" "}
                {data.isMatch?.previous_fundraising_rounds_discription}
                Cr.
              </span>
              <span>
                <span className="font-bold">Existing commitments :</span>{" "}
                {data.isMatch.existing_commitments}.
              </span>
              <span>
                <span className="font-bold">Team size :</span>{" "}
                {data.isMatch.team_size}.
              </span>
              <span>
                <span className="font-bold">
                  Why do you want to raise a Community round? :
                </span>{" "}
                {data.isMatch.community_fund_raising_reason}.
              </span>
              <span>
                <span className="font-bold">Pitch : {data.isMatch.pitch} </span>

                <video width="320" height="240" controls>
                  <source
                    src={`http://localhost:4000/uploads/${data.isMatch.pitch}`}
                    type="video/mp4"
                    alt="video"
                  />
                  Your browser does not support the video tag.
                </video>
              </span>
              <span>
                <span className="font-bold">Reqested Amount :</span>{" "}
                {data.isMatch.amount_expected_to_raise} Cr.
              </span>
              {view && (
                <>
                  <span className=" text-center font-bold">Earnings YOY </span>
                  <div className="overflow-x-auto flex justify-center flex-col">
                    {data.incomeExpenses.incomeExpenses &&
                    data.incomeExpenses.incomeExpenses.length > 0 ? (
                      <table className="table-auto border-collapse border border-gray-400 ">
                        <thead>
                          <tr className="bg-gray-200">
                            {/* Render an empty header for the first cell */}
                            <th className="p-3 text-center text-xs font-medium text-gray-700 uppercase border border-gray-400"></th>
                            {/* Render headers for each metric */}
                            {data.incomeExpenses.incomeExpenses.map(
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
                          {data.incomeExpenses.incomeExpenses.length > 0 &&
                            Array.from(
                              {
                                length:
                                  data.incomeExpenses.incomeExpenses[0].values
                                    .length,
                              },
                              (_, index) => index
                            ).map((rowIndex) => (
                              <tr key={rowIndex} className="bg-white">
                                {/* Print the quarter in the left column */}
                                <td className="p-3 text-center text-sm text-gray-600 border border-gray-400">
                                  {data.incomeExpenses.quaters[rowIndex + 1]}{" "}
                                  {/* Add +1 to skip the 'Column1' */}
                                </td>
                                {/* Print the data for each metric */}
                                {data.incomeExpenses.incomeExpenses.map(
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
                </>
              )}
              <span
                className={`text-2xl font-semibold flex justify-end cursor-pointer text-blue-700 rounded-md  ${
                  view ? "text-xl" : ""
                }`}
                onClick={handleClick}
              >
                {view ? "view less" : "view more"}
              </span>

              <div className="flex">
                <span className="font-bold ">Financial Report </span>

                <span className="ml-2">
                  <MdPictureAsPdf
                    className="cursor-pointer"
                    size={25}
                    onClick={() => {
                      const pdfUrl = `http://localhost:4000/uploads/${data.isMatch.financials}`;
                      const link = document.createElement("a");
                      link.href = pdfUrl;
                      link.download = data.isMatch.financials || "document.pdf";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center text-center mt-5">
              <GoGraph size={300} color="green" />
            </div>
            <div className="flex justify-end pb-5">
              {data.isMatch.status === null ? (
                <>
                  <button
                    className="px-3 py-2 text-xl rounded-md text-white w-[8rem] bg-blue-700 font-arima hover:bg-blue-800 transition-transform duration-300 ease-in-out transform hover:scale-95"
                    onClick={acceptCompany}
                  >
                    Accept
                  </button>

                  <button
                    className="px-3 ml-2 py-2 text-xl rounded-md text-white w-[8rem] bg-red-700 font-arima hover:bg-red-800 transition-transform duration-300 ease-in-out transform hover:scale-95"
                    onClick={rejectCompany}
                  >
                    Reject
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </section>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
}

export default Application_data;
