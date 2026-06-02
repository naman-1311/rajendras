'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CATEGORIES = ['All', 'Products', 'Warehouse', 'Packaging', 'Delivery'];

const ITEMS = [
  { src: '/images/nuts.png', alt: 'Premium dry fruits collection', caption: 'Premium Dry Fruits', category: 'Products', span: 'col-span-2 row-span-2' },
  { src: '/images/spices1.png', alt: 'Exotic spices spread', caption: 'Premium Spices', category: 'Products', span: '' },
  { src: '/images/almond.png', alt: 'Fresh almonds in bowl', caption: 'California Almonds', category: 'Products', span: '' },
  { src: null, alt: 'Our storage warehouse', caption: 'Climate-Controlled Warehouse', category: 'Warehouse', bg: 'from-slate-700 to-slate-900', span: '' },
  { src: null, alt: 'Premium packaging', caption: 'Food-Grade Packaging', category: 'Packaging', bg: 'from-amber-800 to-amber-950', span: '' },
  { src: null, alt: 'Bulk storage facility', caption: 'Bulk Storage', category: 'Warehouse', bg: 'from-zinc-700 to-zinc-900', span: 'col-span-2' },
  { src: null, alt: 'Retail packs', caption: 'Retail Packaging', category: 'Packaging', bg: 'from-emerald-800 to-emerald-950', span: '' },
  { src: null, alt: 'Pan India delivery', caption: 'Pan India Delivery', category: 'Delivery', bg: 'from-blue-800 to-blue-950', span: '' },
  { src: null, alt: 'Quality control lab', caption: 'Quality Testing', category: 'Products', bg: 'from-red-900 to-[#0a0a0a]', span: '' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? ITEMS
    : ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-32 pb-20">
        <div className="w-full pl-[75px] pr-6 lg:pl-[100px] lg:pr-12 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#c8a045] mb-4 font-body">
            Visual Tour
          </p>
          <h1 className="text-5xl lg:text-7xl font-semibold text-white font-heading">
            Our Gallery
          </h1>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-[#f5f0e8] py-24 lg:py-32">
        <div className="w-full pl-[75px] pr-6 lg:pl-[100px] lg:pr-12">

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all font-body ${
                  activeCategory === cat
                    ? 'bg-[#0a0a0a] text-white'
                    : 'bg-white text-[#0a0a0a]/60 hover:bg-[#0a0a0a]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
          >
            {filtered.map((item, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${item.span || ''}`}
              >
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${item.bg}`} />
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-semibold font-body">{item.caption}</p>
                  <p className="text-white/60 text-xs font-body mt-1">{item.category}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
