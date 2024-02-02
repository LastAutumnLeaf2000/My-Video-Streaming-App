import React from "react";

const ChatMessage = ({ img, name, message }) => {
  return (
    <div>
      <div className="py-1 flex items-center shadow-sm px-2">
        <img src={img} className="w-8 h-5" alt="user" />
        <span className="font-medium px-1">{name} : </span>
        <span className="text-sm"> {message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
