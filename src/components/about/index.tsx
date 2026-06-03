'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedNumber } from '@/components/ui/animated-number';
import {
  ArrowRight,
  Award,
  Handshake,
  Leaf,
  MapPin,
  Package,
  ShieldCheck,
  Truck,
  Users,
} from 'lucide-react';

const STATS = [
  { icon: ShieldCheck, value: '30+', label: 'Years of\nExperience' },
  { icon: Users, value: '500+', label: 'Happy\nClients' },
  { icon: Package, value: '250+', label: 'Product\nVarieties' },
  { icon: Leaf, value: '100%', label: 'Farm Direct\nSourcing', hideOnMobile: true },
  { icon: Handshake, value: '100%', label: 'Quality\nAssured' },
];

const VALUES = [
  {
    icon: Award,
    title: 'Quality First',
    desc: 'We source only the finest produce and ensure strict quality standards.',
  },
  {
    icon: Handshake,
    title: 'Integrity',
    desc: 'Honest business practices and transparent dealings are at the core of everything we do.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    desc: "Our customers' success is our success. We build long-term relationships based on trust.",
  },
  {
    icon: Truck,
    title: 'Reliability',
    desc: 'Timely delivery, consistent supply, and dependable service you can always count on.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    desc: 'We are committed to ethical sourcing and environmentally responsible practices.',
  },
];

const GALLERY = [
  { src: '/images/nuts.png', alt: 'Premium walnuts', position: 'object-[20%_55%]' },
  { src: '/images/spices1.png', alt: 'Premium pistachios', position: 'object-[54%_50%]' },
  { src: '/images/almond.png', alt: 'Almonds and cashews', position: 'object-[47%_49%]' },
  { src: '/images/spices1.png', alt: 'Assorted spices', position: 'object-[50%_50%]' },
  { src: '/images/nuts.png', alt: 'Mixed dry fruits', position: 'object-[73%_52%]' },
];

export default function AboutPage() {
  const statsRef = useRef(null);
  const valuesRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });
  const valuesInView = useInView(valuesRef, { once: true, margin: '-80px' });

  return (
    <>
      {/* Hero — full bleed with left-to-right overlay */}
      <section className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden">
        {/* Mobile image */}
        <Image
          src="/mobile-image/about.png"
          alt="Premium dry fruits and spices"
          fill
          priority
          quality={80}
          className="object-cover object-center sm:hidden"
          sizes="100vw"
        />
        {/* Desktop image */}
        <Image
          src="/images/about-us.png"
          alt="Premium dry fruits and spices"
          fill
          priority
          quality={80}
          className="hidden object-cover object-center sm:block"
          sizes="100vw"
        />
        {/* Left-to-right gradient overlay — dark on the left (text area), fades to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/10" />

        {/* Text content */}
        <div className="relative z-10 w-full pl-6 pr-6 py-28 sm:pl-10 lg:pl-[100px] lg:pr-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="max-w-[560px]"
          >
            <p className="mb-5 font-body text-[12px] font-black uppercase tracking-[0.08em] text-[#4d9de0]">
              About Rajendra&apos;s
            </p>
            <h1 className="mb-6 font-heading text-[32px] font-semibold leading-[1.05] text-white sm:text-[46px] lg:text-[64px]">
              Trusted by Businesses.<br />Chosen for Quality.
            </h1>
            <p className="mb-9 font-body text-[15px] leading-[1.65] text-white/75 max-w-[480px]">
              With over 30 years of experience in the dry fruits and spices industry, Rajendra&apos;s has become a trusted name among businesses across India. Our commitment to quality, consistency, and customer satisfaction sets us apart.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-3 rounded-[8px] bg-[#1a56db] px-7 py-4 font-body text-[12px] font-medium uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#1e63f5]"
            >
              Explore Products
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#f3eee7] py-16 lg:py-20" ref={statsRef}>
        <div className="w-full pl-6 pr-6 sm:pl-10 lg:pl-[100px] lg:pr-12">
          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-black/15">
            {STATS.map(({ icon: Icon, value, label, hideOnMobile }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`flex flex-col items-center justify-center py-6 text-center${hideOnMobile ? ' hidden lg:flex' : ''}`}
              >
                <Icon size={46} className="mb-5 text-[#0b1830]" strokeWidth={1.45} />
                <p className="font-heading text-[40px] font-semibold leading-none text-[#0b1830]">
                  <AnimatedNumber value={value} />
                </p>
                <p className="mt-3 whitespace-pre-line font-body text-[11px] font-black uppercase leading-5 tracking-[0.04em] text-[#0a0a0a]">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values — full-width, header left-aligned, 5-col grid */}
      <section className="bg-[#070b0c] py-20 lg:py-28" ref={valuesRef}>
        <div className="w-full pl-6 pr-6 sm:pl-10 lg:pl-[100px] lg:pr-12">
          {/* Header — left aligned */}
          <div className="mb-14">
            <p className="mb-3 font-body text-[12px] font-black uppercase tracking-[0.08em] text-[#d1a326]">
              Our Values
            </p>
            <h2 className="font-heading text-[34px] font-medium leading-tight text-white sm:text-[44px]">
              The Principles That Drive Us
            </h2>
          </div>

          {/* 5-column values grid with dividers */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-white/12">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center px-6 text-center lg:px-8"
              >
                <div className="mb-6 flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#79bd37] text-white">
                  <Icon size={24} strokeWidth={1.35} />
                </div>
                <h3 className="mb-3 font-body text-[12px] font-black uppercase tracking-[0.06em] text-white">
                  {title}
                </h3>
                <p className="font-body text-[12px] leading-[1.6] text-white/65">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
