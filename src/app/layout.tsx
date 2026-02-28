import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amritpal Singh Kaur | Graduate Software Engineer",
  description: "Multilingual Graduate Software Engineer with enterprise experience at Bank of America, Amadeus & ENI. MSc Advanced CS at QMUL. Open to work Summer 2026.",
  keywords: ["Software Engineer", "Graduate Developer", "Bank of America", "Amadeus", "ENI", "QMUL", "London", "Full Stack", "Cloud", "Cybersecurity"],
  authors: [{ name: "Amritpal Singh Kaur" }],
  openGraph: {
    title: "Amritpal Singh Kaur | Graduate Software Engineer",
    description: "Multilingual software engineer with enterprise experience in FinTech and travel tech, MSc candidate in Advanced CS.",
    type: "website",
    locale: "en_GB",
    url: "https://apsk-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amritpal Singh Kaur | Graduate Software Engineer",
    description: "Multilingual Graduate Software Engineer - Open to Work Summer 2026",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://apsk-portfolio.vercel.app" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💻</text></svg>" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased">
        <a href="#main-content" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
