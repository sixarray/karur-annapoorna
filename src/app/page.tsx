import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedItems from "@/components/FeaturedItems";
import Facilities from "@/components/Facilities";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedItems />
      <Facilities />
      <Footer />
    </main>
  );
}
