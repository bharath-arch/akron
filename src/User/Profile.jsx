import React from "react";
import { Link } from "react-router-dom";
import setBodyColor from "../setBodyColor";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import image from "../assets/ceo.png"

function Profile() {
  setBodyColor({ color: "white" });

  return (
    <div className="">
      <div className="flex justify-between text-center items-center ml-8 mr-8 mt-3">
        <div className="">
          <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Akorn
          </span>
        </div>
       
        <span>Logout</span>
      </div>
      
      <section className="pl-[6rem] pt-16 pr-[6rem]">
      <span className="font-semibold text-xl">Profile</span>
      <div className="flex mt-5">
      <div className=" ">
        <img src={image} alt="photo" />
      </div>
      <div className="h-[30rem] w-[30rem] flex  flex-col gap-3  pl-10 ">
        <span className="flex leading-5 ">
            <span>Name</span>
            <span className="ml-[10.25rem]">Name</span>
        </span>
        <span className="flex leading-5 ">
            <span>Address</span>
            <span className="ml-1"><FaRegEdit /></span>
            <span className="ml-32 h-auto w-[16rem] ">Lorem ipsum dolor,eos asperiores odit ipsum magnam sint reiciendis nostrum? Numquam sed illo recusandae expedita!</span>
        </span>
        <span className="flex leading-5">
            <span>Pan</span>
            <span className="ml-44">GQPPM7856H</span>
        </span>
        <span className="flex ">
            <span>Bank Account no</span>
            <span className="ml-1"><FaRegEdit size={15} /></span>
            <span className="ml-16">Bank Account no</span>
        </span>
        <span className="flex ">
            <span>Email</span>
            <span className="ml-1"><FaRegEdit /></span>
            <span className="ml-[9rem]">Email</span>
        </span>
        <span className="flex ">
            <span>Phone Number</span>
            <span className="ml-[5.8rem]">Number</span>
        </span>
        <span className="flex ">
            <span>Whatsapp</span>
            <span className="ml-1"><FaRegEdit /></span>
            <span className="ml-[6.75rem]">Whatsapp</span>
        </span>
        <span className="flex ">
            <span>Aadhar</span>
            <span className="ml-[9.25rem]">Aadhar</span>
        </span>
      </div>
      </div>
      </section>
    </div>
  );
}

export default Profile;
