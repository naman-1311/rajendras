'use client';

import { ShieldCheck, Package, Handshake, Truck } from 'lucide-react';

const ITEMS = [
  { icon: ShieldCheck, label: 'Premium Quality' },
  { icon: Package, label: 'Bulk Supply' },
  { icon: Handshake, label: 'Trusted Partner' },
  { icon: Truck, label: 'Pan India Delivery' },
];

// Duplicate for seamless loop — translate -50% lands exactly on original set
const TICKER = [...ITEMS, ...ITEMS];

const TrustBar = () => {
  return (
    <div className="bg-[#070707] border-t border-white/10 overflow-hidden">

      {/* Mobile — infinite ticker */}
      <div className="sm:hidden relative py-5">
        <div className="flex animate-trust-ticker whitespace-nowrap">
          {TICKER.map(({ icon: Icon, label }, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 px-8 flex-shrink-0"
            >
              <Icon size={16} className="text-white/80 flex-shrink-0" strokeWidth={1.35} />
              <span className="text-white/80 text-[11px] font-black tracking-[0.07em] font-body uppercase">
                {label}
              </span>
              <span className="ml-8 text-white/20">·</span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop — static row */}
      <div className="hidden sm:flex items-center divide-x divide-white/10 w-full">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-1 items-center justify-center gap-4 px-6 py-8"
          >
            <Icon size={19} className="text-white/80 flex-shrink-0" strokeWidth={1.35} />
            <span className="text-white/80 text-[12px] font-black tracking-[0.07em] font-body uppercase">
              {label}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TrustBar;
