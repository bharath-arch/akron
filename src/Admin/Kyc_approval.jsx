import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

function Kyc_approval() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const callServer = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/kyc_approval/${id}`
        );
        setData(response.data.result);
      } catch (err) {
        console.log(err);
      }
    };
    callServer();
  }, [id]);

  console.log(data);

  const navigateToDashboard = () => {
    navigate("/admin_dashboard");
  };

  return (
    <div>
      {data ? (
        <section className="">
          <div className="">
            <div className="flex justify-between text-center items-center ml-8 mr-8 mt-3">
              <div className="">
                <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                  Akorn
                </span>
              </div>
              <div className="flex gap-5 items-center text-center ">
                <span
                  className="font-semibold text-xl cursor-pointer"
                  onClick={navigateToDashboard}
                >
                  Admin Dashboard
                </span>
                <span className="text-xl">Logout</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label>Name: {data.name}</label>
            <label>Email: {data.email}</label>
            <label>Phone Number: {data.contact_number}</label>
            <label>ID Proof: {data.ID_proof}</label>
            <label>Status: {data.Status}</label>
            <label>Aadhar Number: {data.aadhar}</label>
            <label>About Yourself: {data.about_yourself}</label>
            <label>Address: {data.address}</label>
            <label>Annual Income: {data.anual_income}</label>
            <label>Bank Account Number: {data.bank_account_number}</label>
            <label>Bank Account Photo: {data.bank_account_photo}</label>
            <label>Existing Commitments: {data.existing_commitments}</label>
            <label>LinkedIn URL: {data.linkedin_url}</label>
            <label>PAN: {data.pan}</label>
            <label>WhatsApp: {data.whattsapp}</label>
            <label>
              Where You Learned About Us: {data.where_you_learn_about_us}
            </label>
          </div>

          {/* Render your additional content here based on data */}
        </section>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Kyc_approval;
