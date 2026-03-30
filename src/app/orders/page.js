"use client";

import { useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([
    {
      id: "1774562455926",
      date: "26 March 2026",
      status: "Pending",
      total: 56.97,
      items: [{ title: "Atomic Habits", qty: 3, price: 18.99 }],
    },
  ]);

  const cancelOrder = (id) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  return (
    <div className="flex bg-[#f5f3ef] min-h-screen">

     

      {/* MAIN */}
      <div className="flex-1 p-8">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            My <span className="text-yellow-600">Orders</span>
          </h1>

          <button className="bg-yellow-600 text-black px-5 py-2 rounded font-semibold">
            + Place Order
          </button>
        </div>

        {/* ORDER CARD */}
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white border border-yellow-400 rounded-xl p-6 shadow-sm"
          >

            {/* TOP */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="font-semibold text-lg">
                  Order #{order.id}
                </h2>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>

              <div className="text-right">
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {order.status}
                </span>

                <p className="font-bold mt-2 text-yellow-700">
                  ₹{order.total}
                </p>
              </div>
            </div>

            <hr className="mb-4" />

            {/* ITEMS */}
            {order.items.map((item, i) => (
              <div
                key={i}
                className="flex justify-between text-sm mb-3"
              >
                <span>
                  📘 {item.title} × {item.qty}
                </span>

                <span>₹{item.price * item.qty}</span>
              </div>
            ))}

            {/* ACTIONS */}
            <div className="flex gap-3 mt-4">
              <select className="border px-3 py-2 rounded">
                <option>Pending</option>
                <option>Shipped</option>
                <option>Delivered</option>
              </select>

              <button
                onClick={() => cancelOrder(order.id)}
                className="bg-orange-600 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}