import React from "react";
import { Link, useNavigate } from "react-router-dom";

function WithdrawInvestmentAmount() {
  const navigate = useNavigate();

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
            </Link>{" "}
            <span className="text-xl">Logout</span>
          </div>
        </div>
      </div>
      <section className="flex gap-2 flex-col pt-10 pl-16">
        <span className="text-2xl font-semibold">Admin Dashboard</span>
      </section>
      <section className="flex gap-2 flex-col pt-10 pl-16">
        <span className="text-xl font-semibold text-green-500">Approved</span>
      </section>
    </div>
  );
}

export default WithdrawInvestmentAmount;
