import React, { useEffect, useState } from "react";
import Landing from "./components/Landing";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        theme === "dark" ? "bg-[#212121] text-white" : "bg-white text-black"
      }`}
    >
      <Landing theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
