import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function WithdrawInvestmentAmount() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [state, setState] = useState(false);
  const [error, setError] = useState(null);
  const adminEmail = localStorage.getItem("adminEmail");

  const handleLogout = () => {
    localStorage.removeItem("adminEmail");
    navigate("/Login");
  };

  if (!adminEmail) {
    useEffect(() => {
      navigate("/admin_login");
    }, [adminEmail]);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/companyWithdrawMoney/fetchData"
        );
        setData(response.data.result);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    fetchData();
  }, [state]);

  const acceptWithdraw = async (email, companyId) => {
    await axios.put("http://localhost:4000/companyWithdrawMoney/accept", {
      email,
      companyId,
    });

    setState(true);
  };

  const rejectWithdraw = async (email, companyId) => {
    await axios.put("http://localhost:4000/companyWithdrawMoney/reject", {
      email,
      companyId,
    });
    setState(true);

  };

  return (
    <>
      <section className="w-full max-w-4xl mt-16 grid grid-cols-3 gap-8">
        <DashboardSection
          data={data}
          status="pending"
          title="Pending"
          onAccept={acceptWithdraw}
          onReject={rejectWithdraw}
        />
        <DashboardSection data={data} status="true" title="Approved" />
        <DashboardSection data={data} status="false" title="Rejected" />
      </section>
    </>
  );
}

const DashboardSection = ({ data, status, title, onAccept, onReject }) => (
  <section
    className={`flex flex-col gap-2 border border-gray-300 rounded-lg p-4 transform transition duration-500 hover:scale-105`}
  >
    <span
      className={`text-xl font-semibold ${
        status === "pending"
          ? "text-blue-500"
          : status === "true"
          ? "text-green-500"
          : "text-red-500"
      }`}
    >
      {title}
    </span>
    {data
      .filter((value) => value.status === status)
      .map((value, index) => (
        <div key={index} className="mt-3">
          <div className="flex flex-col gap-y-2 p-4 bg-white border border-gray-300 rounded-lg shadow-md">
            <span className="cursor-pointer font-bold text-xl">
              Application Detail
            </span>
            <span className="text-gray-600">companyId: {value.companyId}</span>
            <span className="text-gray-600">email: {value.email}</span>
            <span className="text-gray-600">
              Amount: {value.amount / 10000}Cr.
            </span>
            {status === "pending" && (
              <div className="flex flex-row justify-start items-center gap-x-2 mt-2">
                <button
                  className="px-3 py-2 text-xl rounded-md text-white w-[8rem] bg-blue-700 font-arima hover:bg-blue-800 transition-transform duration-300 ease-in-out transform hover:scale-95"
                  onClick={() => onAccept(value.email, value.companyId)}
                >
                  Accept
                </button>
                <button
                  className="px-3 py-2 text-xl rounded-md text-white w-[8rem] bg-red-700 font-arima hover:bg-red-800 transition-transform duration-300 ease-in-out transform hover:scale-95"
                  onClick={() => onReject(value.email, value.companyId)}
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
  </section>
);

export default WithdrawInvestmentAmount;
