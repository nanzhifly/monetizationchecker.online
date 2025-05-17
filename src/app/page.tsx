import HeroSection from '@/components/sections/HeroSection';
import CoreFeatures from '@/components/sections/CoreFeatures';
import HowToCheck, { HowToCheckVideoMonetization, HowToCheckShortsMonetization } from '@/components/sections/HowToCheck';
import HowToUse from '@/components/sections/HowToUse';
import MonetizationRequirements, { HowTheCheckerWorks } from '@/components/sections/MonetizationRequirements';
import WhyNotMonetized from '@/components/sections/WhyNotMonetized';
import CommonReasonsNotMonetized from '@/components/sections/CommonReasonsNotMonetized';
import HowToGetMonetized from '@/components/sections/HowToGetMonetized';
import BestPracticesMonetization from '@/components/sections/BestPracticesMonetization';
import Monetization2024Info from '@/components/sections/Monetization2024Info';
import MonetizationConclusion from '@/components/sections/MonetizationConclusion';
import WhyUseOurTool from '@/components/sections/WhyUseOurTool';
import FAQSection from '@/components/sections/FAQSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CoreFeatures />
      <HowToUse />
      <HowToCheck />
      <WhyUseOurTool />
      <HowToCheckVideoMonetization />
      <HowToCheckShortsMonetization />
      <MonetizationRequirements />
      <HowTheCheckerWorks />
      <WhyNotMonetized />
      <CommonReasonsNotMonetized />
      <HowToGetMonetized />
      <BestPracticesMonetization />
      <Monetization2024Info />
      <MonetizationConclusion />
      <FAQSection />
      <Footer />
      {/* 其他部分将在后续添加 */}
    </main>
  );
} 