import HeroSection from '@/components/home/hero-section';
import TrustBar from '@/components/home/trust-bar';
import AboutSection from '@/components/home/about-section';
import ProductCarousel from '@/components/home/product-carousel';
import QualityJourney from '@/components/home/quality-journey';
import WhyChooseUs from '@/components/home/why-choose-us';
import LocationSection from '@/components/home/location-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ProductCarousel />
      <QualityJourney />
      <WhyChooseUs />
      <LocationSection />
    </>
  );
}
