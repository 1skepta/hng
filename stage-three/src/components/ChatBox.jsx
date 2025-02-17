import React, { useState } from "react";
import { Send } from "lucide-react";

function ChatBox({ addMessage }) {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSend = () => {
    if (inputText.trim() !== "") {
      addMessage(inputText);
      //   localStorage.setItem("userInput", inputText);
      setInputText("");
    }
  };

  return (
    <div
      className="justify-between flex p-3 rounded-2xl items-center fixed bottom-0 left-0 right-0 z-10 mb-2 mx-5"
      style={{
        border: "1px solid #f0f0f0",
        boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1",
        transition: "bottom 0.3s ease-in-out",
      }}
    >
      <div className="w-full">
        <input
          type="text"
          placeholder="Message SkeptaGPT"
          className="outline-0 w-full"
          value={inputText}
          onChange={handleInputChange}
        />
      </div>
      <button className="bg-black p-2 rounded-full ml-2" onClick={handleSend}>
        <Send size={24} color="white" />
      </button>
    </div>
  );
}

export default ChatBox;
