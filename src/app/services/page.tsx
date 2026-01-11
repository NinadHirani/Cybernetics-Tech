import Navbar from "@/components/sections/navbar";
import ServicesSection from "@/components/sections/services";
import Footer from "@/components/sections/footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background pt-[70px]">
      <Navbar />
      <div className="py-12">
        <ServicesSection />
      </div>
      <Footer />
    </main>
  );
}
