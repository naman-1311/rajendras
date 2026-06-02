'use client';

import { animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedNumberProps {
  value: string;
}

export const AnimatedNumber = ({ value }: AnimatedNumberProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  
  // Extract number and suffix/prefix
  const numValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (inView && ref.current && !isNaN(numValue)) {
      animate(0, numValue, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.round(latest).toString() + suffix;
          }
        },
      });
    }
  }, [inView, numValue, suffix]);

  if (isNaN(numValue)) return <span style={{ fontFamily: "'Trafalgar', serif" }}>{value}</span>;

  return <span ref={ref} style={{ fontFamily: "'Trafalgar', serif" }}>0{suffix}</span>;
};
