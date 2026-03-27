"use client";

import { useState } from "react";
import BookCard from "@/components/BookCard";

export default function Books() {
  const [search, setSearch] = useState("");

  const books = [
    {
      id: 1,
      title: "The Power of Now",
      author: "Eckhart Tolle",
      price: 399,
      image: "/images/image9.png",
    },
    {
      id: 2,
      title: "Start With Why",
      author: "Simon Sinek",
      price: 239,
      image: "/images/image10.png",
    },
    {
      id: 3,
      title: "Can't Hurt Me",
      author: "David Goggins",
      price: 349,
      image: "/images/image11.png",
    },
    {
      id: 4,
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      price: 599,
      image: "/images/image12.png",
    },
    {
      id: 5,
      title: "Zero to One",
      author: "Peter Thiel",
      price: 499,
      image: "/images/image13.png",
    },
    {
      id: 6,
      title: "Do Epic Shit",
      author: "Ankur Warikoo",
      price: 499,
      oldPrice: 799,
      image: "/images/image14.png",
    },
    {
      id: 7,
      title: "You Can Win",
      author: "Shiv Khera",
      price: 399,
      image: "/images/image15.png",
    },
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* HERO */}
      <div className="bg-yellow-400 p-10 flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-bold">READING FEST</h2>
          <p className="text-6xl font-extrabold">UP TO 25% OFF</p>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
          className="h-40 hidden md:block"
        />
      </div>

      {/* SEARCH */}

      <div className="px-6 py-4">
        <div className="flex items-center bg-gray-100 rounded-full border shadow-sm overflow-hidden">
          <input
            type="text"
            placeholder="Search Books, Authors & More..."
            className="flex-1 px-6 py-3 bg-transparent outline-none text-gray-700"
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="bg-orange-500 hover:bg-orange-600 w-12 h-12 flex items-center justify-center rounded-full m-1 text-white">
            🔍
          </button>
        </div>
      </div>

      {/* HEADER */}
      <div className="px-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Trending Now</h2>
        <button className="border px-4 py-1 rounded">Show All</button>
      </div>

      {/* GRID */}
      <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
