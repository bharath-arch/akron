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
    localStorage.setItem( "userEmail", mail );
    try {
      const response = await axios.post(
        "http://localhost:4000/register/googleLogin",
        { email: mail, type: "user" } // Send email in the correct format
      );
      if (response.data.message === "Already email exist please Login") {
        toast("user found please login", {
          duration: 4000,
          position: "top-center",

          // Styling
          style: {},
          className: "",

          // Custom Icon
          icon: "👏",

          // Change colors of success/error/loading icon
          iconTheme: {
            primary: "#000",
            secondary: "#fff",
          },

          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
      }
      if (response.data.message === "sucess") {
        navigate("/user/explore");
      }
      
      console.log(response.data.message);
      // Handle response as needed
    } catch (error) {
      console.error(error);
    }
  };
  //
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
        //userEmail
        localStorage.setItem("userEmail", response.data.email);
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);
        if (response.data.message == "mail is existing") {
          toast("user found please login", {
            duration: 4000,
            position: "top-center",

            // Styling
            style: {},
            className: "",

            // Custom Icon
            icon: "👏",

            // Change colors of success/error/loading icon
            iconTheme: {
              primary: "#000",
              secondary: "#fff",
            },

            // Aria
            ariaProps: {
              role: "status",
              "aria-live": "polite",
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

      <div className="">
        <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Akron
        </span>
      </div>

      <div className="flex justify-center text-center items-center mt-[2rem]">
        <div className="bg-slate-50 h-[32rem] w-[25rem] rounded-[39px] ">
          <div className="mt-9 font-bold text-3xl">Get Started </div>
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
            {/* <div className="flex justify-center place-items-center items-center">
              {" "}
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const credentialResponseDecode = jwtDecode(
                    credentialResponse.credential
                  );
                  const userEmail = credentialResponseDecode.email;
                  handlegoogle(userEmail); // Pass userEmail to handlegoogle function
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div> */}
            <div className="flex justify-between border-2 p-2 rounded-lg text-center items-center">
              <span className="">
                <FcGoogle size={26} />
              </span>
              <span className="mr-16 font-arima">Continue with Google</span>
            </div>

            <div className="text-center items-center text-[0.75rem] mr-4 font-serif font-light mt-2">
              <p>
                <span>Don’t have an account ? </span>{" "}
                <Link to={`login_in/${user}`}>
                  {" "}
                  <span className="text-blue-800">Sign in instead</span>
                </Link>
              </p>
              <p>
                <Link to={`login_in/${founder}`}>
                  {" "}
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
