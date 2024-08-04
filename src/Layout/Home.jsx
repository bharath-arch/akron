import React from "react";
import { Link } from "react-router-dom";
import Sideimage from "./Sideimage"; // Ensure Sideimage component path is correct

function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row md:items-center p-6 md:p-12">
        <div className="flex-1 mt-6 md:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left mb-4 md:mb-6">
            Grow Your Wealth with Higher Returns
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-center md:text-left text-gray-600 mb-6">
            Your platform for exclusive investment opportunities
          </p>

          <div className="flex justify-center md:justify-start mb-6">
            <Link to="/Login">
              <button className="px-6 py-3 bg-blue-800 hover:bg-blue-700 text-white rounded-lg text-lg md:text-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Optional: Side Image */}
        <div className="hidden md:flex md:flex-1 md:ml-6 lg:ml-12">
          <Sideimage />
        </div>
      </div>
    </div>
  );
}

export default Home;
