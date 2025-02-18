import React, { useState } from "react";
import { Menu, Edit, Moon, Sun } from "lucide-react";

function Header({ clearData, toggleTheme, theme }) {
  return (
    <div className="flex items-center justify-between">
      <button onClick={toggleTheme} className="cursor-pointer">
        {theme === "dark" ? (
          <Sun size={24} color={theme === "dark" ? "#b4b4b4" : "#5d5d5d"} />
        ) : (
          <Moon size={24} color={theme === "dark" ? "#b4b4b4" : "#5d5d5d"} />
        )}
      </button>
      <h2
        className="text-xl select-none"
        style={{ color: theme === "dark" ? "#b4b4b4" : "#5d5d5d" }}
      >
        SkeptaGPT
      </h2>
      <button onClick={clearData} className="cursor-pointer">
        <Edit size={24} color={theme === "dark" ? "#b4b4b4" : "#5d5d5d"} />
      </button>
    </div>
  );
}

export default Header;
