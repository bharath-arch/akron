import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";

function User_popup() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const options = ["kyc", "profile", "Logout"];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleMouseLeave = () => setIsOpen(false);

  const handlelogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("usertype");
    localStorage.removeItem("token");
    navigate("/Login");
  };

  useEffect(() => {
    if (!email) {
      navigate("/Login");
    }
  }, [email]);

  return (
    <div className="relative">
      <div
        className="dropdown"
        onMouseEnter={toggleDropdown}
        onMouseLeave={handleMouseLeave}
      >
        <button>
          <CiMenuKebab size={25} />
        </button>
        <ul
          className={`absolute top-6 bg-white p-2 right-1 transition-opacity duration-700 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onBlur={handleMouseLeave}
        >
          {options.map((option, index) => (
            <React.Fragment key={option}>
              <li
                className={
                  index === options.length - 1 ? "" : "border-b border-gray-200"
                }
              >
                {option === "Logout" ? (
                  <span
                    className="font-arima hover:text-blue-600 cursor-pointer"
                    onClick={handlelogout}
                  >
                    {option}
                  </span>
                ) : (
                  <Link to={option}>
                    <span className="font-arima hover:text-blue-600">
                      {option}
                    </span>
                  </Link>
                )}
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default User_popup;
