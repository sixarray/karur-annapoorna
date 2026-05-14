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
  title: "Karur Annapoorna | 100% Pure Vegetarian Restaurant",
  description: "Experience the exquisite flavors of Karur Annapoorna, a 100% Pure Vegetarian destination. From traditional meals to premium sweets, we bring you the finest culinary experience.",
  keywords: ["Pure Vegetarian", "Restaurant", "Karur", "Annapoorna", "Traditional Food", "Sweets"],
  openGraph: {
    title: "Karur Annapoorna | 100% Pure Vegetarian Restaurant",
    description: "Experience the exquisite flavors of Karur Annapoorna, a 100% Pure Vegetarian destination.",
    type: "website",
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
