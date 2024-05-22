import React, { useState } from "react";
import setBodyColor from "../setBodyColor";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
// import Helmet from 'react-helmet';
function Login() {
  setBodyColor({ color: "lightgray" });
  const [formdata, setFormdata] = useState({ email: "", });
  const handlechange = (e) => {
  setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  console.log(formdata);
  return (
    <div className="m-4">
      {/* <Helmet bodyAttributes={{style: 'background-color : #fff'}}/> */}
      <div className="">
        <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Akron
        </span>
      </div>

      <div className="flex justify-center text-center items-center mt-[2rem]">
        <div className="bg-slate-50 h-[32rem] w-[25rem] rounded-[39px] ">
          <div className="mt-9 font-bold text-3xl">Get Started</div>
          <div className="mt-10 text-left ml-9 mr-6">
            <p className="text-[0.75rem] font-serif font-light mb-2">
              Email or Mobile number
            </p>
            <form action="#">
              <input
                name="email"
                required
                value={formdata.email}
                placeholder="Enter email"
                type="text"
                onChange={handlechange}
                className=" border-2 rounded-lg w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {/* <input
                name="password"
                value={formdata.email}
                placeholder="Enter password"
                type="text"
                onChange={handlechange}
                className=" border-2 rounded-lg w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              /> */}
              <p className="text-[0.75rem] mr-4 font-serif font-light mt-2">
                By clicking Continue, you agree to our{" "}
                <span className="text-blue-800">Terms & Conditions</span> and{" "}
                <span className="text-blue-800">Privacy Policy</span> Continue
              </p>
              <Link to={"/verification"}>
                {" "}
                <div className="flex justify-center items-center  ">
                  <button className="mt-3 text-center border-2 rounded-lg w-[100%] p-2 font-arima bg-blue-600 text-white text-xl items-center hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-95 ">
                    Continue
                  </button>
                </div>
              </Link>
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
            <div className="text-center items-center text-[0.75rem] mr-4 font-serif font-light  mt-2">
              <p>
                <span>Don’t have an account ? </span>{" "}
                <Link to="sign_in">
                  {" "}
                  <span className="text-blue-800">Sign up instead</span>
                </Link>
              </p>
              <p>
                <Link to="sign_in">
                  {" "}
                  <span className="text-blue-800">Signup as Founder</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
