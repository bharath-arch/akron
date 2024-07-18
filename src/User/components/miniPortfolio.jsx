import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

function MiniPortfolio({ handleclosetogglebutton, selectedLots }) {
  // Correctly destructure props
  const inputRef = useRef(null);
const [formdata , setFormdata] = useState({
  lotSize:'',
  price:'',
  email: localStorage.getItem('userEmail'),
})

const posttosquare = async ()=>{
  const response  = await axios.post( "http://localhost:4000/square", {formdata , selectedLots} )
  handleclosetogglebutton()

}

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setFormdata({...formdata , [e.target.name] : e.target.value})
  };

  console.log(formdata)
  return (
    <div className="w-full md:w-96 border-2 p-3 bg-white">
      <div className="relative mb-3">
        <span
          onClick={handleclosetogglebutton}
          className="absolute right-4 top-0 cursor-pointer"
        >
          <IoCloseOutline size={23} className="hover:bg-red-600" />
        </span>
      </div>
      <span className="font-semibold text-xl">Sell Lots</span>
      <div className="mt-2">
        <input
          ref={inputRef}
          type="text"
          name="lotSize"
          onChange={handleChange}
          placeholder="Enter lot Amount"
          className="mb-2 w-full px-1 py-1 border border-gray-300 focus:outline-none focus:ring-1 text-black focus:ring-blue-500 bg-gray-300"
        />
        <input
          type="text"
          name="price"
          onChange={handleChange}
          placeholder="Price"
          className="mb-2 w-full px-1 py-1 border border-gray-300 focus:outline-none focus:ring-1 text-black focus:ring-blue-500 bg-gray-300"
        />
      </div>

      {/* <div className="flex justify-center mt-2">
        <div className="w-full h-30 border-2 p-3">
          <div className="flex justify-between mb-1">
            <span className="text-gray-400">Before</span>
            <span className="text-gray-400">{selectedLots.lots}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-gray-400">To sell</span>
            <span className="text-gray-400"></span>
          </div>
          <hr className="border-gray-300" />
          <div className="flex justify-between mb-1">
            <span className="text-gray-400">After</span>
            <span className="text-gray-400">{selectedLots.lots}</span>
          </div>
        </div>
      </div> */}
      <div className="mt-5 flex justify-center">
        <button className="border bg-red-600 hover:bg-red-700 text-white px-8 py-1 font-arima rounded-lg" onClick={posttosquare}>
          sell
        </button>
      </div>
    </div>
  );
}

export default MiniPortfolio;
