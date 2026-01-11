"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
      title: 'Virtual Chokidar',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Virtual-Chokidar-1920x1920-13.png',
        link: '/our-work'
      },
      {
        title: 'SpiceNest',
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/SpiceNest--1920x1920-14.png',
        link: '/our-work'
      },
      {
        title: 'Cinix Autoparts',
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/CinixAutoparts-1920x1920-15.png',
        link: '/our-work'
      },
      {
        title: 'ElectroTech Pvt Ltd',
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Contact-Electrotech-Pvt_-Ltd--1920x1920-16.png',
        link: '/our-work'
      },
      {
        title: 'UV Business System',
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/UV-Business-System-1920x1920-17.png',
        link: '/our-work'
      },
      {
        title: 'Giriraj Tractors',
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Giriraj-Tractors-1920x1920-18.png',
        link: '/our-work'
      },
      {
        title: 'Myka Software',
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Myka1675339369-1-1-1920x1920-19.png',
        link: '/our-work'
      },
      {
        title: 'Khodaldham KDVS',
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Khodaldham-KDVS-1-1920x1920-20.png',
        link: '/our-work'
      },
      {
        title: 'Shree Metal Industries',
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/work-1920x1920-12.jpg',
        link: '/our-work'

    }
  ];

  const PortfolioSection = () => {
    return (
      <section id="our-work" className="bg-[#0f172a] py-[80px] border-t border-white/5">
        <div className="container mx-auto px-[15px] max-w-[1170px]">
          {/* Section Header */}
          <div className="text-center mb-[50px]">
            <h2 className="text-[36px] font-semibold text-white mb-[15px] leading-[1.3] font-display">
              Our <span className="text-primary">Work</span>
            </h2>
            <div className="w-[60px] h-[3px] bg-primary mx-auto mb-[15px]"></div>
            <p className="text-slate-400 text-[16px] leading-[1.6] font-body max-w-[700px] mx-auto">
              We have completed hundreds of projects across various industries, delivering high-quality IT solutions that drive results.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-[8px] border border-white/5 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-[30px]">
                  <h3 className="text-white text-[22px] font-semibold font-display mb-[10px] transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    {project.title}
                  </h3>
                  <Link 
                    href={project.link} 
                    className="inline-block text-[14px] font-bold text-primary hover:text-white uppercase tracking-wider font-display border-b border-primary hover:border-white pb-1 w-fit transform translate-y-4 transition-transform duration-300 delay-75 group-hover:translate-y-0"
                  >
                    View Details
                  </Link>
                </div>

                {/* Static Mobile/No-Hover Title */}
                <div className="p-[20px] md:hidden">
                  <h3 className="text-white text-[18px] font-semibold font-display">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-[60px]">
            <Link 
              href="/our-work" 
              className="inline-block px-[40px] py-[15px] grdnt-green rounded-[8px] text-white font-bold text-[14px] uppercase tracking-wide hvr-wobble-horizontal shadow-lg shadow-primary/20"
            >
              View All Projects
            </Link>
          </div>
        </div>

      <style jsx global>{`
        .grdnt-green {
          background: linear-gradient(to right, #1d4ed8, #3b82f6);
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
