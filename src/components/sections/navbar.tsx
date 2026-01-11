"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { SleepingCat } from "@/components/ui/sleeping-cat";

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
      if (mobileMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }, [mobileMenuOpen]);

    useEffect(() => {
      const handleScroll = () => {
      if (window.scrollY > 50) {
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
      { title: "Who We Are", href: "/who-we-are" },
      {
        title: "Our Services",
        href: "/services",
        isMega: true,
        columns: [
          {
            title: "Core Services",
            items: [
              { name: "Product Design", href: "/services" },
              { name: "Web Development", href: "/services" },
              { name: "Software Development", href: "/services" },
              { name: "Mobile Apps", href: "/services" },
              { name: "SEO Optimization", href: "/services" },
            ],
          },
          {
            title: "Creative Solutions",
            items: [
              { name: "Branding", href: "/services" },
              { name: "UI/UX Design", href: "/services" },
              { name: "Packaging", href: "/services" },
              { name: "Print Media", href: "/services" },
              { name: "Logo Design", href: "/services" },
            ],
          },
          ] as Column[],
        },
          {
            title: "Hire Experts",
        href: "/contact-us",
        isFlyout: true,
        items: [
          { name: "Hire PHP Developers", href: "/contact-us" },
          { name: "Hire React Developers", href: "/contact-us" },
          { name: "Hire UI/UX Designers", href: "/contact-us" },
          { name: "Hire Mobile Developers", href: "/contact-us" },
        ],
      },
    ];

  return (
    <header className="relative">
      <nav
        id="navbar"
        className={cn(
          "fixed top-0 left-0 right-0 z-[1000] w-full transition-all duration-500 ease-in-out py-3",
          isAffixed ? "bg-background/80 backdrop-blur-xl shadow-2xl border-b border-white/5 py-2" : "bg-transparent"
        )}
      >
        <div className="container mx-auto max-w-[1170px] px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo Section */}
              <div className="flex-shrink-0 flex items-center gap-2">
                <Link href="/" className="block transition-transform hover:scale-105">
                  <Logo className="scale-90" />
                </Link>
                <SleepingCat className="hidden sm:flex" />
              </div>


            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              <ul className="flex items-center list-none m-0 p-0 text-[14px] font-bold font-display uppercase tracking-wider">
                {menuItems.map((item, idx) => (
                  <li key={idx} className="group relative px-4 py-6">
                    <Link
                      href={item.href}
                      className={cn(
                        "transition-colors duration-300 flex items-center hover:text-primary text-slate-300 group-hover:text-white"
                      )}
                    >
                      {item.title}
                      {(item.isMega || item.isFlyout) && (
                        <ChevronDown className="ml-1 w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-500" />
                      )}
                    </Link>

                    {/* Mega Menu / Dropdown */}
                    {(item.isMega || item.isFlyout) && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out pt-2">
                        <div className={cn(
                          "bg-slate-900/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 rounded-2xl overflow-hidden",
                          item.isMega ? "w-[640px] grid grid-cols-2 gap-10" : "w-[260px]"
                        )}>
                          {item.isMega ? (
                            item.columns?.map((col: Column, colIdx: number) => (
                              <div key={colIdx}>
                                {col.title && (
                                  <h4 className="text-[12px] font-bold text-primary mb-5 uppercase tracking-[0.2em]">
                                    {col.title}
                                  </h4>
                                )}
                                <ul className="space-y-3">
                                  {col.items.map((sub: SubMenuItem, subIdx: number) => (
                                    <li key={subIdx}>
                                      <Link
                                        href={sub.href}
                                        className="text-slate-400 hover:text-white text-[13px] transition-all flex items-center gap-3 group/link"
                                      >
                                        <div className="w-1 h-1 bg-primary/40 rounded-full group-hover/link:w-3 group-hover/link:bg-primary transition-all duration-300"></div>
                                        <span className="leading-tight">{sub.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))
                          ) : (
                            <ul className="space-y-3">
                              {item.items?.map((sub: SubMenuItem, subIdx: number) => (
                                <li key={subIdx}>
                                  <Link
                                    href={sub.href}
                                    className="text-slate-400 hover:text-white text-[13px] flex items-center gap-3 group/link"
                                  >
                                    <div className="w-1 h-1 bg-primary/40 rounded-full group-hover/link:w-3 group-hover/link:bg-primary transition-all duration-300"></div>
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
                <Link
                  href="/contact-us"
                  className="ml-6 hidden lg:flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-bold uppercase text-[12px] tracking-widest transition-all shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.23)] hover:-translate-y-0.5 active:scale-95"
                >
                  Contact Us
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>

          {/* Mobile Sidebar */}
          <div
            className={cn(
              "fixed inset-0 bg-background/95 backdrop-blur-xl z-[2000] lg:hidden transition-all duration-500 ease-in-out flex flex-col",
              mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}
          >
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                 <div className="flex items-center gap-2">
                   <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                     <Logo className="scale-90" />
                   </Link>
                   <SleepingCat className="scale-75" />
                 </div>
                 <button onClick={() => setMobileMenuOpen(false)} className="text-[40px] font-light text-white">

                 ×
               </button>
            </div>
            <div className="flex-1 p-8">
              <ul className="space-y-6 font-display font-bold text-[18px] uppercase tracking-wider mb-8">
                {menuItems.map((item, idx) => (
                  <li key={idx} className="border-b border-white/5 pb-4">
                    <div className="flex items-center justify-between">
                      <Link href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-white">{item.title}</Link>
                      {(item.isMega || item.isFlyout) && (
                        <button
                          onClick={() => setActiveSubMenu(activeSubMenu === item.title ? null : item.title)}
                          className="p-2 text-primary"
                        >
                          <ChevronDown className={cn("w-6 h-6 transition-transform", activeSubMenu === item.title ? "rotate-180" : "")} />
                        </button>
                      )}
                    </div>
                    {(item.isMega || item.isFlyout) && activeSubMenu === item.title && (
                      <div className="mt-4 pl-4 space-y-4">
                        {item.isMega ? (
                          item.columns?.map((col: Column, cIdx: number) => (
                            <div key={cIdx} className="space-y-3">
                               {col.title && <h5 className="text-[11px] font-bold text-primary/60 tracking-widest">{col.title}</h5>}
                               {col.items.map((sub: SubMenuItem, sIdx: number) => (
                                 <Link key={sIdx} href={sub.href} onClick={() => setMobileMenuOpen(false)} className="block text-[15px] text-slate-400">{sub.name}</Link>
                               ))}
                            </div>
                          ))
                        ) : (
                          item.items?.map((sub: SubMenuItem, sIdx: number) => (
                            <Link key={sIdx} href={sub.href} onClick={() => setMobileMenuOpen(false)} className="block text-[15px] text-slate-400">{sub.name}</Link>
                          ))
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center grdnt-green text-white py-4 rounded-xl font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
              >
                Contact Us
              </Link>
            </div>
          </div>
      </nav>
    </header>
  );
};

export default Navbar;
