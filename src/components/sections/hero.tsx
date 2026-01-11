import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center"
      style={{
        background: 'linear-gradient(90deg, #00cc8b 0%, #00b8d4 100%)'
      }}
    >
      {/* Animated Floating Shapes - Top Left Group */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Large Wave Shape Bottom */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <svg 
            viewBox="0 0 1440 320" 
            className="w-full h-auto translate-y-[2%] scale-[1.05]"
            preserveAspectRatio="none"
          >
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,208C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Floating Bubble Shapes */}
        <div className="absolute top-[15%] left-[10%] w-32 h-32 rounded-full bg-white/10 animate-pulse transition-transform duration-[5000ms]" />
        <div className="absolute top-[40%] right-[15%] w-24 h-24 rounded-full bg-white/10 animate-bounce transition-transform duration-[8000ms]" />
        <div className="absolute bottom-[30%] left-[20%] w-16 h-16 rounded-full bg-white/5 animate-pulse" />
        
        {/* Clouds Assets */}
        <div className="absolute top-[10%] left-[-5%] opacity-40 animate-pulse duration-[10000ms]">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/clouds-1-27.png" 
            alt="cloud" 
            className="w-[300px]"
          />
        </div>
        <div className="absolute top-[25%] right-[5%] opacity-30 scale-x-[-1] animate-pulse duration-[12000ms]">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/clouds-1-27.png" 
            alt="cloud" 
            className="w-[250px]"
          />
        </div>
      </div>

      <div className="container relative z-20 text-center px-4 -mt-20">
        <h1 
          className="font-sans font-bold text-white mb-6 animate-fade-in-up" 
          style={{ 
            fontSize: '48px', 
            lineHeight: '1.2',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          Best IT Company in Rajkot, Gujarat | IT Service Provider | RK Infotech
        </h1>
        
        <p className="font-body text-white/90 text-[18px] max-w-2xl mx-auto mb-10">
          Professional development services spanning Website, Mobile Apps, and Enterprise Software Solutions tailored for your business growth.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#who-we-are" 
            className="btn-cta bg-white text-navy px-[40px] py-[15px] border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 shadow-lg"
            style={{ fontWeight: 600, borderRadius: '50px' }}
          >
            Who We Are
          </a>
          <a 
            href="#contact-us" 
            className="btn-cta bg-transparent text-white px-[40px] py-[15px] border-2 border-white hover:bg-white hover:text-navy transition-all duration-300 hvr-wobble-horizontal shadow-lg"
            style={{ fontWeight: 600, borderRadius: '50px' }}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Decorative SVG Circles Pattern Overlay */}
      <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 400 400">
           <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="2" fill="none" />
           <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="1" fill="none" strokeDasharray="10 10" />
           <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      {/* CSS Animations (Inline for specificity) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}} />
    </section>
  );
};

export default HeroSection;