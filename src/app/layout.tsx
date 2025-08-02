import Header from "@/components/header";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const BeVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam",
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "TX Body - Building Tools for a Decentralized World",
    template: "%s | TX Body",
  },
  description:
    "Open-source infrastructure and developer tools for the next generation of blockchain applications. Trusted by over three million developers and teams worldwide.",
  keywords: [
    "blockchain",
    "web3",
    "developer tools",
    "decentralized",
    "open source",
    "infrastructure",
    "cryptocurrency",
    "smart contracts",
  ],
  authors: [{ name: "TX Body Team" }],
  creator: "TX Body",
  publisher: "TX Body",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://txbody.com",
    siteName: "TX Body",
    title: "TX Body - Building Tools for a Decentralized World",
    description:
      "Open-source infrastructure and developer tools for the next generation of blockchain applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TX Body - Blockchain Developer Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TX Body - Building Tools for a Decentralized World",
    description:
      "Open-source infrastructure and developer tools for the next generation of blockchain applications.",
    images: ["/twitter-image.png"],
    creator: "@txbody",
    site: "@txbody",
  },
  // verification: {
  //   google: "your-google-site-verification",
  //   yandex: "your-yandex-verification",
  // },
  alternates: {
    canonical: "https://txbody.com",
  },
  category: "technology",
};
const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TX Body",
  url: "https://txbody.com",
  logo: "https://txbody.com/logo.png",
  description:
    "Open-source infrastructure and developer tools for the next generation of blockchain applications.",
  foundingDate: "2020", // Adjust as needed
  industry: "Software Development",
  numberOfEmployees: "11-50", // Adjust as needed
  address: {
    "@type": "PostalAddress",
    addressCountry: "US", // Adjust as needed
  },
  sameAs: [
    "https://github.com/txbody",
    "https://twitter.com/txbody",
    "https://linkedin.com/company/txbody",
  ],
  offers: {
    "@type": "Offer",
    description: "Blockchain developer tools and infrastructure",
    category: "Software Development Tools",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TX Body Developer Tools",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Cross-platform",
  description:
    "Open-source infrastructure and developer tools for blockchain applications",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  creator: {
    "@type": "Organization",
    name: "TX Body",
  },
  downloadUrl: "https://github.com/txbody",
  softwareVersion: "Latest",
  releaseNotes: "Latest updates and improvements",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body className={`${BeVietnam.variable} antialiased`}>
        <div className="relative ">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
