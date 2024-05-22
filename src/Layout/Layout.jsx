import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import setBodyColor from "../setBodyColor";
import { RxHamburgerMenu } from "react-icons/rx";

function Layout() {
  const [selectLink, setSelectLink] = useState("Home");
  const [isOpen, setActivetoogle] = useState(false);
  const navtoggle = () => setActivetoogle(!isOpen);
  setBodyColor({ color: "white" });
  return (
    <div className="">
      <div className="flex items-center justify-between mt-5 mr-5 ml-5 md:flex md:justify-between md:text-center md:items-center md:ml-8 md:mr-8 md:mt-3">
        <div className="">
          <span className="font-bold text-2xl  md:text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Akron
          </span>
        </div>
        <div className="">
          <ul className=" hidden md:flex gap-5 font-semibold text-xl">
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
        <div className="">
          <div className="hidden  md:flex md:gap-4 md:items-center ">
            <p className=" md:items-center md:p-2 md:text-xl">
              <Link to={"/sign_in"}>Sign In</Link>
            </p>
            <Link to={"/Login"}>
              {" "}
              <button
                className={`md:p-3  md:text-xl md:bg-blue-800 md:text-white md:rounded-lg hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-95 `}
              >
                Get Started
              </button>
            </Link>
          </div>
          <div>
            <button onClick={navtoggle} className="md:hidden">
              {isOpen ? <RxHamburgerMenu /> : <RxHamburgerMenu />}
            </button>

            {isOpen && (
              <div className="relative ">
                <ul className=" absolute flex flex-col items-center text-[12px] top-5  right-4 font-semibold  bg-white md:hidden">
                  <li
                    onClick={() => setSelectLink("Home")}
                    className={`${
                      selectLink === "Home" ? "text-blue-900 p-2" : "p-2"
                    }`}
                  >
                    <Link to={""}>Home</Link>
                  </li>
                  <hr className="" />
                  <li
                    onClick={() => setSelectLink("startup")}
                    className={`${
                      selectLink === "startup" ? "text-blue-900 p-2" : "p-2"
                    }`}
                  >
                    <Link to={"/startup"}>Startup</Link>
                  </li>
                  <hr className="" />
                  <li
                    onClick={() => setSelectLink("academy")}
                    className={`${
                      selectLink === "academy" ? "text-blue-900 p-2" : "p-2"
                    }`}
                  >
                    <Link to={"/academy"}>Academy</Link>
                  </li>
                  <hr className="" />
                  <li
                    onClick={() => setSelectLink("partnership")}
                    className={`${
                      selectLink === "partnership" ? "text-blue-900 p-2" : "p-2"
                    }`}
                  >
                    <Link to={"/partnership"}>Partnership</Link>
                  </li>
                  <hr className="" />
                  <li
                    onClick={() => setSelectLink("Aboutus")}
                    className={`${
                      selectLink === "Aboutus" ? "text-blue-900 p-2" : "p-2"
                    }`}
                  >
                    <Link to={"/Aboutus"}>About Us</Link>
                  </li>
                  <hr className="" />
                  <li
                    onClick={() => setSelectLink("sign_in")}
                    className={`${
                      selectLink === "sign_in" ? "text-blue-900 p-2" : "p-2"
                    }`}
                  >
                    <Link to={"/sign_in"}>Sign In</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col min-h-screen">
        <div className="w-full">
          <Outlet />
        </div>
      </div>
      <footer className="bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left mt-8">
        <div className="bg-black/5 p-4 text-center text-surface dark:text-white">
          &copy; 2023 Copyright: Akorn
        </div>
      </footer>
    </div>
  );
}

export default Layout;
