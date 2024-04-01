// import React from "react";
// import { Link } from "react-router-dom";

// function User_popup() {
//   return (
//     <div className="">
//       <div className="h-[8rem] w-20  flex flex-col items-center justify-center">
//         <Link to='kyc'><span className="font-arima">KYC</span></Link>{" "}
//         <hr className=" border-gray-300" />
//         <Link to='profile'><span className="font-arima">Profile</span></Link>{" "}
//         <hr className=" border-gray-300" />
//         <span className="font-arima">Logout</span>{" "}
//         <hr className=" border-black-300" />
//       </div>
//     </div>
//   );
// }

// export default User_popup;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiCircleChevDown } from 'react-icons/ci';
import { CiCircleChevUp } from 'react-icons/ci';

function User_popup() {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['kyc', 'profile', 'Logout'];

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className=" h-auto w-16">
    <div className="dropdown">
      <button onClick={toggleDropdown}>
        {isOpen ? <CiCircleChevUp size={25} /> : <CiCircleChevDown size={25} />}
      </button>
      {isOpen && (
        <ul className="">
          {options.map((option) => (
            <li key={option} className=''>
              {option === 'Logout' ? (
                <span className="font-arima">{option}</span>
              ) : (
                <Link to={option}>
                  <span className="font-arima">{option}</span>
                </Link>
              )}
              {/* {option !== 'Logout' && <hr className="" />} Add line after all except Logout */}
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}

export default User_popup;
