import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import setBodyColor from "../setBodyColor";

function Layout() {
  const [selectLink, setSelectLink] = useState("Home");
  setBodyColor({ color: "white" });
  return (
    <div className="">
      <div className="flex justify-between text-center items-center ml-8 mr-8 mt-3">
        <div className="">
          <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Akron
          </span>
        </div>
        <div className="">
          <ul className="flex gap-5 font-semibold text-xl">
            <li
              onClick={() => setSelectLink("Home")}
              className={`${
                selectLink === "Home" ? "text-blue-900 p-2" : "p-2"
              }`}
            >
              <Link to={""}>Home</Link>
            </li>
            <li
              onClick={() => setSelectLink("startup")}
              className={`${
                selectLink === "startup" ? "text-blue-900 p-2" : "p-2"
              }`}
            >
              <Link to={"/startup"}>Startup</Link>
            </li>
            <li
              onClick={() => setSelectLink("academy")}
              className={`${
                selectLink === "academy" ? "text-blue-900 p-2" : "p-2"
              }`}
            >
              <Link to={"/academy"}>Academy</Link>
            </li>
            <li
              onClick={() => setSelectLink("partnership")}
              className={`${
                selectLink === "partnership" ? "text-blue-900 p-2" : "p-2"
              }`}
            >
              <Link to={"/partnership"}>Partnership</Link>
            </li>
            <li
              onClick={() => setSelectLink("Aboutus")}
              className={`${
                selectLink === "Aboutus" ? "text-blue-900 p-2" : "p-2"
              }`}
            >
              <Link to={"/Aboutus"}>About Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 text-xl items-center">
          <p className="p-2">
            <Link to={"/sign_in"}>Sign In</Link>
          </p>
          <Link to={"/Login"}>
            {" "}
            <span className="p-2 bg-blue-800 text-white rounded-lg ">
              Get Started
            </span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col min-h-screen">
        <div className="w-full">
          <Outlet />
        </div>
      </div>
      <footer className="bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left">
        <div className="bg-black/5 p-4 text-center text-surface dark:text-white">
          &copy; 2023 Copyright: Akorn
        </div>
      </footer>
    </div>
  );
}

export default Layout;