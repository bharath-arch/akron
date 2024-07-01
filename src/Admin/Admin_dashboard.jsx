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

  const adminEmail = localStorage.getItem("adminEmail");

  const handleLogout = () => {
    localStorage.removeItem("adminEmail");
    navigate("/Login");
  };

  if (!adminEmail) {
    useEffect(() => {
      navigate("/admin_login");
    }, [adminEmail]);
  }

  return (
    <>
      

      <div className="w-full mt-16 flex  justify-center max-w-4xl">
        <div className="grid grid-cols-3 gap-8">
          <DashboardSection data={data} status={null} title="Pending" color="blue" />
          <DashboardSection data={data} status={false} title="Rejected" color="red" />
          <DashboardSection data={data} status={true} title="Approved" color="green" />
        </div>
      </div>
    </>
  );
}

const DashboardSection = ({ data, status, title, color }) => (
  <section className={`flex flex-col gap-2 border border-gray-300 rounded-lg p-4 transform transition duration-500  hover:scale-110`}>
    <span className={`text-xl font-semibold text-${color}-500`}>{title}</span>
    {data
      .filter((value) => value.status === status)
      .map((value, index) => (
        <div key={index} className="mt-3">
          {value.pan && (
            <Link to={`/${value._id}`} className="text-blue-500 hover:underline">
              Application Detail: {value.pan}
            </Link>
          )}
          {/* Render other fields here */}
        </div>
      ))}
  </section>
);

export default Admin_dashboard;
