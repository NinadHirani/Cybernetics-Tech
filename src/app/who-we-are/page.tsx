import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-background pt-[70px]">
      <Navbar />
      <section id="who-we-are" className="py-20 bg-background">
        <div className="container mx-auto px-[15px] max-w-[1170px]">
          <div className="flex flex-wrap items-center -mx-[15px]">
            <div className="w-full lg:w-6/12 px-[15px] mb-12 lg:mb-0">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c7eda8bf-0b51-4df9-bd1e-d810430a3d49-rkinfotechindia-com/assets/images/about_us-1.jpg"
                    alt="Cybernetics-Tech Team"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-[15px]">
              <div className="lg:pl-8">
                <h2 className="text-[36px] font-semibold text-white mb-6 leading-[1.3] font-display">
                  Who We <span className="text-primary">Are</span>
                </h2>
                <div className="w-[60px] h-[3px] bg-primary mb-8"></div>
                <p className="text-slate-400 text-[18px] leading-[1.6] mb-6 font-body">
                  Cybernetics-Tech is a leading IT solutions provider based in Rajkot, Gujarat. We specialize in delivering high-quality web development, software solutions, and digital transformation services.
                </p>
                <p className="text-slate-400 text-[16px] leading-[1.6] mb-8 font-body">
                  With over 3 years of experience and a track record of 1500+ successful projects, our team of expert developers and designers is committed to helping businesses grow through innovative technology and creative excellence.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 rounded-lg bg-card border border-white/5">
                    <h4 className="text-white font-bold text-[20px] mb-1">3+ Years</h4>
                    <p className="text-slate-500 text-[14px]">Of Industry Excellence</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-white/5">
                    <h4 className="text-white font-bold text-[20px] mb-1">1500+</h4>
                    <p className="text-slate-500 text-[14px]">Successful Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
