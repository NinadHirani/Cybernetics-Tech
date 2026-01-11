import React from 'react';
import { cn } from "@/lib/utils";
import Image from 'next/image';

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
      <div className={cn("relative w-12 h-12", iconClassName)}>
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c7eda8bf-0b51-4df9-bd1e-d810430a3d49/Cybernetic-Tech-Logo-1768117721211.png?width=8000&height=8000&resize=contain"
          alt="Cybernetics Tech Logo"
          fill
          className="object-contain"
          priority
        />
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
