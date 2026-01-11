import React from 'react';
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  showText?: boolean;
}

export const Logo = ({ 
  className, 
  iconClassName, 
  textClassName, 
  showText = true 
}: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-3 group", className)}>
      <div className={cn("relative w-10 h-10", iconClassName)}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full fill-none stroke-primary stroke-[2px] filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
        >
          {/* Pentagonal Wireframe Structure (Icosahedron-style) */}
          <path d="M50 5 L95 38 L78 92 L22 92 L5 38 Z" className="opacity-40" />
          <path d="M50 5 L50 35 M95 38 L65 45 M78 92 L50 70 M22 92 L35 45 M5 38 L35 45" />
          <path d="M50 35 L65 45 L50 70 L35 45 Z" className="stroke-primary/80" />
          <circle cx="50" cy="5" r="1.5" className="fill-primary" />
          <circle cx="95" cy="38" r="1.5" className="fill-primary" />
          <circle cx="78" cy="92" r="1.5" className="fill-primary" />
          <circle cx="22" cy="92" r="1.5" className="fill-primary" />
          <circle cx="5" cy="38" r="1.5" className="fill-primary" />
          <circle cx="50" cy="35" r="1.5" className="fill-primary" />
          <circle cx="65" cy="45" r="1.5" className="fill-primary" />
          <circle cx="50" cy="70" r="1.5" className="fill-primary" />
          <circle cx="35" cy="45" r="1.5" className="fill-primary" />
        </svg>
      </div>
      {showText && (
        <div className={cn("flex flex-col leading-none", textClassName)}>
          <span className="text-[22px] font-bold tracking-tight text-white font-display">
            CYBERNETICS
          </span>
          <span className="text-[12px] font-medium tracking-[0.2em] text-primary/80 uppercase">
            TECH
          </span>
        </div>
      )}
    </div>
  );
};
