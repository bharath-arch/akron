import React, { useEffect, useState } from "react";
import setBodyColor from "../setBodyColor";
import axios from "axios";
import PiChartLocal from "../components/PiChartLocal.jsx";
import { useNavigate } from "react-router-dom";
import { RiCustomerService2Line } from "react-icons/ri";
import { handleLogout } from '../logOut.js';


function Company_dashboard() {
  const navigate = useNavigate();
  setBodyColor({ color: "white" });
  const email = localStorage.getItem("email");

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
        setData(response.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    callCompany();
  }, []);

  const handleClick = () => {
    handleLogout(); // Call the function when clicked
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

  const handleWithdraw = () => {
    console.log("handleWithdraw");
  };

  let raiserAmount = data?.lotsOriginal - data?.lots;
  let toCrcal = data?.amount_expected_to_raise * 10000000;
  let totalPercent = (raiserAmount / toCrcal) * 100;
  let rawgrapData = [
    { name: "Total Amount", value: toCrcal },
    { name: "Raised Amount", value: raiserAmount },
  ];
  let percentageGraphData = [
    { name: "Total Amount", value: 100 },
    { name: "Raised Amount", value: totalPercent },
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
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=recipient@example.com">
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
      {data.status === null ? (
        <section className="flex gap-2 flex-col pt-10 pl-16">
          <span className="text-3xl font-semibold">Dashboard</span>
          <span className="text-xl ">
            Application under{" "}
            <span className="font-semibold text-yellow-400">process</span>. We
            will notify you soon.
          </span>
        </section>
      ) : data.status === true ? (
        <>
          <section className="flex gap-2 flex-col pt-10 pl-16">
            <span className="text-3xl font-semibold">Dashboard</span>
            <span className="text-xl">
              Application{" "}
              <span className="font-semibold text-green-600">Approved. </span>
            </span>
          </section>
          <div className="flex gap-2 flex-col pt-10 pl-16">
            <span>Raised Amount : {raiserAmount * 10000}</span>
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
        {toCrcal === raiserAmount ? (
          <>
            <button
              className="px-3 ml-2 py-2 text-xl rounded-md text-white w-[8rem] bg-red-700 font-arima hover:bg-red-800 transition-transform duration-300 ease-in-out transform hover:scale-95"
              onClick={handleWithdraw}
            >
              Withdraw
            </button>
          </>
        ) : (
          <p className="text-red-600">Cannot Withdraw untill Target achived</p>
        )}
      </section>
    </div>
  );
}

export default Company_dashboard;
