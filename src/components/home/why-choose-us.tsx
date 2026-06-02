'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Handshake, Users, Truck, Leaf } from 'lucide-react';

const VALUES = [
  {
    icon: Award,
    title: 'QUALITY FIRST',
    desc: 'We source only the finest produce and ensure strict quality standards.',
  },
  {
    icon: Handshake,
    title: 'INTEGRITY',
    desc: 'Honest business practices and transparent dealings are at the core of everything we do.',
  },
  {
    icon: Users,
    title: 'CUSTOMER FOCUS',
    desc: "Our customers' success is our success. We build long-term relationships based on trust.",
  },
  {
    icon: Truck,
    title: 'RELIABILITY',
    desc: 'Timely delivery, consistent supply, and dependable service you can always count on.',
  },
  {
    icon: Leaf,
    title: 'SUSTAINABILITY',
    desc: 'We are committed to ethical sourcing and environmentally responsible practices.',
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#0b0c0c] py-24 lg:py-28" ref={ref}>
      <div className="w-full pl-[75px] pr-6 lg:pl-[100px] lg:pr-12">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#4d9de0] mb-4 font-body">
            OUR VALUES
          </p>
          <h2 className="text-[34px] lg:text-[46px] font-medium text-[#e9e6df] font-heading leading-[1.08]">
            The Principles That Drive Us
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="flex flex-col lg:flex-row items-start justify-between divide-y lg:divide-y-0 lg:divide-x divide-white/10 w-full">
          {VALUES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-1 flex-col items-center text-center px-4 py-8 lg:py-0 w-full"
            >
              <div className="w-[52px] h-[52px] rounded-full border border-[#405423] flex items-center justify-center mb-6">
                <Icon size={22} className="text-[#e9e6df]" strokeWidth={1.3} />
              </div>
              <p className="text-[#e9e6df] text-[12px] font-black uppercase tracking-[0.04em] mb-4 font-body">
                {title}
              </p>
              <p className="text-[#a1a1aa] text-[11px] leading-[1.7] max-w-[190px] mx-auto font-body">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
