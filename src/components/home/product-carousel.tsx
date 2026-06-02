'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PRODUCTS = [
  {
    name: 'Almonds',
    tagline: 'Carefully sourced for exceptional taste, quality and consistency.',
    image: '/dryfruits/almonds.png',
  },
  {
    name: 'Cashews',
    tagline: 'Premium graded cashews known for their rich, creamy flavor.',
    image: '/dryfruits/cashews.png',
  },
  {
    name: 'Dates',
    tagline: 'Naturally sweet, hand-picked dates rich in essential nutrients.',
    image: '/dryfruits/dates.png',
  },
  {
    name: 'Pistachios',
    tagline: 'Crisp and flavorful pistachios, roasted to perfection.',
    image: '/dryfruits/pista.png',
  },
  {
    name: 'Walnuts',
    tagline: 'High-quality walnuts offering a perfect crunch and earthy taste.',
    image: '/dryfruits/walnut.png',
  },
];

const ProductCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % PRODUCTS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const product = PRODUCTS[current];

  return (
    <section className="relative overflow-hidden bg-[#070707]">
      <div className="absolute inset-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-[69%_50%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/56 to-black/0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/18" />
      </div>

      <div className="relative w-full pl-[75px] pr-6 lg:pl-[100px] lg:pr-12">
        <div className="flex min-h-[80vh] items-center">
          <div className="max-w-[560px] py-24 lg:py-32">
            <p className="mb-2 font-body text-[14px] font-medium uppercase tracking-[0.05em] text-[#b08d43]">
              Premium Dry Fruits
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="mb-4 font-heading text-[72px] font-normal uppercase leading-[0.9] text-[#a59582] sm:text-[104px] lg:text-[130px]">
                  {product.name}
                </h2>
                <p className="mb-8 max-w-[340px] font-body text-[17px] leading-[1.6] text-[#b3b3b3]">
                  {product.tagline}
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 font-body text-[15px] font-medium uppercase tracking-[0.05em] text-[#b08d43] transition-all hover:gap-4"
                >
                  View Details
                  <ArrowRight size={16} strokeWidth={1.5} />
                </Link>
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 flex items-center font-body text-[20px]">
              <span className="text-white">0{current + 1}</span>
              <span className="mx-4 inline-block h-px w-24 bg-white/30" />
              <span className="text-[#a59582]/50">0{PRODUCTS.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
