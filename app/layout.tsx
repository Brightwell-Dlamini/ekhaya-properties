import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ekhaya-properties.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ekhaya Properties | Premium Real Estate Advisory in Eswatini",
    template: "%s | Ekhaya Properties",
  },
  description:
    "Ekhaya Properties is a leading real estate agency in Eswatini, offering curated property advisory, exclusive listings, and tailored investment advice in Mbabane, Ezulwini, and beyond.",
  keywords: [
    "Real Estate Eswatini",
    "Property Mbabane",
    "Homes for Sale Eswatini",
    "Ezulwini Property",
    "Ekhaya Properties",
    "Buy House Swaziland",
    "Rent Apartment Mbabane",
  ],
  authors: [{ name: "Ekhaya Properties" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_SZ",
    url: siteUrl,
    siteName: "Ekhaya Properties",
    title: "Ekhaya Properties | Find Your Home in Eswatini",
    description:
      "Curated property advisory and exclusive listings in the heart of the Kingdom of Eswatini.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Ekhaya Properties - Luxury Real Estate Eswatini",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekhaya Properties | Premium Real Estate in Eswatini",
    description:
      "Curated property advisory and exclusive listings in Mbabane, Ezulwini and across the Kingdom.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Ekhaya Properties",
  description:
    "Premium real estate agency and property advisory in Eswatini.",
  url: siteUrl,
  email: "info@ekhaya.co.sz",
  telephone: "+26876780729",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Msakato Street",
    addressLocality: "Mbabane",
    addressCountry: "SZ",
  },
  areaServed: {
    "@type": "Country",
    name: "Eswatini",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
