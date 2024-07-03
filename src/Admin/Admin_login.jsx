
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import setBodyColor from "../setBodyColor";
import toast from "react-hot-toast";
import axios from "axios";
import { Toaster } from "react-hot-toast";


   

function Admin_login() {

    setBodyColor({ color: "lightgray" });

  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({ email: "" , password:""});

  console.log(formdata)

  const handleChangeEvent = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      
    try {
      const response = await axios.post(
        "http://localhost:4000/admin_login/",
        formdata
      );
      console.log(response.data.result);

      if(response.data && response.data.result === 'sucess'){
        navigate('/admin/layout/admindashboard')
        localStorage.setItem('adminEmail',formdata.email)
      }
      else{
        toast.error(response.data.result)
      }
  
   
     
    } catch (error) {
      // Handle errors appropriately (e.g., display user-friendly message)
      console.error(error);
    }
   
    
  };
  return (
    <div className="m-4">
         <Toaster position="top-center" reverseOrder={false} />
      {/* <Helmet bodyAttributes={{style: 'background-color : #fff'}}/> */}
      <div className="">
        <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Akron
        </span>
      </div>

      <div className="flex justify-center text-center items-center mt-[2rem]">
        <div className="bg-slate-50 h-[28rem] w-[25rem] rounded-[39px] ">
          <div className="mt-9 font-bold text-3xl">Admin</div>
          <div className="mt-10 text-left ml-9 mr-6">
           
            <form>
            <label className="text-[0.75rem] font-serif font-light mb-2">Email</label>
              <input
                type="text"
                name="email"
                value={formdata.email}
                onChange={handleChangeEvent}
                className=" border-2 rounded-lg w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Email "
              />
              <label className="text-[0.75rem] font-serif font-light mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formdata.password}
                onChange={handleChangeEvent}
                className=" border-2 rounded-lg w-[100%]  p-2  border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Password "
              />
              
              {/* <Link to={"/verification"}> */}
                {" "}
                <div className="flex justify-center items-center  ">
                 
                  <button 
                    onClick={handleSubmit}
                    className="mt-3 text-center border-2 rounded-lg w-[22rem] p-2 font-arima bg-blue-600 text-white text-xl items-center hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-95 "
                  >
                    Continue
                  </button>
                  {/* </Link>  */}
                </div>
              {/* </Link> */}
            </form>

           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin_login