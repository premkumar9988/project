"use client";
import Navbar from "@/components/Navbar";


export default function About() {
  return (
    <div className="about">
        <Navbar />
      {/* HERO */}
      <section className="about-hero">
        <h1>📚 About Our Bookstore</h1>
        <p>Your gateway to knowledge, inspiration, and stories</p>
      </section>

      {/* CONTENT */}
      <section className="about-content">
        <div className="card">
          <h2>Who We Are</h2>
          <p>
            We are a modern online bookstore providing a wide collection of books
            across genres like self-development, finance, technology, and fiction.
          </p>
        </div>

        <div className="card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make reading accessible, enjoyable, and affordable
            for everyone. We believe books can change lives.
          </p>
        </div>

        <div className="card">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔ Wide collection of books</li>
            <li>✔ Affordable prices</li>
            <li>✔ Fast delivery</li>
            <li>✔ Easy shopping experience</li>
          </ul>
        </div>
      </section>
    </div>
  );
}