"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ 

  title, 
  description, 
  icon, 
  bgImage, 
  link 
}: { 
  title: string; 
  description: string; 
  icon: string; 
  bgImage: string; 
  link: string;
}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-card border border-white/5 shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Background Image Wrapper */}
      <div className="relative h-[250px] w-full overflow-hidden">
        <Image 
          src={bgImage} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/40" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 -mt-12 px-6 pb-8 text-center">
        {/* Icon Circle */}
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-900 border border-white/10 shadow-xl transition-transform duration-300 group-hover:scale-110">
          <Image 
            src={icon} 
            alt={`${title} icon`} 
            width={45} 
            height={45} 
            className="h-auto w-11 object-contain invert"
          />
        </div>

        {/* Text Styling */}
        <h3 className="mb-3 font-display text-[22px] font-semibold leading-[1.4] text-white transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        <p className="mb-6 font-body text-base leading-[1.6] text-slate-400">
          {description}
        </p>

        {/* Read More Link */}
        <a 
          href={link} 
          className="inline-flex items-center font-display text-sm font-bold uppercase tracking-wider text-primary hover:text-white transition-colors"
        >
          Read More
          <svg 
            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const ServicesSection = () => {
    const services = [
      {
        title: "Web Development",
        description: "We provide high-quality and cost-effective website development services for your business requirements.",
        icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/website-development-1-7.png",
        bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/website_development-2.jpg",
        link: "/#services"
      },
      {
        title: "App Development",
        description: "Native and Hybrid mobile applications with seamless user experience and high performance for iOS and Android.",
        icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Application_Development-8.png",
        bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/application_development-3.jpg",
        link: "/#services"
      },
      {
        title: "Graphics Design",
        description: "Creative and meaningful visual concepts to communicate ideas that inspire, inform, and captivate consumers.",
        icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/graphics-design-1-9.png",
        bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/graphics_design-4.jpg",
        link: "/#services"
      },
      {
        title: "SEO Service",
        description: "Improving your website visibility and search engine rankings to drive more organic traffic and growth.",
        icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/seo_service-10.png",
        bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/seo_services-5.jpg",
        link: "/#services"
      },
      {
        title: "Software Development",
        description: "Custom software solutions designed to automate business processes and increase organizational efficiency.",
        icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Software_Development-11.png",
        bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/software_development-6.jpg",
        link: "/#services"
      }
    ];

    return (
      <section id="services" className="bg-[#0f172a] py-20 border-t border-white/5">
        <div className="container px-[15px] mx-auto max-w-[1170px]">
          {/* Section Header */}
          <div className="mb-14 text-center">
            <h2 className="mb-4 font-display text-[36px] font-semibold leading-[1.3] text-white">
              Our <span className="text-primary">Services</span>
            </h2>
            <div className="mx-auto h-1 w-20 bg-primary rounded-full" />
            <p className="mx-auto mt-6 max-w-2xl font-body text-base text-slate-400">
              We provide a wide range of creative and technical services to help your business grow and succeed in the digital world.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                bgImage={service.bgImage}
                link={service.link}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-16 text-center">
            <Link 
              href="/#services" 
              className="hvr-wobble-horizontal inline-block rounded-[8px] px-8 py-3 font-display text-sm font-bold uppercase tracking-wider text-white grdnt-green transition-all shadow-lg shadow-primary/20"
            >
              Explore All Services
            </Link>
          </div>
        </div>

      <style jsx global>{`
        .grdnt-green {
          background: linear-gradient(to right, #1d4ed8, #3b82f6);
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;