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
  {
    id: 3,
    Company_name: "Company",
    About:
      "This code snippet appears to be written in Tailwind CSS, a utility-first CSS framework. Here's the breakdown and corrected version:",
    Sector: "Developer",
    image: "",
  },
  {
    id: 4,
    Company_name: "Company",
    About:
      "This code snippet appears to be written in Tailwind CSS, a utility-first CSS framework. Here's the breakdown and corrected version:",
    Sector: "Developer",
    image: "",
  },
  {
    id: 5,
    Company_name: "Company",
    Sector: "Developer",
    image: "../assets/ceo.png",
    About:
      "This code snippet appears to be written in Tailwind CSS, a utility-first CSS framework. Here's the breakdown and corrected version:",
  },
  {
    id: 6,
    Company_name: "Company",
    Sector: "Investment Advisor",
    image: "../assets/ceo.png",
    About:
      "This code snippet appears to be written in Tailwind CSS, a utility-first CSS framework. Here's the breakdown and corrected version:",
  },
  {
    id: 7,
    Company_name: "Company",
    Sector: "Investment Advisor",
    image: "../assets/ceo.png",
    About:
      "This code snippet appears to be written in Tailwind CSS, a utility-first CSS framework. Here's the breakdown and corrected version:",
  },
  {
    id: 8,
    Company_name: "Company",
    Sector: "Investment Advisor",
    image: "../assets/ceo.png",
    About:
      "This code snippet appears to be written in Tailwind CSS, a utility-first CSS framework. Here's the breakdown and corrected version:",
  },
];

function Wealth() {
  return (
    <section className=" ">
      <div className="flex justify-end mr-28 mb-3 relative items-center">
        <span className="flex justify-end text-blue-800 text-lg  "> Next</span>
        <div className="absolute top-[0.5rem] left-[78.75rem]">
          <span>
            <GrNext />
          </span>
        </div>
      </div>
      <div className="w-[81rem] h-full bg-gradient-to-br from-gray-200 to-gray-100 pt-5 pr-8 pl-8">
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
            <span className="font-bold">Earnings YOY :</span>
            <div className="flex">
              <span className="font-bold ">Financial Report </span>
              <span className="ml-2">
                <MdPictureAsPdf size={25} />
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-center mt-5">
          <GoGraph size={300} color="green"/>
        </div>
      </div>
    </section>
  );
}

export default Wealth;
