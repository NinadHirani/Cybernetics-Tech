import type { Metadata } from "next";
import ContactUsContent from "@/components/sections/contact-us-content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Cybernetics Tech in Rajkot, Gujarat. Email cyberneticstech001@gmail.com or send a message about your project.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactUsPage() {
  return <ContactUsContent />;
}
