import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Cybernetics Tech | Best IT Company in Rajkot, Gujarat" },
  description: "Cybernetics Tech provides reliable and affordable IT solutions for your business growth. End-to-end technology solutions tailored to your needs.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
  },
};
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <Navbar />
      <Hero />
      <ServicesSection />
      <Footer />
    </main>
  );
}
