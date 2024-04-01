import React from "react";
import toast from "react-hot-toast";

import { successToast, errorToast } from "../Toaster";

function Founder_form() {
  return (
    <div>
      <div className="">
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
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Your Name"
          />
          <label htmlFor="" className="font-semibold text-xl">
            Email
          </label>
          <input
            type="email"
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Email"
          />
          <label htmlFor="" className="font-semibold text-xl">
            LinkedIn URL of Founder
          </label>
          <input
            type="url"
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Your Name"
          />
          <label htmlFor="" className="font-semibold text-xl">
            LinkedIn Page of the Company
          </label>
          <input
            type="url"
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Your Name"
          />
          <label htmlFor="" className="font-semibold text-xl">
            Registered Company Name
          </label>
          <input
            type="text"
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Your Name"
          />

          <label htmlFor="" className="font-semibold text-xl">
            Address
          </label>
          <textarea
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Address"
          ></textarea>
          <label htmlFor="" className="font-semibold text-xl">
            PAN
          </label>
          <input
            type="text"
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="PAN"
          />
          <label htmlFor="" className="font-semibold text-xl">
            Website
          </label>
          <input
            type="url"
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Aadhar"
          />
          <label htmlFor="" className="font-semibold text-xl">
            Describe your previous fundraising rounds
          </label>
          <textarea
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Contact Number"
          />
          <label htmlFor="" className="font-semibold text-xl">
            Describe your product
          </label>
          <textarea
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Contact Number"
          />
          <label htmlFor="" className="font-semibold text-xl">
            Describe the traction
          </label>
          <textarea
            className=" border-2 rounded-2xl w-[100%] h-auto p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Describe about yourself"
          />
          <label htmlFor="" className="font-semibold text-xl">
            Describe the revenue you are making
          </label>

          <textarea
            className=" border-2 rounded-2xl w-[100%] h-auto p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Describe about yourself"
          />
          <label htmlFor="" className="font-semibold text-xl">
            How big is the team ?
          </label>
          <input
            type="text"
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="How big is the team ?"
          />
          <label htmlFor="" className="font-semibold text-xl">
            Why do you want to raise a Community round ?
          </label>
          <textarea
            type="text"
            className=" border-2  border-dashed rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Why do you want to raise a Community round ?"
          />
          <label htmlFor="" className="font-semibold text-xl">
            From where you learn about us
          </label>
          <textarea
            className=" border-2 rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="From where you learn about us"
          />

          <label htmlFor="" className="font-semibold text-xl">
            Do you have any existing commitments?
          </label>
          <div className="flex gap-3 items-center">
            <input
              type="radio"
              name="commitments"
              className="w-4 h-4 rounded-full border-gray-300 focus:ring-1 focus:ring-blue-500"
            />
            <label htmlFor="">Yes</label>
            <input
              type="radio"
              name="commitments"
              className="w-4 h-4 rounded-full border-gray-300 focus:ring-1 focus:ring-blue-500"
            />
            <label htmlFor="">No</label>
          </div>
          <label htmlFor="" className="font-semibold text-xl">
            Upload your Pitch
          </label>
          <input
            type="file"
            className=" border-2 border-dashed rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Upload your Image"
          />
          <label htmlFor="" className="font-semibold text-xl">
            Upload your Financials
          </label>
          <input
            type="file"
            className=" border-2 border-dashed rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Upload your ID proof"
          />
          <label htmlFor="" className="font-semibold text-xl">
            How much do you expect to raise with us ?
          </label>
          <input
            type="text"
            className=" border-2 border-dashed rounded-2xl w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Amount"
          />
          <div className="flex justify-center mt-3 mb-3">
            <button
              className=" p-2 rounded-md w-24 bg-blue-600 border-none text-white hover:bg-blue-700  "
              onClick={() =>
                toast.success(
                  "Success! Your KYC application has been submitted."
                )
              }
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
