"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, Lock } from "lucide-react";

export default function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Atomic Habits",
      price: 499,
      qty: 1,
      image:
        "/images/image1.png",
    },
    {
      id: 2,
      title: "Deep Work",
      price: 550,
      qty: 2,
      image:
        "/images/image4.png",
    },
  ]);

  // ➕ Increase quantity
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // ➖ Decrease quantity
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // ❌ Remove item
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 💰 Calculations
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const shipping = subtotal > 1000 ? 0 : 50;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  // 🧾 EMPTY STATE
  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <ShoppingBag size={50} className="text-gray-400" />
        <h2 className="text-2xl font-semibold mt-4">
          Your cart is empty
        </h2>
        <p className="text-gray-500 mt-2">
          Looks like you haven't added anything yet.
        </p>
        <Link
          href="/books"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 grid lg:grid-cols-3 gap-8">
      
      {/* 🛒 LEFT - CART ITEMS */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-2xl font-bold">🛒 Shopping Cart</h1>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center gap-4 border rounded-lg p-4 bg-white"
          >
            {/* IMAGE */}
            <Image
              src={item.image}
              alt={item.title}
              width={120}
              height={150}
              className="rounded-md object-cover"
            />

            {/* DETAILS */}
            <div className="flex-1 w-full">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-gray-500">₹{item.price}</p>

              {/* QUANTITY */}
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="p-1 border rounded"
                >
                  <Minus size={16} />
                </button>

                <span>{item.qty}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="p-1 border rounded"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-4 mt-3 text-sm">
                <button
                  onClick={() => removeItem(item.id)}
                  className="flex items-center gap-1 text-red-500 hover:underline"
                >
                  <Trash2 size={16} /> Remove
                </button>

                <span className="text-gray-500 cursor-pointer hover:underline">
                  Move to Wishlist
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 💳 RIGHT - SUMMARY */}
      <div className="lg:col-span-1">
        <div className="border rounded-xl p-6 bg-white shadow sticky top-20 space-y-4">
          
          <h2 className="text-xl font-semibold">Order Summary</h2>

          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Tax (5%)</span>
            <span>₹{tax}</span>
          </div>

          <hr />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          {/* CHECKOUT */}
          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 hover:scale-[1.02] transition">
            <Lock size={18} />
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}