import React from "react";

function ActionButtons() {
  return (
    <div className="flex pl-3 text-sm">
      <div className="p-1 px-2 mr-2 bg-gray-100 rounded-xl">
        English (Detected)
      </div>
      <div className="p-1 px-2 bg-gray-100 rounded-xl">Summarize</div>
    </div>
  );
}

export default ActionButtons;
