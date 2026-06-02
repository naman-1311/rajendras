import LocationSection from '@/components/home/location-section';

export const metadata = {
  title: 'Find Us | Rajendra\'s',
  description: 'Find Rajendra\'s wholesale market in Chennai.',
};

export default function FindUsPage() {
  return (
    <main className="min-h-screen pt-[72px]">
      <LocationSection />
    </main>
  );
}
