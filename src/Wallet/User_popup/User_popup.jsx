import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";

function User_popup() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null); // Store the timeout ID
  const email = localStorage.getItem("userEmail");
  const options = ["kyc", "profile", "Logout"];

  const toggleDropdown = useCallback(() => setIsOpen(prev => !prev), []);
  
  const handleMouseEnter = useCallback(() => {
    // Clear any existing timeout when mouse enters
    console.log("object")
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsOpen(true);
  }, [timeoutId]);

  const handleMouseLeave = useCallback(() => {
    // Set timeout to close dropdown after 2 seconds
    const id = setTimeout(() => setIsOpen(false), 100);
    setTimeoutId(id);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("usertype");
    localStorage.removeItem("token");
    navigate("/Login");
  }, [navigate]);

  useEffect(() => {
    if (!email) {
      navigate("/Login");
    }
  }, [email, navigate]);

  return (
    <div className="relative">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center"
      >
        <button>
          <CiMenuKebab size={25} />
        </button>
        {isOpen && (
          <ul
            className="absolute top-full right-0 bg-white mt-2 w-48 md:w-56 transition-opacity duration-300 opacity-100 shadow-lg rounded-lg"
          >
            {options.map((option, index) => (
              <li
                key={option}
                className={`py-2 px-4 ${index < options.length - 1 ? "border-b border-gray-200" : ""}`}
              >
                {option === "Logout" ? (
                  <span
                    className="font-arima hover:text-blue-600 cursor-pointer block text-center"
                    onClick={handleLogout}
                  >
                    {option}
                  </span>
                ) : (
                  <Link to={option}>
                    <span className="font-arima hover:text-blue-600 block text-center">
                      {option}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default User_popup;
