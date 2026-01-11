"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Menu, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/who-we-are/" },
    {
      name: "Our Services",
      href: "/our-services/",
      mega: true,
      columns: [
        {
          title: "Our Core Services",
          items: [
            { name: "Product Design And Development Company", href: "/services/product-development-and-development/" },
            { name: "Website Development", href: "/services/web-development-company/" },
            { name: "Software Development", href: "/services/software-development-company/" },
            { name: "Mobile App Development", href: "/services/mobile-app-development/" },
            { name: "SEO Service", href: "/services/best-seo-services-in-india/" },
          ],
        },
        {
          title: "Graphic Design Services",
          items: [
            { name: "Branding", href: "/branding/" },
            { name: "Brochure Design", href: "/brochure-design/" },
            { name: "Business Cards", href: "/business-cards/" },
            { name: "Enevelope", href: "/enevelope/" },
            { name: "Letter Pad Design", href: "/letterheads/" },
            { name: "Logo Design", href: "/logo-design/" },
            { name: "Packaging Design", href: "/package-design-company/" },
            { name: "Print Design", href: "/print-design/" },
            { name: "UI/UX Design", href: "/ui-ux-design/" },
            { name: "Stationary Design", href: "/stationary-design/" },
          ],
        },
      ],
    },
    {
      name: "Our Products",
      href: "/our-products/",
      mega: true,
      columns: [
        {
          title: "General Software",
          items: [
            { name: "Online Exam Software", href: "/products/online-exam-software/" },
            { name: "Lead Management Software", href: "/products/lead-management-software/" },
            { name: "Fees Management Software", href: "/products/fees-management-software/" },
            { name: "Bulk Cheque Printing Software", href: "/products/bulk-cheque-printing-software/" },
            { name: "Business ERP Software", href: "/products/erp-software/" },
            { name: "Sales CRM Software", href: "/products/sales-crm/" },
            { name: "Event/Expo Registration", href: "/products/event-registration-management-software/" },
          ],
        },
        {
          title: "Specialized Tools",
          items: [
            { name: "Jewellery Tag Printing", href: "/products/jewellery-tag-printing-software/" },
            { name: "Gross Account Software", href: "/products/gross-account/" },
            { name: "Association Management", href: "/products/association-management-software/" },
            { name: "Library Management", href: "/products/library-management-software/" },
            { name: "Vehicle Management", href: "/products/vehicle-management-system/" },
            { name: "Export Management", href: "/products/export-management-software/" },
          ],
        },
      ],
    },
    {
      name: "Ready Solutions",
      href: "/ready-solutions/",
      mega: true,
      columns: [
        {
          title: "Portals",
          items: [
            { name: "E-commerce Automobile Portal", href: "/ready-solution/e-commerce-automobile-portal/" },
            { name: "Online Vegetable Store", href: "/ready-solution/online-vegetable-store/" },
            { name: "Matrimonial Portal", href: "/ready-solution/matrimonial-portal/" },
          ],
        },
        {
          title: "Management System",
          items: [
            { name: "Hotel & Restaurant Portal", href: "/ready-solution/hotel-restaurant-with-stock-management-portal/" },
            { name: "Insurance Management", href: "/ready-solution/insurance-management-portal/" },
            { name: "School & Hostel Portal", href: "/ready-solution/school-hostel-management-portal/" },
          ],
        },
      ],
    },
    { name: "Our Work", href: "/our-work/" },
    {
      name: "Hire Developers",
      href: "/hire-developers/",
      items: [
        { name: "Hire PHP Developers", href: "/hiredevelopers/hire-php-developers/" },
        { name: "Hire Codeigniter Developers", href: "/hiredevelopers/hire-codeigniter-developers/" },
        { name: "Hire WordPress Developers", href: "/hiredevelopers/hire-wordpress-developers/" },
        { name: "Hire Web Designer", href: "/hiredevelopers/hire-web-designer/" },
        { name: "Hire Android Developers", href: "/hiredevelopers/hire-android-developers/" },
        { name: "Hire iOS Developers", href: "/hiredevelopers/hire-ios-developers/" },
      ],
    },
  ];

  return (
    <header className="relative z-[9999]">
      <nav
        id="navbar"
        className={cn(
          "fixed top-0 left-0 right-0 w-full transition-all duration-300 py-[15px] lg:h-[80px] flex items-center",
          isSticky ? "bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] py-[10px]" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-[15px] max-w-[1170px]">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="block">
                {!isSticky ? (
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/rkinfotech-white-logo-1.png"
                    alt="Rk Infotech"
                    width={180}
                    height={45}
                    className="h-auto w-auto max-h-[45px] object-contain"
                  />
                ) : (
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/icons/rkinfotech-regular-logo-1.png"
                    alt="Rk Infotech"
                    width={180}
                    height={45}
                    className="h-auto w-auto max-h-[45px] object-contain"
                  />
                )}
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-[20px]">
              <ul className="flex items-center list-none m-0 p-0">
                {navLinks.map((link) => (
                  <li
                    key={link.name}
                    className="relative group px-[10px]"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={link.href}
                      className={cn(
                        "font-sans text-[14px] font-medium transition-colors flex items-center gap-1 py-[30px]",
                        isSticky ? "text-[#212529]" : "text-white"
                      )}
                    >
                      {link.name}
                      {(link.mega || link.items) && (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </a>

                    {/* Mega Menu Dropdown */}
                    {link.mega && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border-t-2 border-[#00cc8b] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-[30px] flex gap-[30px] rounded-b-md">
                        {link.columns?.map((col, idx) => (
                          <div key={idx} className="flex-1">
                            <h4 className="text-[14px] font-bold text-[#212529] uppercase mb-[15px] pb-[5px] border-b border-gray-100 flex items-center gap-2">
                               <span className="w-1 h-4 bg-[#00cc8b] rounded-full inline-block"></span>
                               {col.title}
                            </h4>
                            <ul className="space-y-[8px]">
                              {col.items.map((item, i) => (
                                <li key={i}>
                                  <a
                                    href={item.href}
                                    className="text-[14px] text-[#6c757d] hover:text-[#00cc8b] flex items-center gap-2 group/item transition-all"
                                  >
                                    <Check className="w-3 h-3 text-[#00cc8b]" />
                                    <span className="group-hover/item:translate-x-1 transition-transform">{item.name}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Flyout Dropdown (Hire Developers) */}
                    {!link.mega && link.items && (
                      <div className="absolute top-full left-0 w-[240px] bg-white border-t-2 border-[#00cc8b] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-b-md py-4">
                        <ul className="space-y-[5px]">
                          {link.items.map((item, i) => (
                            <li key={i}>
                              <a
                                href={item.href}
                                className="px-6 py-2 text-[14px] text-[#6c757d] hover:text-[#00cc8b] hover:bg-[#f8f9fa] block transition-colors"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Contact Button */}
              <div className="ml-[10px]">
                <a
                  href="/contact-us/"
                  className="btn-cta grdnt-green text-white px-[30px] py-[12px] hvr-wobble-horizontal rounded-[100px] text-[13px] font-semibold uppercase tracking-wider shadow-[0_4px_15px_rgba(0,204,139,0.3)] hover:shadow-[0_6px_20px_rgba(0,204,139,0.5)]"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className={cn("w-8 h-8", isSticky ? "text-[#212529]" : "text-white")} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-[10000] lg:hidden transition-transform duration-300 transform",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-10">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/icons/rkinfotech-regular-logo-1.png"
                alt="Logo"
                width={150}
                height={40}
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#212529] text-[30px]"
              >
                &times;
              </button>
            </div>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#212529] font-sans font-bold text-[16px] block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="/contact-us/"
                className="block text-center btn-cta grdnt-green text-white py-[15px] rounded-[100px] uppercase font-bold"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content jump if the header height is significant */}
    </header>
  );
};

export default Header;