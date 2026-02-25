import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 rounded-lg bg-white shadow-sm ">
      <img
        className="w-8 h-8 rounded-full mr-2"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="avatar"
      />

      <h3 className="font-semibold text-sm">{name}</h3>
      <p className="ms-2 text-sm text-gray-700">{message}</p>
    </div>
  );
};

export default ChatMessage;
