'use client';

import { motion, type Variants, type Easing } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const EASE: Easing = 'easeOut';

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505]">
      <div className="absolute inset-0">
        {/* Mobile image */}
        <Image
          src="/mobile-image/hero.webp"
          alt="Premium dry fruits"
          fill
          className="object-cover object-center sm:hidden"
          priority
          quality={80}
          sizes="100vw"
        />
        {/* Desktop image */}
        <Image
          src="/images/hero_sec.webp"
          alt="Premium dry fruits"
          fill
          className="hidden object-cover object-center sm:block"
          priority
          quality={80}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/58 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/72 via-transparent to-black/18" />
      </div>

      <div className="relative z-10 w-full pl-6 pr-6 pt-28 pb-16 sm:pl-10 lg:pl-[100px] lg:pr-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-[680px] lg:max-w-[55%]"
        >
          <motion.h1
            variants={item}
            className="mb-5 font-heading text-[38px] font-semibold leading-[0.9] text-white sm:text-[52px] lg:text-[72px]"
          >
            RAJENDRA&apos;S
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-4 font-heading text-[18px] font-medium uppercase leading-[1.25] text-[#4d9de0] sm:text-[22px] lg:text-[36px]"
          >
            RICH IN TASTE.<br />BEST IN QUALITY.
          </motion.p>

          <motion.p
            variants={item}
            className="mb-8 font-body text-[15px] leading-relaxed text-white/78"
          >
            Premium Dry Fruits &amp; Spices<br />Wholesale Supplier
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#1a56db] px-5 py-2.5 font-body text-[12px] font-semibold uppercase tracking-[0.05em] text-white transition-colors duration-200 hover:bg-[#1e63f5]"
            >
              EXPLORE PRODUCTS
              <ArrowRight size={14} />
            </Link>
            <a
              href={`https://wa.me/919176048429?text=${encodeURIComponent("Hi Rajendra's! I'd like to request your product catalogue and learn more about wholesale pricing.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[8px] border border-white/35 bg-black/12 px-5 py-2.5 font-body text-[12px] font-semibold uppercase tracking-[0.05em] text-white transition-colors duration-200 hover:border-white/55"
            >
              REQUEST CATALOGUE
              <Download size={14} />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
