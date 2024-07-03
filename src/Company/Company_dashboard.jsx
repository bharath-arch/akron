import React, { useEffect, useState } from "react";
import setBodyColor from "../setBodyColor";
import axios from "axios";
import PiChartLocal from "../components/PiChartLocal.jsx";
import { useNavigate } from "react-router-dom";
import { RiCustomerService2Line } from "react-icons/ri";

function Company_dashboard() {
  const navigate = useNavigate();
  setBodyColor({ color: "white" });
  const email = localStorage.getItem("founderEmail");
  const [error, setError] = useState(null);
  const [statusInfo, setStatus] = useState(null);

  const [data, setData] = useState(null); // Initialize data state with null
  useEffect(() => {
    const callCompany = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/companyDashbord",
          {
            params: { email },
          }
        );
        const checkRequestStatus = await axios.get(
          "http://localhost:4000/companyWithdrawMoney/status",
          { params: { email } }
        );
        setStatus(checkRequestStatus.data.result);
        setData(response.data.result);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      }
    };
    callCompany();
  }, [data, statusInfo]);

  const handleClick = () => {
    localStorage.removeItem("founderEmail");
    localStorage.removeItem("usertype");
    localStorage.removeItem("token");
    navigate("/Login");
  };

  if (!email) {
    useEffect(() => {
      navigate("/Login");
    }, [email]);
  }
  // Wait until data is fetched and available

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleWithdraw = async (amount, companyId) => {
    try {
      const withdrawAmount = amount * 10000;
      const email = localStorage.getItem("founderEmail");
      const response = await axios.put(
        "http://localhost:4000/companyWithdrawMoney",
        { companyId, email, amount: withdrawAmount }
      );
      setData(response.data.result);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };
  // let raiserAmount = 10;
  // let toCrcal = 10;
  // let totalPercent = (raiserAmount / toCrcal) * 100;
  let raiserAmount = (data?.lotsOriginal - data?.lots) * 10000;
  let toCrcal = data?.amount_expected_to_raise * 10000000; // expected amount

  console.log(raiserAmount, toCrcal);
  let totalPercent = (raiserAmount / toCrcal) * 100;

  let rawgrapData = [
    { name: " Amount needed", value: toCrcal - raiserAmount },
    { name: "Raised Amount", value: raiserAmount },
  ];
  let percentageGraphData = [
    { name: "Amount needed percentage", value: 100 - totalPercent },
    { name: "Raised Amount percentage", value: totalPercent },
  ];

  return (
    <div>
      <div className="">
        <div className="flex justify-between text-center items-center ml-8 mr-8 mt-3">
          <div className="">
            <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Akorn
            </span>
          </div>
          <div className="flex gap-5 items-center">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bharathkumar100q@gmail.com&su=Complaints%20Here">
              <RiCustomerService2Line
                size={20}
                title="Customer Support"
                className="cursor-pointer hover:scale-105"
              />
            </a>
            <span
              onClick={handleClick}
              className="cursor-pointer hover:scale-105"
            >
              Logout
            </span>
          </div>
        </div>
      </div>
      {data?.status === null ? (
        <section className="flex gap-2 flex-col pt-10 pl-16">
          <span className="text-3xl font-semibold">Dashboard</span>
          <span className="text-xl ">
            Application under{" "}
            <span className="font-semibold text-yellow-400">process</span>. We
            will notify you soon.
          </span>
        </section>
      ) : data?.status === true ? (
        <>
          <section className="flex gap-2 flex-col pt-10 pl-16">
            <span className="text-3xl font-semibold">Dashboard</span>
            <span className="text-xl">
              Application{" "}
              <span className="font-semibold text-green-600">Approved. </span>
            </span>
          </section>
          <div className="flex gap-2 flex-col pt-10 pl-16">
            <span>
              Raised Amount :{" "}
              {raiserAmount.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
              })}
            </span>
            <span>Achived : {totalPercent} %</span>
          </div>
          <div className="">
            <PiChartLocal
              rawgrapData={rawgrapData} // Pass rawgrapData instead of data
              percentageGraphData={percentageGraphData}
            />
          </div>
        </>
      ) : (
        <section className="flex gap-2 flex-col pt-10 pl-16">
          <span className="text-3xl font-semibold">Dashboard</span>
          <span className="text-xl">
            Application{" "}
            <span className="font-semibold text-red-600">Rejected.</span>
          </span>
        </section>
      )}

      <section className="flex gap-2 flex-col pt-10 pl-16 mb-14">
        {" "}
        {raiserAmount >= toCrcal ? (
          <>
            {statusInfo?.status === "null" ? (
              <>
                {" "}
                <button
                  className="px-3 ml-2 py-2 text-xl rounded-md text-white w-[8rem] bg-red-700 font-arima hover:bg-red-800 transition-transform duration-300 ease-in-out transform hover:scale-95"
                  onClick={() =>
                    handleWithdraw(data?.amount_expected_to_raise, data?._id)
                  }
                >
                  Withdraw
                </button>
              </>
            ) : statusInfo?.status === "pending" ? (
              <p className="px-3 ml-2 py-2 text-xl text-yellow-700 font-arima">
                Request Pending...
              </p>
            ) : statusInfo?.status === "true" ? (
              <p className="px-3 ml-2 py-2 text-xl text-green-700 font-arima">
                Request Accepted
              </p>
            ) : statusInfo?.status === "false" ? (
              <p className="px-3 ml-2 py-2 text-xl text-red-700 font-arima">
                Request Rejected
              </p>
            ) : (
              <>
                {" "}
                <button
                  className="px-3 ml-2 py-2 text-xl rounded-md text-white w-[8rem] bg-red-700 font-arima hover:bg-red-800 transition-transform duration-300 ease-in-out transform hover:scale-95"
                  onClick={() =>
                    handleWithdraw(data?.amount_expected_to_raise, data?._id)
                  }
                >
                  Withdraw
                </button>
              </>
            )}
          </>
        ) : (
          <p className="text-red-600">Cannot Withdraw until Target achieved</p>
        )}
      </section>
    </div>
  );
}

export default Company_dashboard;
