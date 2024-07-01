import React from "react";
import { Link } from "react-router-dom";
import Sideimage from "./Sideimage"; // Ensure Sideimage component path is correct

function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 md:p-12 bg-white shadow-lg rounded-lg md:flex md:flex-col md:items-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-center mb-6">
          Grow Your Wealth with Higher Returns
        </h1>
        <p className="text-lg md:text-2xl text-center text-gray-600 mb-8">
          Your platform for exclusive investment opportunities
        </p>

        <Link to="/Login">
          <button className="px-6 py-3 bg-blue-800 hover:bg-blue-700 text-white rounded-lg text-lg md:text-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </button>
        </Link>

        {/* Optional: Side Image */}
        {/* <div className="md:flex-1 md:mt-12 md:ml-6">
          <Sideimage />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
