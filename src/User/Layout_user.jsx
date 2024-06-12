import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import setBodyColor from "../setBodyColor";

import User_popup from "../Wallet/User_popup/User_popup";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from "axios";

function Layout_user() {
  const path = useLocation();
  const navigate = useNavigate();
  setBodyColor({ color: "white" });

  const [selectLink, setSelectLink] = useState();
  const [activesidebar, setActivesidebar] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const localemail = localStorage.getItem('email');
    if (!localemail) {
      navigate("/Login");
    }
  }, [navigate]);

  useEffect(() => {
    if (path.pathname) {
      setSelectLink(path.pathname.split("/")[2]);
    }
  }, [path.pathname]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/company_approve/dashboard_data"
        );
        const setfilterData = response.data.result.filter(
          (item) => item.status === true
        );
        setData(setfilterData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div
        className={`${
          activesidebar ? "translate-y-0" : "-translate-y-96"
        } duration-1000 fixed top-12 w-full items-center h-auto flex flex-col md:hidden `}
      >
        <div>
          <ul className="font-semibold text-xl">
            {["explore", "id", "wealth", "square", "portfolio"].map((item) => (
              <li
                key={item}
                onClick={() => setSelectLink(item)}
                className={`${selectLink === item ? "text-blue-900 p-2" : "p-2"}`}
              >
                <Link to={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="justify-between text-center items-center ml-8 mr-8 mt-3 flex">
        <div>
          <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text md:text-4xl">
            Akorn
          </span>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-5 font-semibold text-xl">
            {["explore", "id", "wealth", "square", "portfolio"].map((item) => (
              <li
                key={item}
                onClick={() => setSelectLink(item)}
                className={`${selectLink === item ? "text-blue-900 p-2" : "p-2"}`}
              >
                <Link to={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-3">
          {localStorage.getItem("email") && (
            <span>
              <b className="text-xl">Welcome</b>{" "}
              {localStorage.getItem("email").split("@gmail.com")}
            </span>
          )}
          <div className="flex items-center relative">
            <span className="rounded-full text-2xl p-2 bg-orange-600 flex items-center text-center">
              {localStorage.getItem("email") && localStorage.getItem("email").split("")[0].toUpperCase()}
            </span>
            <User_popup />
          </div>
        </div>
        <div
          className="md:hidden flex"
          onClick={() => setActivesidebar(!activesidebar)}
        >
          <RxHamburgerMenu />
        </div>
      </div>
      <hr className="mt-1 border-1 border-black w-[100%] self-center" />
      <div className="ml-8 mr-4 mt-5">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout_user;
