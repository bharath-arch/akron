import React, { useEffect, useState, useCallback } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import setBodyColor from "../setBodyColor";
import User_popup from "../Wallet/User_popup/User_popup";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from "axios";
import MobileNav from "./MobileNav";

function Layout_user() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [selectLink, setSelectLink] = useState("");
  const [activesidebar, setActivesidebar] = useState(false);
  const [data, setData] = useState([]);

  // Set body color once on mount
  useEffect(() => {
    setBodyColor({ color: "white" });
  }, []);

  // Redirect to login if no user email is found
  useEffect(() => {
    const localemail = localStorage.getItem('userEmail');
    if (!localemail) {
      navigate("/Login");
    }
  }, [navigate]);

  // Update selected link based on the current pathname
  useEffect(() => {
    const pathSegment = pathname.split("/")[2];
    setSelectLink(pathSegment || "");
  }, [pathname]);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: responseData } = await axios.get("http://localhost:4000/company_approve/dashboard_data");
        const filteredData = responseData.result.filter(item => item.status === true);
        setData(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Handle link clicks
  const handleLinkClick = useCallback((item) => {
    setSelectLink(item);
    setActivesidebar(false); // Close sidebar on link click
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between items-center p-6 md:px-8 md:py-3 bg-white shadow-md">
        <div>
          <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text md:text-4xl">
            Akorn
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex gap-5 font-semibold text-xl">
            {["explore", "id", "wealth", "square", "portfolio"].map(item => (
              <li
                key={item}
                onClick={() => handleLinkClick(item)}
                className={`p-2 ${selectLink === item ? "text-blue-900" : ""}`}
              >
                <Link to={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Info and Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          {localStorage.getItem("userEmail") && (
            <span className="hidden md:inline-block">
              <b className="text-xl">Welcome</b> {localStorage.getItem("userEmail").split("@")[0]}
            </span>
          )}

          <User_popup />

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <RxHamburgerMenu
              className="cursor-pointer text-2xl"
              onClick={() => setActivesidebar(prev => !prev)}
            />
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {activesidebar && (
        <div className="md:hidden   z-40 bg-white shadow-lg">
          <MobileNav />
        </div>
      )}

      <hr className="border-t border-gray-300 my-2" />

      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout_user;
