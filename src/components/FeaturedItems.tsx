"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const items = [
  { id: 1, name: "Ghee Podi Idly", category: "Breakfast", description: "Soft idlis coated with aromatic spice powder and pure ghee.", image: "/items/ghee-podi-idly.jpg" },
  { id: 2, name: "Signature Veg Meals", category: "Lunch", description: "Authentic South Indian feast with a variety of traditional curries.", image: "/items/veg-meals.jpg" },
  { id: 3, name: "Veg Biryani", category: "Lunch", description: "Fragrant basmati rice cooked with garden-fresh vegetables.", image: "/items/veg-briyaani.jpg" },
  { id: 4, name: "Mushroom Pepper Fry", category: "Starters", description: "Crispy sautéed mushrooms tossed with black pepper.", image: "/items/mushroom-fry.jpg" },
  { id: 5, name: "Ghee Onion Rava Roast", category: "Special Dosa", description: "Crispy semolina crepe loaded with onions and pure ghee.", image: "/items/placeholder.jpg" },
  { id: 6, name: "Special Mysore Pak", category: "Sweets", description: "Melt-in-the-mouth traditional sweet crafted with pure ghee.", image: "/items/placeholder.jpg" }
];

// Doubling items for infinite loop illusion
const infiniteItems = [...items, ...items];

export default function FeaturedItems() {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 992 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextStep = useCallback(() => {
    setIndex((prev) => (prev + 1 >= items.length ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(nextStep, 4000);
    return () => clearInterval(interval);
  }, [nextStep]);

  const onDragEnd = (event: any, info: any) => {
    const shift = info.offset.x;
    if (Math.abs(shift) > 50) {
      if (shift > 0) {
        setIndex((prev) => (prev - 1 < 0 ? items.length - 1 : prev - 1));
      } else {
        setIndex((prev) => (prev + 1 >= items.length ? 0 : prev + 1));
      }
    }
  };

  return (
    <section id="featured" className="featured-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Our Specialties</span>
          <h2>Signature Delicacies</h2>
          <p>Hand-picked favorites from our authentic pure vegetarian menu.</p>
        </div>

        <div className="framer-carousel-wrapper">
          <div className="carousel-overflow" ref={containerRef}>
            <motion.div
              className="framer-items-track"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={onDragEnd}
              animate={{ x: `-${index * (100 / itemsPerView)}%` }}
              transition={{ 
                type: "spring", 
                stiffness: 150, 
                damping: 25,
                mass: 0.8
              }}
            >
              {infiniteItems.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="framer-item-card">
                  <div className="item-image">
                    <Image src={item.image} alt={item.name} fill />
                    <span className="category-tag">{item.category}</span>
                  </div>
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="carousel-indicators">
            {items.map((_, idx) => (
              <button
                key={idx}
                className={`indicator ${index % items.length === idx ? "active" : ""}`}
                onClick={() => setIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="featured-cta">
            <a href="/menu" className="btn-v6-primary">View Full Menu</a>
          </div>
        </div>
      </div>
    </section>
  );
}
