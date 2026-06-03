'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Find Us', href: '/find-us' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || pathname !== '/' ? 'bg-[#050505]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Full-width row — nav is centered relative to the whole header */}
      <div className="relative flex h-16 items-center lg:h-[72px]">

        {/* Logo — padded from left */}
        <div className="pl-6 lg:pl-10 flex-shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo/header logo.png"
              alt="Rajendra's Logo"
              width={260}
              height={60}
              className="h-[44px] w-auto object-contain lg:h-[56px] mix-blend-lighten"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav — truly centered in viewport */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-[42px]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[14px] font-medium tracking-[0.06em] uppercase transition-colors duration-200 font-body ${
                pathname === link.href
                  ? 'text-[#4d9de0]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* WhatsApp CTA + Mobile hamburger — padded from right */}
        <div className="ml-auto pr-6 lg:pr-12 flex items-center gap-3">
          <a
            href={`https://wa.me/919176048429?text=${encodeURIComponent("Hi Rajendra's! I'd like to enquire about your products and wholesale pricing. Please get in touch.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 rounded-full bg-green-500 px-4 py-[8px] text-[12px] font-medium text-white transition-colors duration-200 hover:bg-green-400 shadow-md shadow-green-900/30"
          >
            <Image src="/svg/whatsapp.svg" alt="WhatsApp" width={16} height={16} />
            WHATSAPP
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0a0a0a]/98 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 text-sm font-medium tracking-wide border-b border-white/5 transition-colors ${
                  pathname === link.href ? 'text-[#4d9de0]' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/919176048429?text=${encodeURIComponent("Hi Rajendra's! I'd like to enquire about your products and wholesale pricing. Please get in touch.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 bg-green-600 text-white text-sm font-semibold px-4 py-3 rounded-md justify-center"
            >
              <Image src="/svg/whatsapp.svg" alt="WhatsApp" width={16} height={16} />
              WHATSAPP
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
