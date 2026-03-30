import Image from "next/image";
import { Star, ShoppingCart, Zap } from "lucide-react";

// ✅ SSR (Server Component)
async function getBook() {
  return {
    title: "Atomic Habits",
    author: "James Clear",
    price: 499,
    rating: 4.8,
    reviews: 1245,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    description:
      "An easy & proven way to build good habits and break bad ones.",
    details: {
      ISBN: "9780735211292",
      Publisher: "Penguin Random House",
      Pages: "320",
    },
    authorInfo:
      "James Clear is a writer and speaker focused on habits and decision making.",
  };
}

export default async function BookPage() {
  const book = await getBook();

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-8">
      
      {/* LEFT - IMAGE */}
      <div className="md:col-span-1">
        <div className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition">
          <Image
            src={book.image}
            alt={book.title}
            width={400}
            height={550}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* CENTER - DETAILS */}
      <div className="md:col-span-2 space-y-6">
        
        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-serif font-bold">
            {book.title}
          </h1>
          <p className="text-gray-600 mt-1">
            by <span className="underline cursor-pointer">{book.author}</span>
          </p>

          {/* RATING */}
          <div className="flex items-center gap-2 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
            ))}
            <span className="text-sm text-gray-500">
              {book.rating} ({book.reviews} reviews)
            </span>
          </div>
        </div>

        {/* TABS (Simple version) */}
        <div className="space-y-4">
          <div>
            <h2 className="font-semibold text-lg">Description</h2>
            <p className="text-gray-600">{book.description}</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Product Details</h2>
            <ul className="text-gray-600">
              <li>ISBN: {book.details.ISBN}</li>
              <li>Publisher: {book.details.Publisher}</li>
              <li>Pages: {book.details.Pages}</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg">About Author</h2>
            <p className="text-gray-600">{book.authorInfo}</p>
          </div>
        </div>

        {/* REVIEWS */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Customer Reviews</h2>

          <div className="border p-4 rounded-lg mb-3">
            <p className="font-medium">⭐⭐⭐⭐⭐ Great Book!</p>
            <p className="text-sm text-gray-500">Verified Purchase • Jan 2025</p>
            <p className="text-gray-600 mt-2">
              This book changed my mindset completely.
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <p className="font-medium">⭐⭐⭐⭐ Good read</p>
            <p className="text-sm text-gray-500">Feb 2025</p>
            <p className="text-gray-600 mt-2">
              Practical and easy to understand.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT - PURCHASE CARD */}
      <div className="md:col-span-1 md:sticky md:top-20 h-fit">
        <div className="border rounded-xl p-5 shadow-md space-y-4">
          
          <h2 className="text-2xl font-bold text-green-600">
            ₹{book.price}
          </h2>

          <p className="text-sm text-green-600">In Stock</p>

          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            <ShoppingCart size={18} /> Add to Cart
          </button>

          <button className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
            <Zap size={18} /> Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}