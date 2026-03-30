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
    image: "/images/image4.png",
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