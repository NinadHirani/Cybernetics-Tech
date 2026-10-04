import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { NewsCard } from "@/components/sections/blog-news";
import { newsData } from "@/data/news";

export const metadata: Metadata = {
  title: "News & Offers | Cybernetics Tech",
  description: "Latest news, expo participations and offers from Cybernetics Tech.",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background pt-[70px]">
      <Navbar />
      <section id="news" className="py-20 bg-background">
        <div className="container mx-auto px-[15px] max-w-[1170px]">
          <div className="text-center mb-[50px]">
            <h1 className="text-[36px] font-semibold text-white font-display leading-[1.3] mb-[15px]">
              News &amp; <span className="text-primary">Offers</span>
            </h1>
            <div className="flex justify-center">
              <div className="w-[80px] h-[3px] grdnt-green rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {newsData.map((item) => (
              <div key={item.id} className="scroll-mt-[90px]">
                <NewsCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
