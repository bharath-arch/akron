import React from "react";

function Admin_dashboard() {
  return (
    <div>
      {" "}
      <div className="">
        <div className="flex justify-between text-center items-center ml-8 mr-8 mt-3">
          <div className="">
            <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Akorn
            </span>
          </div>
          <div className=" flex gap-5 items-center text-center ">
          <span className="font-semibold text-xl">Manage User’s</span>
          <span className="text-xl">Logout</span></div>
        </div>
      </div>
      <section className="flex gap-2 flex-col pt-10 pl-16">
        <span className="text-2xl font-semibold">Admin Dashboard</span>
        <span className="text-lg">Application Details 1</span>
        <span className="text-lg">Application Details 2</span>
      </section>
    </div>
  );
}

export default Admin_dashboard;
