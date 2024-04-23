import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import axios from "axios"
import { successToast, errorToast } from "../Toaster";

function Founder_form() {
  // const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    linkedin_founder: "",
    linkedin_company: "",
    company_name: "",
    address: "",
    pan: "",
    website: "",
    previous_fundraising_rounds_discription: "",
    product_discription: "",
    traction: "",
    revenue_and_making: "",
    team_size: "",
    community_fund_raising_reason: "",
    where_you_learn_about_us: "",
    existing_commitments: "",
    pitch: "",
    financials: "",
    amount_expected_to_raise: "",
  });
  const handleChangeEvent = (e) => {
    
    if (e.target.name === "pitch" || e.target.name === "financials") {
      console.log(e.target.name);
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
      console.log(formdata);
      // const ue= await axios.post("http://localhost:4000/company_registration/register", formData.pan);
      // if(ue){
      //     console.log("ue not found")
      // }else{
      //   toast.error("data")
      // }

      const response = await axios.post("http://localhost:4000/company_registration/register", formData);

      console.log("api called");
      const data = await response.data.message;
      console.log(data); // Handle response data (e.g., success message)
      data === "User already exists" ? toast.error(data) : toast.success('We will notify you soon');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="">
      <Toaster position="top-center" reverseOrder={false} />
        <div className="flex justify-between text-center items-center ml-8 mr-8 mt-3">
          <div className="">
            <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Akorn
            </span>
          </div>
          <span>Login</span>
        </div>
      </div>
      <section className="pl-16 pt-10 pr-16">
        <div className="flex flex-col gap-4 ">
          <span className="text-4xl font-semibold">Raise with US</span>
          <span className="text-xl">
            Tell us a little about your company. <br />
            This will help us understand your business better.
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
            value={formdata.email}
            onChange={handleChangeEvent}
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Email"
          />
          <label htmlFor="" className="font-semibold text-xl">
            LinkedIn URL of Founder
          </label>
          <input
            type="url"
            name="linkedin_founder"
            value={formdata.linkedin_founder}
            onChange={handleChangeEvent}
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Your Name"
          />
          <label htmlFor="" className="font-semibold text-xl">
            LinkedIn Page of the Company
          </label>
          <input
            type="url"
            name="linkedin_company"
            value={formdata.linkedin_company}
            onChange={handleChangeEvent}
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Your Name"
          />
          <label htmlFor="" className="font-semibold text-xl">
            Registered Company Name
          </label>
          <input
            type="text"
            name="company_name"
            value={formdata.company_name}
            onChange={handleChangeEvent}
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Your Name"
          />

          <label htmlFor="" className="font-semibold text-xl">
            Address
          </label>
          <textarea
            name="address"
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
            value={formdata.pan}
            onChange={handleChangeEvent}
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="PAN"
          />
          <label htmlFor="" className="font-semibold text-xl">
            Website
          </label>
          <input
            type="url"
            name="website"
            value={formdata.website}
            onChange={handleChangeEvent}
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Aadhar"
          />
          <label htmlFor="" className="font-semibold text-xl">
            Describe your previous fundraising rounds
          </label>
          <textarea
            name="previous_fundraising_rounds_discription"
            value={formdata.previous_fundraising_rounds_discription}
            onChange={handleChangeEvent}
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Contact Number"
          />
          <label htmlFor="" className="font-semibold text-xl">
            Describe your product
          </label>
          <textarea
            name="product_discription"
            value={formdata.product_discription}
            onChange={handleChangeEvent}
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Contact Number"
          />
          <label htmlFor="" className="font-semibold text-xl">
            Describe the traction
          </label>
          <textarea
            name="traction"
            value={formdata.traction}
            onChange={handleChangeEvent}
            className=" border-2 rounded-2xl w-[100%] h-auto p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Describe about yourself"
          />
          <label htmlFor="" className="font-semibold text-xl">
            Describe the revenue you are making
          </label>

          <textarea
            name="revenue_and_making"
            value={formdata.revenue_and_making}
            onChange={handleChangeEvent}
            className=" border-2 rounded-2xl w-[100%] h-auto p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Describe about yourself"
          />
          <label htmlFor="" className="font-semibold text-xl">
            How big is the team ?
          </label>
          <input
            type="text"
            name="team_size"
            value={formdata.team_size}
            onChange={handleChangeEvent}
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="How big is the team ?"
          />
          <label htmlFor="" className="font-semibold text-xl">
            Why do you want to raise a Community round ?
          </label>
          <textarea
            name="community_fund_raising_reason"
            type="text"
            value={formdata.community_fund_raising_reason}
            onChange={handleChangeEvent}
            className=" border-2  border-dashed rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Why do you want to raise a Community round ?"
          />
          <label htmlFor="" className="font-semibold text-xl">
            From where you learn about us
          </label>
          <textarea
            name="where_you_learn_about_us"
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
              value="Yes"
              onChange={handleChangeEvent}
              className="w-4 h-4 rounded-full border-gray-300 focus:ring-1 focus:ring-blue-500"
            />
            <label htmlFor="">Yes</label>
            <input
              type="radio"
              name="existing_commitments"
              value="No"
              onChange={handleChangeEvent}
              className="w-4 h-4 rounded-full border-gray-300 focus:ring-1 focus:ring-blue-500"
            />
            <label htmlFor="">No</label>
          </div>
          <label htmlFor="" className="font-semibold text-xl">
            Upload your Pitch
          </label>
          <input
            type="file"
            name="pitch"
            onChange={handleChangeEvent}
            className=" border-2 border-dashed rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder=" Upload your Pitch"
          />
          <label htmlFor="" className="font-semibold text-xl">
            Upload your Financials
          </label>
          <input
            type="file"
            name="financials"
            onChange={handleChangeEvent}
            className=" border-2 border-dashed rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Upload your Financials"
          />
          <label htmlFor="" className="font-semibold text-xl">
            How much do you expect to raise with us ?
          </label>
          <input
            type="text"
            name="amount_expected_to_raise"
            value={formdata.amount_expected_to_raise}
            onChange={handleChangeEvent}
            className=" border-2 border-dashed rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Amount"
          />
          <div className="flex justify-center mt-3 mb-3">
            <button
              className=" p-2 rounded-md w-24 bg-blue-600 border-none text-white hover:bg-blue-700  "
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Founder_form;
