import { ShoppingBag } from "lucide-react";

export default function Orders() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">My Orders</h1>

      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between">
          <span>Order #12345</span>
          <span className="text-green-600">Delivered</span>
        </div>

        <p className="text-gray-500">Tracking: TRK123</p>

        <button className="mt-2 text-blue-600">
          Download Invoice
        </button>
      </div>
    </div>
  );
}