import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ActionButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleModal = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !modalRef.current?.contains(event.target) &&
        !toggleButtonRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="ml-3 text-sm">
      <div className="flex">
        <div
          ref={toggleButtonRef}
          className="p-1 px-2 mr-2 bg-gray-100 rounded-xl flex items-center cursor-pointer"
          onClick={toggleModal}
        >
          English
          <ChevronDown
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        <div className="p-1 px-2 bg-gray-100 rounded-xl cursor-pointer">
          Summarize
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-5 rounded-2xl mt-1 z-50 bg-white w-60"
            style={{
              border: "1px solid #f0f0f0",
              boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <ul className="leading-9 cursor-pointer select-none">
              {[
                "English - Detected",
                "Portuguese",
                "Spanish",
                "Russian",
                "Turkish",
                "French",
              ].map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ActionButtons;
