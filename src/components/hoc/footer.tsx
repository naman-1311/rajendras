import Link from 'next/link';
import Image from 'next/image';
import { Share2, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
const WA_ICON = () => <Image src="/svg/whatsapp.svg" alt="WhatsApp" width={16} height={16} />;

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white overflow-hidden relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] bg-[#4d9de0]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full pl-[75px] pr-6 pt-24 pb-10 lg:pl-[100px] lg:pr-12">

        {/* Top CTA Banner */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-16 mb-16 border-b border-white/10">
          <div>
            <h3 className="text-[28px] lg:text-[40px] font-heading font-medium text-white mb-3 leading-[1.1]">
              Ready to Elevate Your Business?
            </h3>
            <p className="text-[#a1a1aa] font-body text-[14px] lg:text-[16px] max-w-[500px]">
              Partner with Rajendra&apos;s for premium, wholesale dry fruits and spices delivered with uncompromising quality.
            </p>
          </div>
          <a
            href="https://wa.me/919176048429"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 lg:mt-0 inline-flex items-center gap-3 rounded-[8px] bg-[#1a56db] px-7 py-4 font-body text-[13px] font-semibold uppercase tracking-[0.05em] text-white transition-colors duration-200 hover:bg-[#1e63f5]"
          >
            <WA_ICON />
            Let&apos;s Grow Together
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          <div className="lg:pr-8">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/images/logo-nobg.png"
                alt="Rajendra's"
                width={600}
                height={200}
                className="h-[120px] lg:h-[180px] w-auto object-contain -translate-y-[30px] translate-x-[100px]"
                priority
              />
            </Link>
            <p className="text-white/60 text-[14px] leading-[1.8] font-body max-w-[280px] -translate-y-[65px] translate-x-[45px]">
              Setting the standard for quality and trust in wholesale dry fruits and spices across India.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-[13px] font-bold tracking-[0.1em] uppercase text-white mb-6 font-body">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Products', href: '/products' },
                { label: 'Find Us', href: '/find-us' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-[#4d9de0] text-[14px] transition-colors font-body inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Products */}
          <div>
            <h4 className="text-[13px] font-bold tracking-[0.1em] uppercase text-white mb-6 font-body">
              Our Products
            </h4>
            <ul className="space-y-4">
              {['Premium Dry Fruits', 'Exotic Spices', 'Seeds & Berries', 'Natural Herbs', 'Festive Gift Packs'].map((item) => (
                <li key={item}>
                  <Link
                    href="/products"
                    className="text-white/60 hover:text-[#4d9de0] text-[14px] transition-colors font-body inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-[13px] font-bold tracking-[0.1em] uppercase text-white mb-6 font-body">
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-[#4d9de0] group-hover:bg-[#4d9de0] group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <div className="pt-2 text-white/70 text-[14px] font-body leading-[1.6]">
                  +91 91760 48429
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-[#4d9de0] group-hover:bg-[#4d9de0] group-hover:text-white transition-colors">
                  <Mail size={16} />
                </div>
                <div className="pt-2 text-white/70 text-[14px] font-body leading-[1.6]">
                  gururajendras@yahoo.com
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-[#4d9de0] group-hover:bg-[#4d9de0] group-hover:text-white transition-colors">
                  <MapPin size={16} />
                </div>
                <div className="pt-2 text-white/70 text-[14px] font-body leading-[1.6]">
                  180/2, Govindappa Naicken St, kothawal bazaar,<br />Seven Wells South, George Town, Chennai, Tamil Nadu 600001
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-[13px] font-body">
            © {new Date().getFullYear()} Rajendra&apos;s. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-white text-[13px] font-body transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white text-[13px] font-body transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
