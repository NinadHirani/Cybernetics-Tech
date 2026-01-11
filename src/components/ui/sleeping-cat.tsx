"use client";

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
  const [isHovered, setIsHovered] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!catRef.current) return;
      const rect = catRef.current.getBoundingClientRect();
      const catCenterX = rect.left + rect.width / 2;
      const catCenterY = rect.top + rect.height / 2;

        // Calculate relative distance (-1 to 1)
        const dx = (e.clientX - catCenterX) / 200;
        const dy = (e.clientY - catCenterY) / 200;

        // Distance for bubble trigger
        const dist = Math.sqrt(Math.pow(e.clientX - catCenterX, 2) + Math.pow(e.clientY - catCenterY, 2));
        setShowBubble(dist < 150);

        // Clamp values and set motion values (max 3.5px movement)
        mouseX.set(Math.max(-3.5, Math.min(3.5, dx * 4)));
        mouseY.set(Math.max(-2, Math.min(2, dy * 4)));
      };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={catRef} className={cn("relative", className)}>
      <Link 
        href="/contact-us"
        className="relative flex items-center justify-center cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Eye-catching Glow */}
        <motion.div
          className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"
          animate={{
            scale: isHovered ? 1.5 : [1, 1.2, 1],
            opacity: isHovered ? 0.6 : 0.2
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Speech Bubble */}
        <motion.div
          initial={{ scale: 0, opacity: 0, y: 10 }}
          animate={{ 
            scale: showBubble || isHovered ? 1 : 0, 
            opacity: showBubble || isHovered ? 1 : 0,
            y: showBubble || isHovered ? -45 : 0 
          }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg pointer-events-none whitespace-nowrap z-20"
        >
          Meow! Hire us?
          <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
        </motion.div>

        <svg
          viewBox="0 0 100 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-auto relative z-10 transition-transform duration-500 group-hover:scale-110"
        >
          {/* Cat Body - Curled up with texture/spots */}
          <motion.path
            d="M85 45 C85 55 15 55 15 45 C15 25 45 15 65 15 C85 15 95 35 85 45 Z"
            fill="#E2E8F0"
            stroke="#94A3B8"
            strokeWidth="1.5"
            animate={{ 
              scale: [0.98, 1, 0.98],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          {/* Spots for realism */}
          <circle cx="70" cy="30" r="4" fill="#CBD5E1" />
          <circle cx="60" cy="40" r="3" fill="#CBD5E1" />
          <circle cx="25" cy="40" r="5" fill="#CBD5E1" />
          
          {/* Head */}
          <motion.path
            d="M35 45 C30 45 20 40 20 30 C20 20 30 15 40 15 C50 15 55 25 55 35"
            fill="#E2E8F0"
            stroke="#94A3B8"
            strokeWidth="1.5"
            animate={{ 
              rotate: isHovered ? [-2, 2, -2] : [-1, 1, -1],
              transition: { duration: isHovered ? 0.5 : 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          {/* Ears with twitch */}
          <motion.path
            d="M25 20 L22 10 L30 18"
            fill="#E2E8F0"
            stroke="#94A3B8"
            strokeWidth="1"
            animate={{ rotate: [0, -5, 0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 5, delay: 2 }}
          />
          <motion.path
            d="M45 18 L48 10 L50 22"
            fill="#E2E8F0"
            stroke="#94A3B8"
            strokeWidth="1"
            animate={{ rotate: [0, 5, 0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 5, delay: 1 }}
          />
          
            {/* Eyes - Glowing and Tracing */}
            <g transform="translate(32, 32)">
              <ellipse cx="0" cy="0" rx="4" ry="2.5" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="0.5" />
              <motion.circle 
                cx="0" 
                cy="0" 
                initial={{ r: 1.8 }}
                fill="#FF0000"
                style={{ x: eyeX, y: eyeY }}
                animate={{ 
                  r: isHovered ? [1.8, 2.2, 1.8] : [1.8, 2, 1.8],
                  filter: isHovered 
                    ? ["drop-shadow(0 0 1px #FF0000)", "drop-shadow(0 0 3px #FF0000)", "drop-shadow(0 0 1px #FF0000)"]
                    : "drop-shadow(0 0 1px #FF0000)"
                }}
                transition={{ 
                  r: { repeat: Infinity, duration: 1.5 },
                  filter: { repeat: Infinity, duration: 1.5 }
                }}
              />
            </g>
            
            <g transform="translate(48, 32)">
              <ellipse cx="0" cy="0" rx="4" ry="2.5" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="0.5" />
              <motion.circle 
                cx="0" 
                cy="0" 
                initial={{ r: 1.8 }}
                fill="#FF0000"
                style={{ x: eyeX, y: eyeY }}
                animate={{ 
                  r: isHovered ? [1.8, 2.2, 1.8] : [1.8, 2, 1.8],
                  filter: isHovered 
                    ? ["drop-shadow(0 0 1px #FF0000)", "drop-shadow(0 0 3px #FF0000)", "drop-shadow(0 0 1px #FF0000)"]
                    : "drop-shadow(0 0 1px #FF0000)"
                }}
                transition={{ 
                  r: { repeat: Infinity, duration: 1.5 },
                  filter: { repeat: Infinity, duration: 1.5 }
                }}
              />
            </g>
          
          {/* Nose */}
          <circle cx="40" cy="38" r="1.5" fill="#F472B6" opacity="0.8" />
          
          {/* Whiskers - Moving slightly */}
          <motion.g animate={{ x: [-0.5, 0.5, -0.5] }} transition={{ repeat: Infinity, duration: 2 }}>
            <path d="M25 38 L15 36" stroke="#94A3B8" strokeWidth="0.5" />
            <path d="M25 40 L15 42" stroke="#94A3B8" strokeWidth="0.5" />
            <path d="M55 38 L65 36" stroke="#94A3B8" strokeWidth="0.5" />
            <path d="M55 40 L65 42" stroke="#94A3B8" strokeWidth="0.5" />
          </motion.g>
    
          {/* Tail with more expressive flick */}
          <motion.path
            d="M85 45 C95 45 95 25 80 25"
            stroke="#94A3B8"
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={{ 
              rotate: [0, 15, -5, 15, 0],
              x: [0, 2, -1, 2, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
    
          {/* Zzz floating */}
          {!isHovered && (
            <motion.g
              initial={{ opacity: 0, y: 0 }}
              animate={{ 
                opacity: [0, 0.4, 0],
                y: [-10, -25],
                x: [0, 5]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <text x="60" y="15" fontSize="8" fill="#94A3B8" fontWeight="bold">Z</text>
            </motion.g>
          )}
        </svg>
      </Link>
    </div>
  );
}
