import React from "react";

function Company_dashboard() {
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
          <span>Logout</span>
        </div>
      </div>
      <section className="flex gap-2 flex-col pt-10 pl-16">
        <span className="text-3xl font-semibold">Dashboard</span>
        <span className="text-xl">application under process we will notify soon</span>
      </section>
    </div>
  );
}

export default Company_dashboard;
