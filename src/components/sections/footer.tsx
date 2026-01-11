import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-[80px] pb-0 font-body border-t border-slate-900">
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-[50px]">
          
          {/* Company Column */}
          <div className="footer-col">
            <h3 className="text-white font-display text-[20px] font-semibold mb-[30px] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[2px] after:bg-blue-600">
              Cybernetics-Tech
            </h3>
            <ul className="space-y-[12px]">
              <li>
                <Link href="/" className="hover:text-blue-500 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link href="/who-we-are/" className="hover:text-blue-500 transition-colors duration-300">Who We Are</Link>
              </li>
              <li>
                <Link href="/our-services/" className="hover:text-blue-500 transition-colors duration-300">Our Services</Link>
              </li>
              <li>
                <Link href="/our-products/" className="hover:text-blue-500 transition-colors duration-300">Our Products</Link>
              </li>
              <li>
                <Link href="/our-work/" className="hover:text-blue-500 transition-colors duration-300">Our Work</Link>
              </li>
              <li>
                <Link href="/contact-us/" className="hover:text-blue-500 transition-colors duration-300">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h3 className="text-white font-display text-[20px] font-semibold mb-[30px] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[2px] after:bg-blue-600">
              Services
            </h3>
            <ul className="space-y-[12px]">
              <li>
                <Link href="/services/web-development-company/" className="hover:text-blue-500 transition-colors duration-300">Website Development</Link>
              </li>
              <li>
                <Link href="/services/software-development-company/" className="hover:text-blue-500 transition-colors duration-300">Software Development</Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development/" className="hover:text-blue-500 transition-colors duration-300">Mobile App Development</Link>
              </li>
              <li>
                <Link href="/services/graphic-design-services/" className="hover:text-blue-500 transition-colors duration-300">Graphic Design</Link>
              </li>
              <li>
                <Link href="/services/best-seo-services-in-india/" className="hover:text-blue-500 transition-colors duration-300">SEO Services</Link>
              </li>
              <li>
                <Link href="/hire-developers/" className="hover:text-blue-500 transition-colors duration-300">Hire Developers</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-col">
            <h3 className="text-white font-display text-[20px] font-semibold mb-[30px] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[2px] after:bg-blue-600">
              Contact Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 w-5 h-5 mt-1 shrink-0" />
                <p className="text-[14px] leading-[24px]">
                  404, Cyber Tower, Innovation Park,<br />
                  Beside Tech Hub, Digital Street,<br />
                  Global City - 360002.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600 w-5 h-5 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919714316655" className="hover:text-blue-500">+91 97143 16655</a>
                  <a href="tel:+919879796677" className="hover:text-blue-500">+91 98797 96677</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600 w-5 h-5 shrink-0" />
                <a href="mailto:info@cybernetics-tech.com" className="hover:text-blue-500 truncate">
                  info@cybernetics-tech.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media & Logo Column */}
          <div className="footer-col">
            <h3 className="text-white font-display text-[20px] font-semibold mb-[30px] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[2px] after:bg-blue-600">
              Follow Us
            </h3>
            <div className="flex gap-2 mb-8">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group">
                <Facebook className="w-4 h-4 text-white group-hover:scale-110" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group">
                <Twitter className="w-4 h-4 text-white group-hover:scale-110" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group">
                <Linkedin className="w-4 h-4 text-white group-hover:scale-110" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group">
                <Instagram className="w-4 h-4 text-white group-hover:scale-110" />
              </a>
            </div>
            
            <div className="mt-6">
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/50">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c7eda8bf-0b51-4df9-bd1e-d810430a3d49/Screenshot-2025-12-25-at-9.03.20-PM-1768114807999.png?width=8000&height=8000&resize=contain"
                  alt="Cybernetics-Tech"
                  width={180}
                  height={50}
                  className="invert brightness-200"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 py-[25px] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[14px]">
            © {new Date().getFullYear()} Cybernetics-Tech. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <ul className="flex gap-6 text-[14px]">
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Refund Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
