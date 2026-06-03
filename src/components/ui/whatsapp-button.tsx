'use client';

import Image from 'next/image';
import { useState } from 'react';

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`https://wa.me/919176048429?text=${encodeURIComponent("Hi Rajendra's! I'd like to know more about your dry fruits and spices. Please share details.")}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-lg shadow-green-900/40 transition-all duration-300 overflow-hidden"
      style={{ padding: hovered ? '12px 20px' : '14px' }}
      aria-label="Chat on WhatsApp"
    >
      <Image src="/svg/whatsapp.svg" alt="WhatsApp" width={22} height={22} className="flex-shrink-0" />
      {hovered && (
        <span className="text-sm font-semibold whitespace-nowrap font-lato">
          Chat with us
        </span>
      )}
    </a>
  );
};

export default WhatsAppButton;
