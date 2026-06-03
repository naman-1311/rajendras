import Image from 'next/image';
import Link from 'next/link';

const TILES = [
  {
    src: '/images/nuts.webp',
    alt: 'Premium dry fruits',
    caption: 'Dry Fruits',
  },
  {
    src: '/images/spices1.webp',
    alt: 'Warehouse',
    caption: 'Warehouse',
  },
  {
    src: '/images/nuts.webp',
    alt: 'Premium packaging',
    caption: 'Packaging',
  },
  {
    src: '/images/spices1.webp',
    alt: 'Premium spices',
    caption: 'Spices',
  },
  {
    src: '/images/almond.webp',
    alt: 'Pan India delivery',
    caption: 'Delivery',
  },
];

const GalleryStrip = () => {
  return (
    <section className="bg-[#070707]">
      <div className="relative flex h-56 sm:h-64 lg:h-80">
        <p className="absolute left-[max(20px,calc((100vw-1180px)/2+32px))] top-5 z-10 font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4d9de0]">
          Our Gallery
        </p>
        {TILES.map((tile, i) => (
          <Link
            href="/gallery"
            key={i}
            className="relative flex-1 overflow-hidden group"
          >
            <Image
              src={tile.src}
              alt={tile.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="20vw"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-xs font-semibold uppercase tracking-wider font-body">
                {tile.caption}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GalleryStrip;
