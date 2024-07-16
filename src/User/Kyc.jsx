import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { successToast, errorToast } from "../Toaster";
import axios from "axios";

function Kyc() {
  const navigate = useNavigate();
  const [status, setStatus] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const localemail = localStorage.getItem("userEmail");
      console.log(localemail);
      console.log(localemail);
      if (localemail) {
        try {
          const response = await axios.post(
            "http://localhost:4000/kyc_approval/check",
            { email: localemail }
          );
          console.log(response.data);
          setStatus(response.data.result[0].Status);
          console.log(status);
        } catch (error) {
          setStatus("null");
          console.log(error);
        }
      } else {
        console.log("no data");
      }
    };

    fetchData();
  }, []);

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    linkedin_url: "",
    address: "",
    pan: "",
    aadhar: "",
    contact_number: "",
    whattsapp: "",
    about_yourself: "",
    anual_income: "",
    bank_account_number: "",
    bank_account_photo: "",
    where_you_learn_about_us: "",
    existing_commitments: "",
    avatar: "",
    ID_proof: "",
    Status: "pending",
  });

  const handleChangeEvent = (e) => {
    if (
      e.target.name === "avatar" ||
      e.target.name === "ID_proof" ||
      e.target.name === "bank_account_photo"
    ) {
      setFormdata({ ...formdata, [e.target.name]: e.target.files[0] });
    } else {
      setFormdata({ ...formdata, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      Object.entries(formdata).forEach(([key, value]) => {
        // console.log(key, value);
        formData.append(key, value);
      });

      console.log(formData, "----");

      const response = await axios.post("http://localhost:4000/kyc", formData);

      console.log("api called");
      const data = await response.data.message;
      console.log(data); // Handle response data (e.g., success message)
      data === "User already exists"
        ? toast.error(data)
        : navigate("/user/explore");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {status === "null" ? (
        <div>
          {" "}
          <Toaster position="top-center" reverseOrder={false} />
          <div className="">
            <div className="flex justify-between text-center items-center ml-8 mr-8 mt-3">
              <div className="">
                <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                  Akorn
                </span>
              </div>
              <span onClick={() => { navigate("/user/explore") }} className="hover:scale-125">Go Back</span>
            </div>
          </div>
          <section className="pl-16 pt-10 pr-16">
            <div className="flex flex-col gap-4 ">
              <span className="text-4xl font-semibold">KYC</span>
              <span className="text-xl">
                Start your investment journey with us
              </span>
              <div className="flex items-baseline">
                <span className="pr-1 text-sm text-gray-500">Application</span>
                <hr className="border-b-1 w-full border-gray-500" />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <label htmlFor="" className="font-semibold text-xl">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formdata.name}
                onChange={handleChangeEvent}
                className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                placeholder="Your Name"
              />
              <label htmlFor="" className="font-semibold text-xl">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formdata.email}
                onChange={handleChangeEvent}
                className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                placeholder="Email"
              />
              <label htmlFor="" className="font-semibold text-xl">
                LinkedIn URL (if any)
              </label>
              <input
                type="url"
                id="linkedin_url"
                name="linkedin_url"
                value={formdata.linkedin_url}
                onChange={handleChangeEvent}
                className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                placeholder="Your Name"
              />
              <label htmlFor="" className="font-semibold text-xl">
                Address
              </label>
              <textarea
                name="address"
                id="address"
                value={formdata.address}
                onChange={handleChangeEvent}
                className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                placeholder="Address"
              ></textarea>
              <label htmlFor="" className="font-semibold text-xl">
                PAN
              </label>
              <input
                type="text"
                name="pan"
                id="pan"
                value={formdata.pan}
                onChange={handleChangeEvent}
                className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                placeholder="PAN"
              />
              <label htmlFor="" className="font-semibold text-xl">
                Aadhar
              </label>
              <input
                type="text"
                name="aadhar"
                id="aadhar"
                value={formdata.aadhar}
                onChange={handleChangeEvent}
                className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                placeholder="Aadhar"
              />
              <label htmlFor="" className="font-semibold text-xl">
                Contact Number
              </label>
              <input
                type="text"
                name="contact_number"
                id="contact_number"
                value={formdata.contact_number}
                onChange={handleChangeEvent}
                className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                placeholder="Contact Number"
              />
              <label htmlFor="" className="font-semibold text-xl">
                Whats app Number
              </label>
              <input
                type="text"
                name="whattsapp"
                id="whattsapp"
                value={formdata.whattsapp}
                onChange={handleChangeEvent}
                className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                placeholder="Whats app Number"
              />
              <label htmlFor="" className="font-semibold text-xl">
                Describe about yourself
              </label>
              <textarea
                name="about_yourself"
                id="about_yourself"
                value={formdata.about_yourself}
                onChange={handleChangeEvent}
                className=" border-2 rounded-2xl w-[100%] h-auto p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                placeholder="Describe about yourself"
              />
              <label htmlFor="" className="font-semibold text-xl">
                What is your annual income
              </label>
              <input
                type="text"
                id="anual_income"
                name="anual_income"
                value={formdata.anual_income}
                onChange={handleChangeEvent}
                className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                placeholder="annual income"
              />
              <label htmlFor="" className="font-semibold text-xl">
                Bank account Number
              </label>
              <input
                type="text"
                name="bank_account_number"
                id="bank_account_number"
                value={formdata.bank_account_number}
                onChange={handleChangeEvent}
                className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                placeholder="account Number"
              />
              <label htmlFor="" className="font-semibold text-xl">
                Upload bank acc photo
              </label>
              <input
                type="file"
                name="bank_account_photo"
                id="bank_account_photo"
                // value={formdata.bank_account_photo}
                onChange={handleChangeEvent}
                className=" border-2  border-dashed rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
              {formdata.bank_account_photo && (
                <img
                  src={URL.createObjectURL(formdata.bank_account_photo)}
                  alt="Bank Account Photo"
                  width={200}
                  height={100}
                />
              )}
              <label htmlFor="" className="font-semibold text-xl">
                From where you learn about us
              </label>
              <textarea
                name="where_you_learn_about_us"
                id="where_you_learn_about_us"
                value={formdata.where_you_learn_about_us}
                onChange={handleChangeEvent}
                className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                placeholder="From where you learn about us"
              />

              <label htmlFor="" className="font-semibold text-xl">
                Do you have any existing commitments?
              </label>
              <div className="flex gap-3 items-center">
                <input
                  type="radio"
                  name="existing_commitments"
                  id="existing_commitments"
                  value="Yes"
                  onChange={handleChangeEvent}
                  className="w-4 h-4 rounded-full border-gray-300 focus:ring-1 focus:ring-blue-500"
                />
                <label htmlFor="">Yes</label>
                <input
                  type="radio"
                  name="existing_commitments"
                  id="existing_commitments"
                  value="No"
                  onChange={handleChangeEvent}
                  className="w-4 h-4 rounded-full border-gray-300 focus:ring-1 focus:ring-blue-500"
                />
                <label htmlFor="">No</label>
              </div>
              <label htmlFor="" className="font-semibold text-xl">
                Upload your Image
              </label>
              <input
                type="file"
                name="avatar"
                id="avatar"
                // value={formdata.avatar}
                onChange={handleChangeEvent}
                className=" border-2 border-dashed rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                placeholder="Upload your Image"
              />
              {formdata.avatar && (
                <img
                  src={URL.createObjectURL(formdata.avatar)}
                  alt="avatar"
                  width={200}
                  height={100}
                />
              )}
              <label htmlFor="" className="font-semibold text-xl">
                Upload your ID proof
              </label>
              <input
                type="file"
                name="ID_proof"
                id="ID_proof"
                // value={formdata.ID_proof}
                onChange={handleChangeEvent}
                className=" border-2 border-dashed rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                placeholder="Upload your ID proof"
              />
              {formdata.ID_proof && (
                <img
                  src={URL.createObjectURL(formdata.ID_proof)}
                  alt="Bank Account Photo"
                  width={200}
                  height={100}
                />
              )}
              <div className="flex justify-center mt-3 mb-3">
                <Link to={"/user"}>
                  {" "}
                  <button
                    className=" p-2 rounded-md w-24 bg-blue-600 border-none text-white hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-95   "
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div>
          <div className="">
            <div className="flex justify-between text-center items-center ml-8 mr-8 mt-3">
              <div className="">
                <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                  Akorn
                </span>
              </div>
              <span onClick={() => { navigate("/user/explore") }} className="transform transition duration-500 hover:scale-125 cursor-pointer">Go Back</span>

            </div>
          </div>
          <section className="pl-16 pt-10 pr-16">
            <div className="flex flex-col gap-4">
              <span className="text-4xl font-semibold">KYC</span>
              <span className="text-xl">
                Start your investment journey with us
              </span>
              <div className="flex items-baseline">
                <span className="pr-1 text-sm text-gray-500">Application</span>
                <hr className="border-b-1 w-full border-gray-500" />
              </div>
            </div>
          </section>

          {status === "false" ? (
            <p className="flex gap-2 text-xl justify-center mt-20 ml-20 ">
              Your application is{" "}
              <span className="text-red-500 font-bold">Rejected</span>{" "}
            </p>
          ) : status === "pending" ? (
            <p className="flex gap-2 text-xl justify-center  mt-20 ml-20 ">
              Your application is{" "}
              <span className="text-yellow-500 font-bold">Pending</span>{" "}
            </p>
          ) : (
            <p className="flex text-xl gap-2 justify-center mt-20 ml-20 ">
              Your application is{" "}
              <span className="text-green-500 font-bold">Approved</span>{" "}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Kyc;
