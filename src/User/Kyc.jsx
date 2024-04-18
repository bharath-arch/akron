import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { successToast, errorToast } from "../Toaster";

function Kyc() {
  const navigate = useNavigate();
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
  });
  const handleChangeEvent = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/kyc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();
      console.log(data); // Handle response data (e.g., success message)
      const message_response = data.message;
      message_response === "User already exists"
        ? toast.error(message_response)
        : navigate("/user");
      
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    console.log(formdata, "formdata");
    // toast.success('Successfully toasted!')
  };
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="">
        <div className="flex justify-between text-center items-center ml-8 mr-8 mt-3">
          <div className="">
            <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Akorn
            </span>
          </div>
          <span>Logout</span>
        </div>
      </div>
      <section className="pl-16 pt-10 pr-16">
        <div className="flex flex-col gap-4 ">
          <span className="text-4xl font-semibold">KYC</span>
          <span className="text-xl">Start your investment journey with us</span>
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
            value={formdata.bank_account_photo}
            onChange={handleChangeEvent}
            className=" border-2  border-dashed rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
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
              value={formdata.existing_commitments}
              onChange={handleChangeEvent}
              className="w-4 h-4 rounded-full border-gray-300 focus:ring-1 focus:ring-blue-500"
            />
            <label htmlFor="">Yes</label>
            <input
              type="radio"
              name="existing_commitments"
              id="existing_commitments"
              value={formdata.existing_commitments}
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
            value={formdata.avatar}
            onChange={handleChangeEvent}
            className=" border-2 border-dashed rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Upload your Image"
          />
          <label htmlFor="" className="font-semibold text-xl">
            Upload your ID proof
          </label>
          <input
            type="file"
            name="ID_proof"
            id="ID_proof"
            value={formdata.ID_proof}
            onChange={handleChangeEvent}
            className=" border-2 border-dashed rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Upload your ID proof"
          />
          <div className="flex justify-center mt-3 mb-3">
            <Link to={"/user"}>
              {" "}
              <button
                className=" p-2 rounded-md w-24 bg-blue-600 border-none text-white hover:bg-blue-700  "
                onClick={handleSubmit}
              >
                Submit
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Kyc;
