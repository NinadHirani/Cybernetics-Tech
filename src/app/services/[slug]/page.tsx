import React from 'react';
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ServiceData {
  title: string;
  description: string;
  fullContent: string;
  icon: string;
  bgImage: string;
  features: string[];
}

const servicesData: Record<string, ServiceData> = {
  "web-development": {
    title: "Web Development",
    description: "We provide high-quality and cost-effective website development services for your business requirements. Our team of experts uses the latest technologies to build responsive, fast, and secure websites that help your business stand out in the digital landscape.",
    fullContent: "From simple landing pages to complex e-commerce platforms, we handle every aspect of web development. We focus on creating websites that are not only visually appealing but also highly functional and optimized for search engines. Our process includes requirement analysis, design, development, testing, and deployment.",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/website-development-1-7.png",
    bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/website_development-2.jpg",
    features: ["Responsive Design", "E-commerce Solutions", "Custom CMS Development", "Progressive Web Apps", "Website Maintenance"]
  },
  "app-development": {
    title: "App Development",
    description: "Native and Hybrid mobile applications with seamless user experience and high performance for iOS and Android. We build apps that are intuitive, robust, and scalable, ensuring your business stays connected with your customers on the go.",
    fullContent: "Our mobile app development team specializes in creating high-performance applications tailored to your specific business needs. Whether you need a native iOS/Android app or a cross-platform solution using React Native or Flutter, we have the expertise to deliver top-notch results.",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Application_Development-8.png",
    bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/application_development-3.jpg",
    features: ["iOS & Android Development", "UI/UX Design", "Cross-Platform Solutions", "App Store Optimization", "API Integration"]
  },
  "graphics-design": {
    title: "Graphics Design",
    description: "Creative and meaningful visual concepts to communicate ideas that inspire, inform, and captivate consumers. We help you build a strong brand identity through stunning visuals and professional designs.",
    fullContent: "Our creative team works closely with you to understand your brand's essence and translate it into compelling graphics. From logo design and branding to social media assets and marketing materials, we ensure your visual identity is consistent and impactful across all platforms.",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/graphics-design-1-9.png",
    bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/graphics_design-4.jpg",
    features: ["Logo & Branding", "Social Media Graphics", "Marketing Collateral", "UI/UX Visuals", "Print Design"]
  },
  "seo-service": {
    title: "SEO Service",
    description: "Improving your website visibility and search engine rankings to drive more organic traffic and growth. We use proven SEO strategies to help your business reach the top of search engine results and attract qualified leads.",
    fullContent: "Our SEO services are designed to increase your online presence and drive sustainable growth. We perform in-depth keyword research, on-page optimization, technical SEO audits, and high-quality link building to ensure your website performs at its best in search rankings.",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/seo_service-10.png",
    bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/seo_services-5.jpg",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Performance Tracking"]
  },
  "software-development": {
    title: "Software Development",
    description: "Custom software solutions designed to automate business processes and increase organizational efficiency. We build tailored software that solves your unique business challenges and scales with your growth.",
    fullContent: "Our software development team focuses on creating robust, secure, and scalable solutions that streamline your operations. Whether it's an internal management system, a customer portal, or a specialized tool, we deliver high-quality software that meets your exact requirements.",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/Software_Development-11.png",
    bgImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/software_development-6.jpg",
    features: ["Custom Enterprise Software", "Legacy System Modernization", "Cloud Solutions", "Software Integration", "Quality Assurance"]
  }
};

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0f172a] pt-[70px]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <Image 
          src={service.bgImage} 
          alt={service.title} 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <div className="container px-[15px] mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
            <div className="mx-auto h-1 w-24 bg-primary rounded-full mb-6" />
            <div className="flex items-center justify-center gap-2 text-slate-300">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">{service.title}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container px-[15px] mx-auto max-w-[1170px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-slate-800 border border-white/10 shadow-xl">
                <Image 
                  src={service.icon} 
                  alt={`${service.title} icon`} 
                  width={55} 
                  height={55} 
                  className="h-auto w-14 object-contain invert"
                />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">About Our {service.title}</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                {service.description}
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                {service.fullContent}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 text-slate-300">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
              <Image 
                src={service.bgImage} 
                alt={service.title} 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900/50 border-t border-white/5">
        <div className="container px-[15px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to start your project?</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and find out how we can help your business grow with our {service.title} solutions.
          </p>
          <Link 
            href="/contact-us" 
            className="inline-block rounded-lg px-10 py-4 font-bold uppercase tracking-wider text-white bg-primary hover:bg-blue-600 transition-all shadow-lg shadow-primary/20"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
