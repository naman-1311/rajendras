'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

const LocationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="location-map" className="bg-white py-24 lg:py-28" ref={ref}>
      <div className="w-full pl-6 pr-6 sm:pl-10 lg:pl-[100px] lg:pr-12">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#4d9de0] mb-4 font-body">
            FIND US
          </p>
          <h2 className="text-[34px] lg:text-[46px] font-medium text-[#0a0a0a] font-heading leading-[1.08]">
            Visit Us at <span className="text-[#4d9de0]">Chennai.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            {/* Address */}
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl border border-black/10 bg-[#f3eee7] flex items-center justify-center flex-shrink-0 text-[#4d9de0]">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#4d9de0] mb-2 font-body">Address</p>
                <h3 className="text-[16px] font-semibold text-[#0a0a0a] mb-1 font-body">Rajendra&apos;s</h3>
                <p className="text-[#0a0a0a]/70 text-[14px] leading-relaxed font-body">
                  180/2, Govindappa Naicken St,<br />
                  kothawal bazaar, Seven Wells South,<br />
                  George Town, Chennai, Tamil Nadu 600001
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl border border-black/10 bg-[#f3eee7] flex items-center justify-center flex-shrink-0 text-[#4d9de0]">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#4d9de0] mb-2 font-body">Phone</p>
                <p className="text-[#0a0a0a]/90 text-[15px] font-body">
                  +91 91760 48429
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl border border-black/10 bg-[#f3eee7] flex items-center justify-center flex-shrink-0 text-[#4d9de0]">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#4d9de0] mb-2 font-body">Email</p>
                <p className="text-[#0a0a0a]/90 text-[15px] font-body">
                  gururajendras@yahoo.com
                </p>
              </div>
            </div>

            <a
              href="https://goo.gl/maps/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#1a56db] px-6 py-3.5 font-body text-[13px] font-semibold uppercase tracking-[0.05em] text-white transition-colors duration-200 hover:bg-[#1e63f5] w-fit"
            >
              <Navigation size={16} />
              GET DIRECTIONS
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full h-[400px] lg:h-full min-h-[450px] rounded-[20px] overflow-hidden border border-black/10 relative bg-[#f3eee7]"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d343.4863499967947!2d80.28152523608257!3d13.092567170603818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f2049706bd1%3A0xc3b91ad49f5cd62e!2sRajendra&#39;s!5e0!3m2!1sen!2sin!4v1780410361250!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;
