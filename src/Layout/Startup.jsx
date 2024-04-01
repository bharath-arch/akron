import React from "react";
import Sideimage from './Sideimage'
import { Link  } from "react-router-dom";

function Startup() {
  return (
    <div className="">
      <div className="flex">
        <div className=" mt-16  ml-28 flex-1">
          <h1 className="text-6xl font-semibold ">
            Raising capital made easy now
          </h1>
          <p className="text-4xl mt-6">
            A growing community of over 150,000 users are waiting to back your
            startup
          </p>
          <Link to="founder_form"><button className="text-xl p-2 bg-blue-800 text-white rounded-lg mt-12">
            Apply now
          </button></Link>
        </div>
        <div className="flex-1">
          <Sideimage />
        </div>
      </div>
    </div>
  );
}

export default Startup;
