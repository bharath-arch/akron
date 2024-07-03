import React, { useEffect } from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { Link, Outlet, useNavigate } from "react-router-dom";

function LayoutAdmin() {
  const navigate = useNavigate();
  const adminEmail = localStorage.getItem("adminEmail");

  const handleLogout = () => {
    localStorage.removeItem("adminEmail");
    navigate("/Login");
  };

  // Redirect to admin_login if adminEmail is not present
  useEffect(() => {
    if (!adminEmail) {
      navigate("/admin_login");
    }
  }, [adminEmail, navigate]);

  return (
    <div className="p-8 flex flex-col bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-3 p-5 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block bg-clip-text">
          Akorn
        </h1>
        <div className="flex gap-5 items-center">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bharathkumar100q@gmail.com&su=Complaints%20Here">
            <RiCustomerService2Line
              size={20}
              title="Customer Support"
              className="cursor-pointer hover:scale-105"
            />
          </a>
          <span
            onClick={handleLogout}
            className="cursor-pointer text-red-600 hover:scale-105"
          >
            Logout
          </span>
        </div>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white border h-[77vh]  border-gray-300 rounded-lg shadow-md text-center">
          <div className="mt-10 flex flex-col">
            <Link to={"admindashboard"}>
              <button className="mb-5  px-[4.8rem] py-3 text-xl font-semibold text-gray-700 hover:text-red-500 cursor-pointer border border-gray-300">
                Home
              </button>
            </Link>
            <Link to={"withdrawInvestment"}>
              <button className="px-4 py-3 text-xl font-semibold text-gray-700 hover:text-red-500 cursor-pointer border border-gray-300">
                Withdraw Requests
              </button>
            </Link>
            <Link to={"manage_user"}>
              <button className=" mt-5 px-10 py-3 text-xl font-semibold text-gray-700 hover:text-red-500 cursor-pointer border border-gray-300">
                Manage Users
              </button>
            </Link>
          </div>
        </div>
        <div className="ml-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LayoutAdmin;
