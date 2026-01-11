import Navbar from "@/components/sections/navbar";
import ProductsSection from "@/components/sections/products";
import Footer from "@/components/sections/footer";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background pt-[70px]">
      <Navbar />
      <div className="py-12">
        <ProductsSection />
      </div>
      <Footer />
    </main>
  );
}
