import HeroSection from '@/components/sections/HeroSection';
import CoreFeatures from '@/components/sections/CoreFeatures';
import HowToCheck from '@/components/sections/HowToCheck';
import HowToUse from '@/components/sections/HowToUse';
import MonetizationRequirements from '@/components/sections/MonetizationRequirements';
import WhyUseOurTool from '@/components/sections/WhyUseOurTool';
import FAQSection from '@/components/sections/FAQSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CoreFeatures />
      <HowToCheck />
      <HowToUse />
      <MonetizationRequirements />
      <WhyUseOurTool />
      <FAQSection />
      <Footer />
      {/* 其他部分将在后续添加 */}
    </main>
  );
} 