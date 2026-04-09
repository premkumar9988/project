import Image from "next/image";
import Link from "next/link";

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
    title: "Deep Work",
    author: "Cal Newport",
    price: 550,
    image: "/images/image3.png",
  },
  {
    id: 4,
    title: "Psychology of Money",
    author: "Morgan Housel",
    price: 450,
     image: "data:image/jpeg;base64,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",

  },
];

export default function BooksPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      
      <h1 className="text-3xl font-bold mb-6 text-center">
        📚 Explore Books
      </h1>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <Link key={book.id} href={`/books/${book.id}`}>
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer">
              
              <Image
                src={book.image}
                alt={book.title}
                width={200}
                height={250}
                className="rounded-md w-full h-60 object-cover"
              />

              <h2 className="mt-3 font-semibold">
                {book.title}
              </h2>

              <p className="text-sm text-gray-500">
                {book.author}
              </p>

              <p className="text-green-600 font-bold mt-1">
                ₹{book.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}