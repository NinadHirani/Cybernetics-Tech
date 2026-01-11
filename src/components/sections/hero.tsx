"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const textRotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const textRotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  const textTranslateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-10px", "10px"]);
  const textTranslateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-10px", "10px"]);

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
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-background hero style-wave pt-[70px]"
    >
      {/* Background SVG Shapes */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-0 right-0 z-0 pointer-events-none hidden md:block"
      >
        <svg 
          width="1000" 
          height="1000" 
          viewBox="0 0 1000 1000" 
          className="translate-x-1/4 -translate-y-1/4 opacity-40"
        >
          <defs>
            <linearGradient id="hero-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <motion.path 
            fill="url(#hero-grad-1)" 
            d="M500,100 C700,50 950,200 900,500 C850,800 600,950 400,900 C150,850 50,650 100,400 C150,150 300,150 500,100 Z"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 z-0 pointer-events-none opacity-30"
      >
        <svg 
          width="600" 
          height="600" 
          viewBox="0 0 600 600" 
          className="-translate-x-1/4 translate-y-1/4"
        >
          <defs>
            <linearGradient id="hero-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <motion.path 
            fill="url(#hero-grad-2)" 
            d="M300,50 C450,50 550,150 550,300 C550,450 450,550 300,550 C150,550 50,450 50,300 C50,150 150,50 300,50 Z"
            animate={{
              d: [
                "M300,50 C450,50 550,150 550,300 C550,450 450,550 300,550 C150,550 50,450 50,300 C50,150 150,50 300,50 Z",
                "M300,80 C400,60 520,180 520,320 C520,480 380,520 300,520 C220,520 80,420 80,280 C80,140 200,100 300,80 Z",
                "M300,50 C450,50 550,150 550,300 C550,450 450,550 300,550 C150,550 50,450 50,300 C50,150 150,50 300,50 Z"
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      {/* Floating Clouds Asset */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full"
        >
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/clouds-1-27.png" 
            alt="cloud decoration" 
            width={1200}
            height={400}
            className="absolute top-1/4 left-0 invert opacity-50"
          />
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-[15px]">
        <div className="flex flex-wrap items-center">
          <motion.div 
            style={{ 
              rotateX: textRotateX, 
              rotateY: textRotateY,
              x: textTranslateX,
              y: textTranslateY,
              transformStyle: "preserve-3d"
            }}
            className="w-full lg:w-7/12 text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ transform: "translateZ(50px)" }}
              className="text-[32px] md:text-[48px] font-bold font-display text-white mb-[20px] leading-[1.2]"
            >
              Best <span className="text-primary">Cybernetics Technology</span> Company <br className="hidden md:block" /> in Rajkot, Gujarat
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transform: "translateZ(30px)" }}
              className="text-[20px] md:text-[24px] font-medium font-body text-slate-300 mb-[35px] leading-[1.6]"
            >
              Reliable & Affordable IT Solutions For Your Business Growth. We provide end-to-end technology solutions tailored to your needs.
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ transform: "translateZ(20px)" }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/services" 
                className="inline-block px-[30px] py-[14px] rounded-[8px] text-[14px] font-bold font-display text-white grdnt-green hvr-wobble-horizontal shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                OUR SERVICES
              </Link>
              <Link 
                href="/who-we-are" 
                className="inline-block px-[30px] py-[14px] rounded-[8px] text-[14px] font-bold font-display text-white bg-white/5 border border-white/10 hover:bg-white/10 shadow-sm transition-all duration-300 hover:scale-105 active:scale-95"
              >
                WHO WE ARE
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Bottom Decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(111%+1.3px)] h-[100px] fill-background"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.44,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".05"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.51,21.43-10.44,39.54-24.81,50.7-44.1V0Z" opacity=".1"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero.style-wave .container {
          max-width: 1170px;
        }
        .hvr-wobble-horizontal:hover {
          animation: wobble-horizontal 0.8s ease-in-out;
        }
        @keyframes wobble-horizontal {
          16.65% { transform: translateX(8px); }
          33.3% { transform: translateX(-6px); }
          49.95% { transform: translateX(4px); }
          66.6% { transform: translateX(-2px); }
          83.25% { transform: translateX(1px); }
          100% { transform: translateX(0); }
        }
        .grdnt-green {
          background: linear-gradient(to right, #1d4ed8, #3b82f6);
        }
      `}} />
    </section>
  );
};

export default Hero;

