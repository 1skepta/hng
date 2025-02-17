import React, { useState } from "react";
import { Menu, Edit, Moon, Sun } from "lucide-react";

function Header({ clearData }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="flex items-center justify-between">
      <button onClick={toggleTheme} className="cursor-pointer">
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      <h2 className="text-xl select-none" style={{ color: "#5d5d5d" }}>
        SkeptaGPT
      </h2>
      <button onClick={clearData} className="cursor-pointer">
        <Edit size={24} />
      </button>
    </div>
  );
}

export default Header;
