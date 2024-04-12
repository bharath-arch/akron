import React from "react";
import { GrNext } from "react-icons/gr";
import { MdPictureAsPdf } from "react-icons/md";
import { GoGraph } from "react-icons/go";

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
  return (
    <section className="">
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
        <span className="hidden md:flex justify-end items-center mr-10 w-full text-blue-800 text-lg">
          {" "}
          Next <GrNext />
        </span>

       
      </div>
      <div className="w-full h-full bg-gradient-to-br pt-5 pr-8 pl-8">
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
        <div className="flex gap-5 mt-9  ">
          {" "}
          {/* Wrap content on mobile */}
          <div className={`h-auto flex flex-wrap 
                     
                     md:w-full  gap-10`}>
            {" "}
            {/* Adjust grid columns for mobile */}
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
        <div className="flex justify-center items-center text-center mt-5">
          <GoGraph size={300} color="green" />
        </div>
      </div>
    </section>
  );
}

export default Wealth;
