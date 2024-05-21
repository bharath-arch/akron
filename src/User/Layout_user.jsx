import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
// import Logo from "../assets/logo.png";
import setBodyColor from "../setBodyColor";
import { CiCircleChevDown } from "react-icons/ci";
import { CiCircleChevUp } from "react-icons/ci";
import User_popup from "../Wallet/User_popup/User_popup";
import { RxHamburgerMenu } from "react-icons/rx";

function Layout_user() {
  const path = useLocation();
  setBodyColor({ color: "white" });
  const [selectLink, setSelectLink] = useState();
  const [activesidebar, setActivesidebar] = useState(true);
  // console.log(path.pathname);
  // console.log(path.pathname === "/user/explore", "select link");
  console.log(path.pathname.split('/')[2])
  if (path.pathname) {
    useEffect(() => {
      setSelectLink(path.pathname.split('/')[2]);
    }, [selectLink]);
  }

  return (
    <div className="">
      <div
        className={`${
          activesidebar ? "translate-y-0" : "-translate-y-96"
        } duration-1000 fixed top-12 w-full items-center h-auto flex flex-col md:hidden `}
      >
        <div className=" ">
          <ul className=" font-semibold text-xl">
            <li
              onClick={() => setSelectLink("explore")}
              
              className={`${selectLink === "explore" ? "text-blue-900 p-2" : "p-2"}`}
            >
              {/* {selectLink} */}
              <Link to={"explore"}>Explore</Link>
            </li>
            <li
              onClick={() => setSelectLink("id")}
              className={`${selectLink === "id" ? "text-blue-900 p-2" : "p-2"}`}
            >
              <Link to={"id"}>ID</Link>
            </li>
            <li
              onClick={() => setSelectLink("wealth")}
              className={`${
                selectLink === "wealth" ? "text-blue-900 p-2" : "p-2"
              }`}
            >
              <Link to={"wealth"}>Wealth</Link>
            </li>
            <li
              onClick={() => setSelectLink("square")}
              className={`${
                selectLink === "square" ? "text-blue-900 p-2" : "p-2"
              }`}
            >
              <Link to={"square"}>Square</Link>
            </li>
            <li
              onClick={() => setSelectLink("portfolio")}
              className={`${
                selectLink === "portfolio" ? "text-blue-900 p-2" : "p-2"
              }`}
            >
              <Link to={"portfolio"}>Portfolio</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" justify-between text-center items-center ml-8 mr-8 mt-3 flex">
        <div className="">
          <span className="font-bold   text-2xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text md:text-4xl">
            Akorn
          </span>
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-5 font-semibold text-xl">
            <li
              onClick={() => setSelectLink("explore")}
              className={`${
                selectLink === "explore" ? "text-blue-900 p-2" : "p-2"
              }`}
            >
              <Link to={"explore"}>Explore</Link>
            </li>
            <li
              onClick={() => setSelectLink("id")}
              className={`${selectLink === "id" ? "text-blue-900 p-2" : "p-2"}`}
            >
              <Link to={"id"}>ID</Link>
            </li>
            <li
              onClick={() => setSelectLink("wealth")}
              className={`${
                selectLink === "wealth" ? "text-blue-900 p-2" : "p-2"
              }`}
            >
              <Link to={"wealth"}>Wealth</Link>
            </li>
            <li
              onClick={() => setSelectLink("square")}
              className={`${
                selectLink === "square" ? "text-blue-900 p-2" : "p-2"
              }`}
            >
              <Link to={"square"}>Square</Link>
            </li>
            <li
              onClick={() => setSelectLink("portfolio")}
              className={`${
                selectLink === "portfolio" ? "text-blue-900 p-2" : "p-2"
              }`}
            >
              <Link to={"portfolio"}>Portfolio</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-3">
          {localStorage.getItem("email") && (
            <span>
              {" "}
              <b className="text-xl">Welcome</b>{" "}
              {localStorage.getItem("email").split("@gmail.com")}
            </span>
          )}
          <div className="h-10 w-10 border-1 rounded-full bg-red-600 items-center text-center">
            <div className="relative">
              <span className="absolute top-5 left-2 right-5">
                <User_popup />
              </span>
            </div>
          </div>
        </div>
        <div
          className="md:hidden flex"
          onClick={() => setActivesidebar(!activesidebar)}
        >
          <RxHamburgerMenu />
        </div>
      </div>

      <hr className=" mt-1 border-1 border-black w-[100%] self-center" />

      <div className=" ml-8 mr-4 mt-5">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout_user;
