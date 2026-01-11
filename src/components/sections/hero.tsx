"use client";

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-white hero style-wave pt-[70px]"
    >
      {/* Background SVG Shapes */}
      <div className="absolute top-0 right-0 z-0 pointer-events-none hidden md:block">
        <svg 
          width="1000" 
          height="1000" 
          viewBox="0 0 1000 1000" 
          className="translate-x-1/4 -translate-y-1/4 opacity-80"
        >
          <defs>
            <linearGradient id="hero-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00b09b" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#96c93d" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path 
            fill="url(#hero-grad-1)" 
            d="M500,100 C700,50 950,200 900,500 C850,800 600,950 400,900 C150,850 50,650 100,400 C150,150 300,150 500,100 Z"
          >
            <animateTransform 
              attributeName="transform" 
              type="rotate" 
              from="0 500 500" 
              to="360 500 500" 
              dur="60s" 
              repeatCount="indefinite" 
            />
          </path>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 z-0 pointer-events-none opacity-60">
        <svg 
          width="600" 
          height="600" 
          viewBox="0 0 600 600" 
          className="-translate-x-1/4 translate-y-1/4"
        >
          <defs>
            <linearGradient id="hero-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#28a745" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#00b09b" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path 
            fill="url(#hero-grad-2)" 
            d="M300,50 C450,50 550,150 550,300 C550,450 450,550 300,550 C150,550 50,450 50,300 C50,150 150,50 300,50 Z"
          >
            <animate 
              attributeName="d" 
              dur="20s" 
              repeatCount="indefinite"
              values="
                M300,50 C450,50 550,150 550,300 C550,450 450,550 300,550 C150,550 50,450 50,300 C50,150 150,50 300,50 Z;
                M300,80 C400,60 520,180 520,320 C520,480 380,520 300,520 C220,520 80,420 80,280 C80,140 200,100 300,80 Z;
                M300,50 C450,50 550,150 550,300 C550,450 450,550 300,550 C150,550 50,450 50,300 C50,150 150,50 300,50 Z
              "
            />
          </path>
        </svg>
      </div>

      {/* Floating Clouds Asset */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden">
        <div className="absolute w-full h-full animate-[cloud-drift_40s_linear_infinite]">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/clouds-1-27.png" 
            alt="cloud decoration" 
            width={1200}
            height={400}
            className="absolute top-1/4 left-0"
          />
        </div>
        <div className="absolute w-full h-full animate-[cloud-drift_60s_linear_infinite_reverse]">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/clouds-1-27.png" 
            alt="cloud decoration" 
            width={1200}
            height={400}
            className="absolute bottom-1/4 right-0 rotate-180"
          />
        </div>
      </div>

      {/* Wave Bottom Decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(111%+1.3px)] h-[100px] fill-white"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.44,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.51,21.43-10.44,39.54-24.81,50.7-44.1V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-[15px]">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-7/12 text-left">
            <h1 className="text-[32px] md:text-[48px] font-bold font-display text-[#333333] mb-[20px] leading-[1.2]">
              Best <span className="text-[#28a745]">IT Company</span> in <br className="hidden md:block" /> Rajkot, Gujarat
            </h1>
            <h2 className="text-[20px] md:text-[24px] font-medium font-body text-[#333333]/80 mb-[35px] leading-[1.6]">
              Reliable & Affordable IT Solutions For Your Business Growth. We provide end-to-end technology solutions tailored to your needs.
            </h2>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.rkinfotechindia.com/our-services/" 
                className="inline-block px-[30px] py-[14px] rounded-[8px] text-[14px] font-bold font-display text-white grdnt-green hvr-wobble-horizontal shadow-md transition-all duration-300"
              >
                OUR SERVICES
              </a>
              <a 
                href="https://www.rkinfotechindia.com/who-we-are/" 
                className="inline-block px-[30px] py-[14px] rounded-[8px] text-[14px] font-bold font-display text-[#333333] bg-white border border-[#eeeeee] hover:bg-gray-50 shadow-sm transition-all duration-300"
              >
                WHO WE ARE
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-6 opacity-70">
              <div className="text-center border-r border-[#eeeeee] pr-6">
                <p className="text-[28px] font-bold text-[#28a745] font-display">1500+</p>
                <p className="text-[12px] uppercase tracking-wider font-medium font-body">Projects Done</p>
              </div>
              <div className="text-center border-r border-[#eeeeee] pr-6">
                <p className="text-[28px] font-bold text-[#28a745] font-display">12+</p>
                <p className="text-[12px] uppercase tracking-wider font-medium font-body">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-[28px] font-bold text-[#28a745] font-display">950+</p>
                <p className="text-[12px] uppercase tracking-wider font-medium font-body">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes cloud-drift {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
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
          background: linear-gradient(to right, #00b09b, #96c93d);
        }
      `}} />
    </section>
  );
};

export default Hero;
