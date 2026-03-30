"use client";
export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition w-full max-w-[260px]">
      {/* IMAGE */}
      <div className="h-64 bg-white flex items-center justify-center border-b">
        <img
          src={book.image}
          alt={book.title}
          className="h-44 object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <p className="text-[11px] tracking-widest text-yellow-600 uppercase">
          Latest books
        </p>

        <h3 className="font-semibold text-lg mt-1 leading-tight">
          {book.title}
        </h3>

        <p className="text-gray-500 text-sm">by {book.author}</p>

        <p className="font-bold text-xl mt-3">₹{book.price}</p>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => alert(`${book.title} added to cart`)}
            className="mt-4 w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
