import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/About.css";

const features = [
  {
    title: "Specialty Brews",
    desc: "Single-origin beans roasted in-house weekly",
  },
  {
    title: "Farm to Cup",
    desc: "Seasonal ingredients sourced from local farms",
  },
  {
    title: "Crafted with Love",
    desc: "Every dish made fresh, every morning",
  },
  {
    title: "Botanical Ambiance",
    desc: "Living walls and natural light throughout",
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-image-col",
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );
      gsap.fromTo(
        ".about-content",
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );
      gsap.fromTo(
        ".about-feature",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".about-features", start: "top 85%" },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-inner">
          <div className="about-image-col">
            <img
              className="about-img-main"
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80"
              alt="Café interior"
            />
            <img
              className="about-img-accent"
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80"
              alt="Coffee art"
            />
            <div className="about-badge">
              <span className="about-badge-num">8</span>
              <span className="about-badge-text">
                Years of
                <br />
                Warmth
              </span>
            </div>
          </div>

          <div className="about-content" ref={contentRef}>
            <p className="section-label">Our Story</p>
            <h2 className="section-title">
              Born from a <em>love of mornings</em>
            </h2>
            <p className="about-body">
              Café Crafty was born in 2019 with a simple belief: that a café
              should feel like a warm hug. We source the finest beans, grow our
              own herbs, and bake everything fresh each dawn. Our space is
              designed to slow you down, invite you in, and make you feel at
              home.
            </p>
            <a
              href="#menu"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#menu")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Our Menu
            </a>

            <div className="about-features">
              {features.map((f) => (
                <div className="about-feature" key={f.title}>
                  <div className="about-feature-icon">{f.icon}</div>
                  <div className="about-feature-text">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
