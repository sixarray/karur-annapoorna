"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="about-page">
      <Navbar />

      {/* Premium Header */}
      <section className="menu-header-v4">
        <div className="container">
          <span className="subtitle fade-up">About Us</span>
          <h1 className="fade-up"><span>Our Story</span></h1>
        </div>
      </section>

      {/* Description Section */}
      <section className="about-section">
        <div className="container">
          <ScrollReveal>
            <div className="about-content-grid">
              <div className="about-text">
                <span className="subtitle">Our Story</span>
                <h2>A Legacy of Pure Taste</h2>
                <p>
                  Karur Annapoorna is more than just a restaurant; it is a celebration of authentic South Indian 
                  vegetarian cuisine. For years, we have been dedicated to serving meals that are not only 
                  delicious but also prepared with the highest standards of hygiene and tradition.
                </p>
                <p>
                  Every dish we serve is a testament to our passion for quality. From the first steam of our 
                  morning idlis to the rich aroma of our evening specialties, we ensure that every bite 
                  brings back the comfort of home-cooked food.
                </p>
              </div>
              <div className="about-image">
                <div className="image-stack" style={{ position: 'relative', height: '400px' }}>
                  <Image 
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                    alt="Healthy Vegetarian Food" 
                    fill 
                    className="rounded-30"
                    style={{ objectFit: 'cover', borderRadius: '30px' }}
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="about-vision-mission">
              <div className="vision-mission-card">
                <div className="card-icon">🌟</div>
                <h3>Our Vision</h3>
                <p>
                  To be the most trusted name in pure vegetarian dining, recognized for our commitment 
                  to authenticity, innovation, and the well-being of our guests across every community we serve.
                </p>
              </div>
              <div className="vision-mission-card">
                <div className="card-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>
                  To provide a high-quality, transactional-free dining experience that emphasizes 
                  purity, flavor, and love in every meal, fostering a space where families can create 
                  lasting memories over great food.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
