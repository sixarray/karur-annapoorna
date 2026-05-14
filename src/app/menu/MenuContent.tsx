"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const menuData = [
  {
    category: "Breakfast",
    tagline: "Start your day with our traditional morning delicacies.",
    items: [
      { name: "Ghee Podi Idly", image: "/items/ghee-podi-idly.jpg" },
      { name: "Medhu Vada", image: "/items/placeholder.jpg" },
      { name: "Ghee Onion Rava Roast", image: "/items/placeholder.jpg" },
      { name: "Pongal", image: "/items/placeholder.jpg" },
      { name: "Masala Dosa", image: "/items/placeholder.jpg" },
      { name: "Poori Masala", image: "/items/placeholder.jpg" }
    ]
  },
  {
    category: "Lunch",
    tagline: "Hearty and authentic South Indian meals.",
    items: [
      { name: "Full Meals", image: "/items/veg-meals.jpg" },
      { name: "Mini Meals", image: "/items/placeholder.jpg" },
      { name: "Sambar Rice", image: "/items/placeholder.jpg" },
      { name: "Curd Rice", image: "/items/placeholder.jpg" },
      { name: "Veg Biryani", image: "/items/veg-briyaani.jpg" },
      { name: "Special Variety Rice", image: "/items/placeholder.jpg" }
    ]
  },
  {
    category: "Parotta",
    tagline: "Crispy, layered, and served with flavorful salna.",
    items: [
      { name: "Veechu Parotta", image: "/items/placeholder.jpg" },
      { name: "Ceylon Parotta", image: "/items/placeholder.jpg" },
      { name: "Chilli Parotta", image: "/items/placeholder.jpg" },
      { name: "Kothu Parotta", image: "/items/placeholder.jpg" },
      { name: "Bun Parotta", image: "/items/placeholder.jpg" }
    ]
  },
  {
    category: "Starters",
    tagline: "Crispy and spicy treats to kickstart your meal.",
    items: [
      { name: "Gobi 65", image: "/items/placeholder.jpg" },
      { name: "Mushroom Pepper Fry", image: "/items/mushroom-fry.jpg" },
      { name: "Paneer Tikka", image: "/items/placeholder.jpg" },
      { name: "Veg Lollipop", image: "/items/placeholder.jpg" },
      { name: "Baby Corn Manchurian", image: "/items/placeholder.jpg" }
    ]
  },
  {
    category: "Special Dosa",
    tagline: "A variety of crispy crepes with unique fillings.",
    items: [
      { name: "Paper Roast", image: "/items/placeholder.jpg" },
      { name: "Ghee Roast", image: "/items/placeholder.jpg" },
      { name: "Podaneer Dosa", image: "/items/placeholder.jpg" },
      { name: "Mysore Masala Dosa", image: "/items/placeholder.jpg" },
      { name: "Family Roast", image: "/items/placeholder.jpg" }
    ]
  },
  {
    category: "Tandoori",
    tagline: "Freshly baked in the traditional clay oven.",
    items: [
      { name: "Butter Naan", image: "/items/placeholder.jpg" },
      { name: "Garlic Naan", image: "/items/placeholder.jpg" },
      { name: "Kulcha", image: "/items/placeholder.jpg" },
      { name: "Roti", image: "/items/placeholder.jpg" },
      { name: "Stuffed Paratha", image: "/items/placeholder.jpg" }
    ]
  },
  {
    category: "Dessert",
    tagline: "Sweet endings to your perfect meal.",
    items: [
      { name: "Mysore Pak", image: "/items/placeholder.jpg" },
      { name: "Gulab Jamun", image: "/items/placeholder.jpg" },
      { name: "Rasmalai", image: "/items/placeholder.jpg" },
      { name: "Elaneer Payasam", image: "/items/placeholder.jpg" },
      { name: "Fruit Salad with Ice Cream", image: "/items/placeholder.jpg" }
    ]
  }
];

export default function MenuContent() {
  const [activeTab, setActiveTab] = useState(menuData[0].category);

  const selectedCategory = useMemo(() => {
    return menuData.find(cat => cat.category === activeTab);
  }, [activeTab]);

  return (
    <main className="menu-page-v4">
      <Navbar />

      <section className="menu-header-v4">
        <div className="container">
          <span className="subtitle fade-up">Our Selection</span>
          <h1 className="fade-up"><span>Menu</span></h1>
        </div>
      </section>

      <section className="menu-tabs-section">
        <div className="container">
          <ScrollReveal>
            <div className="menu-tabs-v4">
              <div className="tabs-scroll-wrapper">
                {menuData.map((cat) => (
                  <button
                    key={cat.category}
                    className={`tab-btn-v4 ${activeTab === cat.category ? 'active' : ''}`}
                    onClick={() => setActiveTab(cat.category)}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="menu-content-v4 container">
        <ScrollReveal>
          <div className="category-info-v4">
            <h2>{selectedCategory?.category}</h2>
            <p>{selectedCategory?.tagline}</p>
          </div>
        </ScrollReveal>

        <div key={activeTab} className="items-slide-container-v4">
          {selectedCategory?.items.map((item, index) => (
            <ScrollReveal key={item.name}>
              <div
                className="item-slide-card-v4"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="item-slide-inner-v4">
                  <div className="item-card-image">
                    <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="item-card-content">
                    <div className="item-number-v4">{String(index + 1).padStart(2, '0')}</div>
                    <div className="item-info-v4">
                      <h3>{item.name}</h3>
                      <p>100% Pure Vegetarian Authentic Dish</p>
                    </div>
                  </div>
                  <div className="item-accent-v4"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
