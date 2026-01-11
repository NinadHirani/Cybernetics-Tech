import React from 'react';
import Image from 'next/image';

/**
 * Announcements component featuring promotional cards for anniversaries 
 * and event participation (GPBS Expo 2024).
 * 
 * Based on the design instructions and visual assets provided.
 */

const Announcements = () => {
  const newsItems = [
    {
      id: 1,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Delight-ERP-GPBS-Expo-2024-1920x1920-22.jpg",
      alt: "Delight ERP GPBS Expo 2024",
      link: "https://www.rkinfotechindia.com/products/erp-software/"
    },
    {
      id: 2,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Expo_card-1-23.jpg",
      alt: "Expo Card",
      link: "https://www.rkinfotechindia.com/ready-solutions/"
    },
    {
      id: 3,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/RK-Website-Development-offer-1920x1920-24.png",
      alt: "RK Website Development Offer",
      link: "https://www.rkinfotechindia.com/services/web-development-company/"
    },
    {
      id: 4,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/rkinfotech-7th-anniversary-25.png",
      alt: "RK Infotech 7th Anniversary",
      link: "https://www.rkinfotechindia.com/who-we-are/"
    }
  ];

  return (
    <section className="bg-[#ffffff] py-[80px]">
      <div className="container px-[15px] mx-auto max-w-[1170px]">
        {/* Section Heading */}
        <div className="mb-[50px]">
          <h2 className="font-sans text-[36px] font-bold text-[#212529] mb-[15px] relative inline-block pb-[15px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[60px] after:height-[3px] after:bg-gradient-to-r after:from-[#00cc8b] after:to-[#00b8d4]">
            Announcements & News
          </h2>
          <p className="mt-4 text-[#6c757d] font-body text-[16px] max-w-2xl">
            Stay updated with our latest event participations, company milestones, and exclusive service offers.
          </p>
        </div>

        {/* Announcements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:-translate-y-1"
            >
              <a 
                href={item.link} 
                className="block relative aspect-square w-full h-full"
                aria-label={item.alt}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Decorative border or highlight if needed in future development */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#00cc8b] to-[#00b8d4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;