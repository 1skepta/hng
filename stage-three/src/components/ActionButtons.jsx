import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ActionButtons({ theme, text, onTranslationComplete, onSummarize }) {
  const [isOpen, setIsOpen] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const modalRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleModal = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

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

  const languageMap = {
    en: "English",
    pt: "Portuguese",
    es: "Spanish",
    ru: "Russian",
    tr: "Turkish",
    fr: "French",
  };

  const displayLanguage =
    detectedLanguage && languageMap[detectedLanguage]
      ? languageMap[detectedLanguage]
      : detectedLanguage || "Detecting...";

  const availableLanguages = [
    { code: "en", name: "English" },
    { code: "pt", name: "Portuguese" },
    { code: "es", name: "Spanish" },
    { code: "ru", name: "Russian" },
    { code: "tr", name: "Turkish" },
    { code: "fr", name: "French" },
  ];

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

  const handleLanguageSelect = async (targetLanguage) => {
    if (!text || text.trim() === "") return;
    setIsTranslating(true);
    try {
      if ("ai" in window && window.ai && window.ai.translator) {
        const translatorCapabilities =
          await window.ai.translator.capabilities();
        const availability = translatorCapabilities.languagePairAvailable(
          detectedLanguage,
          targetLanguage
        );
        if (availability === "no") {
          onTranslationComplete("Translation not available.");
          setIsTranslating(false);
          return;
        }
        let translator;
        if (availability === "readily") {
          translator = await window.ai.translator.create({
            sourceLanguage: detectedLanguage,
            targetLanguage,
          });
        } else {
          translator = await window.ai.translator.create({
            sourceLanguage: detectedLanguage,
            targetLanguage,
            monitor(m) {
              m.addEventListener("downloadprogress", (e) => {
                console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
              });
            },
          });
          await translator.ready;
        }
        const translated = await translator.translate(text);
        onTranslationComplete(translated);
      } else {
        onTranslationComplete("Translator API not available.");
      }
    } catch (error) {
      console.error("Translation error:", error);
      onTranslationComplete("Translation error.");
    } finally {
      setIsTranslating(false);
      setIsOpen(false);
    }
  };

  const handleSummarize = () => {
    if (onSummarize) {
      onSummarize(text);
    } else {
      alert("Dey Play 😂");
    }
  };

  return (
    <div className="mb-14">
      <div className="flex items-center space-x-2 relative">
        <div
          ref={toggleButtonRef}
          className={`inline-flex items-center cursor-pointer p-1 px-2 rounded-2xl text-sm ${
            theme === "dark"
              ? "bg-[#212121] hover:bg-[#303030]"
              : "bg-white hover:bg-[#E8E8E880]"
          }`}
          onClick={toggleModal}
          style={{
            border:
              theme === "dark" ? "1px solid #b4b4b4" : "1px solid #5d5d5d",
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
          onClick={handleSummarize}
          className={`p-1 px-2 rounded-2xl cursor-pointer text-sm ${
            theme === "dark"
              ? "bg-[#212121] hover:bg-[#303030]"
              : "bg-white hover:bg-[#E8E8E880]"
          }`}
          style={{
            border:
              theme === "dark" ? "1px solid #b4b4b4" : "1px solid #5d5d5d",
          }}
        >
          Summarize
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 5 }}
              exit={{ opacity: 0, y: 0 }}
              className="p-5 rounded-2xl mt-1 z-50 w-60 absolute"
              style={{
                top: "100%",
                left: 0,
                border: theme === "dark" ? "none" : "1px solid #f0f0f0",
                boxShadow:
                  theme === "dark"
                    ? "none"
                    : "0px -4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: theme === "dark" ? "#323232d9" : "#ffffff",
              }}
            >
              <ul className="leading-9 cursor-pointer select-none">
                {dropdownList.map((lang, index) => (
                  <li
                    key={index}
                    onClick={() => handleLanguageSelect(lang.code)}
                  >
                    {lang.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {isTranslating && (
        <div
          className="mt-2 text-sm"
          style={{ color: theme === "dark" ? "#fff" : "#000" }}
        >
          Translating...
        </div>
      )}
    </div>
  );
}

export default ActionButtons;
