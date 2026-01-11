import React from 'react';
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export default function CancellationPolicy() {
  return (
    <main className="min-h-screen bg-[#0f172a] pt-[70px]">
      <Navbar />
      <div className="container px-[15px] mx-auto max-w-[1170px] py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Cancellation Policy</h1>
        <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
          <p>Last updated: January 11, 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Project Cancellation</h2>
            <p>Clients may request to cancel a project at any stage. However, the following conditions apply:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cancellation requests must be submitted in writing via email.</li>
              <li>Any work completed up to the point of cancellation will be billed accordingly.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Termination by Cybernetics-Tech</h2>
            <p>We reserve the right to terminate or suspend a project if the client violates our terms of service, fails to provide necessary information, or defaults on payments.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Fees</h2>
            <p>A cancellation fee may apply depending on the project scope and the resources already allocated.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Contact</h2>
            <p>For cancellation requests or queries, please email us at cyberneticstech001@gmail.com.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
