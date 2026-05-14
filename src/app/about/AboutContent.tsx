"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { Leaf, History, Sparkles, Heart } from "lucide-react";

export default function AboutContent() {
  return (
    <main className="about-page">
      <Navbar />

      <section className="menu-header-v4">
        <div className="container">
          <span className="subtitle fade-up">About Us</span>
          <h1 className="fade-up"><span>Our Story</span></h1>
        </div>
      </section>

      {/* Philosophy & Story Section */}
      <section className="about-story-modern">
        <div className="container">
          <div className="about-modern-grid">
            <ScrollReveal>
              <div className="image-composition">
                <Image 
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Traditional Cooking" 
                  width={600}
                  height={800}
                  className="main-img"
                />
                <Image 
                  src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Fresh Ingredients" 
                  width={400}
                  height={500}
                  className="float-img"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="philosophy-content">
                <span className="subtitle" style={{ textAlign: 'left', margin: '0 0 1rem 0' }}>The Philosophy</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '2rem' }}>
                  Taste is a Language <br/>We Speak <span style={{ color: '#3d1c02', fontStyle: 'normal' }}>Fluently</span>.
                </h2>
                <div className="philosophy-card">
                  <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                    Karur Annapoorna was born from a simple yet profound vision: to bring the 
                    unmatched purity of traditional South Indian vegetarian cuisine to the 
                    modern table. We believe that food is not just sustenance; it is a 
                    bridge to our culture and a celebration of life.
                  </p>
                  <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555', marginTop: '1.5rem' }}>
                    Every grain of rice and every pinch of spice is selected with obsessive care. 
                    Our kitchens are sanctuaries where age-old recipes meet modern hygiene 
                    standards, ensuring that every meal is a masterpiece of health and flavor.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission High-Impact */}
      <section className="vision-mission-modern" style={{ background: '#3d1c02', padding: '80px 0' }}>
        <div className="container">
          <div className="about-modern-grid" style={{ gridTemplateColumns: '1fr 1.2fr', gap: '3rem', padding: '0' }}>
            <ScrollReveal>
              <div className="vision-text" style={{ color: '#E6CCB2' }}>
                <h2 style={{ color: '#ffffff', fontSize: '2.2rem', marginBottom: '1.5rem' }}>Our Vision</h2>
                <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.7 }}>
                  To be the global benchmark for pure vegetarian dining, where every guest 
                  experiences the divine harmony of taste, health, and hospitality. We strive 
                  to innovate while staying rooted in our rich culinary heritage.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mission-card-modern" style={{ background: 'rgba(230, 204, 178, 0.1)', padding: '3rem', borderRadius: '40px', border: '1px solid rgba(230, 204, 178, 0.2)' }}>
                <span className="subtitle" style={{ color: '#E6CCB2', textAlign: 'left', margin: '0 0 1rem 0' }}>Our Mission</span>
                <p style={{ color: '#ffffff', fontSize: '1.2rem', lineHeight: 1.8, fontStyle: 'normal' }}>
                  "To deliver an uncompromising dining experience that honors the purity 
                  of nature and the warmth of Indian tradition, ensuring every guest leaves 
                  with a heart as full as their plate."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="pillars-section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="subtitle">Our Principles</span>
            <h2 style={{ fontSize: '2.5rem' }}>The Pillars of Annapoorna</h2>
          </div>
          
          <div className="about-modern-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', padding: '0' }}>
            {[
              { title: "Uncompromising Purity", desc: "100% vegetarian ingredients sourced from the most trusted organic farms.", Icon: Leaf },
              { title: "Traditional Heritage", desc: "Recipes passed down through generations, preserved in their most authentic form.", Icon: History },
              { title: "Modern Hygiene", desc: "State-of-the-art kitchen facilities maintaining peak global sanitation standards.", Icon: Sparkles },
              { title: "Service with Love", desc: "A commitment to hospitality that makes every guest feel like part of our family.", Icon: Heart }
            ].map((pillar, i) => (
              <ScrollReveal key={i}>
                <div className="philosophy-card" style={{ textAlign: 'center', height: '100%', padding: '2.5rem 2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <pillar.Icon size={48} strokeWidth={1.5} style={{ color: '#3d1c02' }} />
                  </div>
                  <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>{pillar.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>{pillar.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
