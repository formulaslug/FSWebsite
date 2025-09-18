import React from "react";
import Image from "next/image";
import { colors } from "@/config/colors";

interface SubteamCardProps {
  subteamName: string;
  photoPaths: string[];
  blurb: string;
  leadName: string;
  leadPhotoPath: string;
  aspectRatio?: number; // width/height ratio (default: 16/9)
}

const SubteamCard: React.FC<SubteamCardProps> = ({
  subteamName,
  photoPaths,
  blurb,
  leadName,
  leadPhotoPath,
  aspectRatio = 1
}) => {
  // Use first photo as cover
  const coverPhoto = photoPaths[0];
  
  return (
    <div className="group cursor-pointer w-15/16 h-full mx-auto">
      {/* Stable hover container - does not get resized */}
      <div 
        className="relative w-full mx-auto overflow-hidden rounded-xl"
        style={{ 
          aspectRatio: aspectRatio,
          boxShadow: `0px 4px 0px rgba(45, 195, 241, 1)`
        }}
      >
        {/* Front Side - Team Photo with Title */}
        <div 
          className="absolute inset-0 w-full h-full transition-transform duration-200 ease-in-out group-hover:translate-y-[-100%] shadow-lg"
        >
          <div className="relative w-full h-full">
            <Image
              src={`/photos/${coverPhoto}`}
              alt={`${subteamName} team`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0"></div>
            
            {/* Subteam Title with Shadow */}
            <div className="absolute top-10 left-0 right-0 p-6">
              <h3 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center"
                style={{
                  textShadow: `3px 3px 0px ${colors.primary}, -1px -1px 8px ${colors.primary}`
                }}
              >
                {subteamName}
              </h3>
            </div>
          </div>
        </div>

        {/* Back Side - Lead Info */}
        <div 
          className="absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out translate-y-[100%] group-hover:translate-y-0 shadow-lg rounded-xl"
          style={{ 
            backgroundColor: colors.background.card
          }}
        >
          <div className="flex h-full">
            {/* Left 1/3 - Lead Photo with overlay */}
            <div className="relative w-1/3 h-full">
              <Image
                src={`/leaders/${leadPhotoPath}`}
                alt={leadName}
                fill
                className="object-cover rounded-l-xl"
                sizes="33vw"
              />
              
              {/* Floating overlay block */}
              <div 
                className="absolute bottom-4 left-3 right-3 p-3 rounded-lg"
                style={{ backgroundColor: colors.primary }}
              >
                {/* Lead Name */}
                <h4 
                  className="text-sm md:text-base font-bold text-center"
                  style={{ color: colors.slugYellow }}
                >
                  {leadName}
                </h4>

                {/* Subteam Title */}
                <h5 
                  className="text-xs md:text-sm font-semibold text-center"
                  style={{ color: colors.textColor }}
                >
                  {subteamName} Lead
                </h5>
              </div>
            </div>

            {/* Right 2/3 - Text Content */}
            <div className="w-2/3 h-full p-10 flex items-center font-semibold relative overflow-hidden">
              {/* Yellow decorative stripes */}
              <div className="absolute top-0 right-[-80]">
                <div 
                  className="w-100 h-7 ml-5 mt-30 transform rotate-45 origin-top-right transition-transform duration-500 ease-out delay-350 translate-x-[-200px] translate-y-[-200px] group-hover:translate-x-0 group-hover:translate-y-0"
                  style={{ 
                    backgroundColor: colors.slugYellow,
                    transformOrigin: 'top right'
                  }}
                ></div>
                <div 
                  className="w-100 h-4 transform rotate-45 origin-top-right transition-transform duration-700 ease-out delay-350 translate-x-[300px] translate-y-[300px] group-hover:translate-x-0 group-hover:translate-y-0"
                  style={{ 
                    backgroundColor: colors.electricBlue,
                    transformOrigin: 'top right'
                  }}
                ></div>
              </div>
              
              <h1 className="text-sm md:text-md leading-relaxed">
                {blurb}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubteamCard;
