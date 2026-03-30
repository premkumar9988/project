"use client";

export default function Home() {
  const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 499,
    oldPrice: 699,
    image: "/images/image1.png",
  },
  {
    id: 2,
    title: "Ikigai",
    author: "Héctor García",
    price: 299,
    oldPrice: 499,
    image: "/images/image2.png",
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 399,
    oldPrice: 599,
    image: "/images/image3.png",
  },
  {
    id: 4,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 349,
    oldPrice: 549,
    image: "/images/image4.png",
  },
  {
    id: 5,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 279,
    oldPrice: 399,
    image: "/images/image5.png",
  },
  {
    id: 6,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 459,
    oldPrice: 699,
    image: "/images/image6.png",
  },
  {
    id: 7,
    title: "Deep Work",
    author: "Cal Newport",
    price: 379,
    oldPrice: 599,
    image: "/images/image7.png",
  },
  {
    id: 8,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 499,
    oldPrice: 799,
    image: "/images/image8.png",
  },
];


  return (
    <div className="bg-gray-100 min-h-screen">
      {/* TOP BAR */}
      <div className="bg-black text-white text-center py-2 text-sm tracking-wide">
        📚 Discover Bestsellers & New Arrivals
      </div>

      {/* HERO */}
      <div className="relative bg-gradient-to-r from-red-500 to-orange-500 text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold">BEST SELLERS</h1>

          <p className="mt-4 text-lg opacity-90">
            Discover your next favorite book
          </p>

          <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Explore Now
          </button>
        </div>
      </div>

      {/* BOOK SECTION */}
      <div className="px-6 md:px-10 py-12">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Books</h2>

          <button className="text-orange-500 font-semibold hover:underline">
            View All →
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition duration-300 overflow-hidden group"
            >
              {/* IMAGE */}
              <div className="relative h-60 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-full object-contain p-4 group-hover:scale-105 transition"
                />

                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  20% OFF
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="font-semibold text-sm line-clamp-2">
                  {book.title}
                </h3>

                <p className="text-gray-500 text-xs mt-1">{book.author}</p>

                {/* RATING */}
                <div className="text-yellow-500 text-xs mt-1">
                  ⭐⭐⭐⭐☆
                  <span className="text-gray-400 ml-1">(120)</span>
                </div>

                {/* PRICE */}
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-orange-600 font-bold">
                    ₹{book.price}
                  </span>

                  <span className="text-gray-400 line-through text-xs">
                    ₹{book.oldPrice}
                  </span>
                </div>

                {/* BUTTON */}
                <button
                  onClick={() => alert(`${book.title} added to cart`)}
                  className="mt-4 w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg text-sm hover:opacity-90 transition"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
