import Link from 'next/link';
import Image from 'next/image';
import { Share2, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
const WA_ICON = () => <Image src="/svg/whatsapp.svg" alt="WhatsApp" width={14} height={14} />;

const Footer = () => {
  return (
    <footer className="bg-[#070707] text-white">
      <div className="w-full pl-[75px] pr-6 pt-20 pb-8 lg:pl-[100px] lg:pr-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.35fr_1.45fr] lg:gap-10">

          {/* Col 1 — Logo + tagline */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/images/logo-nobg.png"
                alt="Rajendra's"
                width={166}
                height={56}
                className="h-14 w-auto object-contain mb-6"
              />
            </Link>
            <p className="text-white/65 text-[13px] leading-6 font-body max-w-[230px]">
              Your trusted wholesale partner for premium dry fruits and spices.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#c8a045] hover:text-[#c8a045] transition-colors"
              >
                <Share2 size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#c8a045] hover:text-[#c8a045] transition-colors"
              >
                <MessageCircle size={14} className="rotate-180" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-green-500 transition-colors"
              >
                <WA_ICON />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-[12px] font-black tracking-[0.05em] uppercase text-white mb-5 font-body">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Products', href: '/products' },
                { label: 'Quality', href: '/quality' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/62 hover:text-[#c8a045] text-[13px] transition-colors font-body"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Products */}
          <div>
            <h4 className="text-[12px] font-black tracking-[0.05em] uppercase text-white mb-5 font-body">
              Products
            </h4>
            <ul className="space-y-3">
              {['Dry Fruits', 'Spices', 'Seeds', 'Herbs', 'Dates', 'Gift Packs'].map((item) => (
                <li key={item}>
                  <Link
                    href="/products"
                    className="text-white/62 hover:text-[#c8a045] text-[13px] transition-colors font-body"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact + Let's Grow */}
          <div>
            <h4 className="text-[12px] font-black tracking-[0.05em] uppercase text-white mb-5 font-body">
              Contact
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-white/65 text-[13px] font-body leading-5">
                <Phone size={14} className="mt-0.5 flex-shrink-0 text-[#c8a045]" />
                <span>+91 98765 43210<br />+91 98765 43211</span>
              </li>
              <li className="flex items-start gap-2 text-white/65 text-[13px] font-body leading-5">
                <Mail size={14} className="mt-0.5 flex-shrink-0 text-[#c8a045]" />
                <span>info@rajendras.com</span>
              </li>
              <li className="flex items-start gap-2 text-white/65 text-[13px] font-body leading-5">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#c8a045]" />
                <span>123, Trade Center, Indore, Madhya Pradesh, India - 452001</span>
              </li>
            </ul>
          </div>
          <div className="border border-white/14 p-8">
            <p className="mb-7 font-heading text-[26px] font-medium uppercase leading-[1.05] text-white">
              Let&apos;s Grow<br />Together
            </p>
            <p className="mb-7 max-w-[210px] font-body text-[13px] leading-6 text-white/65">
              For bulk orders and business inquiries
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[3px] bg-[#79bd37] px-4 py-3 font-body text-[11px] font-medium uppercase tracking-[0.03em] text-white transition-colors hover:bg-[#8bcf43]"
            >
              <Image src="/svg/whatsapp.svg" alt="WhatsApp" width={13} height={13} />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-white/30 text-xs font-body">
            © 2024 Rajendra&apos;s. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
