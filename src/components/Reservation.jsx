import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Reservation.css";

export default function Reservation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reservation-info",
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
        ".reservation-form-wrap",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    gsap.to(formRef.current, {
      opacity: 0,
      scale: 0.97,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setSubmitted(true);
        gsap.fromTo(
          formRef.current,
          { opacity: 0, scale: 0.97 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.4)" },
        );
      },
    });
  };

  return (
    <section className="reservation" id="reservation" ref={sectionRef}>
      <div className="container">
        <div className="reservation-inner">
          <div className="reservation-info">
            <p className="section-label">Book a Table</p>
            <h2 className="section-title">
              Reserve Your <em>Moment</em>
            </h2>
            <p className="reservation-body">
              Whether it's a quiet breakfast for one or a celebratory brunch,
              we'll have your table ready, your coffee warm, and our team
              delighted to host you.
            </p>

            <div className="reservation-details">
              {[
                {
                  title: "Hours",
                  text: "Mon–Fri: 7:30 AM – 9 PM\nSat–Sun: 8 AM – 10 PM",
                },
                {  title: "Phone", text: "+91 98200 12345" },
                {
                  
                  title: "Address",
                  text: "14 Bloom Lane, Bandra West, Mumbai 400050",
                },
                {
                
                  title: "Events",
                  text: "Private dining & buyouts available",
                },
              ].map((d) => (
                <div className="reservation-detail" key={d.title}>
                  <div className="reservation-detail-icon">{d.icon}</div>
                  <div className="reservation-detail-text">
                    <h4>{d.title}</h4>
                    <p style={{ whiteSpace: "pre-line" }}>{d.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reservation-form-wrap" ref={formRef}>
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">🌸</div>
                <h4>Reservation Confirmed!</h4>
                <p>
                  Thank you, {form.name}. We've sent a confirmation to{" "}
                  {form.email}. We can't wait to welcome you to Café Crafty .
                </p>
              </div>
            ) : (
              <>
                <h3>Make a Reservation</h3>
                <p>Fill in your details and we'll confirm within 2 hours.</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+91 98XXX XXXXX"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Guests</label>
                      <select
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                      >
                        {["1", "2", "3", "4", "5", "6", "7", "8+"].map((n) => (
                          <option key={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Date</label>
                      <input
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div className="form-group">
                      <label>Time</label>
                      <select
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select time</option>
                        {[
                          "8:00 AM",
                          "9:00 AM",
                          "10:00 AM",
                          "11:00 AM",
                          "12:00 PM",
                          "1:00 PM",
                          "2:00 PM",
                          "3:00 PM",
                          "4:00 PM",
                          "5:00 PM",
                          "6:00 PM",
                          "7:00 PM",
                          "8:00 PM",
                        ].map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Occasion (optional)</label>
                    <select
                      name="occasion"
                      value={form.occasion}
                      onChange={handleChange}
                    >
                      <option value="">None</option>
                      <option>Birthday</option>
                      <option>Anniversary</option>
                      <option>Business Meeting</option>
                      <option>Date</option>
                      <option>Family Gathering</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Special Requests</label>
                    <textarea
                      name="notes"
                      placeholder="Allergies, dietary needs, seating preference..."
                      value={form.notes}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn-primary form-submit">
                    Confirm Reservation
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
