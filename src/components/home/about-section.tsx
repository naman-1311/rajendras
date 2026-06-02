'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#f3eee7] py-24 lg:py-32" ref={ref}>
      <div className="w-full pl-[75px] pr-6 lg:pl-[100px] lg:pr-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[520px_1fr] lg:gap-20">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="mb-6 font-body text-[13px] font-semibold uppercase tracking-[0.16em] text-[#4d9de0]">
              About Rajendra&apos;s
            </p>
            <h2 className="mb-8 font-heading text-[48px] font-medium leading-[1.05] text-[#0a0a0a] lg:text-[58px]">
              Trusted by Businesses.<br />Chosen for Quality.
            </h2>
            <p className="mb-10 max-w-[560px] font-body text-[16px] leading-[1.7] text-[#0a0a0a]/78">
              With years of experience in the industry, we supply the finest dry fruits and spices to retailers,
              distributors, hotels, restaurants and businesses across India. Our commitment to quality and
              consistency has made us the preferred partner for thousands of businesses.
            </p>


          </motion.div>

          {/* Right — RS monogram */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative hidden min-h-[300px] items-center justify-center overflow-visible lg:flex"
          >
            <Image
              src="/images/RS_text.png"
              alt="RS Monogram"
              width={500}
              height={560}
              className="w-full max-w-[600px] h-auto object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
