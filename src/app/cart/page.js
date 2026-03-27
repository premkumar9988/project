"use client";

import { useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      price: 189,
      quantity: 3,
      image: "/images/image1.png",
    },
  ]);

  // ➕ Increase
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ➖ Decrease
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // ❌ Remove
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // 💰 Calculations
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = 49;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-[#f5f3ef] min-h-screen p-8">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">

          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">
              Your <span className="text-orange-500">Cart</span>
            </h1>

            <button
              onClick={() => setCart([])}
              className="border px-4 py-2 rounded hover:bg-gray-100"
            >
              Clear Cart
            </button>
          </div>

          {/* ITEMS */}
          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-6"
              >

                {/* LEFT */}
                <div className="flex gap-4 items-center">

                  <img
                    src={item.image}
                    className="w-16 h-20 object-cover rounded"
                  />

                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-500">
                      by {item.author}
                    </p>

                    {/* QUANTITY */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-7 h-7 border rounded"
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-7 h-7 border rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="text-right">
                  <p className="font-bold">
                    ₹{item.price * item.quantity}
                  </p>

                  <p className="text-sm text-gray-400">
                    ₹{item.price} each
                  </p>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-2 bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600"
                  >
                    Remove
                  </button>
                </div>

              </div>
            ))
          )}
        </div>

        {/* RIGHT SIDE (SUMMARY) */}
        <div className="bg-black text-white p-6 rounded-xl shadow h-fit">

          <h2 className="text-xl font-semibold mb-6">
            Order Summary
          </h2>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹{shipping.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Tax (5%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>

          </div>

          <hr className="my-4 border-gray-600" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span className="text-yellow-400">
              ₹{total.toFixed(2)}
            </span>
          </div>

          <button className="mt-6 w-full bg-yellow-500 text-black py-3 rounded font-semibold hover:bg-yellow-400 transition">
            Checkout →
          </button>

          <p className="text-xs text-gray-400 mt-3 text-center">
            Add ₹500 more for free shipping!
          </p>

        </div>

      </div>
    </div>
  );
}