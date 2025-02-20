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

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  const addTranslatedMessage = (translatedMessage) => {
    setMessages([...messages, translatedMessage]);
  };

  const clearData = () => {
    localStorage.removeItem("messages");
    setMessages([]);
  };

  return (
    <div className="p-5">
      <Header clearData={clearData} toggleTheme={toggleTheme} theme={theme} />
      <OutputDisplay
        messages={messages}
        theme={theme}
        addTranslatedMessage={addTranslatedMessage}
      />
      <ChatBox
        addMessage={(msg) => addMessage({ text: msg, type: "user" })}
        theme={theme}
      />
    </div>
  );
}

export default Landing;
