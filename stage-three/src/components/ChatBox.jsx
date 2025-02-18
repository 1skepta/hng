import React, { useState } from "react";
import { Send } from "lucide-react";

function ChatBox({ addMessage, theme }) {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSend = () => {
    if (inputText.trim() !== "") {
      addMessage(inputText);
      setInputText("");
    }
  };

  return (
    <div
      className="justify-between flex p-3 rounded-2xl items-center fixed bottom-0 left-0 right-0 z-10 mb-2 mx-5"
      style={{
        border: theme === "dark" ? "" : "1px solid #f0f0f0",
        boxShadow: theme === "dark" ? "" : "0px -4px 10px rgba(0, 0, 0, 0.1",
        transition: "bottom 0.3s ease-in-out",
        backgroundColor: theme === "dark" ? "#303030" : "#ffffff",
      }}
    >
      <div className="w-full">
        <input
          type="text"
          placeholder="Message SkeptaGPT"
          className={`outline-0 w-full ${
            theme === "dark"
              ? "placeholder-[#b4b4b4] text-[#ececec] bg-[#303030]"
              : "placeholder-[#737373] text-[#0d0d0d] bg-white"
          }`}
          value={inputText}
          onChange={handleInputChange}
        />
      </div>
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
