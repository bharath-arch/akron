import React from "react";
import image from "../assets/ceo.png";

const data = [
  { id: 1, name: "Amal", position: "CEO", image: "../assets/ceo.png" },
  { id: 2, name: "Deepak", position: "CFO", image: "../assets/ceo.png" },
  { id: 3, name: "Vishnu", position: "Developer", image: "../assets/ceo.png" },
  { id: 4, name: "Rahul", position: "Developer", image: "../assets/ceo.png" },
  {
    id: 5,
    name: "Jithusha",
    position: "Developer",
    image: "../assets/ceo.png",
  },
  {
    id: 6,
    name: "Aparna",
    position: "Investment Advisor",
    image: "../assets/ceo.png",
  },
  {
    id: 7,
    name: "Sanijith",
    position: "Investment Advisor",
    image: "../assets/ceo.png",
  },
  {
    id: 8,
    name: "Shafeque",
    position: "Investment Advisor",
    image: "../assets/ceo.png",
  },
];

function About() {
  return (
    <div>
      <div className="">
        <p className="text-center mt-[2rem] text-2xl">Our team</p>
      </div>
      <div className="flex justify-center mt-3  ">
        <div className=" grid grid-cols-4 gap-6 ">
          {data.map((data, index) => (
            <div className=" border-2 border-dashed border-gray-500 rounded-2xl w-[14rem] h-[14rem] ">
              <div className="flex justify-center items-center mt-4">
                <img
                  src={image}
                  alt={data.name + "image"}
                  className="w-[70%] "
                />
              </div>

              <span
                key={index}
                className="flex justify-center text-center flex-col"
              >
                {data.name} <br />
                {data.position}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
