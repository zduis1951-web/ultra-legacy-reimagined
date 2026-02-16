import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ExpertiseSection from '@/components/home/ExpertiseSection';
import StatsSection from '@/components/home/StatsSection';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TeamCommitmentSection from '@/components/home/TeamCommitmentSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <StatsSection />
      <FeaturedProperties />
      <WhyChooseUs />
      <TeamCommitmentSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Index;
