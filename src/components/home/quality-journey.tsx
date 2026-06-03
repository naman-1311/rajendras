'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedNumber } from '@/components/ui/animated-number';
import { ShieldCheck, Users, Package, Handshake, Leaf } from 'lucide-react';

const STATS = [
  { icon: ShieldCheck, value: '30+', label: 'YEARS OF\nEXPERIENCE' },
  { icon: Users, value: '500+', label: 'HAPPY\nCLIENTS' },
  { icon: Package, value: '250+', label: 'PRODUCT\nVARIETIES' },
  { icon: Leaf, value: '100%', label: 'FARM DIRECT\nSOURCING', hideOnMobile: true },
  { icon: Handshake, value: '100%', label: 'QUALITY\nASSURED' },
];

const QualityJourney = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#e9e6df] py-16" ref={ref}>
      <div className="w-full pl-6 pr-6 sm:pl-10 lg:pl-[100px] lg:pr-12">
        <div className="grid grid-cols-2 gap-y-2 sm:grid-cols-3 lg:grid-cols-5 lg:flex lg:divide-x divide-[#1e3250]/15">
          {STATS.map(({ icon: Icon, value, label, hideOnMobile }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-1 flex-col items-center text-center px-4 py-8 lg:py-0 w-full ${hideOnMobile ? 'hidden lg:flex' : ''}`}
            >
              <Icon size={32} className="text-[#1e3250] mb-4" strokeWidth={1.2} />
              <p className="font-heading text-[42px] font-medium leading-none text-[#1e3250] mb-3">
                <AnimatedNumber value={value} />
              </p>
              <p className="whitespace-pre-line font-body text-[11px] font-black uppercase tracking-[0.07em] text-[#0a0a0a]/70">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityJourney;
