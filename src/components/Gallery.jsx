import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Gallery.css";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&q=80",
    label: "Morning Light",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&q=80",
    label: "Latte Art",
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
    label: "Our Space",
  },
  {
    src: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=900&q=80",
    label: "Freshly Baked",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80",
    label: "Weekend Brunch",
  },
  {
    src: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=800&q=80",
    label: "Crafted Details",
  },
];

export default function Gallery() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".gallery-item",
        { opacity: 0, scale: 0.92 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ".gallery-masonry", start: "top 80%" },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="gallery" id="gallery" ref={sectionRef}>
      <div className="container">
        <div className="gallery-header">
          <div>
            <p className="section-label">Moments</p>
            <h2 className="section-title">
              A Glimpse of <em>Café Crafty </em>
            </h2>
          </div>
          <p>
            Where every corner is designed to inspire, and every visit becomes a
            memory worth keeping.
          </p>
        </div>

        <div className="gallery-masonry">
          {photos.map((p, i) => (
            <div className="gallery-item" key={i}>
              <img src={p.src} alt={p.label} loading="lazy" />
              <div className="gallery-item-overlay">
                <span className="gallery-item-label">{p.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
