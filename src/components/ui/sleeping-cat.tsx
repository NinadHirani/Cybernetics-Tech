"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SleepingCatProps {
  className?: string;
}

export function SleepingCat({ className }: SleepingCatProps) {
  return (
    <Link 
      href="/contact-us"
      className={cn(
        "relative flex items-center justify-center cursor-pointer group transition-transform hover:scale-110",
        className
      )}
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
        
        {/* Sleeping Eyes (Closed) */}
        <path
          d="M28 32 Q32 35 36 32"
          stroke="#64748B"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M44 32 Q48 35 52 32"
          stroke="#64748B"
          strokeWidth="1"
          strokeLinecap="round"
        />
        
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

        {/* Zzz floating */}
        <motion.g
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [-10, -25],
            x: [0, 5]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
        >
          <text x="60" y="15" fontSize="8" fill="#94A3B8" fontWeight="bold">Z</text>
        </motion.g>
        <motion.g
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [-15, -35],
            x: [0, -5]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        >
          <text x="70" y="10" fontSize="10" fill="#94A3B8" fontWeight="bold">Z</text>
        </motion.g>
      </svg>
      
      <div className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-slate-400 border border-white/5">
        Sleeping... Click to wake!
      </div>
    </Link>
  );
}
