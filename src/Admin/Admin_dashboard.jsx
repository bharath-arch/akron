import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import setBodyColor from "../setBodyColor";

function Admin_dashboard() {
  setBodyColor({ color: "white" });

  const navigate = useNavigate(); // Initialize navigate hook

  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // Initialize error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/company_approve/dashboard_data"
        );
        console.log(response.data);
        setData(response.data.result);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Use navigate within useEffect
    navigate("/admin_dashboard"); // Adjust this to the appropriate route
  }, [navigate]); // Add navigate to dependency array

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
            <Link to={'/manage_user'}><span className="font-semibold text-xl">Manage User’s</span></Link>
            <span className="text-xl">Logout</span>
          </div>
        </div>
      </div>
      <section className="flex gap-2 flex-col pt-10 pl-16">
        <span className="text-2xl font-semibold">Admin Dashboard</span>

        {data.map((value, index) => (
          <div key={index} className="mt-3">
            {value.status === null ? (
              <Link to={`/${value._id}`}>
                {value.pan && (
                  <span className="cursor-pointer">
                    Application Detail: {value.pan}
                  </span>
                )}
              </Link>
            ) : (
              ""
            )}

            {/* Render other fields here */}
          </div>
        ))}
      </section>
      <section className="flex gap-2 flex-col pt-10 pl-16">
        <span className="text-xl font-semibold text-red-500">Rejected</span>

        {data.map((value, index) => (
          <div key={index} className="mt-3">
            {value.status === false ? (
              <Link to={`/${value._id}`}>
                {value.pan && (
                  <span className="cursor-pointer">
                    Application Detail: {value.pan}
                  </span>
                )}
              </Link>
            ) : (
              ""
            )}

            {/* Render other fields here */}
          </div>
        ))}
      </section>
      <section className="flex gap-2 flex-col pt-10 pl-16">
        <span className="text-xl font-semibold text-green-500">Approved</span>

        {data.map((value, index) => (
          <div key={index} className="mt-3">
            {value.status === true ? (
              <Link to={`/${value._id}`}>
                {value.pan && (
                  <span className="cursor-pointer">
                    Application Detail: {value.pan}
                  </span>
                )}
              </Link>
            ) : (
              ""
            )}

            {/* Render other fields here */}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Admin_dashboard;
