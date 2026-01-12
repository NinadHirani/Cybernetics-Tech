"use client";

import React from 'react';
import { Package, Clock, Construction } from 'lucide-react';

const ProductsSection = () => {
  return (
    <section id="our-products" className="bg-[#0f172a] py-[80px] border-t border-white/5 min-h-[60vh] flex items-center">
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        {/* Section Header */}
        <div className="text-center mb-[50px]">
          <h2 className="text-[36px] font-semibold text-white mb-[15px] leading-[1.3] font-display">
            Our <span className="text-primary">Products</span>
          </h2>
          <div className="w-[60px] h-[3px] bg-primary mx-auto mb-[15px]"></div>
          <p className="text-slate-400 text-[16px] leading-[1.6] font-body max-w-[700px] mx-auto">
            Innovative software solutions designed to streamline your business operations and drive growth.
          </p>
        </div>

        {/* Projects Status Card */}
        <div className="max-w-[800px] mx-auto bg-slate-900/50 rounded-2xl border border-white/5 p-8 md:p-12 text-center shadow-2xl">
          <div className="flex justify-center gap-6 mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Package size={32} />
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display">
            Project Status Update
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/5 flex flex-col items-center">
              <div className="text-primary mb-3">
                <Clock size={24} />
              </div>
              <span className="text-3xl font-bold text-white mb-1">0</span>
              <p className="text-slate-400 font-medium">Projects Completed</p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/5 flex flex-col items-center">
              <div className="text-primary mb-3">
                <Construction size={24} />
              </div>
              <span className="text-3xl font-bold text-white mb-1">3</span>
              <p className="text-slate-400 font-medium">Projects Ongoing</p>
            </div>
          </div>

          <p className="mt-10 text-slate-400 text-lg leading-relaxed italic">
            "Currently, we have no completed projects for our products, but 3 exciting projects are actively under development and will be launched soon."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
