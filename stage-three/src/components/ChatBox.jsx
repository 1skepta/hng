import React, { useState } from "react";
import { Send } from "lucide-react";

function ChatBox({ addMessage, theme }) {
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (!inputText.trim()) return;
    addMessage(inputText);
    setInputText("");
  };

  return (
    <div
      className="flex p-3 rounded-2xl items-center fixed bottom-0 left-0 right-0 z-10 mb-2 mx-5 md:w-3/5 md:mx-auto"
      style={{
        border: theme === "dark" ? "none" : "1px solid #f0f0f0",
        boxShadow:
          theme === "dark" ? "none" : "0px -4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: theme === "dark" ? "#303030" : "#ffffff",
      }}
    >
      <input
        type="text"
        placeholder="Message SkeptaGPT"
        className={`outline-0 w-full ${
          theme === "dark"
            ? "placeholder-[#b4b4b4] text-[#ececec] bg-[#303030]"
            : "placeholder-[#737373] text-[#0d0d0d] bg-white"
        }`}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className={`p-2 rounded-full ml-2 cursor-pointer ${
          theme === "dark" ? "bg-white" : "bg-black"
        }`}
        onClick={handleSend}
      >
        <Send size={24} color={theme === "dark" ? "black" : "white"} />
      </button>
    </div>
  );
}

export default ChatBox;
