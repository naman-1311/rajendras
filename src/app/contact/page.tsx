import type { Metadata } from 'next';
import ContactPage from '@/components/contact';

export const metadata: Metadata = {
  title: "Contact Us | Rajendra's",
  description: "Get in touch with Rajendra's for bulk orders, product enquiries and business partnerships. We respond within 24 hours.",
};

export default function Page() {
  return <ContactPage />;
}
