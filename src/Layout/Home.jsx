import React from "react";
import Sideimage from "./Sideimage";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="">
      <div className=" md:flex">
        <div className=" mt-3 ml-5 md:mt-24 md:ml-20 md:flex-1">
          <h1 className="md:text-6xl font-semibold  text-2xl  ">
            Grow your wealth with higher returns
          </h1>
          <p className="md:text-4xl mt-7 text-sm">
            Your platform for exclusive opportunities
          </p>

          <Link to={"/Login"}>
            <button className="md:p-3 p-1  bg-blue-800 rounded-lg text-white text-sm md:text-xl md:bg-blue-800 md:text-white md:rounded-lg mt-5 hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-95 ">
              Get Started
            </button>
          </Link>
        </div>
        <div className=" ml-5  md:flex-1   md:mt-44 mr-5  ">
          <Sideimage />
        </div>
      </div>
    </div>
  );
}

export default Home;
