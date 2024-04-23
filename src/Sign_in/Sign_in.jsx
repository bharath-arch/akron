import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import setBodyColor from "../setBodyColor";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

function Sign_in() {
  setBodyColor({ color: "lightgray" });
  const [formdata, setFormdata] = useState({ email: "" });

  const handleChangeEvent = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {


      // const formData = new FormData();

      // Object.entries(formdata).forEach(([key, value]) => {
      //   console.log(key, value);
      //   formData.append(key, value);
      // });
     
      console.log(formdata);
      const response = await axios.post(
        "http://localhost:4000/register/",
        formdata
      );
      const data = await response.data.message;

      // if (data === "User already exists") {
      //   // Implement error handling (e.g., display toast message)
      // } else {
      //   navigate("/user");
      // }
    } catch (error) {
      // Handle errors appropriately (e.g., display user-friendly message)
      console.error(error);
    }
  };

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
          <div className="mt-9 font-bold text-3xl">Sign In</div>
          <div className="mt-10 text-left ml-9 mr-6">
            <p className="text-[0.75rem] font-serif font-light mb-2">Email</p>
            <form>
              <input
                type="text"
                name="email"
                value={formdata.email}
                onChange={handleChangeEvent}
                className=" border-2 rounded-lg w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter your Email "
              />
              <p className="text-[0.75rem] mr-4 font-serif font-light mt-2">
                By clicking Continue, you agree to our{" "}
                <span className="text-blue-800">Terms & Conditions</span> and{" "}
                <span className="text-blue-800">Privacy Policy</span> Continue
              </p>
              {/* <Link to={"/verification"}> */}
                {" "}
                <div className="flex justify-center items-center  ">
                  <button
                    onClick={handleSubmit}
                    className="mt-3 text-center border-2 rounded-lg w-[100%] p-2 font-arima bg-blue-600 text-white text-xl items-center"
                  >
                    Continue
                  </button>
                </div>
              {/* </Link> */}
            </form>

            <div class="flex py-5 items-center">
              <div class="flex-grow border-t border-gray-400"></div>
              <span class="flex-shrink mx-4 text-gray-400">OR</span>
              <div class="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="flex justify-between border-2 p-2 rounded-lg text-center items-center">
              <span className="">
                <FcGoogle size={26} />
              </span>
              <span className="mr-16 font-arima">Continue with Google</span>
            </div>
            <div className="text-center items-center text-[0.75rem] mr-4 font-serif font-light  mt-2">
              <p>
                <span> have an account ? </span>{" "}
                <span className="text-blue-800">Login instead</span>
              </p>
              <p>
                <span className="text-blue-800">Sign up as Founder</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign_in;
