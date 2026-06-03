'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in your dry fruits and spices. I'd like to make an inquiry.");

  return (
    <>
      {/* Hero — full bleed with left-to-right overlay */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]"
      >
        {/* Mobile image */}
        <Image
          src="/mobile-image/contact.webp"
          alt="Contact us"
          fill
          priority
          quality={80}
          className="object-cover object-center sm:hidden"
          sizes="100vw"
        />
        {/* Desktop image */}
        <Image
          src="/images/contact us.webp"
          alt="Contact us"
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
              Get in Touch
            </p>
            <h1 className="mb-6 font-heading text-[36px] font-semibold leading-[1.05] text-white sm:text-[52px] lg:text-[72px]">
              Let's Build a<br />
              <span className="text-[#4d9de0]">Partnership.</span>
            </h1>
            <p className="mb-10 font-body text-[15px] leading-[1.7] text-white/70 max-w-[420px]">
              Whether you need bulk orders, premium custom packaging, or just have a question about our dry fruits and spices, our team is ready to assist you.
            </p>
            <button
              onClick={() => document.getElementById('contact-details')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-4 border border-white/40 px-7 py-3.5 font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10"
            >
              Contact Information
              <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section id="contact-details" className="bg-[#050505] py-20 lg:py-32 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="w-full pl-6 pr-6 sm:pl-10 lg:pl-[100px] lg:pr-12 max-w-[1200px] mx-auto">
          
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-[36px] lg:text-[48px] font-medium text-white font-heading mb-5">We're Here to Help</h2>
            <p className="text-white/60 font-body text-[16px] max-w-2xl mx-auto leading-relaxed">
              Skip the forms. Reach out to us directly through WhatsApp, give us a call, or visit our store in Chennai. We guarantee a fast and personal response to all inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {/* Phone Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300 group">
              <div className="w-16 h-16 rounded-full bg-[#4d9de0]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone size={24} className="text-[#4d9de0]" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-white/40 font-body mb-2">Call Us Directly</p>
              <p className="text-white font-body text-[18px] font-semibold tracking-wide">+91 91760 48429</p>
            </div>
            
            {/* Email Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300 group">
              <div className="w-16 h-16 rounded-full bg-[#4d9de0]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} className="text-[#4d9de0]" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-white/40 font-body mb-2">Send an Email</p>
              <p className="text-white font-body text-[16px] font-semibold tracking-wide">gururajendras@yahoo.com</p>
            </div>

            {/* Address Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300 group">
              <div className="w-16 h-16 rounded-full bg-[#4d9de0]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin size={24} className="text-[#4d9de0]" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-white/40 font-body mb-2">Visit Our Store</p>
              <p className="text-white/80 font-body text-[14px] leading-relaxed">
                180/2, Govindappa Naicken St,<br />kothawal bazaar, George Town,<br />Chennai 600001
              </p>
            </div>
          </div>

          {/* Huge WhatsApp CTA */}
          <div className="bg-[#25D366]/10 border border-[#25D366]/20 rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#25D366]/5 group-hover:bg-[#25D366]/10 transition-colors duration-500" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#25D366]/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(37,211,102,0.2)]">
                <Image src="/svg/whatsapp.svg" alt="WhatsApp" width={36} height={36} className="brightness-0 invert sepia saturate-[10000%] hue-rotate-[90deg]" />
              </div>
              <h3 className="text-[32px] lg:text-[44px] font-medium text-white font-heading mb-5">Chat with us instantly</h3>
              <p className="text-white/70 font-body text-[16px] max-w-xl mx-auto mb-10 leading-relaxed">
                Have a quick question about pricing, bulk orders, or product availability? Send us a message on WhatsApp for the fastest response.
              </p>
              <a
                href={`https://wa.me/919176048429?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold uppercase tracking-wider px-10 py-5 rounded-full text-[14px] transition-transform hover:scale-105 duration-300 font-body shadow-[0_0_40px_rgba(37,211,102,0.4)]"
              >
                <Image src="/svg/whatsapp.svg" alt="WhatsApp" width={20} height={20} className="brightness-0" />
                Start a Conversation
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
