import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">Book<span className="text-indigo-500">Haven</span></h2>
          <p className="text-sm leading-relaxed text-slate-400">
            Curating the finest literature and academic resources for our global community of readers.
          </p>
          <div className="flex gap-4 pt-2">
            <Facebook size={20} className="hover:text-indigo-400 cursor-pointer transition-colors" />
            <Twitter size={20} className="hover:text-indigo-400 cursor-pointer transition-colors" />
            <Instagram size={20} className="hover:text-indigo-400 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Explore</h4>
          <ul className="space-y-3 text-sm font-medium">
            <li><Link href="/shop" className="hover:text-white transition-colors">Browse All Books</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Support Center</Link></li>
          </ul>
        </div>

        {/* Categories Column */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Categories</h4>
          <ul className="space-y-3 text-sm font-medium">
            <li><Link href="/category/fiction" className="hover:text-white transition-colors">Modern Fiction</Link></li>
            <li><Link href="/category/science" className="hover:text-white transition-colors">Science & Tech</Link></li>
            <li><Link href="/category/business" className="hover:text-white transition-colors">Business & Finance</Link></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase text-xs tracking-widest">Stay Updated</h4>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
            <button className="absolute right-2 top-1.5 p-1.5 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 transition-colors">
              <ArrowRight size={18} />
            </button>
          </div>
          <p className="text-[10px] text-slate-500 flex items-center gap-2 italic">
            <Mail size={12} /> Join 5,000+ book lovers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-bold text-slate-500">
        <p>&copy; 2024 BookHaven. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
