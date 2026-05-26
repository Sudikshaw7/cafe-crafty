import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Location.css";

const hours = [
  { day: "Monday", time: "7:30 AM – 9 PM" },
  { day: "Tuesday", time: "7:30 AM – 9 PM" },
  { day: "Wednesday", time: "7:30 AM – 9 PM" },
  { day: "Thursday", time: "7:30 AM – 9 PM" },
  { day: "Friday", time: "7:30 AM – 10 PM" },
  { day: "Saturday", time: "8 AM – 10 PM" },
  { day: "Sunday", time: "8 AM – 9 PM" },
];

export default function Location() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".location-content",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );
      gsap.fromTo(
        ".location-map",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="location" id="location" ref={sectionRef}>
      <div className="container">
        <div className="location-inner">
          <div className="location-content">
            <p className="section-label" style={{ "--caramel": "#D4A853" }}>
              Find Us
            </p>
            <h2 className="section-title">
              Come Visit <em>Us</em>
            </h2>
            <p className="location-body">
              Tucked into the heart of Bandra West, Café Crafty is your
              neighbourhood retreat. Park yourself in a window seat, let the
              light in, and stay a while.
            </p>

            <div className="location-address">
              <strong>Café Crafty </strong>
              <p>
                14 Bloom Lane, Near Carter Road
                <br />
                Bandra West, Mumbai 400 050
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ↗ Open in Google Maps
              </a>
            </div>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 16,
              }}
            >
              Hours
            </p>
            <div className="location-hours">
              {hours.map((h) => (
                <div className="location-hour-row" key={h.day}>
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>

            <a
              href="tel:+919820012345"
              className="btn-outline"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                color: "var(--white)",
              }}
            >
              📞 Call Us
            </a>
          </div>

          <div className="location-map">
            <iframe
              title="Café Crafty   location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.247316406!2d72.8234!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b888b29c4d%3A0xb50a7b0d4e0d!2sBandra%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1700000000000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="location-map-pin" />
          </div>
        </div>
      </div>
    </section>
  );
}
