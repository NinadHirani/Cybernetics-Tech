import React from 'react';
import Image from 'next/image';

/**
 * UpdatesSection Component
 * 
 * Clones the news/updates section of the RK Infotech website, featuring promotional 
 * banners and event cards like the GPBS Expo 2024 and 7th Anniversary.
 * 
 * Theme: light
 */

const UpdatesSection = () => {
  // Asset data from the provided list
  const updates = [
    {
      id: 1,
      title: "Delight ERP at GPBS Expo 2024",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Delight-ERP-GPBS-Expo-2024-1920x1920-22.jpg",
      link: "#",
      date: "2024"
    },
    {
      id: 2,
      title: "GPBS Expo Invitation",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Expo_card-1-23.jpg",
      link: "#",
      date: "2024"
    },
    {
      id: 3,
      title: "Special Website Development Offer",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/RK-Website-Development-offer-1920x1920-24.png",
      link: "#",
      date: "2024"
    },
    {
      id: 4,
      title: "RK Infotech 7th Anniversary Celebrations",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/rkinfotech-7th-anniversary-25.png",
      link: "#",
      date: "2024"
    }
  ];

  return (
    <section className="section-padding bg-[#F8F9FA] overflow-hidden" id="updates">
      <div className="container px-[15px] mx-auto max-w-[1170px]">
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[36px] font-semibold font-display text-[#333333] mb-[15px] leading-[1.3]">
            Our Latest <span className="text-[#23b24b]">Updates</span>
          </h2>
          <div className="w-[80px] h-[3px] bg-gradient-brand mx-auto mb-[20px]"></div>
          <p className="max-w-[700px] mx-auto text-[#666666] font-body text-[16px] leading-[1.6]">
            Stay updated with our latest events, exhibitions, and special anniversary offers. We continuously strive to innovate and share our journey with you.
          </p>
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {updates.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-[12px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-[10px] group"
            >
              <div className="relative aspect-square overflow-hidden cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-[20px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[12px] font-semibold text-[#23b24b] uppercase tracking-wider">Event</span>
                  <span className="text-[#eeeeee] text-[12px]">|</span>
                  <span className="text-[12px] text-[#666666]">{item.date}</span>
                </div>
                <h3 className="text-[18px] font-semibold font-display text-[#333333] mb-[15px] leading-[1.4] h-[50px] overflow-hidden">
                  <a href={item.link} className="hover:text-[#23b24b] transition-colors">
                    {item.title}
                  </a>
                </h3>
                <a 
                  href={item.link} 
                  className="inline-flex items-center text-[14px] font-semibold text-[#23b24b] hover:text-[#0162a8] transition-colors"
                >
                  READ MORE
                  <svg 
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-[60px] text-center">
          <a href="#" className="btn-gradient px-[40px] text-[15px] font-semibold uppercase tracking-wider hvr-wobble-horizontal inline-flex items-center justify-center min-h-[50px]">
            Explore All News
          </a>
        </div>
      </div>

      <style jsx global>{`
        @keyframes wobble-horizontal {
          16.65% { transform: translateX(8px); }
          33.3% { transform: translateX(-6px); }
          49.95% { transform: translateX(4px); }
          66.6% { transform: translateX(-2px); }
          83.25% { transform: translateX(1px); }
          100% { transform: translateX(0); }
        }
        .hvr-wobble-horizontal:hover {
          animation: wobble-horizontal 0.8s ease-in-out;
        }
        .bg-gradient-brand {
          background: linear-gradient(to right, #23b24b, #0162a8);
        }
        .btn-gradient {
          background: linear-gradient(to right, #23b24b, #0162a8);
          color: white;
          border-radius: 30px;
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default UpdatesSection;