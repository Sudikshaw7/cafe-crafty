import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import '../styles/Hero.css';

export default function Hero() {
  const bgRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const actionsRef = useRef(null);
  const statsRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Parallax on scroll
    const onScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY * 0.35;
        gsap.set(bgRef.current, { y });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Entrance timeline
    const tl = gsap.timeline({ delay: 0.8 });
    tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
      .to(titleRef.current, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' }, '-=0.5')
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.6')
      .to(actionsRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .to(statsRef.current, { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' }, '-=0.6')
      .to(scrollRef.current, { opacity: 1, duration: 0.8 }, '-=0.2');

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" ref={bgRef} />
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow" ref={eyebrowRef}>Est. 2019 · Mumbai, India</p>

        <h1 className="hero-title" ref={titleRef}>
          Where Sunlight
          <em>Meets Fresh Flavor</em>
        </h1>

        <p className="hero-subtitle" ref={subtitleRef}>
          A warm, botanical café crafted for cozy mornings, slow afternoons, and beautifully brewed moments. Every cup tells a story.
        </p>

        <div className="hero-actions" ref={actionsRef}>
          <a href="#menu" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Explore Menu
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#reservation" className="btn-outline" style={{ color: 'var(--white)', borderColor: 'rgba(255,255,255,0.4)' }} onClick={(e) => { e.preventDefault(); document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Reserve a Table
          </a>
        </div>
      </div>

      <div className="hero-stats" ref={statsRef} style={{ transform: 'translateX(40px)' }}>
        {[
          { n: '50+', label: 'Craft Drinks' },
          { n: '8', label: 'Years of Warmth' },
          { n: '4.9★', label: 'Guest Rating' },
        ].map(s => (
          <div className="hero-stat" key={s.label}>
            <div className="hero-stat-number">{s.n}</div>
            <div className="hero-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="hero-scroll-hint" ref={scrollRef}>
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}