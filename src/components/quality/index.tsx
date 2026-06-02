'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sprout, Search, Settings, Box, Truck, Shield, Award, CheckCircle } from 'lucide-react';

const STEPS = [
  {
    icon: Sprout,
    step: '01',
    title: 'Sourcing',
    desc: 'We maintain long-term relationships with verified farmers and producers across India, Iran, California and the Middle East. Every supplier is audited for farming practices, pesticide usage, and hygiene standards before onboarding.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Inspection',
    desc: 'Every incoming lot undergoes rigorous physical and lab testing — moisture content, aflatoxin levels, size grading, colour and aroma checks. Only lots that meet our specifications are accepted.',
  },
  {
    icon: Settings,
    step: '03',
    title: 'Processing',
    desc: 'Approved stock is cleaned, sorted and processed in our hygienic facility. We use modern machinery to remove foreign matter, broken pieces and undersized items — ensuring uniform quality.',
  },
  {
    icon: Box,
    step: '04',
    title: 'Packaging',
    desc: 'Processed goods are packed in food-grade packaging that preserves freshness, prevents moisture ingress and extends shelf life. We offer custom packaging for bulk and retail orders.',
  },
  {
    icon: Truck,
    step: '05',
    title: 'Delivery',
    desc: 'We partner with reliable logistics providers to ensure timely, damage-free delivery across 50+ cities. All shipments are tracked end-to-end with full documentation.',
  },
];

const CERTIFICATIONS = [
  { icon: Shield, title: 'FSSAI Certified', desc: 'Fully compliant with Indian food safety standards.' },
  { icon: Award, title: 'ISO 22000', desc: 'International food safety management standards.' },
  { icon: CheckCircle, title: 'Organic Certified', desc: 'Select product lines available with organic certification.' },
];

export default function QualityPage() {
  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: '-80px' });

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-32 pb-20">
        <div className="w-full pl-[75px] pr-6 lg:pl-[100px] lg:pr-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-widest uppercase text-[#c8a045] mb-4 font-body"
          >
            Our Commitment
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-semibold text-white font-heading"
          >
            Our Quality Promise
          </motion.h1>
        </div>
      </section>

      {/* 5-step process */}
      <section className="bg-white py-20 lg:py-28" ref={stepsRef}>
        <div className="w-full pl-[75px] pr-6 lg:pl-[100px] lg:pr-12">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#c8a045] mb-4 font-body">From Farm to Business</p>
            <h2 className="text-4xl font-medium text-[#0a0a0a] font-heading">The Rajendra&apos;s Quality Process</h2>
          </div>
          <div className="space-y-12">
            {STEPS.map(({ icon: Icon, step, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={stepsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
              >
                <div className={`flex items-start gap-6 ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#0a0a0a] flex items-center justify-center">
                    <Icon size={24} className="text-[#c8a045]" />
                  </div>
                  <div>
                    <span className="text-[#c8a045] text-xs font-bold font-body">STEP {step}</span>
                    <h3 className="text-2xl font-medium text-[#0a0a0a] font-heading mt-1 mb-3">{title}</h3>
                    <p className="text-[#0a0a0a]/60 text-sm font-body leading-relaxed">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Quality Matters */}
      <section className="bg-[#0d1b2a] py-20">
        <div className="w-full pl-[75px] pr-6 lg:pl-[100px] lg:pr-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#c8a045] text-xs tracking-widest uppercase font-body mb-4">The Rajendra&apos;s Difference</p>
              <h2 className="text-4xl font-medium text-white font-heading mb-6 leading-tight">
                Why Quality<br />Matters to Us
              </h2>
              <p className="text-white/60 text-base font-body leading-relaxed mb-4">
                In the wholesale dry fruits and spices business, quality is not just a selling point — it&apos;s the foundation of every business relationship. Our clients rely on us for consistent, safe, premium products that they can confidently sell to their own customers.
              </p>
              <p className="text-white/60 text-base font-body leading-relaxed">
                That&apos;s why we invest in rigorous quality control at every stage — not as a compliance checkbox, but as a genuine commitment to the businesses that trust us.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                'Zero tolerance for adulteration',
                'Lab-tested for pesticide residues',
                'Hygienic, mechanized processing',
                'Consistent moisture and grade specifications',
                'Full traceability from farm to delivery',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 bg-white/5 rounded-xl px-5 py-4">
                  <CheckCircle size={16} className="text-[#c8a045] flex-shrink-0" />
                  <span className="text-white/70 text-sm font-body">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#f5f0e8] py-20">
        <div className="w-full pl-[75px] pr-6 lg:pl-[100px] lg:pr-12">
          <div className="text-center mb-12">
            <p className="text-[#c8a045] text-xs tracking-widest uppercase font-body mb-4">Compliance</p>
            <h2 className="text-4xl font-medium text-[#0a0a0a] font-heading">Our Certifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {CERTIFICATIONS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="w-14 h-14 rounded-full bg-[#c8a045]/10 flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} className="text-[#c8a045]" />
                </div>
                <h3 className="text-lg font-medium text-[#0a0a0a] font-heading mb-3">{title}</h3>
                <p className="text-[#0a0a0a]/55 text-sm font-body">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
