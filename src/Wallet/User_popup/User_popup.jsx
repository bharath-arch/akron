import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";

function User_popup() {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['kyc', 'profile', 'Logout'];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div className="relative">
      <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={handleMouseLeave}>
        <button>
          <CiMenuKebab size={25} />
        </button>
        <ul className={`absolute top-6 bg-white p-2 right-1 transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onBlur={handleMouseLeave}>
          {options.map((option) => (
            <li key={option} className=''>
              {option === 'Logout' ? (
                <span className="font-arima  hover:text-blue-600">{option}</span>
              ) : (
                <Link to={option}>
                  <span className="font-arima hover:text-blue-600 ">{option}</span>
                </Link>
              )}
              {/* {option !== 'Logout' && <hr className="" />} Add line after all except Logout */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default User_popup;
