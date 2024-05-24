import React, { useState, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import "./Search_filter.css";

function SearchFilter() {
  const [selectedValue, setSelectedValue] = useState("");
  const [filter, setFilter] = useState(true);
  const companySectors  = [
    "Technology",
    "Healthcare",
    "Finance",
    "Consumer Goods",
    "Energy",
    "Retail",
    "Transportation",
    "Telecommunications",
    "Manufacturing",
    "Hospitality",
    "Entertainment",
    "Construction",
    "Agriculture",
    "Utilities",
    "Education"
  ];

  // Create a ref for the input field
  const inputRef = useRef(null);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleInputClick = () => {
    setFilter(false); // Hide filter icon when input field is clicked
  };

  const handleInputBlur = () => {
    setFilter(true); // Show filter icon when input field loses focus
  };

  return (
    <section className="md:flex justify-center gap-3">
      <div className="flex items-center justify-center relative">
        <select
          className="outline-none focus:outline-none p-2 rounded-lg w-48 bg-gray-300"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          {companySectors .map((item, i) => (
            <option value={item} key={i}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <form className="">
        <div className="relative">
          <input
            ref={inputRef}
            type="search"
            id="default-search"
            className="block p-3 w-96 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
            placeholder="Search Mockups, Logos..."
            required
            onClick={handleInputClick}
            onBlur={handleInputBlur}
          />
          {/* Use the filter state to toggle visibility of the filter icon */}
          {filter && (
            <CiSearch
              className="absolute right-2.5 top-2.5 text-gray-500 hover:text-gray-700 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
              size={25}
            />
          )}
        </div>
      </form>
    </section>
  );
}

export default SearchFilter;
