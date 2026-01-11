"use client";

import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Virtual Chokidar',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Virtual-Chokidar-1920x1920-13.png',
    link: 'https://www.rkinfotechindia.com/our-work/'
  },
  {
    title: 'SpiceNest',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/SpiceNest--1920x1920-14.png',
    link: 'https://www.rkinfotechindia.com/our-work/'
  },
  {
    title: 'Cinix Autoparts',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/CinixAutoparts-1920x1920-15.png',
    link: 'https://www.rkinfotechindia.com/our-work/'
  },
  {
    title: 'ElectroTech Pvt Ltd',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Contact-Electrotech-Pvt_-Ltd--1920x1920-16.png',
    link: 'https://www.rkinfotechindia.com/our-work/'
  },
  {
    title: 'UV Business System',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/UV-Business-System-1920x1920-17.png',
    link: 'https://www.rkinfotechindia.com/our-work/'
  },
  {
    title: 'Giriraj Tractors',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Giriraj-Tractors-1920x1920-18.png',
    link: 'https://www.rkinfotechindia.com/our-work/'
  },
  {
    title: 'Myka Software',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Myka1675339369-1-1-1920x1920-19.png',
    link: 'https://www.rkinfotechindia.com/our-work/'
  },
  {
    title: 'Khodaldham KDVS',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Khodaldham-KDVS-1-1920x1920-20.png',
    link: 'https://www.rkinfotechindia.com/our-work/'
  },
  {
    title: 'Shree Metal Industries',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/work-1920x1920-12.jpg',
    link: 'https://www.rkinfotechindia.com/our-work/'
  }
];

const PortfolioSection = () => {
  return (
    <section id="our-work" className="bg-[#f9f9f9] py-[80px]">
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        {/* Section Header */}
        <div className="text-center mb-[50px]">
          <h2 className="text-[36px] font-semibold text-[#333] mb-[15px] leading-[1.3] font-display">
            Our Work
          </h2>
          <div className="w-[60px] h-[3px] bg-[#28a745] mx-auto mb-[15px]"></div>
          <p className="text-[#737373] text-[16px] leading-[1.6] font-body max-w-[700px] mx-auto">
            We have completed hundreds of projects across various industries, delivering high-quality IT solutions that drive results.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-[8px] card-shadow bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              
              {/* Overlay with localized title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-[30px]">
                <h3 className="text-white text-[22px] font-semibold font-display mb-[10px] transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  {project.title}
                </h3>
                <a 
                  href={project.link} 
                  className="inline-block text-[14px] font-bold text-white uppercase tracking-wider font-display border-b border-white pb-1 w-fit transform translate-y-4 transition-transform duration-300 delay-75 group-hover:translate-y-0"
                >
                  View Details
                </a>
              </div>

              {/* Static Mobile/No-Hover Title */}
              <div className="p-[20px] md:hidden">
                <h3 className="text-[#333] text-[18px] font-semibold font-display">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-[60px]">
          <a 
            href="https://www.rkinfotechindia.com/our-work/" 
            className="inline-block px-[40px] py-[15px] btn-sm grdnt-green rounded-[8px] text-white font-bold text-[14px] uppercase tracking-wide hvr-wobble-horizontal shadow-lg"
          >
            View All Projects
          </a>
        </div>
      </div>

      <style jsx global>{`
        .grdnt-green {
          background: linear-gradient(to right, #00b09b, #96c93d);
        }
        .card-shadow {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
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
      `}</style>
    </section>
  );
};

export default PortfolioSection;
