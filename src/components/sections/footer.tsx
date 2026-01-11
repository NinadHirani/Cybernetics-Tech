import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { Logo } from '@/components/ui/logo';

const Footer = () => {
    return (
      <footer id="contact" className="bg-[#020617] text-[#848c99] pt-[80px] pb-0 font-body border-t border-white/5">
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-[50px]">
          
          {/* Brand Column */}
          <div className="footer-col lg:col-span-1">
            <Logo className="mb-[25px]" />
            <p className="text-[14px] leading-[24px] mb-6 pr-4">
              Cybernetics-Tech provides reliable and affordable IT solutions for your business growth. End-to-end technology solutions tailored to your needs.
            </p>
            <div className="flex gap-2 mb-8">
              <a 
                href="https://www.linkedin.com/company/cybernetics-technologia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4 text-white group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h3 className="text-white font-display text-[18px] font-semibold mb-[30px] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[40px] after:h-[2px] after:bg-primary uppercase tracking-wider">
              Quick Links
            </h3>
                <ul className="space-y-[12px]">
                  <li>
                    <Link href="/" className="hover:text-primary transition-colors duration-300">Home</Link>
                  </li>
                  <li>
                    <Link href="/who-we-are" className="hover:text-primary transition-colors duration-300">Who We Are</Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-primary transition-colors duration-300">Our Services</Link>
                  </li>
                    <li>
                      <Link href="/services" className="hover:text-primary transition-colors duration-300">Our Products</Link>
                    </li>
                    <li>
                      <Link href="/contact-us" className="hover:text-primary transition-colors duration-300">Contact Us</Link>
                    </li>
                </ul>
              </div>
    
              {/* Services Column */}
              <div className="footer-col">
                <h3 className="text-white font-display text-[20px] font-semibold mb-[30px] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[2px] after:bg-primary">
                  Services
                </h3>
                <ul className="space-y-[12px]">
                  <li>
                    <Link href="/services" className="hover:text-primary transition-colors duration-300">Website Development</Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-primary transition-colors duration-300">Software Development</Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-primary transition-colors duration-300">Mobile App Development</Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-primary transition-colors duration-300">Graphic Design</Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-primary transition-colors duration-300">SEO Services</Link>
                  </li>
                  <li>
                    <Link href="/contact-us" className="hover:text-primary transition-colors duration-300">Hire Developers</Link>
                  </li>
                </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-col">
            <h3 className="text-white font-display text-[20px] font-semibold mb-[30px] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[2px] after:bg-primary">
              Contact Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary w-5 h-5 mt-1 shrink-0" />
                  <p className="text-[14px] leading-[24px]">
                    Rajkot Gujarat
                  </p>
              </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary w-5 h-5 shrink-0" />
                  <a href="mailto:cyberneticstech001@gmail.com" className="hover:text-primary truncate">
                    cyberneticstech001@gmail.com
                  </a>
                </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-white text-[15px] font-semibold mb-4">Membership</h4>
              <div className="flex items-center gap-4">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/icons/bni-2.png"
                  alt="BNI Member"
                  width={60}
                  height={30}
                  className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 invert"
                />
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/icons/rita_20logo_202-3.png"
                  alt="RITA Member"
                  width={100}
                  height={35}
                  className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 invert"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 py-[25px] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[14px]">
            © {new Date().getFullYear()} Cybernetics-Tech. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <ul className="flex gap-6 text-[14px]">
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Refund Policy</a></li>
              <li><a href="#" className="hover:text-primary">Cancellation Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
