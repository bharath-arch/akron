import React from "react";
import { GrNext } from "react-icons/gr";
import { MdPictureAsPdf } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { Link } from "react-router-dom";
const companies_data = [
  {
    id: 1,
    Company_name: "Company",
    About:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit culpa labore dolores laudantium ut magni ducimus voluptate ipsa dolore aut?",
    Sector: "Energy",
    image: "",
  },
];

function Application_data() {
  return (
    <section className="  ">
      <div>
        {" "}
        <div className="">
          <div className="flex justify-between text-center items-center ml-8 mr-8 mt-3">
            <div className="">
              <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                Akorn
              </span>
            </div>
            <div className=" flex gap-5 items-center text-center ">
             <Link to="admin_dashboard"> <span className="font-semibold text-xl">Admin Dashboard</span></Link>
              <span className="text-xl">Logout</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[81rem] h-full bg-gradient-to-br m-10 from-gray-200 to-gray-100 pt-5 pr-8 pl-8">
        <div className="flex flex-col">
          <span className="font-bold text-3xl">
            {companies_data[0].Company_name}
          </span>
          <span className="mt-2">
            <span className="font-bold">Sector :</span>{" "}
            {companies_data[0].Sector}
          </span>
          <span className="mt-2 font-semibold text-xl">About</span>
          <span className="mt-2">{companies_data[0].About}</span>
        </div>
        <div className="flex mt-4 ">
          <div className="grid grid-cols-6 gap-x-3 gap-y-3">
            <span>
              <span className="font-bold">Mkt Cap :</span> xxxx
            </span>
            <span>
              <span className="font-bold">P/E Ratio : </span> xx.x
            </span>
            <span>
              <span className="font-bold">Industry P/E :</span> xx.x
            </span>
            <span>
              <span className="font-bold">ROE :</span> xx
            </span>
            <span>
              <span className="font-bold">EPS :</span> xx
            </span>
            <span>
              <span className="font-bold">Previous Valuation :</span> xx Cr.
            </span>
          </div>{" "}
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <span>
            <span className="font-bold">Address :</span> Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Reprehenderit amet nesciunt
            voluptates tempora corrupti omnis?
          </span>
          <span>
            <span className="font-bold">Website :</span> xx Cr.
          </span>
          <span>
            <span className="font-bold">Founder's LinkedIn URL :</span> xx Cr.
          </span>
          <span>
            <span className="font-bold">Company Email :</span> xx Cr.
          </span>
          <span>
            <span className="font-bold">product Description :</span> xx Cr.
          </span>
          <span>
            <span className="font-bold">Previous fundraising rounds :</span> xx
            Cr.
          </span>
          <span>
            <span className="font-bold">Existing commitments :</span> xx Cr.
          </span>
          <span>
            <span className="font-bold">Team size :</span> xx Cr.
          </span>
          <span>
            <span className="font-bold">
              Why do you want to raise a Community round? :
            </span>{" "}
            xx Cr.
          </span>
          <span>
            <span className="font-bold">Revenue :</span> xx Cr.
          </span>
          <span>
            <span className="font-bold">Pitch :</span>
          </span>
          <span>
            <span className="font-bold">Reqested Amount :</span> xx Cr.
          </span>
          <span className="font-bold">Earnings YOY :</span>
          <div className="flex">
            <span className="font-bold ">Financial Report </span>
            <span className="ml-2">
              <MdPictureAsPdf size={25} />
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center text-center mt-5">
          <GoGraph size={300} color="green" />
        </div>
        <div className="flex justify-end pb-5">
        <button class="px-3 py-2 text-xl rounded-md text-white w-[8rem] bg-blue-700 font-arima hover:bg-blue-800">
          Accept
        </button>
        <button class="px-3 ml-2 py-2 text-xl rounded-md text-white w-[8rem] bg-red-700 font-arima hover:bg-red-800">
          Reject
        </button>
      </div>
      </div>
      
    </section>
  );
}

export default Application_data;
