"use client";

import React from "react";
import { colors } from "@/config/colors";

interface ShimmerTitleProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ShimmerTitle: React.FC<ShimmerTitleProps> = ({ 
  children, 
  className = "text-4xl sm:text-6xl font-bold text-center mb-8 px-4 pt-8",
  style = {}
}) => {
  return (
    <h1 
      className={`${className} relative overflow-hidden`}
      style={{
        color: "white",
        ...style
      }}
    >
      <span className="shimmer-text">{children}</span>
      
      <style jsx>{`
        .shimmer-text {
          background: linear-gradient(
            45deg,
            white 0%,
            white 20%,
            ${colors.slugYellow} 20%,
            ${colors.slugYellow} 40%,
            ${colors.electricBlue} 40%,
            ${colors.electricBlue} 50%,
            ${colors.slugYellow} 50%,
            ${colors.slugYellow} 60%, 
            white 60%,
            white 100%
          );
          background-size: 400% 400%;
          background-position: -100% -100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: diagonalShimmer 3s ease-out forwards;
        }
        
        @keyframes diagonalShimmer {
          0% {
            background-position: -150% -150%;
          }
          100% {
            background-position: 100% 100%;
          }
        }
        
        /* Fallback for browsers that don't support background-clip: text */
        @supports not (-webkit-background-clip: text) {
          .shimmer-text {
            color: white;
            background: none;
            animation: none;
            -webkit-text-fill-color: white;
          }
        }
      `}</style>
    </h1>
  );
};

export default ShimmerTitle;
