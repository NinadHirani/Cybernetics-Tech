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
      
      {/* Robot Cat fixed in the bottom right */}
      <div className="fixed bottom-8 right-8 z-50">
        <RobotCat />
      </div>
    </main>
  );
}
