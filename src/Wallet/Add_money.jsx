import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoCloseOutline } from "react-icons/io5";

function Add_money({ handleclosetogglebutton }) {
  const [money, setMoney] = useState(0);
  const inputRef = useRef(null);
  const email = localStorage.getItem("email");
  const [walletdata, setwalletData] = useState();

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

  const walletAmount = async () => {
    const response = await axios.put(
      "http://localhost:4000/addWithdrawmoney/add",
      { money, email }
    );
    if (response) {
      toast.success(`Successfully added amount ${money}!`);
      setMoney(0);
    }
  };
  const handleChange = (e) => {
    const moneyAmount = parseInt(e.target.value) || 0;

    setMoney(moneyAmount);
  };

  const handle2000 = () => {
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
          <span
            onClick={handleclosetogglebutton}
            className="absolute left-[20.75rem]"
          >
            <IoCloseOutline
              size={23}
              className="hover:bg-red-600 cursor-pointer"
            />
          </span>
        </div>
        <span className="font-semibold text-xl">Add Money</span>
        <div className="mt-2 flex justify-center w-full">
          <input
            ref={inputRef}
            type="text"
            onChange={handleChange}
            placeholder={"Minimum Amount ₹200"}
            value={money === 0 ? "" : `${money}`}
            className="mb-2 w-[98%] px-1 py-1 border border-gray-300 focus:outline-none focus:ring-1 text-black focus:ring-blue-500 bg-gray-300"
          />
        </div>
        <div className="flex gap-3">
          <span
            className=" cursor-pointer hover:scale-75 transition duration-3000 ease-in-out select-none"
            onClick={handle2000}
          >
            + &#8377;2000{" "}
          </span>
          <span
            className=" cursor-pointer hover:scale-75 transition duration-3000 ease-in-out select-none"
            onClick={handle4000}
          >
            {" "}
            + &#8377;4000
          </span>
          <span
            className=" cursor-pointer hover:scale-75 transition duration-3000 ease-in-out select-none"
            onClick={handle6000}
          >
            + &#8377;6000
          </span>
        </div>
        <div className="flex justify-center mt-2">
          <div className="w-[22rem] h-30 border-2 p-3 ">
            <div className="flex justify-between mb-1">
              <span className=" text-gray-400">Current Balance</span>
              <span className="text-gray-400">&#8377;{walletdata?.money ? walletdata?.money : "0"}</span>
            </div>
            <div className="flex mb-1 justify-between">
              <span className="text-gray-400 ">New Deposit</span>
              <span className="text-gray-400">&#8377;{money}</span>
            </div>
            <hr className=" border-gray-300" />
            <div className="flex mt-1 justify-between">
              <span className="text-gray-400">New Balance</span>
              <span className="text-gray-400">&#8377;{walletdata?.money ? walletdata?.money + money : money}</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <button
            className="absolute top-[5.75rem] left-[16rem] border bg-blue-600 hover:bg-blue-700 text-white px-8 py-1 font-arima rounded-lg "
            onClick={walletAmount}
          >
            pay
          </button>
        </div>
      </div>
    </>
  );
}

export default Add_money;
