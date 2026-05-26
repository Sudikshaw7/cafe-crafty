import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">Café Crafty</div>
            <p className="footer-tagline">A warm, botanical café in the heart of Bandra. Brewing happiness since 2019.</p>
            <div className="footer-social">
              {['📸','𝕏','📘','🎵'].map((icon, i) => (
                <a key={i} href="#" aria-label="Social">{icon}</a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              {[['Home','#hero'],['About','#about'],['Menu','#menu'],['Gallery','#gallery'],['Reserve','#reservation']].map(([label, href]) => (
                <li key={label}><a href={href} onClick={(e) => { e.preventDefault(); handleNav(href); }}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Menu</h4>
            <ul>
              {['Coffee','Teas & Drinks','Breakfast','Brunch','Pastries & Bakes','Seasonal Specials'].map(item => (
                <li key={item}><a href="#menu" onClick={(e) => { e.preventDefault(); handleNav('#menu'); }}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+919820012345">+91 98200 12345</a></li>
              <li><a href="mailto:hello@cafecrafty.in">hello@cafecrafty.in</a></li>
              <li><a href="#">14 Bloom Lane, Bandra West</a></li>
              <li><a href="#">Mumbai 400 050</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} cafecrafty. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}