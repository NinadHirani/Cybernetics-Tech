import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SleepingCatProps {
  className?: string;
}

export function SleepingCat({ className }: SleepingCatProps) {
  const catRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for eye movement
  const springConfig = { damping: 20, stiffness: 150 };
  const eyeX = useSpring(mouseX, springConfig);
  const eyeY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!catRef.current) return;
      const rect = catRef.current.getBoundingClientRect();
      const catCenterX = rect.left + rect.width / 2;
      const catCenterY = rect.top + rect.height / 2;

      // Calculate relative distance (-1 to 1)
      const dx = (e.clientX - catCenterX) / (window.innerWidth / 2);
      const dy = (e.clientY - catCenterY) / (window.innerHeight / 2);

      // Clamp values and set motion values (max 3px movement)
      mouseX.set(Math.max(-3, Math.min(3, dx * 5)));
      mouseY.set(Math.max(-2, Math.min(2, dy * 5)));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={catRef} className={cn("relative", className)}>
      <Link 
        href="/contact-us"
        className="relative flex items-center justify-center cursor-pointer group transition-transform hover:scale-110"
      >
        <svg
          viewBox="0 0 100 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-auto"
        >
          {/* Cat Body - Curled up */}
          <motion.path
            d="M85 45 C85 55 15 55 15 45 C15 25 45 15 65 15 C85 15 95 35 85 45 Z"
            fill="#E2E8F0"
            stroke="#94A3B8"
            strokeWidth="1.5"
            initial={{ scale: 0.98 }}
            animate={{ 
              scale: [0.98, 1, 0.98],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          {/* Head */}
          <motion.path
            d="M35 45 C30 45 20 40 20 30 C20 20 30 15 40 15 C50 15 55 25 55 35"
            fill="#E2E8F0"
            stroke="#94A3B8"
            strokeWidth="1.5"
            initial={{ rotate: 0 }}
            animate={{ 
              rotate: [-1, 1, -1],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          {/* Ears */}
          <path
            d="M25 20 L22 10 L30 18"
            fill="#E2E8F0"
            stroke="#94A3B8"
            strokeWidth="1"
          />
          <path
            d="M45 18 L48 10 L50 22"
            fill="#E2E8F0"
            stroke="#94A3B8"
            strokeWidth="1"
          />
          
          {/* Eyes - Open and tracking */}
          {/* Left Eye */}
          <g transform="translate(32, 32)">
            <ellipse cx="0" cy="0" rx="4" ry="2.5" fill="white" stroke="#94A3B8" strokeWidth="0.5" />
            <motion.circle 
              cx="0" 
              cy="0" 
              r="1.5" 
              fill="#1E293B"
              style={{ x: eyeX, y: eyeY }}
            />
          </g>
          
          {/* Right Eye */}
          <g transform="translate(48, 32)">
            <ellipse cx="0" cy="0" rx="4" ry="2.5" fill="white" stroke="#94A3B8" strokeWidth="0.5" />
            <motion.circle 
              cx="0" 
              cy="0" 
              r="1.5" 
              fill="#1E293B"
              style={{ x: eyeX, y: eyeY }}
            />
          </g>
          
          {/* Nose */}
          <circle cx="40" cy="38" r="1.5" fill="#F472B6" opacity="0.6" />
          
          {/* Whiskers */}
          <path d="M25 38 L15 36" stroke="#94A3B8" strokeWidth="0.5" />
          <path d="M25 40 L15 42" stroke="#94A3B8" strokeWidth="0.5" />
          <path d="M55 38 L65 36" stroke="#94A3B8" strokeWidth="0.5" />
          <path d="M55 40 L65 42" stroke="#94A3B8" strokeWidth="0.5" />
  
          {/* Tail tucked in */}
          <motion.path
            d="M85 45 C95 45 95 25 80 25"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ 
              rotate: [0, 5, 0],
              transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          />
  
          {/* Zzz floating - reduced frequency as cat is peeking */}
          <motion.g
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: [0, 0.4, 0],
              y: [-10, -25],
              x: [0, 5]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 0 }}
          >
            <text x="60" y="15" fontSize="8" fill="#94A3B8" fontWeight="bold">Z</text>
          </motion.g>
        </svg>
        
        <div className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-slate-400 border border-white/5">
          Watching you... Click to chat!
        </div>
      </Link>
    </div>
  );
}
