"use client";

import Link from "next/link";
import State from "@/components/State";
import Count from "@/components/Count";
import Timer from "@/components/Timer";
import { ThemeProvider } from "@/components/Theme";

export default function Home() {
  const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: "$12.99",
      amount: 1299,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: "$10.99",
      amount: 1099,
    },
    {
      title: "1984",
      author: "George Orwell",
      price: "$9.99",
      amount: 999,
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      price: "$11.99",
      amount: 1199,
    },
  ];

  // 💳 PAYMENT
  const handlePayment = async (amount) => {
    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency: "usd",
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.message || "Payment failed");
      }
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  // 🔐 LOGIN 
  const handleLogin = async () => {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "admin@gmail.com",
        password: "1234",
      }),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login Success ✅");
    } else {
      alert("Login failed");
    }
  };

  // ☁️ UPLOAD
  const handleUpload = async () => {
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image:
            "https://res.cloudinary.com/dwcd6pqwm/image/upload/v1702054415/sample.jpg",
        }),
      });

      const data = await res.json();

      if (data.url) {
        alert("Uploaded ✅\n" + data.url);
      } else {
        alert("Upload failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendEmail = async () => {
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "your_email@gmail.com",
          subject: "Test Email",
          message: "Hello from Next.js 🚀",
        }),
      });

      const data = await res.json();

      alert(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 md:px-10 py-16 max-w-7xl mx-auto">
        {/* HERO */}
        <section className="flex justify-center mb-20">
          <div className="bg-white shadow-xl rounded-2xl p-10 max-w-3xl w-full text-center border">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to BookStore
            </h1>

            <p className="text-gray-500 text-lg mb-6">
              Discover your next favorite book
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/books"
                className="bg-black text-white px-6 py-3 rounded-lg"
              >
                Browse Books
              </Link>

              <Link href="/about" className="border px-6 py-3 rounded-lg">
                Learn More
              </Link>

              {/* 🔐 Login Button */}
              <button
                onClick={handleLogin}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                Login
              </button>

              {/* ☁️ Upload Button */}
              <button
                onClick={handleUpload}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg"
              >
                Upload Image
              </button>
              <button onClick={handleSendEmail}>Send Email</button>
            </div>
          </div>
        </section>

        {/* BOOKS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Featured Books</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <div key={book.title} className="bg-white border rounded-xl p-5">
                <div className="bg-gray-100 h-40 rounded mb-4 flex items-center justify-center">
                  📖
                </div>

                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-gray-500">{book.author}</p>

                <div className="flex justify-between items-center mt-4">
                  <span>{book.price}</span>

                  {/* 💳 Buy */}
                  <button
                    onClick={() => handlePayment(book.amount)}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXTRA */}
        <section className="mt-20 space-y-6">
          <State />
          <Count />
          <Timer />
        </section>
      </main>
    </ThemeProvider>
  );
}
