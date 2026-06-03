'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

export default function FindUsHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]"
    >
      {/* Mobile image */}
      <Image
        src="/mobile-image/find.png"
        alt="Come visit our store"
        fill
        priority
        quality={80}
        className="object-cover object-center sm:hidden"
        sizes="100vw"
      />
      {/* Desktop image */}
      <Image
        src="/images/find-us.png"
        alt="Come visit our store"
        fill
        priority
        quality={80}
        className="hidden object-cover object-center sm:block"
        sizes="100vw"
      />
      {/* Left-to-right dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/10" />

      <div className="relative z-10 w-full pl-6 pr-6 pt-24 pb-16 sm:pl-10 lg:pl-[100px] lg:pr-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-[540px]"
        >
          <p className="mb-4 font-body text-[11px] font-black uppercase tracking-[0.18em] text-[#4d9de0]">
            Our Location
          </p>
          <h1 className="mb-6 font-heading text-[36px] font-semibold leading-[1.05] text-white sm:text-[52px] lg:text-[72px]">
            Come Visit<br />
            <span className="text-[#4d9de0]">Our Store.</span>
          </h1>
          <p className="mb-10 font-body text-[15px] leading-[1.7] text-white/70 max-w-[420px]">
            Located in the heart of George Town's wholesale market. We'd love to welcome you to experience our premium quality firsthand.
          </p>
          <button
            onClick={() => document.getElementById('location-map')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-4 border border-white/40 px-7 py-3.5 font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10"
          >
            View Map
            <MapPin size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
