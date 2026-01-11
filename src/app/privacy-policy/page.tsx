import React from 'react';
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0f172a] pt-[70px]">
      <Navbar />
      <div className="container px-[15px] mx-auto max-w-[1170px] py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
          <p>Last updated: January 11, 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us via email. This may include your name, email address, phone number, and any other information you choose to provide.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you about your projects, and to respond to your inquiries.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
            <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at cyberneticstech001@gmail.com.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
