import React from "react";
import Logo from "../assets/logo.png";
import setBodyColor from "../setBodyColor";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
function Verification() {
  setBodyColor({ color: "lightgray" });

  return (
    <div className="m-4">
      {/* <Helmet bodyAttributes={{style: 'background-color : #fff'}}/> */}
      <div className="">
          <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Akron</span>
        </div>

      <div className="flex justify-center text-center items-center mt-[2rem]">
        <div className="bg-slate-50 h-[22rem] w-[25rem] rounded-[39px] ">
          <div className="mt-9 font-bold text-3xl">Verify your Email  </div>
          <div className="flex justify-center text-center items-center flex-col">
            <span>Enter the OTP sent on </span>
            <span>email@gmail.com</span>{" "}
          </div>
          <div className="mt-5 text-left ml-9 mr-6">
            <p className="text-[0.75rem] font-serif font-light mb-2 flex justify-center">
              Enter OTP
            </p>
            <form action="#">
              <div className="flex justify-center text-center items-center">
                <input
                  type="text"
                  className=" border-2 rounded-lg w-[15%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="text"
                  className=" border-2 rounded-lg w-[15%] ml-2  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="text"
                  className=" border-2 rounded-lg w-[15%] ml-2  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="text"
                  className=" border-2 rounded-lg w-[15%]  ml-2 p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="text"
                  className=" border-2 rounded-lg w-[15%] ml-2  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <p className="text-[0.75rem] mr-4 font-serif font-light mt-2 flex justify-between">
                <span className="ml-6">Didn’t receive the code?</span>
                <span className="text-blue-800 ml-3">Resend OTP </span>
              </p>
              <div className="flex justify-center items-center  ">
                <button className="mt-3 text-center border-2 rounded-lg w-[100%] p-2 font-arima bg-blue-600 text-white text-xl items-center">
                  <Link to={"/user"}>Continue </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verification;
