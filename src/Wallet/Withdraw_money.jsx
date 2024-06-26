import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoCloseOutline } from "react-icons/io5";

function Withdraw_money({ withdrawclosetogglebutton }) {
  const inputRef = useRef(null);
  const [money, setMoney] = useState(0);
  const [walletdata, setwalletData] = useState();
  //userEmail
  const email = localStorage.getItem("userEmail");

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
  }, []);
  const walletAmount = async () => {
    try {
      const response = await axios.put(
        "http://localhost:4000/addWithdrawmoney/withdraw",
        { money, email }
      );
      console.log(response);

      if (response) {
        toast.success(`Successfully Withdrawed amount ${money}!`);
        setMoney(0);
      }
      withdrawclosetogglebutton()
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const moneyAmount = parseInt(e.target.value) || 0;

    setMoney(moneyAmount);
  };

  const handle2000 = () => {
    // console.log(money);
    setMoney((pre) => pre + 2000);
  };
  const handle4000 = () => {
    setMoney((pre) => pre + 4000);
  };
  const handle6000 = () => {
    setMoney((pre) => pre + 6000);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="  w-96 h-96 border-2 p-3 bg-white">
        <div className="relative mb-3">
          <span className="absolute left-[20.75rem]">
            <IoCloseOutline
              size={23}
              onClick={withdrawclosetogglebutton}
              className="hover:bg-red-600 cursor-pointer"
            />
          </span>
        </div>
        <span className="font-semibold text-xl">Withdraw</span>
        <div className="mt-2 flex justify-center w-full">
          <input
            ref={inputRef}
            value={money === 0 ? "" : `${money}`}
            type="text"
            onChange={handleChange}
            placeholder="Minimum Amount &#8377;200"
            className="  mb-2  w-[98%] px-1 py-1  border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-300"
          />
        </div>
        <div className="flex  gap-3 ">
          <span
            className="cursor-pointer hover:scale-75 transition duration-3000 ease-in-out select-none"
            onClick={handle2000}
          >
            + &#8377;2000
          </span>
          <span
            className="cursor-pointer hover:scale-75  transition duration-3000 ease-in-out select-none"
            onClick={handle4000}
          >
            + &#8377;4000
          </span>
          <span
            className="cursor-pointer hover:scale-75 transition duration-3000 ease-in-out select-none"
            onClick={handle6000}
          >
            + &#8377;6000
          </span>
        </div>
        <div className="flex justify-center mt-2">
          <div className="w-[22rem] h-30 border-2 p-3 ">
            <div className="flex justify-between mb-1">
              <span className=" text-gray-400">Current Balance</span>
              <span className="text-gray-400">
                &#8377;{walletdata?.money ? walletdata?.money : "0"}
              </span>
            </div>
            <div className="flex mb-1 justify-between">
              <span className="text-gray-400 ">New Withdrawal</span>
              <span className="text-gray-400">&#8377;{money}</span>
            </div>
            <hr className=" border-gray-300" />
            <div className="flex mt-1 justify-between">
              <span className="text-gray-400">New Balance</span>
              <span className="text-gray-400">
                &#8377;
                {walletdata?.money
                  ? walletdata.money >= money
                    ? walletdata.money - money
                    : "Insufficient Balance"
                  : "Insufficient Balance"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex mt-20  justify-end">
          <button
            className=" border bg-red-600 hover:bg-red-700 text-white px-8 py-1 font-arima rounded-lg "
            onClick={walletAmount}
          >
            Withdraw
          </button>
        </div>
      </div>
    </>
  );
}

export default Withdraw_money;
