import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { ClickEffect } from "@/components/ui/click-effect";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cybernetics Tech | Best IT Company in Rajkot, Gujarat",
  description: "Cybernetics Tech provides reliable and affordable IT solutions for your business growth. End-to-end technology solutions tailored to your needs.",
  applicationName: "Cybernetics-Tech",
  appleWebApp: {
    title: "Cybernetics-Tech",
  },
    openGraph: {
      title: "Cybernetics Tech | Best IT Company in Rajkot, Gujarat",
      description: "Cybernetics Tech provides reliable and affordable IT solutions for your business growth.",
      siteName: "Cybernetics-Tech",
      type: "website",
    },
    icons: {
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c7eda8bf-0b51-4df9-bd1e-d810430a3d49/Cybernetic-Tech-Logo-1768224421817.png?width=8000&height=8000&resize=contain",
      shortcut: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c7eda8bf-0b51-4df9-bd1e-d810430a3d49/Cybernetic-Tech-Logo-1768224421817.png?width=8000&height=8000&resize=contain",
      apple: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c7eda8bf-0b51-4df9-bd1e-d810430a3d49/Cybernetic-Tech-Logo-1768224421817.png?width=8000&height=8000&resize=contain",
    },
    verification: {
    google: "UWHykeotugc6QJut4kG9SQ25BCR8_cI38-4Tnhdo5Nw", // This generates the <meta> tag
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="c7eda8bf-0b51-4df9-bd1e-d810430a3d49"
          />
          <ClickEffect />
          {children}

        <VisualEditsMessenger />
      </body>
    </html>
  );
}
