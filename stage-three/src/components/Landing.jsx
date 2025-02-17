import React, { useEffect, useState } from "react";
import Header from "./Header";
import ChatBox from "./ChatBox";
import OutputDisplay from "./OutputDisplay";

function Landing() {
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
      <Header clearData={clearData} />
      <OutputDisplay messages={messages} />
      <ChatBox addMessage={addMessage} />
    </div>
  );
}

export default Landing;
