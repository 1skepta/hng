import React from "react";
import { Edit, Moon, Sun } from "lucide-react";

function Header({ clearData, toggleTheme, theme }) {
  return (
    <div className="flex items-center justify-between">
      <button onClick={toggleTheme}>
        {theme === "dark" ? (
          <Sun size={24} color="#b4b4b4" />
        ) : (
          <Moon size={24} color="#5d5d5d" />
        )}
      </button>
      <h2
        className="text-xl select-none"
        style={{ color: theme === "dark" ? "#b4b4b4" : "#5d5d5d" }}
      >
        SkeptaGPT
      </h2>
      <button onClick={clearData}>
        <Edit size={24} color={theme === "dark" ? "#b4b4b4" : "#5d5d5d"} />
      </button>
    </div>
  );
}

export default Header;
