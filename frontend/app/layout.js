import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://whitespace.app";
const title = "Whitespace — Project Management Software";
const description =
  "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Whitespace",
  },
  description,
  keywords: [
    "project management software",
    "team collaboration",
    "task management",
    "project planning",
    "Whitespace",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Whitespace",
    title,
    description,
    images: [
      {
        url: "/WorkTogether.png",
        width: 500,
        height: 500,
        alt: "Whitespace project management software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/WorkTogether.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Whitespace",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description,
  url: siteUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
