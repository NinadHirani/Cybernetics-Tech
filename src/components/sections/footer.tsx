import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-white pt-[50px] pb-0 font-body border-t border-gray-100">
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-10">
          
          {/* Column 1: Company Info */}
          <div className="flex flex-col">
            <div className="mb-[25px]">
              <a href="https://www.rkinfotechindia.com">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/icons/rkinfotech-regular-logo-1.png"
                  alt="Rk Infotech"
                  width={180}
                  height={50}
                  className="h-auto w-auto"
                />
              </a>
            </div>
            <p className="text-[#6c757d] text-[15px] leading-[26px] mb-[20px]">
              RK Infotech is a leading IT software development company since 2011. We offer a wide range of services including website development, mobile app development, and custom software solutions.
            </p>
            <div className="flex gap-[10px] mt-2">
              <a href="https://www.facebook.com/" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#f8f9fa] text-[#212529] hover:bg-[#00cc8b] hover:text-white transition-all duration-300">
                <Facebook size={16} />
              </a>
              <a href="https://twitter.com/" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#f8f9fa] text-[#212529] hover:bg-[#00cc8b] hover:text-white transition-all duration-300">
                <Twitter size={16} />
              </a>
              <a href="https://www.linkedin.com/" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#f8f9fa] text-[#212529] hover:bg-[#00cc8b] hover:text-white transition-all duration-300">
                <Linkedin size={16} />
              </a>
              <a href="https://www.instagram.com/" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#f8f9fa] text-[#212529] hover:bg-[#00cc8b] hover:text-white transition-all duration-300">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h4 className="font-sans text-[18px] font-bold text-[#212529] mb-[30px] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#00cc8b]">
              Our Services
            </h4>
            <ul className="space-y-[12px]">
              {[
                { name: 'Web Development', url: 'https://www.rkinfotechindia.com/services/web-development-company/' },
                { name: 'Software Development', url: 'https://www.rkinfotechindia.com/services/software-development-company/' },
                { name: 'Mobile App Development', url: 'https://www.rkinfotechindia.com/services/mobile-app-development/' },
                { name: 'Graphic Design', url: 'https://www.rkinfotechindia.com/services/graphic-design-services/' },
                { name: 'SEO Services', url: 'https://www.rkinfotechindia.com/services/best-seo-services-in-india/' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className="text-[#6c757d] text-[15px] hover:text-[#00cc8b] hover:pl-2 transition-all duration-300 flex items-center">
                    <span className="mr-2 text-[#00cc8b] text-[18px] leading-none">›</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-sans text-[18px] font-bold text-[#212529] mb-[30px] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#00cc8b]">
              Quick Links
            </h4>
            <ul className="space-y-[12px]">
              {[
                { name: 'About Us', url: 'https://www.rkinfotechindia.com/who-we-are/' },
                { name: 'Our Work', url: 'https://www.rkinfotechindia.com/our-work/' },
                { name: 'Pricing Plans', url: '#' },
                { name: 'Contact Us', url: 'https://www.rkinfotechindia.com/contact-us/' },
                { name: 'Privacy Policy', url: '#' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className="text-[#6c757d] text-[15px] hover:text-[#00cc8b] hover:pl-2 transition-all duration-300 flex items-center">
                    <span className="mr-2 text-[#00cc8b] text-[18px] leading-none">›</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="font-sans text-[18px] font-bold text-[#212529] mb-[30px] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#00cc8b]">
              Contact Details
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#00cc8b] mt-1 flex-shrink-0" size={18} />
                <p className="text-[#6c757d] text-[15px]">
                  401-402 Shivalik-5, Opp. Drive in Cinema, Gondal Road, Rajkot - 360002, Gujarat, India.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#00cc8b] flex-shrink-0" size={18} />
                <a href="tel:+919904443314" className="text-[#6c757d] text-[15px] hover:text-[#00cc8b] transition-colors">
                  +91-99044 43314
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#00cc8b] flex-shrink-0" size={18} />
                <a href="mailto:info@rkinfotechindia.com" className="text-[#6c757d] text-[15px] hover:text-[#00cc8b] transition-colors">
                  info@rkinfotechindia.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="text-[#00cc8b] flex-shrink-0" size={18} />
                <a href="https://www.rkinfotechindia.com" className="text-[#6c757d] text-[15px] hover:text-[#00cc8b] transition-colors">
                  www.rkinfotechindia.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditation / Badges Section */}
        <div className="pt-8 pb-8 border-t border-gray-100">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-8 opacity-80">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/icons/bni-2.png" 
                alt="BNI Member" 
                width={80} 
                height={40} 
                className="grayscale hover:grayscale-0 transition-all cursor-pointer"
              />
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/icons/rita_20logo_202-3.png" 
                alt="RITA Logo" 
                width={100} 
                height={40} 
                className="grayscale hover:grayscale-0 transition-all cursor-pointer"
              />
              <a href="https://www.dmca.com/Protection/Status.aspx?ID=605e5d36-e822-4293-875f-3950b7318854" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/dmca-badge-w100-5x1-01-21.png" 
                  alt="DMCA.com Protection Status" 
                  width={100} 
                  height={20} 
                  className="grayscale hover:grayscale-0 transition-all"
                />
              </a>
            </div>
            <div className="text-[#6c757d] text-[14px]">
              &copy; {new Date().getFullYear()} RK Infotech. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider at the bottom if needed to match design system */}
      <div className="w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] fill-[#f8f9fa]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="bg-[#f8f9fa] py-4 text-center">
        <p className="text-[#6c757d] text-[13px] font-medium">
          Designed and Developed by <span className="text-[#00cc8b]">RK Infotech</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;