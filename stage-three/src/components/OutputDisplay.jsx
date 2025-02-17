import React from "react";
import ActionButtons from "./ActionButtons";

function OutputDisplay({ messages }) {
  return (
    <div>
      {messages.length === 0 ? (
        <div className="w-3/5 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-3xl font-extrabold mb-3">Type In Your Text!</p>
          <p>Let Me See How I Can Help</p>
        </div>
      ) : (
        <div className="p-5">
          {messages.map((message, index) => (
            <div key={index} className="mt-4">
              <div
                className="p-3 rounded-xl self-end mb-2"
                style={{
                  maxWidth: "60%",
                  wordBreak: "break-word",
                  backgroundColor: "#E8E8E880",
                  marginLeft: "auto",
                }}
              >
                {message}
              </div>
              <div
                className="p-3 "
                style={{ maxWidth: "60%", wordBreak: "break-word" }}
              >
                {message}
              </div>
            </div>
          ))}
          <ActionButtons />
        </div>
      )}
    </div>
  );
}

export default OutputDisplay;
