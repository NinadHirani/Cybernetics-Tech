"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function RobotCat() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Normalize mouse position relative to center of the cat (-1 to 1)
        const dx = event.clientX - centerX;
        const dy = event.clientY - centerY;
        
        // Limit movement range
        const maxDist = 300;
        const x = (dx / maxDist) * 8; // Max 8px movement
        const y = (dy / maxDist) * 8;
        
        setMousePosition({ 
          x: Math.max(-8, Math.min(8, x)), 
          y: Math.max(-8, Math.min(8, y)) 
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const eyeX = useSpring(0, { stiffness: 150, damping: 15 });
  const eyeY = useSpring(0, { stiffness: 150, damping: 15 });

  useEffect(() => {
    eyeX.set(mousePosition.x);
    eyeY.set(mousePosition.y);
  }, [mousePosition, eyeX, eyeY]);

    return (
      <Link 
        href="/contact-us"
        ref={containerRef as any} 
        className="relative w-32 h-32 flex items-center justify-center drop-shadow-xl z-50 pointer-events-auto cursor-pointer group"
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Ears */}
          <motion.path 
            d="M25 35 L15 10 L45 35 Z" 
            fill="#cbd5e1" 
            stroke="#94a3b8" 
            strokeWidth="2" 
            animate={{ rotate: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.path 
            d="M75 35 L85 10 L55 35 Z" 
            fill="#cbd5e1" 
            stroke="#94a3b8" 
            strokeWidth="2" 
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
          
          {/* Head/Body */}
          <rect x="20" y="30" width="60" height="55" rx="22" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
          
          {/* Face Screen */}
          <rect x="28" y="42" width="44" height="30" rx="10" fill="#1e293b" />
          
          {/* Eyes (Tracking) */}
          <g>
            {/* Left Eye */}
            <circle cx="42" cy="54" r="7" fill="#334155" />
            <motion.circle 
              style={{ x: eyeX, y: eyeY }} 
              cx="42" 
              cy="54" 
              r="4" 
              fill="#ef4444" 
              className="shadow-[0_0_10px_rgba(239,68,68,0.9)]"
            />
            
            {/* Right Eye */}
            <circle cx="58" cy="54" r="7" fill="#334155" />
            <motion.circle 
              style={{ x: eyeX, y: eyeY }} 
              cx="58" 
              cy="54" 
              r="4" 
              fill="#ef4444" 
              className="shadow-[0_0_10px_rgba(239,68,68,0.9)]"
            />
          </g>
  
          {/* Mouth */}
          <path d="M44 65 Q50 69 56 65" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          
          {/* Cheeks */}
          <circle cx="35" cy="62" r="3" fill="#fecaca" opacity="0.8" />
          <circle cx="65" cy="62" r="3" fill="#fecaca" opacity="0.8" />
          
          {/* Heart Decoration */}
          <motion.path
            d="M50 82 C48 80 44 80 44 83 C44 85 46 87 50 89 C54 87 56 85 56 83 C56 80 52 80 50 82"
            fill="#ef4444"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
  
          {/* Antenna */}
          <line x1="50" y1="15" x2="50" y2="30" stroke="#94a3b8" strokeWidth="2" />
          <motion.circle 
            cx="50" 
            cy="15" 
            r="4" 
            fill="#ef4444" 
            animate={{ 
              scale: [1, 1.3, 1],
              fill: ["#ef4444", "#f87171", "#ef4444"]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="shadow-[0_0_8px_rgba(239,68,68,0.8)]"
          />
          
          {/* Whiskers */}
          <line x1="22" y1="58" x2="10" y2="54" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
          <line x1="22" y1="62" x2="10" y2="66" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
          <line x1="78" y1="58" x2="90" y2="54" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
          <line x1="78" y1="62" x2="90" y2="66" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
        </svg>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute -top-10 bg-white px-3 py-1 rounded-full text-xs font-medium text-red-500 border border-red-100 shadow-sm"
        >
          Luv u! ❤️
        </motion.div>
      </Link>
    );
  }
