"use client";

import { useStore } from "@/lib/store";

export default function CartItem({ item }) {
  const { updateQty, removeFromCart } = useStore();

  return (
    <div className="flex justify-between items-center bg-white/10 p-4 rounded mb-4">
      <div>
        <h3>{item.title}</h3>
        <p>₹{item.price}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQty(item.id, item.qty - 1)}
          className="px-2 bg-gray-700"
        >
          -
        </button>

        <span>{item.qty}</span>

        <button
          onClick={() => updateQty(item.id, item.qty + 1)}
          className="px-2 bg-gray-700"
        >
          +
        </button>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-400"
      >
        Remove
      </button>
    </div>
  );
}