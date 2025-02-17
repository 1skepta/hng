import React from "react";
import ActionButtons from "./ActionButtons";

function OutputDisplay({ messages }) {
  return (
    <div>
      {messages.length === 0 ? (
        <div className=" w-3/5 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-3xl font-extrabold mb-3">Type In Your Text!</p>
          <p>Let Me See How I Can Help</p>
        </div>
      ) : (
        <div>
          <div className="flex justify-end p-5">
            {messages.map((message, index) => (
              <div
                key={index}
                className="p-3 bg-gray-100 rounded-xl"
                style={{ maxWidth: "60%", wordBreak: "break-word" }}
              >
                {message}
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-start p-5">
            {messages.map((message, index) => (
              <div
                key={index}
                className="p-3 "
                style={{ maxWidth: "60%", wordBreak: "break-word" }}
              >
                {message}
              </div>
            ))}
            <ActionButtons />
          </div>
        </div>
      )}
    </div>
  );
}

export default OutputDisplay;
