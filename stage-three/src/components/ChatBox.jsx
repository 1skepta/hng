import React from "react";
import { Send } from "lucide-react";

function ChatBox() {
  return (
    <div
      className="justify-between flex p-3 rounded-2xl items-center fixed bottom-0 left-0 right-0 z-10 mb-5 mx-5"
      style={{
        border: "1px solid #f0f0f0",
        boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1",
        transition: "bottom 0.3s ease-in-out",
      }}
    >
      <div>
        <input type="text" placeholder="Message SkeptaGPT" />
      </div>
      <button className="bg-black p-2 rounded-full">
        <Send size={24} color="white" />
      </button>
    </div>
  );
}

export default ChatBox;
