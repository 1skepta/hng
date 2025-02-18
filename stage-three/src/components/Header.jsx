import React from "react";
import { Edit, Moon, Sun, Upload } from "lucide-react";
import avatar from "../assets/avatar.jpg";

function Header({ clearData, toggleTheme, theme }) {
  return (
    <div>
      <div className="md:hidden flex items-center justify-between">
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
      <div className="md:flex justify-between hidden items-center">
        <div>
          <h2
            className="text-xl select-none "
            style={{ color: theme === "dark" ? "#b4b4b4" : "#5d5d5d" }}
          >
            SkeptaGPT
          </h2>
        </div>
        <div className="flex items-center">
          <button
            className={`cursor-pointer mr-4 p-2 rounded-xl ${
              theme === "dark"
                ? "bg-[#212121] hover:bg-[#303030]"
                : "bg-white hover:bg-[#E8E8E880]"
            }`}
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <Sun size={24} color="#b4b4b4" />
            ) : (
              <Moon size={24} color="#5d5d5d" />
            )}
          </button>
          <button
            className={`cursor-pointer mr-4 p-2 rounded-xl ${
              theme === "dark"
                ? "bg-[#212121] hover:bg-[#303030]"
                : "bg-white hover:bg-[#E8E8E880]"
            }`}
            onClick={clearData}
          >
            <Edit size={24} color={theme === "dark" ? "#b4b4b4" : "#5d5d5d"} />
          </button>
          <button
            className={`flex items-center px-3 py-1 rounded-3xl mr-4 cursor-pointer ${
              theme === "dark"
                ? "bg-[#212121] hover:bg-[#303030]"
                : "bg-white hover:bg-[#E8E8E880]"
            }`}
            style={{
              border:
                theme === "dark" ? "1px solid #b4b4b4" : "1px solid #5d5d5d",
            }}
            onClick={() => {
              alert("Dey Play");
            }}
          >
            <Upload
              size={19}
              color={theme === "dark" ? "#b4b4b4" : "#5d5d5d"}
              className="mr-2"
            />
            Share
          </button>
          <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full " />
        </div>
      </div>
    </div>
  );
}

export default Header;
