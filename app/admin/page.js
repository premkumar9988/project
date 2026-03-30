"use client";

export default function AdminOrders() {
  const orders = [
    { id: 1, status: "Pending" },
    { id: 2, status: "Shipped" },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Orders</h1>

      {orders.map((o) => (
        <div key={o.id} className="bg-white p-4 mb-2 rounded shadow">
          Order #{o.id}
          <select className="ml-4 border">
            <option>Pending</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
        </div>
      ))}
    </div>
  );
}