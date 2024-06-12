import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Manage_user() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const adminEmail = localStorage.getItem("adminEmail");
  const handlelogout = () => {
    localStorage.removeItem("adminEmail");

    navigate("/Login");
  };

  if (!adminEmail) {
    useEffect(() => {
      navigate("/admin_login");
    }, [adminEmail]);
  }
  useEffect(() => {
    const callServer = async () => {
      try {
        const response = await axios.get("http://localhost:4000/kyc_approval");
        setData(response.data.result);
      } catch (err) {
        console.log(err);
      }
    };
    // Call the function here to avoid infinite loop
    callServer();
  }, []); // empty dependency array to ensure it runs only once

  return (
    <div>
      <div className="">
        <div className="flex justify-between text-center items-center ml-8 mr-8 mt-3">
          <div className="">
            <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Akorn
            </span>
          </div>
          <div className=" flex gap-5 items-center text-center ">
            <Link to="/admin_dashboard">
              <span
                className="font-semibold text-xl"
                onClick={() => navigate("/admin_dashboard")}
              >
                Admin Dashboard
              </span>
            </Link>
            <span className="text-xl"onClick={handlelogout}>Logout</span>
          </div>
        </div>
      </div>
      <section className="flex gap-2 flex-col pt-10 pl-16">
        <span className="text-2xl font-semibold mb-10">User Kyc</span>
        <span className="text-xl font-semibold ">Pending</span>
        {data.map((value, index) => (
          <div key={index} className="mt-3">
            {value.Status === "pending" ? (
              <Link to={`/manage_user/kyc/${value._id}`}>
                <span className="cursor-pointer">{value.email}</span>
              </Link>
            ) : (
              ""
            )}
          </div>
        ))}
      </section>
      <section className="flex gap-2 flex-col pt-10 pl-16">
        <span className="text-xl font-semibold text-red-500 ">Rejected</span>
        {data.map((value, index) => (
          <div key={index} className="mt-3">
            {value.Status === "false" ? (
              <Link to={`/manage_user/kyc/${value._id}`}>
                <span className="cursor-pointer">{value.email}</span>
              </Link>
            ) : (
              ""
            )}
          </div>
        ))}
      </section>
      <section className="flex gap-2 flex-col pt-10 pl-16">
        <span className="text-xl font-semibold text-green-500 ">Approved</span>
        {data.map((value, index) => (
          <div key={index} className="mt-3">
            {value.Status === "true" ? (
              <Link to={`/manage_user/kyc/${value._id}`}>
                <span className="cursor-pointer">{value.email}</span>
              </Link>
            ) : (
              ""
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Manage_user;
