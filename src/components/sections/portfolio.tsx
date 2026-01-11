import React from 'react';
import Image from 'next/image';

const portfolioItems = [
  {
    title: "Shree Metal Industries",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/work-1920x1920-12.jpg",
    link: "https://www.rkinfotechindia.com/our-work/"
  },
  {
    title: "Virtual Chokidar",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Virtual-Chokidar-1920x1920-13.png",
    link: "https://www.rkinfotechindia.com/our-work/"
  },
  {
    title: "Spice Nest",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/SpiceNest--1920x1920-14.png",
    link: "https://www.rkinfotechindia.com/our-work/"
  },
  {
    title: "Cinix Autoparts",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/CinixAutoparts-1920x1920-15.png",
    link: "https://www.rkinfotechindia.com/our-work/"
  },
  {
    title: "Contact Electrotech Pvt. Ltd.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Contact-Electrotech-Pvt_-Ltd--1920x1920-16.png",
    link: "https://www.rkinfotechindia.com/our-work/"
  },
  {
    title: "UV Business System",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/UV-Business-System-1920x1920-17.png",
    link: "https://www.rkinfotechindia.com/our-work/"
  },
  {
    title: "Giriraj Tractors",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Giriraj-Tractors-1920x1920-18.png",
    link: "https://www.rkinfotechindia.com/our-work/"
  },
  {
    title: "Myka",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Myka1675339369-1-1-1920x1920-19.png",
    link: "https://www.rkinfotechindia.com/our-work/"
  }
];

export default function Portfolio() {
  return (
    <section className="bg-white py-[80px]">
      <div className="container px-[15px] mx-auto max-w-[1170px]">
        {/* Section Header */}
        <div className="mb-[50px]">
          <h2 className="text-[#212529] font-sans text-[36px] font-bold relative pb-[15px] mb-[20px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[60px] after:height-[3px] after:bg-gradient-to-r after:from-[#00cc8b] after:to-[#00b8d4]">
            Recent Work
          </h2>
          <p className="text-[#6c757d] font-body text-[16px] leading-[1.6]">
            Take a look at some of our most recent projects. We take pride in delivering high-quality digital solutions tailored to our clients' needs.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 overflow-hidden">
          {portfolioItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="relative group block overflow-hidden"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                <div>
                  <h3 className="text-white font-sans text-[18px] font-semibold mb-2">
                    {item.title}
                  </h3>
                  <span className="inline-block h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-300"></span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-[50px]">
          <a
            href="https://www.rkinfotechindia.com/our-work/"
            className="btn-cta grdnt-green text-white hvr-wobble-horizontal shadow-subtle hover:shadow-hover"
          >
            Browse All Work
          </a>
        </div>
      </div>
    </section>
  );
}