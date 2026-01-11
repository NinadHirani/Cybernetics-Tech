"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

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
    <motion.div 
      whileTap={{ scale: 0.95 }}
      className="group relative overflow-hidden rounded-xl bg-slate-900/50 backdrop-blur-sm border border-white/10 shadow-2xl transition-all duration-300 hover:border-primary/50 cursor-pointer"
    >
      <div>
        {/* Background Image Wrapper */}
        <div className="relative h-[220px] w-full overflow-hidden">
          <Image 
            src={bgImage} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
          />
          {/* Refined Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>
  
        {/* Content Area */}
        <div className="relative z-10 -mt-10 px-6 pb-8 text-center">
          {/* Professional Icon Container */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800/80 backdrop-blur-md border border-white/10 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-primary/20">
            <div className="relative w-10 h-10">
              <Image 
                src={icon} 
                alt={`${title} icon`} 
                fill
                className="object-contain invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
  
          {/* Text Styling */}
          <h3 className="mb-3 font-display text-[20px] font-bold leading-[1.4] text-white transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>
          <p className="mb-6 font-body text-sm leading-[1.6] text-slate-400 line-clamp-2">
            {description}
          </p>
  
          {/* Clean Read More Link */}
          <Link 
            href={link} 
            className="inline-flex items-center font-display text-[12px] font-bold uppercase tracking-widest text-primary hover:text-white transition-all group/link"
          >
            Explore Solution
            <svg 
              className="ml-2 h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1.5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
    const services = [
        {
          title: "Web Development",
          description: "High-performance enterprise web applications built with modern frameworks for scale and reliability.",
          icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/website-development-1-7.png",
          bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/website_development-2.jpg",
          link: "/services/web-development"
        },
        {
          title: "App Development",
          description: "Native and cross-platform mobile experiences that bridge the gap between user needs and technology.",
          icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Application_Development-8.png",
          bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/application_development-3.jpg",
          link: "/services/app-development"
        },
        {
          title: "Software Development",
          description: "Custom software architecture designed to optimize complex business processes and data flows.",
          icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Software_Development-11.png",
          bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/software_development-6.jpg",
          link: "/services/software-development"
        }
    ];

    return (
      <section id="services" className="bg-background py-24 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        <div className="container px-[15px] mx-auto max-w-[1170px] relative z-10">
          {/* Section Header */}
          <div className="mb-20 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold tracking-[0.2em] uppercase"
            >
              Capabilities
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-6 font-display text-[32px] md:text-[42px] font-bold leading-[1.2] text-white tracking-tight"
            >
              Future-Ready <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">IT Solutions</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto max-w-2xl font-body text-base text-slate-400"
            >
              We integrate cybernetic principles with advanced engineering to deliver systems that are not just functional, but intelligent and adaptive.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  bgImage={service.bgImage}
                  link={service.link}
                />
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 text-center"
          >
            <Link 
              href="/services" 
              className="group relative inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/10 px-10 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-primary/50 hover:scale-105"
            >
              <span className="relative z-10">VIEW ALL SERVICES</span>
              <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>
        </div>
      </section>
    );
};

export default ServicesSection;
