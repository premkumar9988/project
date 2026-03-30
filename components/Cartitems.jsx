import React from 'react';
import Image from 'next/image';
import { Trash2, Plus, Minus } from 'lucide-react';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        {/* Book Cover */}
        <div className="relative w-20 h-28 flex-shrink-0">
          <Image
            src={item.image || '/placeholder-book.jpg'}
            alt={item.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        
        {/* Book Details */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-800 text-lg line-clamp-1">{item.title}</h3>
          <p className="text-sm text-gray-500 mb-2 font-medium">by {item.author}</p>
          <button 
            onClick={() => onRemove(item.id)}
            className="flex items-center gap-1 text-red-500 text-xs font-bold hover:text-red-600 transition-colors uppercase tracking-tight"
          >
            <Trash2 size={14} /> Remove
          </button>
        </div>
      </div>

      {/* Quantity & Price */}
      <div className="flex flex-col items-end gap-3">
        <span className="font-black text-indigo-600 text-lg">${item.price.toFixed(2)}</span>
        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50 shadow-inner">
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="p-2 hover:bg-gray-200 transition-colors text-gray-600"
          >
            <Minus size={16} />
          </button>
          <span className="px-4 py-1 text-sm font-bold text-gray-700">{item.quantity}</span>
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="p-2 hover:bg-gray-200 transition-colors text-gray-600"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
