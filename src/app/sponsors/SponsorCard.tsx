"use client";

import React, { useState } from "react";
import Image from "next/image";
import { colors } from "@/config/colors";

export function SponsorCard({
  sponsor,
  tier,
}: {
  sponsor: any;
  tier: string;
}) {
  const [imgError, setImgError] = useState(false);

  const hasLogo = !!sponsor?.logo;

  return (
    <div className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 bg-transparent">
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center justify-center w-full h-32 mb-4">
          {hasLogo && !imgError ? (
            <Image
              src={`/sponsors/${sponsor.logo}`}
              alt={`${sponsor.name ?? "Sponsor"} logo`}
              width={sponsor.logo === "BaskinEngineeringLogo.png" ? 240 : 180}
              height={sponsor.logo === "BaskinEngineeringLogo.png" ? 160 : 120}
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
                style={{ color: '#ffffff', fontFamily: "'Scandia Bold Italic', sans-serif" }}
              >
                {sponsor?.name ?? "Sponsor"}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="mt-2">
        {sponsor?.website && sponsor.website !== "#" && (
          <a
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:underline mt-1 inline-block"
            style={{ color: colors.primary }}
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
}
