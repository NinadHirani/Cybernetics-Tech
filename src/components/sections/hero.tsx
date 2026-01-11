"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 25]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const gridX = useTransform(mouseXSpring, [-0.5, 0.5], ["-20px", "20px"]);
  const gridY = useTransform(mouseYSpring, [-0.5, 0.5], ["-20px", "20px"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-background pt-[70px] cursor-crosshair"
    >
      {/* Professional Tech Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Dot Grid */}
        <motion.div 
          style={{ x: gridX, y: gridY }}
          className="absolute inset-[-10%] opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
        >
          <div className="w-full h-full" style={{ 
            backgroundImage: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 1px, transparent 1px)", 
            backgroundSize: "40px 40px" 
          }} />
        </motion.div>

        {/* Subtle Perspective Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Floating Gradient Orbs (Professional) */}
        <motion.div 
          style={{ y: y1, rotate }}
          className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute bottom-[10%] -left-[5%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-[15px] max-w-[1170px]">
        <div className="flex flex-wrap items-center">
          <motion.div 
            className="w-full lg:w-8/12 text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[12px] font-bold tracking-widest uppercase mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Cybernetics & IT Solutions
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[40px] md:text-[64px] font-bold font-display text-white mb-6 leading-[1.1] tracking-tight"
            >
              Driving <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Digital Innovation</span> <br className="hidden md:block" /> with Cybernetics
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[18px] md:text-[22px] font-medium font-body text-slate-400 mb-10 leading-[1.6] max-w-2xl"
            >
              Empowering businesses with enterprise-grade IT solutions and cutting-edge cybernetics. Reliability, scalability, and excellence delivered.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-5"
            >
              <Link 
                href="/services" 
                className="relative overflow-hidden px-8 py-4 rounded-lg text-sm font-bold font-display text-white bg-primary hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] group"
              >
                <span className="relative z-10">EXPLORE SERVICES</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
              <Link 
                href="/who-we-are" 
                className="px-8 py-4 rounded-lg text-sm font-bold font-display text-white border border-white/20 hover:bg-white/5 transition-all duration-300 hover:scale-105"
              >
                WHO WE ARE
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modern Perspective Grid Floor (Optional, very subtle) */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-background to-transparent pointer-events-none z-0" />
    </section>
  );
};

export default Hero;
