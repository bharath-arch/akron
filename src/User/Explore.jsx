import React, { useEffect, useState } from "react";
import { MdOutlineFiberNew } from "react-icons/md";
import { GoAlertFill } from "react-icons/go";
import { TbMoneybag } from "react-icons/tb";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import Add_money from "../Wallet/Add_money";
import Withdraw_money from "../Wallet/Withdraw_money.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Explore() {
  const [toggle, setActivetoggle] = useState(false);
  const [withdrawtoggle, withdrawsetActivetoggle] = useState(false);
  const [walletdata, setwalletData] = useState();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [color, setColor] = useState("black");

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) => (prevColor === "black" ? "red" : "black"));
    }, 500);
    return () => clearInterval(interval);
  }, []);
  // console.log(color);
  //userEmail
  const email = localStorage.getItem("userEmail");
  console.log(email)
  useEffect(() => {
    const fetchWalletData = async () => {
      const response = await axios.get(
        "http://localhost:4000/addWithdrawmoney/",
        {
          params: { email },
        }
      );

      setwalletData(response.data.result);
    };
    fetchWalletData();
  }, [walletdata]);

  // console.log(walletdata)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/company_approve/dashboard_data"
        );
        console.log(response.data);
        const setfilterData = response.data.result.filter(
          (item) => item.status === true
        );
        setData(setfilterData);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const handletogglebutton = () => {
    setActivetoggle(!toggle);
  };
  const handleclosetogglebutton = () => {
    setActivetoggle(false);
  };
  const withdrawclosetogglebutton = () => {
    withdrawsetActivetoggle(false);
  };
  const withdrawtogglebutton = () => {
    withdrawsetActivetoggle(!withdrawtoggle);
  };

  const moneyData = ()=>{
  }
  

  return (
    <div className="ml-6 mr-6">-
          <Toaster position="top-center" reverseOrder={false} />
      <section>
        <div className="md:flex  ">
          <span className="text-3xl font-bold mb-5">What's hot</span>
        </div>
        <div className="md:flex gap-5 ">
          <div className="flex md:flex-col items-center">
            <MdOutlineFiberNew
              size={40}
              color="red"
              className=""
              title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sapiente iure quo eius, vel explicabo inventore. Dicta omnis asperiores, quidem corrupti doloremque nobis fugiat?
"
            />
            <span className="text-[12px] text-center">
              New Age <br></br> investments
            </span>
          </div>
          <div className="flex md:flex-col  items-center">
            <GoAlertFill
              size={40}
              className=""
              title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sapiente iure quo eius, vel explicabo inventore. Dicta omnis asperiores, quidem corrupti doloremque nobis fugiat?
"
            />
            <samp className="text-[12px] text-center">
              Avoid these <br></br> mistakes!
            </samp>
          </div>
          <div className="flex md:flex-col  items-center">
            <TbMoneybag
              size={40}
              className=""
              title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sapiente iure quo eius, vel explicabo inventore. Dicta omnis asperiores, quidem corrupti doloremque nobis fugiat?
"
            />
            <span className="text-[12px] text-center">
              Start with <br></br>Rs 10,000
            </span>
          </div>
          <div className="flex md:flex-col  items-center">
            <BsFillPeopleFill
              size={40}
              className=""
              title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sapiente iure quo eius, vel explicabo inventore. Dicta omnis asperiores, quidem corrupti doloremque nobis fugiat?
"
            />
            <span className="text-[12px] text-center">Why Us?</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col">
        <div className="bg-gray-400 h-auto w-[95%] mt-6 bg-gradient-to-tr from-gray-400 rounded-md to-gray-200">
          <div className="p-3">
            <div className="flex">
              <FaWallet size={30} />
              <span className="ml-3 font-semibold text-xl">Wallet</span>
            </div>

            <div className=" md:flex md:items-center md:justify-between md:mt-0 mt-2">
              <span className="flex gap-2 font-semibold text-xl">
                Funds{" "}
                <span className="text-blue-700">
                  &#8377;{walletdata?.money ? walletdata?.money : "0"}
                </span>{" "}
              </span>
              <div className=" md:mt-0 mt-2 ">
                <button
                  onClick={handletogglebutton}
                  className=" p-3 md:text-xl  text-sm rounded-md text-white bg-blue-700 font-arima items-end"
                >
                  Add Money
                </button>
                <button
                  onClick={withdrawtogglebutton}
                  className="p-3 md:text-xl  text-sm rounded-md ml-4 text-white bg-red-500 font-arima items-end "
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>

        {toggle && (
          <div className="bg-white flex justify-center relative ">
            <span className="absolute top-[-10.75rem] ">
              <Add_money handleclosetogglebutton={handleclosetogglebutton} moneyCallback = {moneyData}/>
            </span>
          </div>
        )}
        {withdrawtoggle && (
          <div className="bg-white flex justify-center relative ">
            <span className="absolute top-[-10.75rem] ">
              <Withdraw_money
                withdrawclosetogglebutton={withdrawclosetogglebutton}
              />
            </span>
          </div>
        )}
      </section>
      <section>
        <div className="bg-gray-400 h-[220px] w-[95%] mt-6 bg-gradient-to-b rounded-md from-gray-300 to-gray-200 p-5">
          <div className="flex justify-between">
            <span className={`text-${color}-500 font-semibold text-xl`}>
              {" "}
              Live Opportunities{" "}
            </span>
            <span
              onClick={() => navigate("/user/wealth")}
              className="cursor-pointer hover:scale-95 hover:font-semibold hover:text-blue-500"
            >
              View All
            </span>
          </div>
          {error && <p className="text-red-500">{error.message}</p>}

          {data && (
            <section className="flex flex-wrap gap-5 mt-9 w-full z-0">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-300 to-gray-100  p-5 shadow-md rounded-md cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  onClick={() => navigate("/user/wealth")}
                >
                  <div className="text-center">
                    <span className="block font-semibold text-2xl">
                      {item.company_name}
                    </span>
                    <span className="block text-lg text-gray-700">
                      {item.sector}
                    </span>
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      </section>
    </div>
  );
}

export default Explore;
