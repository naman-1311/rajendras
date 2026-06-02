import type { Metadata } from 'next';
import ProductsPage from '@/components/products';

export const metadata: Metadata = {
  title: "Products | Rajendra's",
  description: "Browse our premium collection of dry fruits, spices, seeds, herbs, dates and gift packs. Bulk wholesale supply across India.",
};

export default function Page() {
  return <ProductsPage />;
}
