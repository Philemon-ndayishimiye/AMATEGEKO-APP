// src/components/LanguageSelector.tsx
import React, { useState } from "react";
import { MdLanguage } from "react-icons/md";

interface Language {
  code: string;
  label: string;
}

const LANGUAGES: Language[] = [
  { code: "kn", label: "Kinyarwanda" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "sw", label: "Kiswahili" },
  { code: "zh", label: "中文" },
  
];

interface Props {
  onSelectLanguage?: (lang: Language) => void;
}

const LanguageSelector: React.FC<Props> = ({ onSelectLanguage }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Language>(LANGUAGES[0]);

  const handleSelect = (lang: Language) => {
    setSelected(lang);
    setOpen(false);
    if (onSelectLanguage) onSelectLanguage(lang);
  };

  return (
    <div className="relative">
      {/* Language Icon Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="text-2xl cursor-pointer flex items-center gap-1"
      >
        <MdLanguage className="text-gray-700 hover:text-green-600 transition" />
        <span className="text-sm hidden lg:inline">{selected.label}</span>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-100 z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-green-100 ${
                selected.code === lang.code ? "bg-green-50 font-semibold" : ""
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
