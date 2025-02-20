import React from "react";
import ActionButtons from "./ActionButtons";

function OutputDisplay({ messages, theme, addTranslatedMessage }) {
  return (
    <div>
      {messages.length === 0 ? (
        <div className="w-3/5 text-center select-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-3xl font-extrabold mb-3">Welcome To SkeptaGPT</p>
          <p>Senior Google Translate, Senior QuillBot</p>
        </div>
      ) : (
        <div className="p-5 md:w-3/5 md:mx-auto space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className="p-3 rounded-xl max-w-[60%] break-words"
                style={{
                  backgroundColor: theme === "dark" ? "#323232d9" : "#E8E8E880",
                }}
              >
                {message.text}
                {/* Only the last message bubble gets the action buttons */}
                {index === messages.length - 1 && (
                  <div className="mt-2">
                    <ActionButtons
                      theme={theme}
                      text={message.text}
                      onTranslationComplete={(newTranslation) =>
                        addTranslatedMessage({
                          text: newTranslation,
                          type: "translated",
                        })
                      }
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OutputDisplay;
