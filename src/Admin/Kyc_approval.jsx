import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Kyc_approval() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const adminEmail = localStorage.getItem("adminEmail");

  // Handle logout function
  const handleLogout = () => {
    localStorage.removeItem("adminEmail");
    navigate("/admin_login");
  };

  // Redirect if adminEmail is not present
  useEffect(() => {
    if (!adminEmail) {
      navigate("/admin_login");
    }
  }, [adminEmail, navigate]);

  // Fetch KYC approval data on component mount
  useEffect(() => {
    const fetchKycData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/kyc_approval/${id}`);
        setData(response.data.result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchKycData();
  }, [id]);

  // Accept KYC request
  const acceptRequest = async () => {
    try {
      await axios.put(`http://localhost:4000/kyc_approval/accept/${id}`);
      navigate("/manage_user");
    } catch (err) {
      console.log(err);
    }
  };

  // Reject KYC request
  const rejectRequest = async () => {
    try {
      await axios.put(`http://localhost:4000/kyc_approval/reject/${id}`);
      navigate("/manage_user");
    } catch (err) {
      console.log(err);
    }
  };

  // Navigate to Admin Dashboard
  const navigateToDashboard = () => {
    navigate("/admin/layout/admindashboard");
  };

  // Render spinner while data is loading
  if (!data) {
    return <Spinner />;
  }

  return (
    <div className="bg-gradient-to-br from-gray-200 to-gray-100 p-10">
      <div className="flex justify-between items-center ml-8 mr-8 mt-3">
        <div>
          <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Akorn
          </span>
        </div>
        <div className="flex gap-5 items-center">
          <span className="font-semibold text-xl cursor-pointer" onClick={navigateToDashboard}>
            Admin Dashboard
          </span>
          <span className="text-xl cursor-pointer" onClick={handleLogout}>
            Logout
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-lg p-8 mt-10">
        <div className="ml-20 mt-20 leading-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DisplayField label="Name" value={data.name} />
            <DisplayField label="Email" value={data.email} />
            <DisplayField label="Phone Number" value={data.contact_number} />
            <DisplayField label="Status" value={data.Status} />
            <DisplayField label="Aadhar Number" value={data.aadhar} />
            <DisplayField label="About Yourself" value={data.about_yourself} />
            <DisplayField label="Address" value={data.address} />
            <DisplayField label="Annual Income" value={data.annual_income} />
            <DisplayField label="Bank Account Number" value={data.bank_account_number} />
            <DisplayField label="Existing Commitments" value={data.existing_commitments} />
            <DisplayField label="LinkedIn URL" value={data.linkedin_url} />
            <DisplayField label="PAN" value={data.pan} />
            <DisplayField label="WhatsApp" value={data.whatsapp} />
            <DisplayField label="Where You Learned About Us" value={data.where_you_learn_about_us} />
          </div>
        </div>
        <div className="flex">
          <div className="ml-20 mt-10 mr-10 flex border p-2">
            <DisplayFieldimage label="Bank Account Photo">
              <img
                className="w-[400px] h-[400px]"
                src={`http://localhost:4000/uploads/${data.bank_account_photo}`}
                alt="Bank Account Photo"
              />
            </DisplayFieldimage>
          </div>

          <div className="ml-20 mt-10 mr-10 flex border p-2 mb-5">
            <DisplayFieldimage label="ID Proof">
              <img
                className="w-[400px] h-[400px]"
                src={`http://localhost:4000/uploads/${data.ID_proof}`}
                alt="ID Proof"
              />
            </DisplayFieldimage>
          </div>
        </div>
      </div>

     

      {/* Action Buttons */}
      {data.Status === "pending" && (
        <div className="flex justify-center mb-10">
          <Stack spacing={2} direction="row">
            <Button variant="contained" color="success" onClick={acceptRequest}>
              Accept
            </Button>
            <Button variant="outlined" color="error" onClick={rejectRequest}>
              Reject
            </Button>
          </Stack>
        </div>
      )}
    </div>
  );
}

// DisplayField component for rendering each label-value pair
const DisplayField = ({ label, value }) => (
  <div className="bg-gray-50 rounded-lg p-4 border border-gray-300 transform transition duration-500 hover:scale-105">
    <span className="font-bold">{label}:</span> {value}
  </div>
);
const DisplayFieldimage = ({ label, children }) => (
  <div className="bg-gray-50 rounded-lg p-4 border border-gray-300 transform transition duration-500 hover:scale-105">
    <span className="font-bold">{label}</span> {children}
  </div>
);

export default Kyc_approval;
