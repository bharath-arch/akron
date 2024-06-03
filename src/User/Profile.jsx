import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import setBodyColor from "../setBodyColor";
import InputBox from "./components/InputBox";

function Profile() {
  setBodyColor({ color: "white" });

  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
  const [param, setParam] = useState("");
  const [formData, setFormData] = useState("");

  const email = localStorage.getItem("email");

  // const address = data?.address

  useEffect(() => {
    const userProfile = async () => {
      try {
        const response = await axios.get("http://localhost:4000/profile", {
          params: { email },
        });
        setData(response.data.result);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    userProfile();
  }, [email]);

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [show]);

  const handleClick = (valonclick) => () => {
    setShow(!show);
    setParam(valonclick);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        "http://localhost:4000/profile/updateuserDetail",
        {
          email,
          formdata: { [param]: formData },
        }
      );
      // setData(response.data.result);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    setFormData(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between text-center items-center ml-8 mr-8 mt-3">
        <div>
          <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Akorn
          </span>
        </div>
        <span>Logout</span>
      </div>

      <section className="pl-[6rem] pt-16 pr-[6rem]">
        {show && (
          <InputBox
            ref={inputRef}
            param={param}
            email={email}
            handleInputChange={handleInputChange}
            handleUpdate={handleUpdate}
          />
        )}
        <span className="font-semibold text-xl">Profile</span>
        <div className="flex mt-5">
          <div>
            <img
              src={`http://localhost:4000/uploads/${data?.avatar}`}
              alt="photo"
              className="w-36 h-28"
            />
          </div>
          <div className="h-[30rem] w-[30rem] flex flex-col gap-3 pl-10">
            <div className="flex leading-5 items-center">
              <span>Name</span>
              <span className="ml-[10.25rem]">{data?.name}</span>
            </div>
            <div className="flex leading-5 items-center">
              <span>Address</span>
              <span className="ml-1">
                <FaRegEdit
                  name="address"
                  onClick={handleClick("address")}
                  className="cursor-pointer"
                />
              </span>
              <span className="ml-32 h-auto w-[16rem]">{data?.address}</span>
            </div>
            <div className="flex leading-5 items-center">
              <span>Pan</span>
              <span className="ml-44">{data?.pan}</span>
            </div>
            <div className="flex items-center">
              <span>Bank Account no</span>
              <span className="ml-1">
                <FaRegEdit
                  size={15}
                  onClick={handleClick("bank_account_number")}
                  className="cursor-pointer"
                />
              </span>
              <span className="ml-16">{data?.bank_account_number}</span>
            </div>
            <div className="flex items-center">
              <span>Email</span>
              <span className="ml-1"></span>
              <span className="ml-[10rem]">{data?.email}</span>
            </div>
            <div className="flex items-center">
              <span>Phone Number</span>
              <span className="ml-[5.8rem]">{data?.contact_number}</span>
            </div>
            <div className="flex items-center">
              <span>Whatsapp</span>
              <span className="ml-1">
                <FaRegEdit
                  onClick={handleClick("whattsapp")}
                  className="cursor-pointer"
                />
              </span>
              <span className="ml-[6.75rem]">{data?.whattsapp}</span>
            </div>
            <div className="flex items-center">
              <span>Aadhar</span>
              <span className="ml-[9.25rem]">{data?.aadhar}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
