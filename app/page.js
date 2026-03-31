"use client";

import Image from "next/image";
import Link from "next/link";
import State from "@/components/State";
import Count from "@/components/Count";
import Button from "@/components/Button";
import Timer from "@/components/Timer";

export default function Home() {
  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      price: 499,
      image: "/images/image1.png",
    },
    {
      id: 2,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: 399,
      image: "/images/image2.png",
    },
    {
      id: 3,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 450,
      image: "/images/image3.png",
    },
    {
      id: 4,
      title: "Deep Work",
      author: "Cal Newport",
      price: 550,
      image: "/images/image4.png",
    },
  ];

  const categories = [
    "Self Development",
    "Finance",
    "Technology",
    "Motivation",
  ];

  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>📚 Discover Your Next Favorite Book</h1>
          <p>Explore thousands of books from all genres</p>
          <Link href="/books" className="btn">
            Browse Books
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section">
        <h2>Categories</h2>
        <div className="categories">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED BOOKS */}
      <section className="section">
        <h2>Featured Books</h2>
        <div className="grid">
          {books.map((book) => (
            <div key={book.id} className="card">
              <Image
                src={book.image}
                alt={book.title}
                width={200}
                height={260}
                className="book-img"
              />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <span>₹{book.price}</span>
              <button className="add-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* <State /> */}
      <Count />
      <Timer />
      {/* <button variant="primary" className="bg-blue-500 text-white px-4 py-2 rounded">
          Primary Button

        </button> */}
       {/* <button variant="secondary" className="bg-gray-500 text-white px-4 py-2 rounded">
           Secondary Button
         </button>  */}
        
    
     </div>
  );
}
