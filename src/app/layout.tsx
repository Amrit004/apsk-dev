import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amritpal Singh Kaur | Graduate Software Engineer",
  description: "Multilingual Graduate Software Engineer with enterprise experience at Bank of America, Amadeus & ENI. MSc Advanced CS at QMUL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
