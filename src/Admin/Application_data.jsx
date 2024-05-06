import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import setBodyColor from "../setBodyColor";
import axios from "axios";
import { MdPictureAsPdf } from "react-icons/md";
import { GoGraph } from "react-icons/go";

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
  setBodyColor({ color: "lightgray" });

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const { id } = useParams(); // Corrected extraction of id from useParams
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Include the parameter in the URL
        const response = await axios.post(
          `http://localhost:4000/company_data/${id}`
        ); // Corrected parameter name
        console.log(response.data);
        setData(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]); // Include 'id' in the dependency array

  return (
    <div>
    {data.isMatch ? (<section className="  ">
    <div>
      <div className="">
        <div className="flex justify-between text-center items-center ml-8 mr-8 mt-3">
          <div className="">
            <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Akorn
            </span>
          </div>
          <div className="flex gap-5 items-center text-center ">
            <Link to="/admin_dashboard">
              <span
                className="font-semibold text-xl"
                onClick={() => navigate("/admin_dashboard")}
              >
                Admin Dashboard
              </span>
            </Link>
            <span className="text-xl">Logout</span>
          </div>
        </div>
      </div>
    </div>
    <div className="w-[81rem] h-full bg-gradient-to-br m-10 from-gray-200 to-gray-100 pt-5 pr-8 pl-8">
      <div className="flex flex-col">
        <span className="font-bold text-3xl">
          <span>{data.isMatch?.company_name}</span>
        </span>
        <span className="mt-2">
          <span className="font-bold">Sector :</span>{" "}
          <span>{data.isMatch?.sector}</span>
        </span>
        <span className="mt-2 font-semibold text-xl">About</span>
        <span className="mt-2 font-semibold text-xl">previous fundraising rounds</span>
        <span className="mt-2"><span>{data.isMatch?.previous_fundraising_rounds_discription}</span></span>
        <span className="mt-2 font-semibold text-xl">product discription</span>
        <span className="mt-2"><span>{data.isMatch?.product_discription}</span></span>
        <span className="mt-2 font-semibold text-xl">Traction</span>
        <span className="mt-2"><span>{data.isMatch?.traction}</span></span>
        
        
      </div>
      <div className="flex mt-4 ">
        <div className="grid grid-cols-6 gap-x-3 gap-y-3">
          <span>
            <span className="font-bold">Mkt Cap :</span> {data.isMatch?.market_cap} Cr.
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
          <span className="font-bold">Address :</span> {data.isMatch?.address}
        </span>
        <span>
          <span className="font-bold">Website :</span> {data.isMatch?.website}
        </span>
        <span>
          <span className="font-bold">Founder's LinkedIn URL :</span> {data.isMatch?.linkedin_founder}.
        </span>
        <span>
          <span className="font-bold">Company Email :</span> {data.isMatch?.email}.
        </span>
        <span>
          <span className="font-bold">product Description :</span> {data.isMatch?.product_discription}.
        </span>
        <span>
          <span className="font-bold">Previous fundraising rounds :</span> {data.isMatch?.previous_fundraising_rounds_discription}
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
        <button className="px-3 py-2 text-xl rounded-md text-white w-[8rem] bg-blue-700 font-arima hover:bg-blue-800">
          Accept
        </button>
        <button className="px-3 ml-2 py-2 text-xl rounded-md text-white w-[8rem] bg-red-700 font-arima hover:bg-red-800">
          Reject
        </button>
      </div>
    </div>
  </section>):(<p>Loading...</p>)}
  </div>
  );
}

export default Application_data;
