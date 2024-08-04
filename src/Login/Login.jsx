import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import setBodyColor from "../setBodyColor";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { FcGoogle } from "react-icons/fc";

function Sign_in() {
  setBodyColor({ color: "lightgray" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [gmail, setGmail] = useState("");
  const [formdata, setFormdata] = useState({ email: "" });
  const [invalidEmail, setInvalidEmail] = useState(false);
  const usertype = localStorage.setItem("usertype", "user");
  const handleChangeEvent = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  const handlegoogle = async (mail) => {
    localStorage.setItem("userEmail", mail);
    try {
      const response = await axios.post(
        "http://localhost:4000/register/googleLogin",
        { email: mail, type: "user" }
      );
      if (response.data.message === "Already email exist please Login") {
        toast("user found please login", {
          duration: 4000,
          position: "top-center",
          icon: "👏",
          iconTheme: {
            primary: "#000",
            secondary: "#fff",
          },
        });
      }
      if (response.data.message === "sucess") {
        navigate("/user/explore");
      }
      
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formdata.email === "" || !validateEmail(formdata.email)) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
      try {
        setLoading(true);
        const response = await axios.post(
          "http://localhost:4000/register/newUser",
          formdata
        );

        console.log(response.data.message);
        localStorage.setItem("userEmail", response.data.email);
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);
        if (response.data.message === "mail is existing") {
          toast("user found please login", {
            duration: 4000,
            position: "top-center",
            icon: "👏",
            iconTheme: {
              primary: "#000",
              secondary: "#fff",
            },
          });
          setLoading(false);
        } else {
          navigate("/verification");
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const founder = "founder";
  const user = "user";
  
  return (
    <div className="m-4">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="text-center mb-8">
        <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Akron
        </span>
      </div>

      <div className="flex justify-center items-center mt-8">
        <div className="bg-slate-50 w-full max-w-md rounded-xl shadow-lg p-6">
          <div className="font-bold text-3xl mb-6">Get Started</div>
          <div className="text-left">
            <p className="text-sm font-serif font-light mb-2">Email</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                value={formdata.email}
                onChange={handleChangeEvent}
                className={`border-2 rounded-lg w-full p-2 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  invalidEmail && "border-red-500"
                }`}
                placeholder="Enter your Email"
              />
              {invalidEmail && (
                <p className="text-red-500 text-xs mt-1">
                  Invalid email address
                </p>
              )}
              <p className="text-xs font-serif font-light mt-2 mb-4">
                By clicking Continue, you agree to our{" "}
                <span className="text-blue-800">Terms & Conditions</span> and{" "}
                <span className="text-blue-800">Privacy Policy</span>
              </p>
              <div className="flex justify-center">
                <button
                  className="mt-3 text-center border-2 rounded-lg w-full p-2 font-arima bg-blue-600 text-white text-xl hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-95"
                >
                  {loading ? <p>loading...</p> : "Continue"}
                </button>
              </div>
            </form>

            <div className="flex py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">OR</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <div className="flex justify-center items-center border-2 p-2 rounded-lg text-center">
              <span className="mr-2">
                <FcGoogle size={26} />
              </span>
              <span className="font-arima">Continue with Google</span>
            </div>

            <div className="text-center text-xs font-serif font-light mt-4">
              <p>
                <span>Don’t have an account?</span>{" "}
                <Link to={`login_in/${user}`}>
                  <span className="text-blue-800">Sign in instead</span>
                </Link>
              </p>
              <p>
                <Link to={`login_in/${founder}`}>
                  <span className="text-blue-800">Login as Founder</span>
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
