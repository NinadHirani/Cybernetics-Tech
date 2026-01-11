import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import PortfolioSection from "@/components/sections/portfolio";
import BlogNews from "@/components/sections/blog-news";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <div className="space-y-0">
        <ServicesSection />
        <PortfolioSection />
        <BlogNews />
      </div>
      <Footer />
    </main>
  );
}
