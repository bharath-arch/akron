import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { MdPictureAsPdf } from "react-icons/md";
import Spinner from "./Spinner";
import Graph from "../components/Graph";

function Application_data() {
  const navigate = useNavigate();
  const { id } = useParams();
  const adminEmail = localStorage.getItem("adminEmail");
  const [data, setData] = useState(null); // Initialize data as null
  const [showGraph, setShowGraph] = useState(false);
  const [view, setView] = useState(false);

  useEffect(() => {
    if (!adminEmail) {
      navigate("/admin_login");
    }
  }, [adminEmail, navigate]);

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

  useEffect(() => {
    if (data) {
      const timer = setTimeout(() => {
        setShowGraph(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [data]);

  const acceptCompany = async () => {
    try {
      await axios.put(`http://localhost:4000/company_approve/${id}`);
      navigate("/admin_dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const rejectCompany = async () => {
    try {
      await axios.put(
        `http://localhost:4000/company_approve/rejectCompany/${id}`
      );
      navigate("/admin_dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminEmail");
    navigate("/Login");
  };

  const handleClick = () => {
    setView(!view);
  };

  return (
    <div>
      {data ? (
        <section className="bg-gradient-to-br from-gray-200 to-gray-100 p-10">
          <div className="flex justify-between items-center ml-8 mr-8 mt-3">
            <div>
              <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Akorn
              </span>
            </div>
            <div className="flex gap-5 items-center">
              <span
                className="font-semibold text-xl cursor-pointer"
                onClick={() => navigate("/admin_dashboard")}
              >
                Admin Dashboard
              </span>
              <span className="text-xl cursor-pointer" onClick={handleLogout}>
                Logout
              </span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto bg-white rounded-lg p-8 mt-10">
            <div className="flex flex-col bg-white rounded-lg p-8 shadow-md mt-8">
              <span className="font-bold text-3xl text-gray-800 mb-4">
                {data.isMatch.company_name}
              </span>
              <div className="border-t border-gray-300 mt-4 pt-4">
                <div className="flex items-center mb-2">
                  <span className="font-bold text-lg text-gray-700 mr-2">
                    Sector:
                  </span>
                  <span className="text-gray-600">{data.isMatch.sector}</span>
                </div>
                <div className="flex flex-col mb-4">
                  <span className="font-semibold text-xl text-gray-700 mt-2">
                    About
                  </span>
                  <span className="mt-2 text-gray-600">
                    {data.isMatch.product_discription}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-xl text-gray-700">
                    Traction
                  </span>
                  <span className="mt-2 text-gray-600">
                    {data.isMatch.traction}
                  </span>
                </div>
              </div>
            </div>

            {/* Graph Display */}
            {showGraph && (
              <div className="flex justify-center items-center text-center mt-10">
                <Graph data={data} />
              </div>
            )}

            {/* Financial Report PDF */}
            <div className="flex items-center mt-4">
              <span className="font-bold">Financial Report </span>
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

            {/* Additional Company Details */}
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-300 transform transition duration-500  hover:scale-105">
                <span className="font-bold">Mkt Cap :</span>{" "}
                {data.isMatch.market_cap} Cr.
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-300 transform transition duration-500  hover:scale-105">
                <span className="font-bold">Address :</span>{" "}
                {data.isMatch.address}
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-300 transform transition duration-500  hover:scale-105">
                <span className="font-bold">Website :</span>{" "}
                {data.isMatch.website}
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-300 transform transition duration-500  hover:scale-105">
                <span className="font-bold">Founder's LinkedIn URL :</span>{" "}
                {data.isMatch.linkedin_founder}
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-300 transform transition duration-500  hover:scale-105">
                <span className="font-bold">Company Email :</span>{" "}
                {data.isMatch.email}
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-300 transform transition duration-500  hover:scale-105">
                <span className="font-bold">Product Description :</span>{" "}
                {data.isMatch.product_discription}
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-300 transform transition duration-500  hover:scale-105">
                <span className="font-bold">Previous Fundraising Rounds :</span>{" "}
                {data.isMatch.previous_fundraising_rounds_discription} Cr.
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-300 transform transition duration-500  hover:scale-105">
                <span className="font-bold">Existing Commitments :</span>{" "}
                {data.isMatch.existing_commitments}
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-300 transform transition duration-500  hover:scale-105">
                <span className="font-bold">Team Size :</span>{" "}
                {data.isMatch.team_size}
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-300 transform transition duration-500  hover:scale-105">
                <span className="font-bold">
                  Why do you want to raise a Community round? :
                </span>{" "}
                {data.isMatch.community_fund_raising_reason}
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-300 transform transition duration-500  hover:scale-105">
                <span className="font-bold">Requested Amount :</span>{" "}
                {data.isMatch.amount_expected_to_raise} Cr.
              </div>
            </div>

            {/* Pitch Video */}
            <div className="flex flex-col items-center mt-4">
              <span className="font-bold text-xl mb-2">Pitch:</span>
              <div className="relative">
                <video
                  className="rounded-lg"
                  width="320"
                  height="240"
                  controls
                  style={{ outline: "none" }} // Removes default focus outline
                >
                  <source
                    src={`http://localhost:4000/uploads/${data.isMatch.pitch}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Toggle View for Financial Details */}
            {view && (
              <div className="mt-4">
                <span className="font-semibold text-xl">Earnings YOY</span>
                <div className="overflow-x-auto mt-2">
                  {data.incomeExpenses?.incomeExpenses &&
                  data.incomeExpenses.incomeExpenses.length > 0 ? (
                    <table className="table-auto border-collapse border border-gray-400 w-full">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="p-3 text-center text-xs font-medium text-gray-700 uppercase border border-gray-400"></th>
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
                        {Array.from(
                          {
                            length:
                              data.incomeExpenses.incomeExpenses[0].values
                                .length,
                          },
                          (_, rowIndex) => (
                            <tr key={rowIndex} className="bg-white">
                              <td className="p-3 text-center text-sm text-gray-600 border border-gray-400">
                                {data.incomeExpenses.quaters[rowIndex + 1]}
                              </td>
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
                          )
                        )}
                      </tbody>
                    </table>
                  ) : (
                    <span className="text-gray-600">No data available</span>
                  )}
                </div>
              </div>
            )}

            {/* Toggle View Button */}
            <div className="flex justify-end mt-4">
              <span
                className={`text-2xl font-semibold cursor-pointer text-blue-700 rounded-md ${
                  view ? "text-xl" : ""
                }`}
                onClick={handleClick}
              >
                {view ? "View Less" : "View More"}
              </span>
            </div>

            {/* Accept/Reject Buttons */}
            {data.isMatch.status === null && (
              <div className="flex justify-end mt-4">
                <button
                  className="px-3 py-2 text-xl rounded-md text-white w-[8rem] bg-blue-700 font-arima hover:bg-blue-800 transition-transform duration-300 ease-in-out transform hover:scale-95 mr-2"
                  onClick={acceptCompany}
                >
                  Accept
                </button>
                <button
                  className="px-3 py-2 text-xl rounded-md text-white w-[8rem] bg-red-700 font-arima hover:bg-red-800 transition-transform duration-300 ease-in-out transform hover:scale-95"
                  onClick={rejectCompany}
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        </section>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Application_data;
