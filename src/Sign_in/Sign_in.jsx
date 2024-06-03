import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import setBodyColor from "../setBodyColor";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Sign_in() {
  setBodyColor({ color: "lightgray" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({ email: "" });
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleChangeEvent = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
  const { usertype } = useParams();
  console.log(usertype);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formdata.email === "" || !validateEmail(formdata.email)) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
      try {
        setLoading(true);
        const response = await axios.post(
          "http://localhost:4000/register/SignIn",
          {...formdata , usertype}
        );
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("usertype", usertype);
        // console.log(response.data.token);
        navigate("/verification");
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  };
  
  return (
    <div className="m-4">
      <div className="">
        <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Akron
        </span>
      </div>

      <div className="flex justify-center text-center items-center mt-[2rem]">
        <div className="bg-slate-50 h-[32rem] w-[25rem] rounded-[39px] ">
          <div className="mt-9 font-bold text-3xl">Sign In</div>
          <div className="mt-10 text-left ml-9 mr-6">
            <p className="text-[0.75rem] font-serif font-light mb-2">Email</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                value={formdata.email}
                onChange={handleChangeEvent}
                className={`border-2 rounded-lg w-[100%] p-2 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  invalidEmail && "border-red-500"
                }`}
                placeholder="Enter your Email "
              />
              {invalidEmail && (
                <p className="text-red-500 text-[0.75rem] ml-2 mt-1">
                  Invalid email address
                </p>
              )}
              <p className="text-[0.75rem] mr-4 font-serif font-light mt-2">
                By clicking Continue, you agree to our{" "}
                <span className="text-blue-800">Terms & Conditions</span> and{" "}
                <span className="text-blue-800">Privacy Policy</span> Continue
              </p>
              <div className="flex justify-center items-center  ">
                <button className="mt-3 text-center border-2 rounded-lg w-[22rem] p-2 font-arima bg-blue-600 text-white text-xl items-center hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-95 ">
                  {loading ? <p>loading...</p> : "Continue"}
                </button>
              </div>
            </form>

            <div className="flex py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">OR</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="flex justify-between border-2 p-2 rounded-lg text-center items-center">
              <span className="">
                <FcGoogle size={26} />
              </span>
              <span className="mr-16 font-arima">Continue with Google</span>
            </div>
            <div className="text-center items-center text-[0.75rem] mr-4 font-serif font-light mt-2">
              <p>
                <span> Don’t have an account ? </span>{" "}
                <Link to={"/startup/founder_form"}>
                  <span className="text-blue-800">Sign up as Founder</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign_in;
