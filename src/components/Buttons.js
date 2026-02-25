import React from "react";

const Buttons = ({ name }) => {
  return (
    <button
      className="whitespace-nowrap px-4 py-2 border border-gray-400 rounded-full hover:bg-gray-200"
      type="button"
    >
      {name}
    </button>
  );
};

export default Buttons;
