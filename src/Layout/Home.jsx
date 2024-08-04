import React from "react";
import { Link } from "react-router-dom";
import Sideimage from "./Sideimage"; // Ensure Sideimage component path is correct

function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row md:items-center p-6 md:p-12">
        <div className="flex-1 mt-6 md:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center mb-4 md:mb-6">
            Grow Your Wealth with Higher Returns
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-center text-gray-600 mb-6 md:mb-8">
            Your platform for exclusive investment opportunities
          </p>

          <div className="flex justify-center  mb-6">
            <Link to="/Login">
              <button className="px-4 py-2 md:px-6 md:py-3 bg-blue-800 hover:bg-blue-700 text-white rounded-lg text-base md:text-lg lg:text-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home;
