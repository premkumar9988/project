"use client";

import { useState } from "react";
import "@/styles/Contact.module.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully ✅");
    console.log(form);
  };

  return (
    <div className="contact-container">

      {/* HERO */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Get in touch with us!</p>
      </div>

      {/* CONTENT */}
      <div className="contact-content">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Have questions about books, orders, or support?</p>

          <div className="info-box">
            <h4>📧 Email</h4>
            <p>support@bookstore.com</p>
          </div>

          <div className="info-box">
            <h4>📞 Phone</h4>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-box">
            <h4>📍 Address</h4>
            <p>Madurai, Tamil Nadu, India</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <h2>Send Message</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message..."
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send Message →</button>
          </form>
        </div>

      </div>
    </div>
  );
}