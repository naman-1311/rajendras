'use client';

import { ShieldCheck, Package, Handshake, Truck } from 'lucide-react';

const ITEMS = [
  { icon: ShieldCheck, label: 'Premium Quality' },
  { icon: Package, label: 'Bulk Supply' },
  { icon: Handshake, label: 'Trusted Partner' },
  { icon: Truck, label: 'Pan India Delivery' },
];

const TickerRow = ({ desktop = false }: { desktop?: boolean }) => (
  <>
    {ITEMS.map(({ icon: Icon, label }, i) => (
      <div key={i} className={`inline-flex items-center gap-3 flex-shrink-0 ${desktop ? 'px-16' : 'px-8'}`}>
        <Icon size={desktop ? 20 : 16} className="text-white/80 flex-shrink-0" strokeWidth={1.35} />
        <span className={`text-white/80 font-black tracking-[0.07em] font-body uppercase ${desktop ? 'text-[13px]' : 'text-[11px]'}`}>
          {label}
        </span>
        <span className={`text-white/20 ${desktop ? 'ml-16' : 'ml-8'}`}>·</span>
      </div>
    ))}
  </>
);

const TrustBar = () => {
  return (
    <div className="bg-[#070707] border-t border-white/10 overflow-hidden">

      {/* Mobile — infinite ticker */}
      <div className="sm:hidden py-5 overflow-hidden">
        <div className="flex w-max trust-ticker">
          <TickerRow />
          <TickerRow />
        </div>
      </div>

      {/* Desktop — scrolling ticker */}
      <div className="hidden sm:block py-6 overflow-hidden">
        <div className="flex w-max trust-ticker-desktop">
          <TickerRow desktop />
          <TickerRow desktop />
        </div>
      </div>

    </div>
  );
};

export default TrustBar;
