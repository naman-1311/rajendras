import type { Metadata } from 'next';
import HomePage from '@/components/home';

export const metadata: Metadata = {
  title: "Rajendra's | Premium Dry Fruits & Spices Wholesale Supplier",
  description: 'Rajendra\'s — your trusted wholesale partner for premium dry fruits and spices. Rich in taste, best in quality. 15+ years, 500+ clients, 50+ cities.',
};

export default function Page() {
  return <HomePage />;
}
