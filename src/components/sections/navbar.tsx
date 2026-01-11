"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";

interface SubMenuItem {
  name: string;
  href: string;
}

interface Column {
  title?: string;
  items: SubMenuItem[];
}

const Navbar = () => {
  const [isAffixed, setIsAffixed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsAffixed(true);
      } else {
        setIsAffixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Who We Are", href: "/who-we-are/" },
    {
      title: "Our Services",
      href: "/our-services/",
      isMega: true,
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
      ] as Column[],
    },
    {
      title: "Our Products",
      href: "/our-products/",
      isMega: true,
      columns: [
        {
          items: [
            { name: "Online Exam Software", href: "/products/online-exam-software/" },
            { name: "Lead Management Software", href: "/products/lead-management-software/" },
            { name: "Fees Management Software", href: "/products/fees-management-software/" },
            { name: "Bulk Cheque Printing Software", href: "/products/bulk-cheque-printing-software/" },
            { name: "Business ERP Software", href: "/products/erp-software/" },
            { name: "Sales CRM Software", href: "/products/sales-crm/" },
            { name: "Event/Expo Registration Management", href: "/products/event-registration-management-software/" },
          ],
        },
        {
          items: [
            { name: "Jewellery Tag Printing Software", href: "/products/jewellery-tag-printing-software/" },
            { name: "Gross Account Software", href: "/products/gross-account/" },
            { name: "Association Management Software", href: "/products/association-management-software/" },
            { name: "Library Management Software", href: "/products/library-management-software/" },
            { name: "Vehicle Management System", href: "/products/vehicle-management-system/" },
            { name: "Export Management Software", href: "/products/export-management-software/" },
          ],
        },
      ] as Column[],
    },
    {
      title: "Ready Solutions",
      href: "/ready-solutions/",
      isMega: true,
      columns: [
        {
          items: [
            { name: "E-commerce Automobile Portal", href: "/ready-solution/e-commerce-automobile-portal/" },
            { name: "Online Vegetable Store", href: "/ready-solution/online-vegetable-store/" },
            { name: "Matrimonial Portal", href: "/ready-solution/metrimonial-portal/" },
          ],
        },
        {
          items: [
            { name: "Hotel & Restaurant Portal", href: "/ready-solution/hotel-restaurant-with-stock-management-portal/" },
            { name: "Insurance Management Portal", href: "/ready-solution/insurance-management-portal/" },
            { name: "School & Hostel Portal", href: "/ready-solution/school-hostel-management-portal/" },
          ],
        },
      ] as Column[],
    },
    { title: "Our Work", href: "/our-work/" },
    {
      title: "Hire Developers",
      href: "/hire-developers/",
      isFlyout: true,
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
    <header className="relative">
      <nav
        id="navbar"
        className={cn(
          "fixed top-0 left-0 right-0 z-[1000] w-full transition-all duration-300 ease-in-out py-[10px]",
          isAffixed ? "bg-background/90 backdrop-blur-md shadow-md shadow-black/20 border-b border-white/5" : "bg-transparent"
        )}
      >
        <div className="container mx-auto max-w-[1170px] px-[15px]">
          <div className="flex items-center justify-between h-[60px]">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <Logo />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center flex-grow justify-end">
              <ul className="flex items-center list-none m-0 p-0 text-[15px] font-medium font-display">
                {menuItems.map((item, idx) => (
                  <li key={idx} className="group relative px-[15px] py-[20px]">
                    <Link
                      href={item.href}
                      className={cn(
                        "transition-colors duration-300 flex items-center hover:text-primary text-white"
                      )}
                    >
                      {item.title}
                      {(item.isMega || item.isFlyout) && (
                        <ChevronDown className="ml-1 w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
                      )}
                    </Link>

                    {/* Mega Menu / Dropdown */}
                    {(item.isMega || item.isFlyout) && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out pt-[10px]">
                        <div className={cn(
                          "bg-card border-t-2 border-primary shadow-2xl p-6 rounded-b-[4px] border-x border-b border-white/5",
                          item.isMega ? "w-[700px] grid grid-cols-2 gap-8" : "w-[250px]"
                        )}>
                          {item.isMega ? (
                            item.columns?.map((col: Column, colIdx: number) => (
                              <div key={colIdx}>
                                {col.title && (
                                  <h4 className="text-[14px] font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                                    <div className="w-1 h-4 bg-primary rounded-full"></div>
                                    {col.title}
                                  </h4>
                                )}
                                <ul className="space-y-2">
                                  {col.items.map((sub: SubMenuItem, subIdx: number) => (
                                    <li key={subIdx}>
                                      <Link
                                        href={sub.href}
                                        className="text-slate-400 hover:text-primary text-[14px] transition-all flex items-start gap-2 group/link"
                                      >
                                        <Check className="w-3.5 h-3.5 mt-1 text-primary invisible group-hover/link:visible" />
                                        <span className="leading-tight">{sub.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))
                          ) : (
                            <ul className="space-y-2">
                              {item.items?.map((sub: SubMenuItem, subIdx: number) => (
                                <li key={subIdx}>
                                  <Link
                                    href={sub.href}
                                    className="text-slate-400 hover:text-primary text-[14px] py-1 border-b border-white/5 flex items-center gap-2 group/link"
                                  >
                                    <Check className="w-3 h-3 text-primary invisible group-hover/link:visible" />
                                    {sub.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Contact Us Button */}
              <div className="ml-4 hvr-wobble-horizontal">
                <Link
                  href="/contact-us/"
                  className="btn btn-sm grdnt-green text-white font-bold text-[14px] px-[25px] py-[10px] rounded-[8px] uppercase font-display"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className={cn("w-8 h-8 text-white")} />
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={cn(
            "fixed inset-0 bg-background z-[2000] lg:hidden transition-transform duration-300 flex flex-col",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-white/5">
             <Link href="/" onClick={() => setMobileMenuOpen(false)}>
               <Logo />
             </Link>
             <button onClick={() => setMobileMenuOpen(false)} className="text-[32px] font-light leading-none text-white">
               ×
             </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-4 font-display font-medium text-[16px]">
              {menuItems.map((item, idx) => (
                <li key={idx} className="border-b border-white/5 pb-2">
                  <div className="flex items-center justify-between">
                    <Link href={item.href} className="text-white hover:text-primary">{item.title}</Link>
                    {(item.isMega || item.isFlyout) && (
                      <button
                        onClick={() => setActiveSubMenu(activeSubMenu === item.title ? null : item.title)}
                        className="p-2 text-white"
                      >
                        <ChevronDown className={cn("w-5 h-5 transition-transform", activeSubMenu === item.title ? "rotate-180" : "")} />
                      </button>
                    )}
                  </div>
                  {(item.isMega || item.isFlyout) && activeSubMenu === item.title && (
                    <div className="mt-3 pl-4 space-y-3">
                      {item.isMega ? (
                        item.columns?.map((col: Column, cIdx: number) => (
                          <div key={cIdx} className="space-y-2">
                             {col.title && <h5 className="text-[12px] font-bold text-slate-500 uppercase">{col.title}</h5>}
                             {col.items.map((sub: SubMenuItem, sIdx: number) => (
                               <Link key={sIdx} href={sub.href} className="block text-[14px] text-slate-400 py-1">{sub.name}</Link>
                             ))}
                          </div>
                        ))
                      ) : (
                        item.items?.map((sub: SubMenuItem, sIdx: number) => (
                          <Link key={sIdx} href={sub.href} className="block text-[14px] text-slate-400 py-1">{sub.name}</Link>
                        ))
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 bg-slate-900">
            <Link
              href="/contact-us/"
              className="block text-center grdnt-green text-white py-3 rounded-lg font-bold uppercase"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      <style jsx global>{`
        .grdnt-green {
          background: linear-gradient(to right, #1d4ed8, #3b82f6);
        }
        .hvr-wobble-horizontal {
          display: inline-block;
          vertical-align: middle;
          transform: perspective(1px) translateZ(0);
          box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        }
        .hvr-wobble-horizontal:hover {
          animation-name: hvr-wobble-horizontal;
          animation-duration: 1s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: 1;
        }
        @keyframes hvr-wobble-horizontal {
          16.65% { transform: translateX(8px); }
          33.3% { transform: translateX(-6px); }
          49.95% { transform: translateX(4px); }
          66.6% { transform: translateX(-2px); }
          83.25% { transform: translateX(1px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
