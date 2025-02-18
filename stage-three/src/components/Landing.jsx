import React, { useEffect, useState } from "react";
import Header from "./Header";
import ChatBox from "./ChatBox";
import OutputDisplay from "./OutputDisplay";

function Landing() {
  const [messages, setMessages] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages"));
    if (storedMessages) {
      setMessages(storedMessages);
    }

    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
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

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
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
