import React from 'react';
import Image from 'next/image';
import { newsData, type NewsItem } from '@/data/news';

/**
 * BlogNews Section Component
 * 
 * Featured in the website as the "Latest News/Offers" section.
 * Featuring cards for Expo participations and milestones.
 * Uses the "grdnt-green" accent and a subtle background image.
 */

export const NewsCard = ({ item }: { item: NewsItem }) => (
    <div 
      id={`news-${item.id}`}
      className="group bg-slate-900 rounded-[8px] overflow-hidden transition-transform duration-300 hover:-translate-y-2 border border-white/5 shadow-2xl"
    >
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        {/* Date Badge */}
        <div className="absolute top-[15px] left-[15px] w-[55px] h-[60px] grdnt-green flex flex-col items-center justify-center text-white rounded-[4px] shadow-md z-10">
          <span className="text-[18px] font-bold leading-none">{item.date.day}</span>
          <span className="text-[12px] font-medium uppercase mt-[2px]">{item.date.month}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-[20px]">
        <h3 className="text-[18px] font-semibold text-white font-display leading-[1.4] mb-[15px] line-clamp-2 h-[50px]">
          <a href={`/news#news-${item.id}`} className="hover:text-primary transition-colors">
            {item.title}
          </a>
        </h3>
        
        <a 
          href={`/news#news-${item.id}`} 
          className="inline-flex items-center text-primary font-semibold text-[14px] uppercase tracking-wider transition-all group/link hover:text-white"
        >
          Read More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-2 transition-transform group-hover/link:translate-x-2" 
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


const BlogNews = () => {
  return (
    <section 
      className="relative w-full py-[80px] bg-cover bg-center bg-no-repeat overflow-hidden border-t border-white/5"
      style={{ 
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.96)), url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/background-img-10-26.jpg')`
      }}
    >
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        {/* Section Header */}
        <div className="text-center mb-[50px]">
          <h2 className="text-[36px] font-semibold text-white font-display leading-[1.3] mb-[15px]">
            Latest News & Offers
          </h2>
          <div className="flex justify-center">
            <div className="w-[80px] h-[3px] grdnt-green rounded-full"></div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {newsData.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-[60px] text-center">
          <a 
            href="/news" 
            className="inline-block py-[14px] px-[35px] rounded-full grdnt-green text-white font-display font-bold text-[14px] uppercase tracking-wider hvr-wobble-horizontal shadow-lg shadow-primary/20"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogNews;