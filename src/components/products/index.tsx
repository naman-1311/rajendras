'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CATEGORIES = ['All', 'Dry Fruits', 'Spices', 'Seeds', 'Herbs', 'Dates', 'Gift Packs'];

const PRODUCTS = [
  { name: 'Almonds', category: 'Dry Fruits', desc: 'Premium California and Indian almonds, available in multiple grades.', bg: 'from-amber-700 to-amber-900' },
  { name: 'Cashews', category: 'Dry Fruits', desc: 'W180 to W450 grade cashews sourced from coastal farms.', bg: 'from-yellow-700 to-yellow-900' },
  { name: 'Walnuts', category: 'Dry Fruits', desc: 'Rich, buttery walnuts from Jammu & Kashmir.', bg: 'from-stone-600 to-stone-800' },
  { name: 'Pistachios', category: 'Dry Fruits', desc: 'Hand-selected Iranian and Indian pistachios.', bg: 'from-green-700 to-green-900' },
  { name: 'Raisins', category: 'Dry Fruits', desc: 'Sun-dried golden and black raisins, plump and sweet.', bg: 'from-purple-700 to-purple-900' },
  { name: 'Figs', category: 'Dry Fruits', desc: 'Premium Anjeer, soft and naturally sweet.', bg: 'from-rose-700 to-rose-900' },
  { name: 'Apricots', category: 'Dry Fruits', desc: 'Dried apricots with a perfect balance of sweet and tart.', bg: 'from-orange-700 to-orange-900' },
  { name: 'Cardamom', category: 'Spices', desc: 'Green cardamom from Kerala\'s finest spice estates.', bg: 'from-emerald-700 to-emerald-900' },
  { name: 'Black Pepper', category: 'Spices', desc: 'Malabar black pepper — bold, aromatic, premium grade.', bg: 'from-zinc-600 to-zinc-900' },
  { name: 'Turmeric', category: 'Spices', desc: 'High-curcumin turmeric from Erode and Salem.', bg: 'from-yellow-600 to-yellow-800' },
  { name: 'Cinnamon', category: 'Spices', desc: 'Ceylon cinnamon sticks and powder, authentic origin.', bg: 'from-amber-800 to-amber-950' },
  { name: 'Saffron', category: 'Spices', desc: 'Kashmiri Mongra saffron — the gold of spices.', bg: 'from-red-700 to-red-900' },
  { name: 'Cumin', category: 'Spices', desc: 'Rajasthani cumin seeds — earthy, aromatic, machine-cleaned.', bg: 'from-amber-600 to-amber-800' },
  { name: 'Dates', category: 'Dates', desc: 'Medjool, Kimia and Safawi dates for every requirement.', bg: 'from-yellow-800 to-yellow-950' },
  { name: 'Cloves', category: 'Spices', desc: 'Whole and powder cloves, strong aroma and rich flavour.', bg: 'from-red-900 to-[#0a0a0a]' },
  { name: 'Coriander', category: 'Spices', desc: 'Premium coriander seeds and powder, bulk supply available.', bg: 'from-lime-700 to-lime-900' },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-32 pb-20">
        <div className="w-full pl-[75px] pr-6 lg:pl-[100px] lg:pr-12 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#c8a045] mb-4 font-body">
            What We Offer
          </p>
          <h1 className="text-5xl lg:text-7xl font-semibold text-white font-heading">
            Our Products
          </h1>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-[#f5f0e8] py-24 lg:py-32">
        <div className="w-full pl-[75px] pr-6 lg:pl-[100px] lg:pr-12">

          {/* Category filter */}
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

          {/* Products grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 shadow-sm"
              >
                {/* Image placeholder */}
                <div className={`h-44 bg-gradient-to-br ${product.bg} flex items-center justify-center`}>
                  <span className="text-white/20 font-heading font-bold text-5xl">
                    {product.name[0]}
                  </span>
                </div>
                {/* Content */}
                <div className="p-5">
                  <span className="text-[#c8a045] text-xs font-semibold uppercase tracking-wider font-body">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-medium text-[#0a0a0a] font-heading mt-1 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-[#0a0a0a]/55 text-sm font-body mb-4 leading-relaxed">
                    {product.desc}
                  </p>
                  <a
                    href={`https://wa.me/919176048429?text=Hi, I'm interested in ${product.name}. Please share more details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors font-body w-full justify-center"
                  >
                    <Image src="/svg/whatsapp.svg" alt="WhatsApp" width={14} height={14} />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
