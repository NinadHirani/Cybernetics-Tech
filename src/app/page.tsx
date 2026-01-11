import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServicesSection />
      <Footer />
    </main>
  );
}
