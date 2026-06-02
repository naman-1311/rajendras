import type { Metadata } from 'next';
import AboutPage from '@/components/about';

export const metadata: Metadata = {
  title: "About Us | Rajendra's",
  description: "30+ years of excellence in premium dry fruits and spices wholesale. Trusted by 500+ businesses and offering 100% farm direct sourcing.",
};

export default function Page() {
  return <AboutPage />;
}
