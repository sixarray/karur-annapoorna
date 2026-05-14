"use client";

import ScrollReveal from "./ScrollReveal";
import { Car, Bath, Wind, ShoppingBag } from "lucide-react";

const facilities = [
  {
    title: "Ample Parking",
    desc: "Spacious and secure parking area for a stress-free visit.",
    Icon: Car
  },
  {
    title: "Clean Restrooms",
    desc: "Well-maintained and hygienic facilities for all our guests.",
    Icon: Bath
  },
  {
    title: "AC Dining",
    desc: "Comfortable air-conditioned dining space for a pleasant experience.",
    Icon: Wind
  },
  {
    title: "Essential Store",
    desc: "Toys and quick essential items available right at our premises.",
    Icon: ShoppingBag
  }
];

export default function Facilities() {
  return (
    <section className="facilities-section" style={{ padding: '80px 0', background: '#fdfaf7' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="subtitle">Beyond The Plate</span>
            <h2>Our Facilities</h2>
            <p>We ensure your comfort and convenience are prioritized at every visit.</p>
          </div>
        </ScrollReveal>

        <div className="facilities-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {facilities.map((facility, i) => (
            <ScrollReveal key={i}>
              <div className="facility-card" style={{ 
                textAlign: 'center', 
                padding: '3rem 2rem', 
                background: '#ffffff', 
                borderRadius: '30px',
                boxShadow: '0 10px 30px rgba(61, 28, 2, 0.05)',
                border: '1px solid rgba(61, 28, 2, 0.03)',
                height: '100%'
              }}>
                <div style={{ 
                  display: 'inline-flex', 
                  padding: '20px', 
                  background: 'rgba(61, 28, 2, 0.05)', 
                  borderRadius: '20px',
                  marginBottom: '1.5rem',
                  color: '#3d1c02'
                }}>
                  <facility.Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 style={{ marginBottom: '1rem', color: '#3d1c02' }}>{facility.title}</h3>
                <p style={{ color: '#777', fontSize: '0.95rem', lineHeight: 1.6 }}>{facility.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
