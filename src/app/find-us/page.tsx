import LocationSection from '@/components/home/location-section';
import FindUsHero from '@/components/find-us/hero';

export const metadata = {
  title: 'Find Us | Rajendra\'s',
  description: 'Find Rajendra\'s wholesale market in Chennai.',
};

export default function FindUsPage() {
  return (
    <main className="min-h-screen">
      <FindUsHero />
      <LocationSection />
    </main>
  );
}
