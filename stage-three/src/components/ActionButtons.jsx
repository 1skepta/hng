import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ActionButtons({ theme }) {
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
    <div className="ml-2 text-sm mb-20">
      <div className="flex">
        <div
          ref={toggleButtonRef}
          className="p-1 px-2 mr-2 rounded-xl flex items-center cursor-pointer"
          onClick={toggleModal}
          style={{
            backgroundColor: theme === "dark" ? "#323232d9" : "#E8E8E880",
          }}
        >
          English
          <ChevronDown
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          style={{
            backgroundColor: theme === "dark" ? "#323232d9" : "#E8E8E880",
          }}
          className="p-1 px-2 rounded-xl cursor-pointer "
        >
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
            className="p-5 rounded-2xl mt-1 z-50 w-60"
            style={{
              border: theme === "dark" ? "none" : "1px solid #f0f0f0",
              boxShadow:
                theme === "dark" ? "none" : "0px -4px 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: theme === "dark" ? "#323232d9" : "#ffffff",
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
