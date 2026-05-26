import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Menu.css";

const menuData = {
  Coffee: [
    {
      name: "Sunrise Cortado",
      desc: "Double espresso with micro-steamed oat milk and a hint of cardamom honey.",
      price: "₹280",
      badge: "Popular",
      tag: "Signature",
    },
    {
      name: "Cold Brew Tonic",
      desc: "18-hour cold-brew over Indian tonic, orange peel, and crushed ice.",
      price: "₹320",
      badge: "Vegan",
      tag: "Seasonal",
    },
    {
      name: "Bloom Flat White",
      desc: "Ristretto-based, full-cream steamed milk, silky microfoam art.",
      price: "₹260",
      badge: null,
      tag: "Classic",
    },
    {
      name: "Honey Lavender Latte",
      desc: "Espresso, lavender syrup, local honey, whole milk, and dried petals.",
      price: "₹340",
      badge: "Popular",
      tag: "Botanical",
    },
    {
      name: "Filter Kaapi",
      desc: "Traditional South Indian decoction with frothy buffalo milk.",
      price: "₹190",
      badge: null,
      tag: "Heritage",
    },
    {
      name: "Spiced Chai Latte",
      desc: "House masala blend, ginger, cinnamon, oat milk foam.",
      price: "₹220",
      badge: "Vegan",
      tag: "Spice",
    },
  ],
  Food: [
    {
      name: "Avocado Toast",
      desc: "Multigrain sourdough, smashed avocado, cherry tomato, micro-herbs, chilli oil.",
      price: "₹380",
      badge: "Popular",
      tag: "All-Day",
    },
    {
      name: "Croissant Sandwich",
      desc: "Butter croissant, brie, fig jam, arugula, honey-mustard.",
      price: "₹420",
      badge: null,
      tag: "Breakfast",
    },
    {
      name: "Shakshuka Bowl",
      desc: "Spiced tomato & pepper sauce, poached eggs, feta, warm pita.",
      price: "₹450",
      badge: "Popular",
      tag: "Brunch",
    },
    {
      name: "Garden Grain Bowl",
      desc: "Quinoa, roasted seasonal veg, tahini dressing, toasted seeds.",
      price: "₹480",
      badge: "Vegan",
      tag: "Wholesome",
    },
    {
      name: "Crafty Club Sandwich",
      desc: "Triple-decker with turkey, bacon, lettuce, tomato, herb aioli.",
      price: "₹520",
      badge: null,
      tag: "Classic",
    },
    {
      name: "Wild Mushroom Tart",
      desc: "Shortcrust pastry, gruyère custard, caramelised mushrooms, thyme.",
      price: "₹440",
      badge: null,
      tag: "Artisan",
    },
  ],
  Pastries: [
    {
      name: "Cardamom Kouign-Amann",
      desc: "Flaky, caramelised Breton cake with cardamom sugar and sea salt.",
      price: "₹220",
      badge: "Popular",
      tag: "Signature",
    },
    {
      name: "Pistachio Croissant",
      desc: "Double-baked, filled with pistachio frangipane, topped with praline.",
      price: "₹280",
      badge: "Popular",
      tag: "Bestseller",
    },
    {
      name: "Lemon Tart",
      desc: "Almond shell, lemon curd, torched Italian meringue, candied zest.",
      price: "₹260",
      badge: null,
      tag: "Classic",
    },
    {
      name: "Date Walnut Loaf",
      desc: "House-baked with jaggery, walnuts, and warming spices. Gluten-free option.",
      price: "₹180",
      badge: "Vegan",
      tag: "Wholesome",
    },
  ],
  Drinks: [
    {
      name: "Hibiscus Cooler",
      desc: "Dried hibiscus, rose water, lime, honey, sparkling water.",
      price: "₹220",
      badge: "Vegan",
      tag: "Botanical",
    },
    {
      name: "Mango Lassi",
      desc: "Alphonso mango, whole yoghurt, cardamom, saffron strands.",
      price: "₹280",
      badge: "Popular",
      tag: "Seasonal",
    },
    {
      name: "Golden Turmeric Milk",
      desc: "Oat milk, turmeric, black pepper, ginger, coconut sugar.",
      price: "₹240",
      badge: "Vegan",
      tag: "Wellness",
    },
    {
      name: "House Lemonade",
      desc: "Cold-pressed lemon, fresh mint, basil seeds, raw sugar.",
      price: "₹180",
      badge: null,
      tag: "Fresh",
    },
  ],
};

const tabs = Object.keys(menuData);

export default function Menu() {
  const [activeTab, setActiveTab] = useState("Coffee");
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".menu-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleTabChange = (tab) => {
    gsap.to(gridRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        setActiveTab(tab);
        gsap.fromTo(
          gridRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
        );
      },
    });
  };

  const items = menuData[activeTab];

  return (
    <section className="menu" id="menu" ref={sectionRef}>
      <div className="container">
        <div className="menu-header">
          <p className="section-label">Crafted Daily</p>
          <h2 className="section-title">
            Our <em>Menu</em>
          </h2>
          <p>
            Every item made with intention, every ingredient chosen with love.
          </p>
        </div>

        <div className="menu-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`menu-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="menu-grid" ref={gridRef}>
          {items.map((item, i) => (
            <div className="menu-item" key={item.name}>
              <div className="menu-item-tag">{item.tag}</div>
              <div className="menu-item-name">{item.name}</div>
              <div className="menu-item-desc">{item.desc}</div>
              <div className="menu-item-footer">
                <span className="menu-item-price">{item.price}</span>
                {item.badge && (
                  <span
                    className={`menu-item-badge ${item.badge === "Popular" ? "popular" : ""}`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
