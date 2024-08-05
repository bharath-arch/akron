import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import setBodyColor from "../setBodyColor";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

function Sign_in() {
  setBodyColor({ color: "lightgray" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({ email: "" });
  const [invalidEmail, setInvalidEmail] = useState(false);
  const {usertype} = useParams(); // Simplified user type setting
  console.log(usertype)

  const handleChangeEvent = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  const handleGoogleLogin = async (mail) => {
    localStorage.setItem("userEmail", mail);
    try {
      const response = await axios.post(
        "http://localhost:4000/register/googleLogin",
        { email: mail, type: "user" }
      );
      if (response.data.message === "Already email exist please Login") {
        toast("User found, please login", {
          duration: 4000,
          position: "top-center",
          icon: "👏",
          iconTheme: {
            primary: "#000",
            secondary: "#fff",
          },
        });
      }
      if (response.data.message === "success") {
        navigate("/user/explore");
      }
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

        localStorage.setItem("userEmail", response.data.email);
        localStorage.setItem("token", response.data.token);

        if (response.data.message === "mail is existing") {
          toast("User found, please login", {
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
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-12">
      <Toaster position="top-center" reverseOrder={false} />

      {/* <div className="text-center mb-8">
        <span className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Akron
        </span>
      </div> */}

      <div className="flex justify-center items-center w-full max-w-md">
        <div className="bg-slate-50 w-full rounded-xl shadow-lg p-6 md:p-8">
          <div className="font-bold text-2xl sm:text-3xl md:text-4xl mb-6">Get Started</div>
          <div className="text-left">
            <p className="text-sm sm:text-base font-serif font-light mb-2">Email</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                value={formdata.email}
                onChange={handleChangeEvent}
                className={`border-2 rounded-lg w-full p-2 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  invalidEmail ? "border-red-500" : ""
                }`}
                placeholder="Enter your Email"
              />
              {invalidEmail && (
                <p className="text-red-500 text-xs mt-1">Invalid email address</p>
              )}
              <p className="text-xs sm:text-sm font-serif font-light mt-2 mb-4">
                By clicking Continue, you agree to our{" "}
                <span className="text-blue-800">Terms & Conditions</span> and{" "}
                <span className="text-blue-800">Privacy Policy</span>
              </p>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-95"
                >
                  {loading ? "Loading..." : "Continue"}
                </button>
              </div>
            </form>

            <div className="flex py-5 items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-400">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex items-center justify-center border-2 border-gray-300 p-2 rounded-lg text-center">
              <span className="mr-2">
                <FcGoogle size={24} />
              </span>
              <span className="text-base font-medium">Continue with Google</span>
            </div>

            <div className="text-center text-xs sm:text-sm font-serif font-light mt-4">
              <p>
                <span>Don’t have an account?</span>{" "}
                <Link to={`/login_in/${usertype}`}>
                  <span className="text-blue-800">Sign in instead</span>
                </Link>
              </p>
              <p>
                <Link to={`/login_in/founder`}>
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
