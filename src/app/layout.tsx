import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amritpal Singh Kaur | Software Support & Customer Success",
  description: "Software Support Specialist and Customer Success Manager for an airline account at Brock Solutions, Heathrow. MSc Advanced Computer Science graduate (Merit), QMUL. Enterprise IT experience at Bank of America, Amadeus & ENI, international training delivered in Spanish.",
  keywords: ["Software Support Specialist", "Customer Success Manager", "Technical Account Manager", "IT Support Engineer", "Incident Management", "Brock Solutions", "SmartSuite", "Heathrow", "Airline Operations", "Baggage Handling Systems", "IATA Resolution 753", "Bank of America", "Amadeus", "ENI", "QMUL", "London", "SQL", "Azure", "Windows Server", "JavaScript", "TypeScript", "Python", "React", "Next.js", "Cybersecurity", "Spanish", "Multilingual"],
  authors: [{ name: "Amritpal Singh Kaur" }],
  creator: "Amritpal Singh Kaur",
  publisher: "Amritpal Singh Kaur",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Amritpal Singh Kaur | Software Support & Customer Success",
    description: "Onsite Software Support Specialist and Customer Success Manager (airline account) at Brock Solutions, Heathrow. MSc Advanced Computer Science (Merit), QMUL. International training delivered in Spanish.",
    url: "https://apsk-dev.vercel.app",
    siteName: "APSK Portfolio",
    locale: "en_GB",
    type: "website",
    images: [{ url: "https://apsk-dev.vercel.app/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amritpal Singh Kaur | Software Support & Customer Success",
    description: "Software Support Specialist & Customer Success Manager (airline account) | MSc Advanced Computer Science (Merit) | QMUL",
    creator: "@Amrit004",
    images: ["https://apsk-dev.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://apsk-dev.vercel.app" />
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect width='48' height='32' rx='4' fill='%233b82f6'/%3E%3Ctext x='24' y='22' font-family='Arial' font-size='14' font-weight='bold' fill='white' text-anchor='middle'%3EAPSK%3C/text%3E%3C/svg%3E" type="image/svg+xml" />
        <link rel="alternate" hrefLang="en" href="https://apsk-dev.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Amritpal Singh Kaur",
              "url": "https://apsk-dev.vercel.app",
              "jobTitle": "Software Support Specialist & Customer Success Manager",
              "email": "ap.singhkaur@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "addressCountry": "UK"
              },
              "sameAs": [
                "https://github.com/Amrit004",
                "https://www.linkedin.com/in/amritpal-singh-kaur-b54b9a1b1"
              ],
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "Queen Mary University of London",
                  "description": "MSc Advanced Computer Science (Merit)"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Staffordshire University",
                  "description": "BSc (Hons) Computer Science"
                }
              ],
              "worksFor": [
                { "@type": "Organization", "name": "Brock Solutions" },
                { "@type": "Organization", "name": "Bank of America" },
                { "@type": "Organization", "name": "Amadeus" },
                { "@type": "Organization", "name": "ENI" }
              ],
              "knowsAbout": ["JavaScript", "TypeScript", "Python", "Java", "React", "Node.js", "AWS", "Azure", "Windows Server", "SQL", "Incident Management", "Root Cause Analysis", "Customer Success", "Stakeholder Management", "SLA Management", "Airline Operations", "Baggage Handling Systems", "Cloud Security", "Cybersecurity"]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
