import React, { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { MdPictureAsPdf } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import axios from "axios";

const companies_data = [
  {
    id: 1,
    Company_name: "Company",
    About:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate incidunt repudiandae cum necessitatibus perferendis magni rem magnam, totam pariatur adipisci quis quos similique fugit officiis id omnis culpa doloremque, atque hic. Magnam voluptatibus, libero eligendi adipisci doloribus quas cupiditate porro blanditiis, rerum aliquam laboriosam, at repudiandae ad fugit reprehenderit ea illum? Qui tenetur dolorum sed at sequi nesciunt natus labore doloribus, officiis, autem inventor.",
    Sector: "Energy",
    image: "",
  },
  {
    id: 2,
    Company_name: "Company",
    About:
      "This code snippet appears to be written in Tailwind CSS, a utility-first CSS framework. Here's the breakdown and corrected version:",
    Sector: "CFO",
    image: "",
  },
];

function Wealth() {
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/company_approve/dashboard_data"
        );

        const filteredData = response.data.result.filter(
          (item) => item.status === true
        );
        console.log(filteredData);

        setData(filteredData);
        console.log();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handlePrevious = () => {
    if (count === 0) {
      setCount(data.length - 1);
    } else {
      setCount((count) => count - 1);
    }
  };
  const handleNext = () => {
    if (count === data.length - 1) {
      setCount(0);
    } else {
      setCount((count) => count + 1);
    }
  };

  return (
    <section className="">
      <div className="md:flex md:justify-between  hidden text-blue-800 ">
        <button className="flex items-center" onClick={handlePrevious}>
          {" "}
          <GrPrevious />
          Previous
        </button>
        <button className="flex items-center" onClick={handleNext}>
          {" "}
          Next <GrNext />
        </button>
      </div>
      <div className="flex  mr-2 md:mr-0 mb-3  items-center w-full justify-end">
        <span className="flex justify-end w-full text-blue-800 text-lg md:hidden">
          {" "}
          Next
        </span>
        <div className="left-7/12 md:hidden">
          {" "}
          {/* Centered on mobile */}
          <span>
            <GrNext />
          </span>
        </div>
      </div>
      <div className="w-full h-full bg-gradient-to-br pt-5 pr-8 pl-8">
        <div className="flex flex-col">
          <span className="font-bold text-3xl">
            {data && data[count].company_name}
          </span>
          <span className="mt-2">
            <span className="font-bold">Sector :</span>{" "}
            {data && data[count].sector}
          </span>
          <span className="mt-2 font-semibold text-xl">About</span>
          <span className="mt-2 font-semibold ">Product Discription</span>
          <span className="mt-2">
            {" "}
            {data && data[count].previous_fundraising_rounds_discription}
          </span>
          <span className="mt-2 font-semibold ">
            Previous Fund Raising Round
          </span>
          <span className="mt-2">
            {" "}
            {data && data[count].product_discription}
          </span>
          <span className="mt-2 font-semibold ">Traction</span>
          <span className="mt-2"> {data && data[count].traction}</span>
        </div>
        <div className="flex gap-x-5  mt-9 mb-5 ">
          {" "}
          {/* Wrap content on mobile */}
          <div
            className={`h-auto flex flex-wrap 
                     
                     md:w-full  gap-10`}
          >
            {" "}
            {/* Adjust grid columns for mobile */}
            <span>
              <span className="font-bold">Mkt Cap :</span>{" "}
              {data && data[count].market_cap} Cr.
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
            <span className="font-bold">Earnings YOY :</span>
            <div className="flex mt-2 md:mt-0">
              {" "}
              {/* Move together on mobile */}
              <span className="font-bold">Financial Report </span>
              <span className="ml-2">
                <MdPictureAsPdf size={25} />
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-end mr-8">
          <button className="text-blue-900 font-bold ">
            view more
          </button>
        </div>
        <div className="flex justify-center items-center text-center mt-5">
          <GoGraph size={300} color="green" />
        </div>
      </div>
    </section>
  );
}

export default Wealth;
