import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import setBodyColor from "../setBodyColor.js";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Kyc_approval() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const adminEmail = localStorage.getItem("adminEmail");
  const handlelogout = () => {
    localStorage.removeItem("adminEmail");

    navigate("/admin_login");
  };

  if (!adminEmail) {
    useEffect(() => {
      navigate("/Login");
    }, [adminEmail]);
  }
  setBodyColor({ color: "white" });

  const acceptRequest = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/kyc_approval/accept/${id}`
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    navigate("/manage_user")

  };
  const rejectRequest = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/kyc_approval/reject/${id}`
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    navigate("/manage_user")

  };

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
                <span className="text-xl"onClick={handlelogout}>Logout</span>
              </div>
            </div>
          </div>
          <div className="ml-20 mt-20 leading-10 ">
            <div className="grid grid-cols-3 gap-3">
              <label>
                <b>Name : </b> {data.name}
              </label>
              <label>
                <b>Email : </b>
                {data.email}
              </label>
              <label>
                <b>Phone Number :</b> {data.contact_number}
              </label>

              <label>
                <b>Status :</b> {data.Status}
              </label>
              <label>
                <b>Aadhar Number : </b>
                {data.aadhar}
              </label>
              <label>
                <b>About Yourself :</b> {data.about_yourself}
              </label>
              <label>
                <b>Address :</b> {data.address}
              </label>
              <label>
                <b>Annual Income :</b> {data.anual_income}
              </label>
              <label>
                <b>Bank Account Number : </b>
                {data.bank_account_number}
              </label>

              <label>
                <b>Existing Commitments :</b> {data.existing_commitments}
              </label>
              <label>
                <b>LinkedIn URL :</b> {data.linkedin_url}
              </label>
              <label>
                <b>PAN :</b> {data.pan}
              </label>
              <label>
                <b>WhatsApp :</b> {data.whattsapp}
              </label>
              <label>
                <b>Where You Learned About Us:</b>{" "}
                {data.where_you_learn_about_us}
              </label>
            </div>
          </div>
          <div className="ml-20 mt-10 mr-10 flex  border p-2">
            {" "}
            <label>
              <b>Bank Account Photo :</b>{" "}
              <img
                className="w-[400px] h-[400px]"
                src={`http://localhost:4000/uploads/${data.bank_account_photo}`}
                alt=""
              />
            </label>
          </div>{" "}
          <div className="ml-20 mt-10 mr-10 flex border p-2 mb-5 ">
            <label>
              <b>ID Proof :</b>
              <img
                className="w-[400px] h-[400px]"
                src={`http://localhost:4000/uploads/${data.ID_proof}`}
                alt=""
              />
            </label>
          </div>
          {data.Status === "pending" ? (
            <div className="flex justify-center mb-10">
              <Stack spacing={2} direction="row">
                <Button
                  variant="contained"
                  color="success"
                  onClick={acceptRequest}
                >
                  Accept
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={rejectRequest}
                  
                >
                  Reject
                </Button>
              </Stack>
            </div>
          ) : null}
        </section>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Kyc_approval;
