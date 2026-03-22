"use client";

import React, { useState } from "react";
import Image from "next/image";
import { colors } from "@/config/colors";

export interface Sponsor {
  name: string;
  description?: string;
  logo?: string;
  website?: string;
}

export function SponsorCard({
  sponsor,
  width,
  height,
}: {
  sponsor: Sponsor;
  width?: number;
  height?: number;
}) {
  const [imgError, setImgError] = useState(false);

  const hasLogo = !!sponsor?.logo;

  return (
    <div
      className="p-8 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-200 hover:scale-105"
      style={{ backgroundColor: colors.background.secondary }}
    >
      <div className="flex flex-col items-center w-full">
        <a
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center justify-center w-full h-32 mb-4 drop-shadow-[5px_5px_10px_rgba(0,0,0,0.30)]">
            {hasLogo && !imgError ? (
              <Image
                src={`/sponsors/${sponsor.logo}`}
                alt={`${sponsor.name ?? "Sponsor"} logo`}
                width={width ?? 180}
                height={height ?? 120}
                style={{
                  width: '80%',
                  height: 'auto',
                }}
                className="object-contain max-w-full max-h-full"
                onError={() => {
                  console.warn("Image load failed:", sponsor.logo);
                  setImgError(true);
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center px-2">
                <span
                  className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
                  style={{
                    color: "#ffffff",
                    fontFamily: "'Scandia Bold Italic', sans-serif",
                  }}
                >
                  {sponsor?.name ?? "Sponsor"}
                </span>
              </div>
            )}
          </div>
        </a>
      </div>
    </div>
  );
}
