import type { Metadata } from 'next';
import AboutPage from '@/components/about';

export const metadata: Metadata = {
  title: "About Us | Rajendra's",
  description: "15+ years of excellence in premium dry fruits and spices wholesale. Trusted by 500+ businesses across 50+ cities in India.",
};

export default function Page() {
  return <AboutPage />;
}
