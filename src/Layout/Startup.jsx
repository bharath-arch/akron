import React from "react";
import Sideimage from './Sideimage'
import { Link  } from "react-router-dom";
import image from '../assets/sideimage.png'


function Startup() {
  return (
    <div className="">
      <div className="flex">
        <div className=" mt-16 ml-10 md:ml-28 md:flex-1">
          <h1 className="'md:text-6xl font-semibold  text-4xl ' ">
            Raising capital made easy now
          </h1>
          <p className="md:text-4xl mt-6 text-2xl">
            A growing community of over 150,000 users are waiting to back your
            startup
          </p>
          <div className="flex  items-center">
        <img src={image} alt="image" className='w-[18rem] h-[18rem]  mt-8'></img>
        </div>
          <Link to="founder_form"><button className="p-2 bg-blue-800 rounded-lg text-white  md:p-2 md:bg-blue-800 md:text-white md:rounded-lg mt-5">
            Apply now
          </button></Link>
        </div>
        <div className="hidden md:flex-1">
          <Sideimage />
        </div>
      </div>
    </div>
  );
}

export default Startup;
