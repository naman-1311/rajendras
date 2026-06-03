'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = ['All', 'Dry Fruits', 'Dates'];

const PRODUCTS = [
  { name: 'Almonds',   category: 'Dry Fruits', desc: 'Premium California and Indian almonds, available in multiple grades.', image: '/dryfruits/almonds.png' },
  { name: 'Cashews',   category: 'Dry Fruits', desc: 'W180 to W450 grade cashews sourced from coastal farms.',              image: '/dryfruits/cashews.png' },
  { name: 'Dates',     category: 'Dates',      desc: 'Naturally sweet, hand-picked dates rich in essential nutrients.',      image: '/dryfruits/dates.png'   },
  { name: 'Pistachios',category: 'Dry Fruits', desc: 'Hand-selected Iranian and Indian pistachios, crisp and flavorful.',   image: '/dryfruits/pista.png'   },
  { name: 'Walnuts',   category: 'Dry Fruits', desc: 'Rich, buttery walnuts from Jammu & Kashmir, perfect crunch.',         image: '/dryfruits/walnut.png'  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero — full bleed with left-to-right overlay */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]"
      >
        {/* Mobile image */}
        <Image
          src="/mobile-image/bestsellers.png"
          alt="Best sellers"
          fill
          priority
          quality={80}
          className="object-cover object-center sm:hidden"
          sizes="100vw"
        />
        {/* Desktop image */}
        <Image
          src="/images/products.png"
          alt="Best sellers"
          fill
          priority
          quality={80}
          className="hidden object-cover object-center sm:block"
          sizes="100vw"
        />
        {/* Left-to-right dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/5" />

        {/* Text content */}
        <div className="relative z-10 w-full pl-6 pr-6 pt-32 pb-20 sm:pl-10 lg:pl-[100px] lg:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-[540px]"
          >
            <p className="mb-6 font-body text-[11px] font-black uppercase tracking-[0.18em] text-[#4d9de0]">
              Best Sellers
            </p>
            <h1 className="mb-6 font-heading text-[36px] font-semibold leading-[1.05] text-white sm:text-[52px] lg:text-[72px]">
              Handpicked.<br />
              <span className="text-[#4d9de0]">Loved the Most.</span>
            </h1>
            <p className="mb-10 font-body text-[15px] leading-[1.7] text-white/70 max-w-[380px]">
              Explore our customer favorites — selected for their unmatched taste, quality, and freshness.
            </p>
            <a
              href="#products-grid"
              className="inline-flex items-center gap-4 border border-white/40 px-7 py-3.5 font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10"
            >
              Explore Best Sellers
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-[#f5f0e8] py-24 lg:py-32">
        <div className="w-full pl-6 pr-6 sm:pl-10 lg:pl-[100px] lg:pr-12">

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
                {/* Product image */}
                <div className="relative h-44 overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover" sizes="400px" />
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
