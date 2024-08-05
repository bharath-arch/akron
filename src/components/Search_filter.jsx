// import React, { useState, useRef } from "react";
// import { CiSearch } from "react-icons/ci";
// import "./Search_filter.css";

// function SearchFilter({ data, searchContents , dropDown }) {
//   const [selectedValue, setSelectedValue] = useState("");
//   const [filter, setFilter] = useState(true);
//   const companySectors = [
    
//     "Select",
//     "E-com",
//     "Technology",
//     "Healthcare",
//     "Finance",
//     "Consumer Goods",
//     "Energy",
//     "Retail",
//     "Transportation",
//     "Telecommunications",
//     "Manufacturing",
//     "Hospitality",
//     "Entertainment",
//     "Construction",
//     "Agriculture",
//     "Utilities",
//     "Education",
//   ];

//   // Create a ref for the input field
//   const inputRef = useRef(null);

//   const handleSelectChange = (event) => {
//     setSelectedValue(event.target.value);
//   };
//   dropDown(selectedValue)
//   console.log(selectedValue)

//   const [search, setSearch] = useState("");

//   const searchSet = (e) => {
//     setSearch(e.target.value);
//   };

//   const searchContent = (e) => {
//     e.preventDefault(); // Prevent default form submission
//     searchContents(search);
//   };

//   const handleInputClick = () => {
//     setFilter(false); // Hide filter icon when input field is clicked
//   };

//   const handleInputBlur = () => {
//     setFilter(true); // Show filter icon when input field loses focus
//   };

//   return (
//     <section className="md:flex justify-center gap-3">
//       <div className="flex items-center justify-center relative">
//         <select
//           className="outline-none focus:outline-none p-2 rounded-lg w-48 bg-gray-300"
//           value={selectedValue}
//           onChange={handleSelectChange}
//         >
//           {companySectors.map((item, i) => (
//             <option value={item} key={i}>
//               {item}
//             </option>
//           ))}
//         </select>
//       </div>
//       <form onSubmit={searchContent} className="">
//         <div className="flex items-center ">
//           <input
//             ref={inputRef}
//             type="search"
//             id="default-search"
//             className="block p-3 w-96 text-sm text-gray-900 border border-gray-300 rounded-s-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
//             placeholder="Search Mockups, Logos..."
//             required
//             onClick={handleInputClick}
//             onBlur={handleInputBlur}
//             onChange={searchSet}
//           />
//           <button type="submit"> {/* Use type="submit" for form submission */}
//             <CiSearch
//               className={`bg-blue-500 text-white  font-semibold rounded-e-lg border ring-blue-500 border-blue-500`}
//               size={46}
//             />
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// }

// export default SearchFilter;
import React, { useState, useRef } from "react";
import { CiSearch } from "react-icons/ci";

function SearchFilter({ searchContents, dropDown }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  const companySectors = [
    "Select",
    "E-com",
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
    "Education",
  ];

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    dropDown(event.target.value);
  };

  const searchSet = (e) => {
    setSearch(e.target.value);
  };

  const searchContent = (e) => {
    e.preventDefault(); // Prevent default form submission
    searchContents(search);
  };

  const handleInputClick = () => {
    setFilter(false); // Hide filter icon when input field is clicked
  };

  const handleInputBlur = () => {
    setFilter(true); // Show filter icon when input field loses focus
  };

  return (
    <section className="flex  justify-center gap-1 p-4">
      <div className="flex items-center w-full md:w-auto">
        <select
          className="outline-none focus:outline-none  p-2 rounded-lg  max-w-20 bg-gray-300"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          {companySectors.map((item, i) => (
            <option value={item} key={i}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <form onSubmit={searchContent} className="w-auto md:w-auto">
        <div className="flex items-center">
          <input
            ref={inputRef}
            type="search"
            id="default-search"
            className="block p-2 w-auto md:w-96 text-sm text-gray-900 border border-gray-300 rounded-s-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
            placeholder="Search Mockups, Logos..."
            required
            onClick={handleInputClick}
            onBlur={handleInputBlur}
            onChange={searchSet}
          />
          <button type="submit" className="bg-blue-500 text-white font-semibold rounded-e-lg border p-1 border-blue-500 flex items-center justify-center ">
            <CiSearch size={28} />
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchFilter;
