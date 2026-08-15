import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export default function Logo({ className = "", showText = true, light = false }: LogoProps) {
  return (
    <div className={`flex items-center select-none group transition-colors duration-300 ${className}`}>
      <div className="flex flex-col text-left">
        <span
          className={`font-sans text-2xl font-black tracking-wider leading-none transition-colors duration-300 ${
            light
              ? "text-white group-hover:text-blue-300"
              : "text-[#0B1A59] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"
          }`}
        >
          ELITE
        </span>
        <span
          className={`font-sans text-[9px] font-extrabold tracking-[0.25em] leading-none mt-1.5 transition-colors duration-300 ${
            light
              ? "text-blue-400 group-hover:text-blue-300"
              : "text-blue-600 dark:text-blue-400 group-hover:text-[#0B1A59] dark:group-hover:text-white"
          }`}
        >
          DUCT CLEANING
        </span>
      </div>
    </div>
  );
}
