import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';

const BookCard = ({ book }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100 hover:-translate-y-1">
      {/* Image Wrapper */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={book.image || '/placeholder-book.jpg'}
          alt={book.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {book.isNew && (
          <span className="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-xl">
            New
          </span>
        )}
        {/* Hover Overlay Button */}
        <div className="absolute inset-0 bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <button className="w-full bg-white text-indigo-600 py-3 rounded-xl font-bold text-sm shadow-2xl flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-indigo-600 hover:text-white">
            <ShoppingCart size={18} /> Add to Cart
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">{book.category}</span>
          <div className="flex items-center gap-1 text-amber-400">
            <Star size={12} fill="currentColor" />
            <span className="text-xs font-bold text-gray-700">{book.rating}</span>
          </div>
        </div>
        
        <Link href={`/book/${book.id}`}>
          <h3 className="text-gray-900 font-bold text-lg leading-snug mb-1 hover:text-indigo-600 transition-colors line-clamp-2 cursor-pointer">
            {book.title}
          </h3>
        </Link>
        <p className="text-xs text-gray-500 mb-6 font-medium italic">by {book.author}</p>
        
        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
          <span className="text-2xl font-black text-gray-900 tracking-tighter">${book.price.toFixed(2)}</span>
          <Link href={`/book/${book.id}`} className="text-[10px] font-black text-gray-400 hover:text-indigo-600 uppercase tracking-widest transition-colors">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
