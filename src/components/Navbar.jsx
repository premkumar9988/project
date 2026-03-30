"use client";

import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-orange-600">
          Bookzen
        </h1>

        {/* MENU */}
        <div className="flex items-center gap-8 text-gray-700 font-medium">

          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>

          <Link href="/books" className="hover:text-orange-500">
            Books
          </Link>

          <Link href="/orders" className="hover:text-orange-500">
            Orders
          </Link>

          {/* CART */}
          <Link href="/cart" className="relative hover:text-orange-500">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1 rounded-full">
              2
            </span>
          </Link>

          {/* USER */}
          <Link href="/auth/login" className="hover:text-orange-500">
            <User size={20} />
          </Link>

        </div>
      </div>
    </nav>
  );
}