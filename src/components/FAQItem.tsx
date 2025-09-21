"use client";

import React, { useState } from "react";
import { colors } from "@/config/colors";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      {/* Question Box */}
      <div
        className="cursor-pointer p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-lg"
        style={{
          borderColor: colors.slugYellow,
          backgroundColor: isOpen ? colors.slugYellow : 'transparent',
          color: isOpen ? colors.primary : colors.slugYellow,
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{question}</h3>
          <div
            className="w-6 h-6 flex items-center justify-center rounded-full transition-transform duration-300"
            style={{
              backgroundColor: isOpen ? colors.primary : colors.slugYellow,
              color: isOpen ? colors.slugYellow : colors.primary,
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
          >
            <span className="text-lg font-bold">+</span>
          </div>
        </div>
      </div>

      {/* Answer Dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div
          className="p-4 mt-2 rounded-lg"
          style={{
            backgroundColor: colors.background.card,
            color: colors.textColor,
          }}
        >
          <p className="text-sm md:text-base leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;