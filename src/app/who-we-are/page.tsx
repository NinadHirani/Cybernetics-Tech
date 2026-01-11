import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-background pt-[70px]">
      <Navbar />
      <section id="who-we-are" className="py-20 bg-background">
        <div className="container mx-auto px-[15px] max-w-[1170px]">
          <div className="flex flex-wrap items-center -mx-[15px]">
            <div className="w-full px-[15px]">
              <div>
                <h2 className="text-[36px] font-semibold text-white mb-6 leading-[1.3] font-display">
                  Who We <span className="text-primary">Are</span>
                </h2>
                <div className="w-[60px] h-[3px] bg-primary mb-8"></div>
                <p className="text-slate-400 text-[18px] leading-[1.6] mb-6 font-body">
                  We are a technology-driven IT services company focused on building reliable websites, applications, and digital systems. Our work sits at the intersection of thoughtful design and solid engineering, where every product is built to perform, scale, and last.
                </p>
                <p className="text-slate-400 text-[16px] leading-[1.6] mb-6 font-body">
                  We believe good technology is not just about writing code—it’s about understanding problems, designing clear systems, and delivering solutions that make sense in the real world. From simple business websites to complex applications, we approach every project with the same discipline and attention to detail.
                </p>
                <p className="text-slate-400 text-[16px] leading-[1.6] mb-6 font-body">
                  As a growing team, we value clarity, accountability, and long-term thinking. We work closely with our clients, communicate openly, and focus on outcomes rather than buzzwords. Our goal is to become a dependable technology partner for businesses that want solutions they can trust.
                </p>
                </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
