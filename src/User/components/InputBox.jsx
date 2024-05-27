import React, { useEffect, useRef } from "react";

const InputBox = React.forwardRef(({ param, handleInputChange, handleUpdate }, ref) => {
  return (
    <div className="flex gap-2">
      <input
        ref={ref}
        type="text"
        name={param}
        id={param}
        onChange={handleInputChange}
        className="border-2 rounded-xl p-1 border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
        placeholder={param}
      />
      <button
        onClick={handleUpdate}
        className="border-2 rounded-xl p-2 text-white bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
});

export default InputBox;
