import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generateNameRandom, generateRandomString } from "../utils/helper";

const LiveChat = () => {
  const [liveChat, setLiveChat] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // api polling
      dispatch(
        addMessage({
          name: generateNameRandom(),
          message: generateRandomString(10) + " 🚀",
        }),
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="relative">
      <h2 className="absolute top-0 left-0 text-2xl font-bold p-4 z-10 bg-slate-100 w-full border-x border-t border-gray-400 rounded-t-lg">
        Live Chat
      </h2>
      <div className="w-full h-[700px] flex flex-col border border-gray-400 rounded-lg bg-slate-100 overflow-y-auto flex-col-reverse">
        {chatMessages.map((c) => (
          <ChatMessage name={c.name} message={c.message} />
        ))}
      </div>
      <div className="p-4 bg-white border-t border-gray-200">
        <form
          className="flex items-center gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage({ name: "Gopal", message: liveChat + "😎" }));
            setLiveChat("");
          }}  
        >
          <input
            type="text"
            value={liveChat}
            onChange={(e) => setLiveChat(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300   px-5 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
          />
          <button className="bg-red-500 hover:bg-red-600 active:scale-95 transition text-white px-6 py-3 font-medium shadow-md">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
