import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Mail, MapPin, Clock } from "lucide-react";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-background pt-[70px]">
      <Navbar />
      <section id="contact-us" className="py-20 bg-background">
        <div className="container mx-auto px-[15px] max-w-[1170px]">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-semibold text-white mb-4 leading-[1.3] font-display">
              Contact <span className="text-primary">Us</span>
            </h2>
            <div className="w-[60px] h-[3px] bg-primary mx-auto mb-6"></div>
            <p className="text-slate-400 text-[18px] max-w-2xl mx-auto">
              Have a project in mind? Let's talk about how we can help your business grow with our technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="p-8 rounded-xl bg-card border border-white/5 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Our Office</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Rajkot Gujarat
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-xl bg-card border border-white/5 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Email Address</h4>
                    <p className="text-slate-400 text-sm">info@cybernetics-tech.com</p>
                    <p className="text-slate-400 text-sm">sales@cybernetics-tech.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="lg:col-span-2">
              <div className="p-10 rounded-xl bg-card border border-white/5 shadow-xl h-full">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Subject</label>
                    <input 
                      type="text" 
                      placeholder="How can we help?" 
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Message</label>
                    <textarea 
                      placeholder="Your message..." 
                      rows={5}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 rounded-lg bg-primary text-white font-bold uppercase tracking-wider hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
