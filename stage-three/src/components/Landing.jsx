import React, { useEffect, useState } from "react";
import Header from "./Header";
import ChatBox from "./ChatBox";
import OutputDisplay from "./OutputDisplay";

function Landing({ theme, toggleTheme }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages"));
    if (storedMessages) {
      setMessages(storedMessages);
    }
  }, []);

  const addMessage = (newMessage) => {
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem("messages", JSON.stringify(updatedMessages));
  };

  const clearData = () => {
    localStorage.removeItem("messages");
    setMessages([]);
  };

  return (
    <div className="p-5">
      <Header clearData={clearData} toggleTheme={toggleTheme} theme={theme} />
      <OutputDisplay messages={messages} />
      <ChatBox addMessage={addMessage} theme={theme} />
    </div>
  );
}

export default Landing;
