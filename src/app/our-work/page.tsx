import Navbar from "@/components/sections/navbar";
import PortfolioSection from "@/components/sections/portfolio";
import Footer from "@/components/sections/footer";

export default function OurWorkPage() {
  return (
    <main className="min-h-screen bg-background pt-[70px]">
      <Navbar />
      <div className="py-12">
        <PortfolioSection />
      </div>
      <Footer />
    </main>
  );
}
