import { ShieldCheck, Package, Handshake, Truck } from 'lucide-react';

const ITEMS = [
  { icon: ShieldCheck, label: 'Premium Quality' },
  { icon: Package, label: 'Bulk Supply' },
  { icon: Handshake, label: 'Trusted Partner' },
  { icon: Truck, label: 'Pan India Delivery' },
];

const TrustBar = () => {
  return (
    <div className="bg-[#070707] border-t border-white/10">
    <div className="flex flex-col sm:flex-row items-center divide-y sm:divide-y-0 sm:divide-x divide-white/10 w-full">
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
