import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOC Command Center | CyberShield",
  description: "Enterprise Security Operations Center with real-time threat detection, incident response, and AI-powered security analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
