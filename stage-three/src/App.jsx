import React, { useEffect, useState } from "react";
import Landing from "./components/Landing";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        theme === "dark"
          ? "bg-[#212121] text-[#ececec]"
          : "bg-white text-[#0d0d0d]"
      }`}
    >
      <Landing theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
