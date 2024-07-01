import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Manage_user() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/kyc_approval");
        setData(response.data.result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full  flex mt-16  justify-center max-w-4xl">
        <div className="grid grid-cols-3 gap-8">
          <DashboardSection
            data={data}
            status="pending"
            title="Pending"
            color="blue"
          />
          <DashboardSection
            data={data}
            status="false"
            title="Rejected"
            color="red"
          />
          <DashboardSection
            data={data}
            status="true"
            title="Approved"
            color="green"
          />
        </div>
      </div>
    </>
  );
}

const DashboardSection = ({ data, status, title, color }) => (
  <section
    className={`flex flex-col gap-2 border border-gray-300 rounded-lg p-4 transform transition duration-500  hover:scale-110`}
  >
    <span className={`text-xl font-semibold text-${color ?? "black"}-500`}>
      {title}
    </span>
    {data
      .filter((value) => value.Status === status)
      .map((value, index) => (
        <div key={index} className="mt-3">
          <Link
            to={`/manage_user/kyc/${value._id}`}
            className="text-blue-500 hover:underline"
          >
            <span className="cursor-pointer">{value.email}</span>
          </Link>
          {/* Render other fields here */}
        </div>
      ))}
  </section>
);

export default Manage_user;
