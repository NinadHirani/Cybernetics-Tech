import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Website Development',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/website_development-2.jpg',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/website-development-1-7.png',
    link: 'https://www.rkinfotechindia.com/services/web-development-company/',
  },
  {
    title: 'Application Development',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/application_development-3.jpg',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Application_Development-8.png',
    link: 'https://www.rkinfotechindia.com/services/mobile-app-development/',
  },
  {
    title: 'Graphics Design',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/graphics_design-4.jpg',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/graphics-design-1-9.png',
    link: 'https://www.rkinfotechindia.com/services/graphic-design-services/',
  },
  {
    title: 'SEO Services',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/seo_services-5.jpg',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/seo_service-10.png',
    link: 'https://www.rkinfotechindia.com/services/best-seo-services-in-india/',
  },
  {
    title: 'Software Development',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/software_development-6.jpg',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Software_Development-11.png',
    link: 'https://www.rkinfotechindia.com/services/software-development-company/',
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-[80px]">
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        <div className="text-center mb-[50px]">
          <h2 className="text-[36px] font-bold text-[#212529] font-sans pb-[15px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-[#00cc8b] after:to-[#00b8d4] after:-translate-x-1/2">
            Our Services
          </h2>
        </div>

        <div className="flex flex-wrap -mx-[10px] justify-center">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-[10px] mb-[20px]"
            >
              <a 
                href={service.link}
                className="group relative block overflow-hidden rounded-[5px] text-center bg-white transition-all duration-300 hover:shadow-hover"
                style={{ height: '320px' }}
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-[#00cc8b]/70 transition-colors duration-300"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative h-full flex flex-col items-center justify-center p-[20px] z-10">
                  <div className="mb-[20px] transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width={60}
                      height={60}
                    />
                  </div>
                  <h3 className="text-[20px] font-semibold text-white leading-tight font-sans">
                    {service.title}
                  </h3>
                  
                  {/* Action Link (Optional hidden or visible on hover) */}
                  <div className="mt-[20px] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-white text-[12px] uppercase font-bold tracking-wider inline-flex items-center gap-1">
                      Read More <span className="text-lg">→</span>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;