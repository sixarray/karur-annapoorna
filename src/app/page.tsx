import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedItems from "@/components/FeaturedItems";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedItems />
      <Footer />
    </main>
  );
}
