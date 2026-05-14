import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Karur Annapoorna | 100% Pure Vegetarian Restaurant & Bakery",
  description: "Experience the authentic taste of South India at Karur Annapoorna. Traditional recipes, fresh ingredients, and a commitment to purity. Best vegetarian restaurant and bakery in Karur.",
  keywords: "Karur Annapoorna, Vegetarian Restaurant, Bakery in Karur, South Indian Food, Pure Veg, Traditional Indian Food, Best Restaurant in Karur, Sweets and Snacks",
  authors: [{ name: "Karur Annapoorna" }],
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicons/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/favicons/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/favicons/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/favicons/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/favicons/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/favicons/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/favicons/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/favicons/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/favicons/apple-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      { rel: "manifest", url: "/favicons/manifest.json" },
    ],
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/favicons/ms-icon-144x144.png",
    "theme-color": "#ffffff",
  },
  openGraph: {
    title: "Karur Annapoorna | 100% Pure Vegetarian Restaurant",
    description: "Experience the exquisite flavors of Karur Annapoorna, a 100% Pure Vegetarian destination.",
    siteName: "Karur Annapoorna",
    images: [
      {
        url: "/logo_color.png",
        width: 1200,
        height: 630,
        alt: "Karur Annapoorna Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karur Annapoorna | 100% Pure Vegetarian Restaurant",
    description: "Authentic South Indian vegetarian delicacies and fresh bakery products.",
    images: ["/logo_color.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
