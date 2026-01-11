import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import Footer from "@/components/sections/footer";
import { RobotCat } from "@/components/ui/robot-cat";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <Navbar />
      <Hero />
      <ServicesSection />
      <Footer />
      
      {/* Robot Cat centered at the top */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100]">
        <RobotCat />
      </div>
    </main>
  );
}
