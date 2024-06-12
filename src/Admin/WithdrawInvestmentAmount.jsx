import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function WithdrawInvestmentAmount() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const adminEmail = localStorage.getItem("adminEmail");
  const handlelogout = () => {
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
  }, []);

  const acceptWithdraw = async (email, companyId) => {
    await axios.put("http://localhost:4000/companyWithdrawMoney/accept", {
      email,
      companyId,
    });
  };
  const rejectWithdraw = async (email, companyId) => {
    await axios.put("http://localhost:4000/companyWithdrawMoney/reject", {
      email,
      companyId,
    });
  };

  console.log(data);
  return (
    <div>
      <div className="">
        <div className="flex justify-between text-center items-center ml-8 mr-8 mt-3">
          <div className="">
            <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Akorn
            </span>
          </div>
          <div className=" flex gap-5 items-center text-center ">
            <Link to="/admin_dashboard">
              <span
                className="font-semibold text-xl"
                onClick={() => navigate("/admin_dashboard")}
              >
                Admin Dashboard
              </span>
            </Link>{" "}
            <span className="text-xl" onClick={handlelogout}>
              Logout
            </span>
          </div>
        </div>
      </div>
      <section className="flex gap-2 flex-col pt-10 pl-16 pr-16">
        <span className="text-2xl font-semibold">
          Admin Dashboard WithDraw Request
        </span>
        {data.map((value, index) => (
          <div key={index} className="mt-3">
            {value.status === "pending" ? (
              <div className="flex flex-col gap-y-2 p-4 bg-white border border-gray-300 rounded-lg shadow-md">
                <span className="cursor-pointer font-bold text-xl">
                  Application Detail
                </span>
                <span className="text-gray-600">
                  companyId: {value.companyId}
                </span>
                <span className="text-gray-600">email: {value.email}</span>
                <span className="text-gray-600">
                  Amount: {value.amount / 10000}Cr.
                </span>
                <div className="flex flex-row justify-start items-center gap-x-2">
                  <button
                    className="px-3 py-2 text-xl rounded-md text-white w-[8rem] bg-blue-700 font-arima hover:bg-blue-800 transition-transform duration-300 ease-in-out transform hover:scale-95 "
                    onClick={() => acceptWithdraw(value.email, value.companyId)}
                  >
                    Accept
                  </button>
                  <button
                    className="px-3 py-2 text-xl rounded-md text-white w-[8rem] bg-red-700 font-arima hover:bg-red-800 transition-transform duration-300 ease-in-out transform hover:scale-95"
                    onClick={() => rejectWithdraw(value.email, value.companyId)}
                  >
                    Reject
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </section>
      <section className="flex gap-2 flex-col pt-10 pl-16 pr-16">
        <span className="text-xl font-semibold text-green-500">Approved</span>
        {data.map((value, index) => (
          <div key={index} className="mt-3">
            {value.status === "true" ? (
              <div className="flex flex-col gap-y-2 p-4 bg-white border border-gray-300 rounded-lg shadow-md">
                <span className="cursor-pointer font-bold text-xl">
                  Application Detail
                </span>
                <span className="text-gray-600">
                  companyId: {value.companyId}
                </span>
                <span className="text-gray-600">email: {value.email}</span>
                <span className="text-gray-600">
                  Amount: {value.amount / 10000}Cr.
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </section>
      <section className="flex gap-2 flex-col pt-10 pl-16 pr-16">
        <span className="text-xl font-semibold text-red-500">Rejected</span>
        {data.map((value, index) => (
          <div key={index} className="mt-3">
            {value.status === "false" ? (
              <div className="flex flex-col gap-y-2 p-4 bg-white border border-gray-300 rounded-lg shadow-md">
                <span className="cursor-pointer font-bold text-xl">
                  Application Detail
                </span>
                <span className="text-gray-600">
                  companyId: {value.companyId}
                </span>
                <span className="text-gray-600">email: {value.email}</span>
                <span className="text-gray-600">
                  Amount: {value.amount / 10000}Cr.
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default WithdrawInvestmentAmount;
