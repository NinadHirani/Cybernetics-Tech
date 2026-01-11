"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
        const distance = Math.sqrt(dx * dx + dy * dy);
        
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
    <div ref={containerRef} className="relative w-32 h-32 flex items-center justify-center drop-shadow-xl z-50 pointer-events-auto cursor-pointer group">
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
        <rect x="20" y="30" width="60" height="55" rx="20" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
        
        {/* Face Screen */}
        <rect x="30" y="42" width="40" height="28" rx="8" fill="#1e293b" />
        
        {/* Eyes (Tracking) */}
        <g>
          {/* Left Eye */}
          <circle cx="42" cy="56" r="6" fill="#334155" />
          <motion.circle 
            style={{ x: eyeX, y: eyeY }} 
            cx="42" 
            cy="56" 
            r="3" 
            fill="#60a5fa" 
            className="shadow-[0_0_8px_rgba(96,165,250,0.8)]"
          />
          
          {/* Right Eye */}
          <circle cx="58" cy="56" r="6" fill="#334155" />
          <motion.circle 
            style={{ x: eyeX, y: eyeY }} 
            cx="58" 
            cy="56" 
            r="3" 
            fill="#60a5fa" 
          />
        </g>
        
        {/* Cheeks */}
        <circle cx="36" cy="64" r="2" fill="#fecaca" opacity="0.6" />
        <circle cx="64" cy="64" r="2" fill="#fecaca" opacity="0.6" />
        
        {/* Antenna */}
        <line x1="50" y1="15" x2="50" y2="30" stroke="#94a3b8" strokeWidth="2" />
        <motion.circle 
          cx="50" 
          cy="15" 
          r="4" 
          fill="#f87171" 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Whiskers */}
        <line x1="22" y1="58" x2="12" y2="56" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
        <line x1="22" y1="62" x2="12" y2="64" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
        <line x1="78" y1="58" x2="88" y2="56" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
        <line x1="78" y1="62" x2="88" y2="64" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
      </svg>
      
      {/* Hover tooltip or just decoration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        className="absolute -top-10 bg-white px-3 py-1 rounded-full text-xs font-medium text-slate-600 border border-slate-100 shadow-sm"
      >
        Meow! 🤖
      </motion.div>
    </div>
  );
}
