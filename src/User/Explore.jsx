import React, { useState } from "react";
import { MdOutlineFiberNew } from "react-icons/md";
import { GoAlertFill } from "react-icons/go";
import { TbMoneybag } from "react-icons/tb";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import Add_money from "../Wallet/Add_money";


function Explore() {
  return (

    <div className="ml-6 mr-6">
      <section>
        <div className="">
          <span className="text-3xl font-bold mb-5">What's hot</span>
        </div>
        <div className="flex ">
          <div className="w-28 flex justify-center flex-col text-center items-center">
            <MdOutlineFiberNew size={50} color="red" className="" />
          </div>
          <div className=" w-28 flex justify-center flex-col text-center items-center">
            {" "}
            <GoAlertFill size={50} className="" />
          </div>

          <div className="w-28 flex justify-center flex-col text-center items-center">
            <TbMoneybag size={50} className="" />
          </div>

          <div className=" w-28  flex justify-center flex-col text-center items-center">
            <BsFillPeopleFill size={50} className="" />
          </div>
        </div>
        <div className="flex justify-center items-center text-center w-[28.5rem]">
          <span className="w-28 text-[12px]">New Age investments</span>
          <samp className="w-28 text-[12px]">Avoid these mistakes!</samp>
          <span className="w-28 text-[12px]">Start with Rs 5,000</span>
          <span className="w-28 text-[12px]"> Why Us?</span>
        </div>
      </section>
      <section>
        <div className="bg-gray-400 h-[120px] w-[95%] mt-6 bg-gradient-to-tr from-gray-400 to-gray-200">
          <div className="p-3 ">
            <div className="flex ">
              <FaWallet size={30} />
              <p className="ml-3 font-semibold text-xl">Wallet</p>
            </div>

            <div className="flex  pl-20 pr-20 items-center ">
              <p className=" mt- font-semibold text-xl">
                Funds <span className="text-blue-700">&#8377;0</span>{" "}
              </p>
              <div className="pl-[42rem]">
                <button className="p-3 text-xl rounded-md text-white bg-blue-700 font-arima items-end">
                  Add Money
                </button>
                <button className=" p-3 text-xl rounded-md ml-4 text-white bg-red-500 font-arima items-end ">
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* {toogleAdd_money? 'translate-x-0': 'translate-x-1'} */}
        <div className="bg-white flex justify-center relative ">
          <span className="absolute top-[-10.75rem] ">
            <Add_money />
          </span>
        </div>
      </section>
      <section>
        <div className="bg-gray-400 h-[220px] w-[95%] mt-6 bg-gradient-to-b from-gray-300 to-gray-200 p-5">
          <div className="flex justify-between">
            <span> Live Opportunities </span>
            <span>View All</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Explore;
