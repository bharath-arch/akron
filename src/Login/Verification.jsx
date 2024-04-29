import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import setBodyColor from "../setBodyColor";

function Verification() {
  setBodyColor({ color: "lightgray" });
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '','']);
  const [data, setData] = useState({
    email: '',
    token: '',
    otp: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/verify-otp",
        data
      );
      const response_data = response.data; // Response data is accessed directly from response, no need for response.json()
      console.log(response_data.message); // Logging the response message
      
      if (response_data && response_data.message === 'user created') {
        navigate("/user");
      } else {
        toast.error(response_data.message); // Displaying error message from response_data
      }
    } catch (err) {
      console.log(err);
    }
    
   
  };

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    console.log(`Value at index ${index}: ${value}`);
  };

  useEffect(() => {
    const getDatafun = async () => {
      const localEmail = localStorage.getItem('email');
      const localToken = localStorage.getItem('token');
      setData({ ...data, email: localEmail, token: localToken, otp: otp.join('') });
    };
    getDatafun();
  }, [otp]);

  return (
    <div className="m-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="">
        <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Akron</span>
      </div>

      <div className="flex justify-center text-center items-center mt-[2rem]">
        <div className="bg-slate-50 h-[22rem] w-[25rem] rounded-[39px] ">
          <div className="mt-9 font-bold text-3xl">Verify your Email</div>
          <div className="flex justify-center text-center items-center flex-col">
            <span>Enter the OTP sent on </span>
            <span>{data.email}</span>{" "}
          </div>
          <div className="mt-5 text-left ml-9 mr-6">
            <p className="text-[0.75rem] font-serif font-light mb-2 flex justify-center">
              Enter OTP
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center text-center items-center">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className=" border-2 rounded-lg w-[14%] ml-1 p-2 align-middle  border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                ))}
              </div>
              <p className="text-[0.75rem] mr-4 font-serif font-light mt-2 flex justify-between">
                <span className="ml-6">Didn’t receive the code?</span>
                <span className="text-blue-800 ml-3">Resend OTP </span>
              </p>
              <div className="flex justify-center items-center">
               <button type="submit" onClick={handleSubmit} className="mt-3 text-center border-2 rounded-lg w-[100%] p-2 font-arima bg-blue-600 text-white text-xl items-center">
                  Continue
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
