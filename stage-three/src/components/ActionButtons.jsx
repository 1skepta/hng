import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ActionButtons({ theme, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState("");
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

  // Use the built-in AI Language Detector API.
  useEffect(() => {
    if (text && text.trim() !== "") {
      async function detect() {
        if ("ai" in window && window.ai && window.ai.languageDetector) {
          try {
            const capabilities =
              await window.ai.languageDetector.capabilities();
            let detector;
            if (capabilities === "no") {
              setDetectedLanguage("Unavailable");
              return;
            } else if (capabilities === "readily") {
              detector = await window.ai.languageDetector.create();
            } else {
              // "after-download": wait for the model download.
              detector = await window.ai.languageDetector.create({
                monitor(m) {
                  m.addEventListener("downloadprogress", (e) => {
                    console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
                  });
                },
              });
              await detector.ready;
            }
            const results = await detector.detect(text);
            if (results && results.length > 0) {
              setDetectedLanguage(results[0].detectedLanguage);
            } else {
              setDetectedLanguage("Unknown");
            }
          } catch (error) {
            console.error("Language detection error:", error);
            setDetectedLanguage("Error");
          }
        } else {
          console.error("Language Detector API not available.");
          setDetectedLanguage("Unavailable");
        }
      }
      detect();
    }
  }, [text]);

  // Map language codes to display names.
  const languageMap = {
    en: "English",
    pt: "Portuguese",
    es: "Spanish",
    ru: "Russian",
    tr: "Turkish",
    fr: "French",
  };

  // Display name for the toggle button.
  const displayLanguage =
    detectedLanguage && languageMap[detectedLanguage]
      ? languageMap[detectedLanguage]
      : detectedLanguage || "Detecting...";

  // Available languages array.
  const availableLanguages = [
    { code: "en", name: "English" },
    { code: "pt", name: "Portuguese" },
    { code: "es", name: "Spanish" },
    { code: "ru", name: "Russian" },
    { code: "tr", name: "Turkish" },
    { code: "fr", name: "French" },
  ];

  // Build the dropdown list:
  // If a detected language exists (and is in our map), display it first (with "- Detected")
  // and then the rest of the languages (without duplicates).
  let dropdownList = availableLanguages;
  if (detectedLanguage && languageMap[detectedLanguage]) {
    dropdownList = [
      {
        code: detectedLanguage,
        name: `${languageMap[detectedLanguage]} - Detected`,
      },
      ...availableLanguages.filter((lang) => lang.code !== detectedLanguage),
    ];
  }

  return (
    <div className="ml-2 text-sm mb-20">
      <div className="flex">
        {/* Dropdown toggle showing the detected language */}
        <div
          ref={toggleButtonRef}
          className="p-1 px-2 mr-2 rounded-xl flex items-center cursor-pointer"
          onClick={toggleModal}
          style={{
            backgroundColor: theme === "dark" ? "#323232d9" : "#E8E8E880",
          }}
        >
          {displayLanguage}
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
          className="p-1 px-2 rounded-xl cursor-pointer"
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
              {dropdownList.map((lang, index) => (
                <li key={index}>{lang.name}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ActionButtons;
