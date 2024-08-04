import React from "react";
import { Link } from "react-router-dom";

function Startup() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col items-center p-6 md:p-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center mb-4 md:mb-6">
          Raising capital made easy now
        </h1>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-center text-gray-600 mb-6 md:mb-8">
          A growing community of over 150,000 users are waiting to back your startup
        </p>

        <Link to="/founder_form">
          <button className="px-4 py-2 md:px-6 md:py-3 bg-blue-800 hover:bg-blue-700 text-white rounded-lg text-base md:text-lg lg:text-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
            Apply now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Startup;
