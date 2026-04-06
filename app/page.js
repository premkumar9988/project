"use client";

import Image from "next/image";
import Link from "next/link";
import State from "@/components/State";
import Count from "@/components/Count";
import Timer from "@/components/Timer";
import { ThemeProvider } from "@/components/Theme";


export default function Home() {
  return (
    <main className="min-h-screen px-8 py-16 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to BookStore</h1>
        <p className="text-gray-500 text-lg mb-8">
          Discover your next favorite book from our huge collection.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/books"
            className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80"
          >
            Browse Books
          </Link>
          <Link
            href="/about"
            className="border px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Featured Books */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "The Great Gatsby",
              author: "F. Scott Fitzgerald",
              price: "$12.99",
            },
            {
              title: "To Kill a Mockingbird",
              author: "Harper Lee",
              price: "$10.99",
            },
            { title: "1984", author: "George Orwell", price: "$9.99" },
          ].map((book) => (
            <div
              key={book.title}
              className="border rounded-xl p-5 hover:shadow-md transition"
            >
              <div className="bg-gray-100 h-40 rounded-lg mb-4 flex items-center justify-center text-4xl">
                📖
              </div>
              <h3 className="font-semibold text-lg">{book.title}</h3>
              <p className="text-gray-500 text-sm">{book.author}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold">{book.price}</span>
                <button className="text-sm bg-black text-white px-3 py-1 rounded-lg hover:opacity-80">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      { <State /> }
      { <ThemeProvider /> }
      <useCounterStore />
         <Count />
       <Timer />
      <button variant="primary" className="bg-blue-500 text-white px-4 py-2 rounded">
       Primary Button

        </button>
       <button variant="secondary" className="bg-gray-500 text-white px-4 py-2 rounded">
           Secondary Button
         </button> 
    </main>
  );
}
