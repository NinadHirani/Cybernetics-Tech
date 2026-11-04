import Navbar from "@/components/sections/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore Cybernetics Tech's core services: web development, app development, software development, graphics design, and SEO services.",
  alternates: { canonical: "/services" },
};
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
