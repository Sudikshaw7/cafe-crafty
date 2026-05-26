import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/Navbar.css";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 },
    );

    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href, label) => {
    e.preventDefault();
    setActive(label);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#hero" className="navbar-logo">
        Café Crafty
      </a>

      <ul className="navbar-links">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className={active === label ? "active" : ""}
              onClick={(e) => handleNav(e, href, label)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#reservation"
        className="navbar-cta"
        onClick={(e) => handleNav(e, "#reservation", "")}
      >
        Reserve a Table
      </a>

      <button className="navbar-hamburger" aria-label="Menu">
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
