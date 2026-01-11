import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import PortfolioSection from "@/components/sections/portfolio";
import BlogNews from "@/components/sections/blog-news";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <BlogNews />
      <Footer />
    </main>
  );
}
