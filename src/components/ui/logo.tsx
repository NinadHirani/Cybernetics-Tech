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
}: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-3 group", className)}>
      <div className={cn("relative w-12 h-12", iconClassName)}>
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c7eda8bf-0b51-4df9-bd1e-d810430a3d49/Cybernetic-Tech-Logo-1768224421817.png?width=8000&height=8000&resize=contain"
          alt="Cybernetics Tech Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};
