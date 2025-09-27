"use client";

import React from "react";
import { colors } from "@/config/colors";

export default function BecomeSponsorButton() {
  return (
  <div className="w-full max-w-6xl mt-2 md:mt-4 mb-6 md:mb-8 px-4 md:px-0 mx-auto flex justify-center">
      <a
        href="/become-sponsor"
        className="px-6 py-3 border-4 border-white bg-transparent shadow-lg transition-colors duration-200 hover:bg-white hover:text-yellow-400 rounded"
        style={{ borderRadius: '6px', color: 'var(--text-color)', padding: '12px 20px' }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'white';
          (e.currentTarget as HTMLAnchorElement).style.color = colors.electricBlue;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
          (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-color)';
        }}
      >
        <span
          className="text-2xl md:text-3xl font-bold"
          style={{ fontFamily: "'Scandia Bold Italic', sans-serif", fontStyle: 'italic' }}
        >
          Become a Sponsor
        </span>
      </a>
    </div>
  );
}
