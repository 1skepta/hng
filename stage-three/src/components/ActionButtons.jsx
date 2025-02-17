import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ActionButtons() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ml-3 text-sm">
      <div className="flex">
        <div
          className="p-1 px-2 mr-2 bg-gray-100 rounded-xl flex items-center"
          onClick={toggleModal}
        >
          English
          <ChevronDown
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        <div className="p-1 px-2 bg-gray-100 rounded-xl">Summarize</div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-5 rounded-2xl mt-1 z-10 bg-white"
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ActionButtons;
