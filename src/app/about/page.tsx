import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Karur Annapoorna - Our Heritage and Vision",
  description: "Learn about the heritage of Karur Annapoorna. Our journey from a traditional kitchen to a modern vegetarian destination. Discover our vision and mission.",
  keywords: "About Karur Annapoorna, Restaurant History, Pure Veg Vision, Mission Statement, Traditional Kitchen Karur",
  openGraph: {
    title: "Our Story | Karur Annapoorna",
    description: "A legacy of pure taste and authentic South Indian traditions.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
