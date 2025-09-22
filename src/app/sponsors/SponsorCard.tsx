"use client";

import Image from "next/image";
import { colors } from "@/config/colors";

export function SponsorCard({
  sponsor,
  tier,
}: {
  sponsor: any;
  tier: string;
}) {
  return (
    <div className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 bg-transparent">
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center justify-center w-full h-32 mb-4">
          <Image
            src={`/sponsors/${sponsor.logo}`}
            alt={`${sponsor.name} logo`}
            width={180}
            height={120}
            className="object-contain max-w-full max-h-full"
            style={{ display: "block" }}
            onError={(e) => {
              console.warn('Image load failed:', sponsor.logo);
              const img = e.currentTarget;
              img.style.display = "none";
              const fallback =
                img.parentElement?.querySelector(".fallback-text");
              if (fallback) {
                (fallback as HTMLElement).style.display = "flex";
              }
            }}
          />
          <div
            className="fallback-text w-full h-full items-center justify-center text-4xl font-bold hidden"
            style={{ color: colors.primary, display: "none" }}
          >
            {sponsor.name.charAt(0)}
          </div>
        </div>
      </div>
      <div className="mt-2">
        {sponsor.website !== "#" && (
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
