import React from "react";
import { Link } from "react-router-dom";

function Startup() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 md:p-12 bg-white shadow-lg rounded-lg md:flex md:flex-col md:items-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-center mb-6">
          Raising capital made easy now
        </h1>
        <p className="text-lg md:text-2xl text-center text-gray-600 mb-8">
          A growing community of over 150,000 users are waiting to back your
          startup
        </p>

        <Link to="/founder_form">
          <button className="px-6 py-3 bg-blue-800 hover:bg-blue-700 text-white rounded-lg text-lg md:text-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
            Apply now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Startup;
