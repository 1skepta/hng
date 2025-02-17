import React from "react";
import { ChevronDown } from "lucide-react";

function ActionButtons() {
  return (
    <div className="ml-3 text-sm">
      <div className="flex">
        <div className="p-1 px-2 mr-2 bg-gray-100 rounded-xl flex items-center">
          English <ChevronDown />
        </div>
        <div className="p-1 px-2 bg-gray-100 rounded-xl">Summarize</div>
      </div>
      <div
        className="p-5 rounded-2xl mt-1 z-10"
        style={{
          border: "1px solid #f0f0f0",
          boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1",
        }}
      >
        <ul className="leading-9">
          <li>English - Detected</li>
          <li>Portuguese</li>
          <li>Spanish</li>
          <li>Russian</li>
          <li>Turkish</li>
          <li>French</li>
        </ul>
      </div>
    </div>
  );
}

export default ActionButtons;
