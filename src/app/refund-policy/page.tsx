import React from 'react';
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-[#0f172a] pt-[70px]">
      <Navbar />
      <div className="container px-[15px] mx-auto max-w-[1170px] py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Refund Policy</h1>
        <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
          <p>Last updated: January 11, 2026</p>
          
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. General Policy</h2>
              <p>At Cybernetics Tech, we strive to ensure our clients are satisfied with our services. However, due to the nature of digital services and software development, our refund policy is as follows:</p>
            </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Eligibility for Refunds</h2>
            <p>Refunds may be considered under the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>If the project has not yet been started.</li>
              <li>If there is a significant failure in delivering the agreed-upon services that cannot be rectified.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Non-Refundable Services</h2>
            <p>Completed project milestones, domain registrations, and third-party costs (like hosting or API fees) are generally non-refundable.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Process</h2>
            <p>To request a refund, please contact your project manager or email us at cyberneticstech001@gmail.com with your project details and the reason for the request.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
