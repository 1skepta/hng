import React, { useEffect, useState } from "react";
import Header from "./Header";
import ChatBox from "./ChatBox";
import OutputDisplay from "./OutputDisplay";

function Landing({ theme, toggleTheme }) {
  const [messages, setMessages] = useState(
    () => JSON.parse(localStorage.getItem("messages")) || []
  );

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const addMessage = (newMessage) => setMessages([...messages, newMessage]);

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
