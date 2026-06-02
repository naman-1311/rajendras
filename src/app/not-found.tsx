import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="bg-[#0a0a0a] min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-[#c8a045] text-8xl font-bold font-playfair mb-4">404</p>
        <h1 className="text-3xl font-bold text-white font-playfair mb-4">Page Not Found</h1>
        <p className="text-white/50 text-base font-lato mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to where the good stuff is.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#c8a045] hover:bg-[#e8c96a] text-[#0a0a0a] font-semibold px-6 py-3 rounded text-sm transition-colors font-lato"
        >
          Back to Home
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
