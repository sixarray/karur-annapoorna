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
      { name: "Ghee Podi Idly", image: "/items/ghee-podi-idly.jpg", desc: "Steamed rice cakes with spicy podi and pure ghee." },
      { name: "Medhu Vada", image: "/items/placeholder.jpg", desc: "Crispy lentil donuts served with chutney and sambar." },
      { name: "Ghee Onion Rava Roast", image: "/items/placeholder.jpg", desc: "Crispy semolina crepe loaded with golden onions." },
      { name: "Pongal", image: "/items/placeholder.jpg", desc: "Traditional mashed rice and lentil comfort meal." },
      { name: "Masala Dosa", image: "/items/placeholder.jpg", desc: "Crispy crepe stuffed with tempered potato masala." },
      { name: "Poori Masala", image: "/items/placeholder.jpg", desc: "Fluffy fried bread served with spicy potato curry." }
    ]
  },
  {
    category: "Lunch",
    tagline: "Hearty and authentic South Indian meals.",
    items: [
      { name: "Full Meals", image: "/items/veg-meals.jpg", desc: "A traditional feast with a variety of South Indian delicacies." },
      { name: "Mini Meals", image: "/items/placeholder.jpg", desc: "A balanced portion of rice, sambar, and side dishes." },
      { name: "Sambar Rice", image: "/items/placeholder.jpg", desc: "Slow-cooked rice blended with aromatic lentil sambar." },
      { name: "Curd Rice", image: "/items/placeholder.jpg", desc: "Refreshing yogurt rice tempered with mustard and chilies." },
      { name: "Veg Biryani", image: "/items/veg-briyaani.jpg", desc: "Fragrant basmati rice cooked with fresh seasonal vegetables." },
      { name: "Special Variety Rice", image: "/items/placeholder.jpg", desc: "A rotating selection of lemon, tomato, or tamarind rice." }
    ]
  },
  {
    category: "Parotta",
    tagline: "Crispy, layered, and served with flavorful salna.",
    items: [
      { name: "Veechu Parotta", image: "/items/placeholder.jpg", desc: "Thin, hand-stretched layered flatbread." },
      { name: "Ceylon Parotta", image: "/items/placeholder.jpg", desc: "Square-shaped layered parotta with extra crispiness." },
      { name: "Chilli Parotta", image: "/items/placeholder.jpg", desc: "Diced parotta tossed in spicy sauces and vegetables." },
      { name: "Kothu Parotta", image: "/items/placeholder.jpg", desc: "Shredded parotta beaten with spices and veg gravy." },
      { name: "Bun Parotta", image: "/items/placeholder.jpg", desc: "Thick, soft, and fluffy layered Madurai style parotta." }
    ]
  },
  {
    category: "Starters",
    tagline: "Crispy and spicy treats to kickstart your meal.",
    items: [
      { name: "Gobi 65", image: "/items/placeholder.jpg", desc: "Spicy and deep-fried cauliflower florets." },
      { name: "Mushroom Pepper Fry", image: "/items/mushroom-fry.jpg", desc: "Sautéed mushrooms with a bold black pepper kick." },
      { name: "Paneer Tikka", image: "/items/placeholder.jpg", desc: "Grilled cottage cheese marinated in Indian spices." },
      { name: "Veg Lollipop", image: "/items/placeholder.jpg", desc: "Crispy vegetable balls served with spicy dip." },
      { name: "Baby Corn Manchurian", image: "/items/placeholder.jpg", desc: "Baby corn tossed in a tangy Indo-Chinese sauce." }
    ]
  },
  {
    category: "Special Dosa",
    tagline: "A variety of crispy crepes with unique fillings.",
    items: [
      { name: "Paper Roast", image: "/items/placeholder.jpg", desc: "Ultra-thin and long crispy golden crepe." },
      { name: "Ghee Roast", image: "/items/placeholder.jpg", desc: "Crispy dosa roasted generously with pure ghee." },
      { name: "Podaneer Dosa", image: "/items/placeholder.jpg", desc: "Dosa topped with spicy lentil powder and butter." },
      { name: "Mysore Masala Dosa", image: "/items/placeholder.jpg", desc: "Crispy dosa with spicy chutney and potato filling." },
      { name: "Family Roast", image: "/items/placeholder.jpg", desc: "Extra large dosa meant for sharing with family." }
    ]
  },
  {
    category: "Tandoori",
    tagline: "Freshly baked in the traditional clay oven.",
    items: [
      { name: "Butter Naan", image: "/items/placeholder.jpg", desc: "Soft leavened bread brushed with melted butter." },
      { name: "Garlic Naan", image: "/items/placeholder.jpg", desc: "Naan topped with minced garlic and coriander." },
      { name: "Kulcha", image: "/items/placeholder.jpg", desc: "Stuffed leavened bread baked in the tandoor." },
      { name: "Roti", image: "/items/placeholder.jpg", desc: "Whole wheat unleavened bread baked in clay oven." },
      { name: "Stuffed Paratha", image: "/items/placeholder.jpg", desc: "Wheat paratha filled with spiced mashed potatoes." }
    ]
  },
  {
    category: "Dessert",
    tagline: "Sweet endings to your perfect meal.",
    items: [
      { name: "Mysore Pak", image: "/items/placeholder.jpg", desc: "Classic ghee-rich melt-in-your-mouth sweet." },
      { name: "Gulab Jamun", image: "/items/placeholder.jpg", desc: "Golden fried balls soaked in saffron syrup." },
      { name: "Rasmalai", image: "/items/placeholder.jpg", desc: "Soft paneer balls in sweetened, thickened milk." },
      { name: "Elaneer Payasam", image: "/items/placeholder.jpg", desc: "Tender coconut milk pudding - a coastal specialty." },
      { name: "Fruit Salad with Ice Cream", image: "/items/placeholder.jpg", desc: "Seasonal fruits topped with vanilla ice cream." }
    ]
  }
];

export default function MenuContent() {
  const [activeTab, setActiveTab] = useState(menuData[0].category);

  const selectedCategory = useMemo(() => {
    return menuData.find(cat => cat.category === activeTab);
  }, [activeTab]);

  return (
    <main className="menu-page-v5">
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

      <section className="menu-content-v5 container">
        <ScrollReveal>
          <div className="category-info-v5">
            <span className="cat-badge">Now Serving</span>
            <h2>{selectedCategory?.category}</h2>
            <p>{selectedCategory?.tagline}</p>
          </div>
        </ScrollReveal>

        <div key={activeTab} className="menu-grid-v5">
          {selectedCategory?.items.map((item, index) => (
            <ScrollReveal key={item.name}>
              <div
                className="menu-item-card-v5"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="item-image-v5">
                  <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
                  <div className="veg-indicator">
                    <div className="veg-dot"></div>
                  </div>
                </div>
                <div className="item-details-v5">
                  <div className="item-header-v5">
                    <h3>{item.name}</h3>
                  </div>
                  <p className="item-desc-v5">{item.desc}</p>
                  <div className="item-footer-v5">
                  </div>
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
