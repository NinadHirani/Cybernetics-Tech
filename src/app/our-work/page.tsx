import Navbar from "@/components/sections/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Browse the projects showcased by Cybernetics Tech, spanning web, software, and digital solutions.",
  alternates: { canonical: "/our-work" },
};
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
